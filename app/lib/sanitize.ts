import DOMPurify from 'dompurify';

/**
 * Input Sanitization Utility
 * 
 * Provides XSS protection for user inputs using DOMPurify.
 * Use this for all user-generated content before rendering or storing.
 */

/**
 * Sanitize HTML content to prevent XSS attacks
 * @param dirty - Untrusted HTML string
 * @returns Sanitized HTML string safe for rendering
 */
export function sanitizeHtml(dirty: string): string {
    if (typeof window === 'undefined') {
        // Server-side: basic sanitization
        return dirty
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/\//g, '&#x2F;');
    }

    // Client-side: use DOMPurify
    return DOMPurify.sanitize(dirty, {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
        ALLOWED_ATTR: ['href', 'target', 'rel'],
        ALLOW_DATA_ATTR: false,
    });
}

/**
 * Sanitize plain text input (removes all HTML)
 * @param dirty - Untrusted text string
 * @returns Plain text with HTML stripped
 */
export function sanitizeText(dirty: string): string {
    if (typeof window === 'undefined') {
        // Server-side: basic sanitization
        return dirty
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // Client-side: strip all HTML
    return DOMPurify.sanitize(dirty, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: [],
    });
}

/**
 * Sanitize email address
 * @param email - Email string to validate and sanitize
 * @returns Sanitized email or empty string if invalid
 */
export function sanitizeEmail(email: string): string {
    const sanitized = sanitizeText(email).trim().toLowerCase();

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(sanitized) ? sanitized : '';
}

/**
 * Sanitize URL to prevent javascript: and data: URIs
 * @param url - URL string to sanitize
 * @returns Sanitized URL or empty string if invalid
 */
export function sanitizeUrl(url: string): string {
    const sanitized = sanitizeText(url).trim();

    // Block dangerous protocols
    const dangerousProtocols = ['javascript:', 'data:', 'vbscript:', 'file:'];
    const lowerUrl = sanitized.toLowerCase();

    for (const protocol of dangerousProtocols) {
        if (lowerUrl.startsWith(protocol)) {
            return '';
        }
    }

    // Only allow http, https, mailto
    if (sanitized.match(/^(https?:\/\/|mailto:)/i) || sanitized.startsWith('/')) {
        return sanitized;
    }

    return '';
}

/**
 * Sanitize form data object
 * @param data - Object containing form field values
 * @returns Sanitized object
 */
export function sanitizeFormData<T extends Record<string, any>>(data: T): T {
    const sanitized = {} as T;

    for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'string') {
            // Sanitize string values
            sanitized[key as keyof T] = sanitizeText(value) as T[keyof T];
        } else if (Array.isArray(value)) {
            // Sanitize array values
            sanitized[key as keyof T] = value.map(item =>
                typeof item === 'string' ? sanitizeText(item) : item
            ) as T[keyof T];
        } else {
            // Keep other types as-is
            sanitized[key as keyof T] = value;
        }
    }

    return sanitized;
}

/**
 * Server-side sanitization for API routes
 * (Does not require DOMPurify)
 */
export function sanitizeServerInput(input: string): string {
    return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
        .trim();
}
