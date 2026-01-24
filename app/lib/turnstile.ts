/**
 * Cloudflare Turnstile Utility
 * 
 * Provides bot protection and human verification using Cloudflare Turnstile.
 * Turnstile is a privacy-friendly alternative to reCAPTCHA.
 * 
 * Setup:
 * 1. Get your Turnstile keys from Cloudflare Dashboard
 * 2. Add TURNSTILE_SECRET_KEY to environment variables
 * 3. Add site key to your frontend forms
 */

interface TurnstileVerifyResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
}

interface VerificationResult {
  success: boolean;
  error?: string;
  hostname?: string;
  timestamp?: string;
}

/**
 * Verify Turnstile token with Cloudflare
 */
export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string
): Promise<VerificationResult> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.warn('TURNSTILE_SECRET_KEY not configured. Skipping verification.');
    // In development, you might want to skip verification
    if (process.env.NODE_ENV === 'development') {
      return { success: true };
    }
    return {
      success: false,
      error: 'Turnstile verification not configured',
    };
  }

  if (!token) {
    return {
      success: false,
      error: 'Turnstile token missing',
    };
  }

  try {
    const formData = new FormData();
    formData.append('secret', secretKey);
    formData.append('response', token);
    if (remoteIp) {
      formData.append('remoteip', remoteIp);
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      return {
        success: false,
        error: 'Turnstile verification service unavailable',
      };
    }

    const data: TurnstileVerifyResponse = await response.json();

    if (!data.success) {
      const errors = data['error-codes']?.join(', ') || 'Unknown error';
      return {
        success: false,
        error: `Turnstile verification failed: ${errors}`,
      };
    }

    return {
      success: true,
      hostname: data.hostname,
      timestamp: data.challenge_ts,
    };
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return {
      success: false,
      error: 'Turnstile verification failed due to network error',
    };
  }
}

/**
 * Middleware to verify Turnstile token from request
 */
export async function verifyTurnstileFromRequest(
  request: Request
): Promise<VerificationResult> {
  try {
    const body = await request.json();
    const token = body['cf-turnstile-response'] || body.turnstileToken;

    if (!token) {
      return {
        success: false,
        error: 'Turnstile token not provided',
      };
    }

    // Extract client IP
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const cfConnectingIp = request.headers.get('cf-connecting-ip');
    const remoteIp = cfConnectingIp || realIp || forwardedFor?.split(',')[0];

    return await verifyTurnstileToken(token, remoteIp);
  } catch (error) {
    return {
      success: false,
      error: 'Failed to parse request body',
    };
  }
}

/**
 * Get Turnstile site key for frontend use
 */
export function getTurnstileSiteKey(): string | undefined {
  return process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
}

/**
 * Turnstile error codes mapping
 */
export const TURNSTILE_ERROR_MESSAGES: Record<string, string> = {
  'missing-input-secret': 'The secret key is missing',
  'invalid-input-secret': 'The secret key is invalid',
  'missing-input-response': 'The response token is missing',
  'invalid-input-response': 'The response token is invalid or has expired',
  'bad-request': 'The request is invalid',
  'timeout-or-duplicate': 'The response token has already been used or has timed out',
  'internal-error': 'An internal error occurred during verification',
};

export function getTurnstileErrorMessage(errorCode: string): string {
  return TURNSTILE_ERROR_MESSAGES[errorCode] || 'Verification failed';
}
