/**
 * Rate Limiting Utility
 * 
 * Prevents abuse by limiting requests based on IP address or other identifiers.
 * Uses an in-memory store for development. For production, use Redis or similar.
 */

interface RateLimitOptions {
  interval: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per interval
}

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

class RateLimiter {
  private store: Map<string, RateLimitRecord> = new Map();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Clean up expired entries every minute
    this.cleanupInterval = setInterval(() => {
      this.cleanup();
    }, 60000);
  }

  /**
   * Check if a request should be rate limited
   * @returns {success: boolean, remaining?: number, resetTime?: number}
   */
  async checkLimit(
    identifier: string,
    options: RateLimitOptions
  ): Promise<{
    success: boolean;
    remaining?: number;
    resetTime?: number;
    error?: string;
  }> {
    const now = Date.now();
    const record = this.store.get(identifier);

    // No record or expired record
    if (!record || now >= record.resetTime) {
      this.store.set(identifier, {
        count: 1,
        resetTime: now + options.interval,
      });
      return {
        success: true,
        remaining: options.maxRequests - 1,
        resetTime: now + options.interval,
      };
    }

    // Check if limit exceeded
    if (record.count >= options.maxRequests) {
      return {
        success: false,
        remaining: 0,
        resetTime: record.resetTime,
        error: `Rate limit exceeded. Please try again in ${Math.ceil((record.resetTime - now) / 1000)} seconds.`,
      };
    }

    // Increment count
    record.count++;
    this.store.set(identifier, record);

    return {
      success: true,
      remaining: options.maxRequests - record.count,
      resetTime: record.resetTime,
    };
  }

  /**
   * Clean up expired entries
   */
  private cleanup(): void {
    const now = Date.now();
    for (const [key, record] of this.store.entries()) {
      if (now >= record.resetTime) {
        this.store.delete(key);
      }
    }
  }

  /**
   * Clear all rate limit records (for testing)
   */
  clear(): void {
    this.store.clear();
  }

  /**
   * Destroy the rate limiter and clean up resources
   */
  destroy(): void {
    clearInterval(this.cleanupInterval);
    this.store.clear();
  }
}

// Singleton instance
const rateLimiter = new RateLimiter();

/**
 * Rate limit presets
 */
export const RATE_LIMITS = {
  // Contact form: 3 submissions per hour
  CONTACT_FORM: {
    interval: 60 * 60 * 1000, // 1 hour
    maxRequests: 3,
  },
  // API endpoints: 100 requests per minute
  API_GENERAL: {
    interval: 60 * 1000, // 1 minute
    maxRequests: 100,
  },
  // Strict rate limit for sensitive endpoints: 10 per minute
  API_STRICT: {
    interval: 60 * 1000, // 1 minute
    maxRequests: 10,
  },
};

/**
 * Get client identifier from Next.js request
 */
export function getClientIdentifier(request: Request): string {
  // Try to get real IP from headers (when behind proxy)
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');

  const ip = cfConnectingIp || realIp || forwardedFor?.split(',')[0] || 'unknown';

  // Add user agent for additional fingerprinting
  const userAgent = request.headers.get('user-agent') || '';
  const fingerprint = `${ip}:${Buffer.from(userAgent).toString('base64').slice(0, 16)}`;

  return fingerprint;
}

/**
 * Apply rate limiting middleware
 */
export async function applyRateLimit(
  request: Request,
  options: RateLimitOptions
): Promise<{
  success: boolean;
  headers?: Record<string, string>;
  error?: string;
}> {
  const identifier = getClientIdentifier(request);
  const result = await rateLimiter.checkLimit(identifier, options);

  if (!result.success) {
    return {
      success: false,
      error: result.error,
      headers: {
        'X-RateLimit-Limit': options.maxRequests.toString(),
        'X-RateLimit-Remaining': '0',
        'X-RateLimit-Reset': result.resetTime ? new Date(result.resetTime).toISOString() : '',
        'Retry-After': result.resetTime
          ? Math.ceil((result.resetTime - Date.now()) / 1000).toString()
          : '60',
      },
    };
  }

  return {
    success: true,
    headers: {
      'X-RateLimit-Limit': options.maxRequests.toString(),
      'X-RateLimit-Remaining': (result.remaining || 0).toString(),
      'X-RateLimit-Reset': result.resetTime ? new Date(result.resetTime).toISOString() : '',
    },
  };
}

export default rateLimiter;
