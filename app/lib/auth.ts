import { SignJWT, jwtVerify } from 'jose'
import bcrypt from 'bcryptjs'

/*
  Authentication utilities for admin panel
  - JWT token generation and verification
  - Password hashing and comparison
  - Secure cookie handling with HTTPS
*/

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || 'your-secret-key-change-this-in-production'
)

export interface TokenPayload {
    username: string
    iat?: number
    exp?: number
}

/**
 * Generate JWT token
 * @param payload - Token data
 * @param expiresIn - Token expiration (default: 24 hours)
 */
export async function generateToken(payload: TokenPayload, expiresIn: string = '24h'): Promise<string> {
    const token = await new SignJWT({ username: payload.username })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(expiresIn)
        .sign(JWT_SECRET)

    return token
}

/**
 * Verify JWT token
 * @param token - JWT token string
 * @returns Decoded payload or null if invalid
 */
export async function verifyToken(token: string): Promise<TokenPayload | null> {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET)
        return {
            username: payload.username as string,
            iat: payload.iat,
            exp: payload.exp,
        }
    } catch {
        return null
    }
}

/**
 * Hash password using bcrypt
 * @param password - Plain text password
 */
export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
}

/**
 * Verify password against hash
 * @param password - Plain text password
 * @param hash - Bcrypt hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
}

/**
 * Cookie options for secure HTTPS-only cookies
 * Prevents XSS and CSRF attacks
 */
export function getSecureCookieOptions(): {
    httpOnly: boolean
    secure: boolean
    sameSite: 'strict' | 'lax' | 'none'
    maxAge: number
    path: string
} {
    const isProduction = process.env.NODE_ENV === 'production'

    return {
        httpOnly: true, // Prevents JavaScript access (XSS protection)
        secure: true, // HTTPS only - enforced in both dev and production
        sameSite: 'strict', // CSRF protection
        maxAge: 60 * 60 * 24, // 24 hours in seconds
        path: '/',
    }
}
