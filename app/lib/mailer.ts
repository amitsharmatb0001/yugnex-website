/**
 * Email Mailer Utility
 * 
 * Handles sending emails through SMTP or email service providers.
 * For production, use services like:
 * - SendGrid
 * - AWS SES
 * - Postmark
 * - Resend
 */

import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  from?: string;
  replyTo?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  message: string;
}

class Mailer {
  private transporter: nodemailer.Transporter | null = null;

  constructor() {
    this.initializeTransporter();
  }

  private initializeTransporter() {
    // Use environment variables for configuration
    const emailService = process.env.EMAIL_SERVICE || 'smtp';

    if (emailService === 'sendgrid') {
      // SendGrid configuration
      this.transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
          user: 'apikey',
          pass: process.env.SENDGRID_API_KEY,
        },
      });
    } else if (emailService === 'ses') {
      // AWS SES configuration
      this.transporter = nodemailer.createTransport({
        host: process.env.SES_SMTP_HOST,
        port: 587,
        auth: {
          user: process.env.SES_SMTP_USER,
          pass: process.env.SES_SMTP_PASSWORD,
        },
      });
    } else {
      // Generic SMTP configuration (for local testing or other providers)
      this.transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'localhost',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: process.env.SMTP_USER
          ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          }
          : undefined,
      });
    }
  }

  /**
   * Send a generic email
   */
  async sendEmail(options: EmailOptions): Promise<{ success: boolean; error?: string }> {
    if (!this.transporter) {
      return { success: false, error: 'Email transporter not configured' };
    }

    try {
      const from = options.from || process.env.EMAIL_FROM || 'noreply@yugnex.com';

      await this.transporter.sendMail({
        from,
        to: options.to,
        replyTo: options.replyTo,
        subject: options.subject,
        text: options.text,
        html: options.html,
      });

      return { success: true };
    } catch (error) {
      console.error('Email send error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Send contact form notification
   */
  async sendContactFormNotification(
    data: ContactFormData
  ): Promise<{ success: boolean; error?: string }> {
    const recipientEmail = process.env.CONTACT_EMAIL || 'yugnexofficial@gmail.com';

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #000; color: #fbbf24; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>YugNex Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${data.email}</div>
              </div>
              ${data.organization
        ? `
              <div class="field">
                <div class="label">Organization:</div>
                <div class="value">${data.organization}</div>
              </div>
              `
        : ''
      }
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from the YugNex Technology contact form.</p>
              <p>Received at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const text = `
YugNex Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.organization ? `Organization: ${data.organization}` : ''}

Message:
${data.message}

---
Received at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST
    `.trim();

    return this.sendEmail({
      to: recipientEmail,
      subject: `Contact Form: ${data.name} - YugNex`,
      replyTo: data.email,
      html,
      text,
    });
  }

  /**
   * Send confirmation email to user
   */
  async sendContactConfirmation(
    email: string,
    name: string
  ): Promise<{ success: boolean; error?: string }> {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #000; color: #fbbf24; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; margin-top: 20px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Contacting YugNex</h2>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for reaching out to YugNex Technology. We have received your message and will respond as soon as possible.</p>
              <p>Our team typically responds within 24-48 hours during business days.</p>
              <p>Best regards,<br>YugNex Technology Team</p>
            </div>
            <div class="footer">
              <p>YugNex Technology | Built in India for the World</p>
              <p>This is an automated confirmation. Please do not reply to this email.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const text = `
Dear ${name},

Thank you for reaching out to YugNex Technology. We have received your message and will respond as soon as possible.

Our team typically responds within 24-48 hours during business days.

Best regards,
YugNex Technology Team

---
YugNex Technology | Built in India for the World
This is an automated confirmation. Please do not reply to this email.
    `.trim();

    return this.sendEmail({
      to: email,
      subject: 'Thank you for contacting YugNex Technology',
      html,
      text,
    });
  }
}

// Export singleton instance
const mailer = new Mailer();
export default mailer;

// Export helper functions
export const sendEmail = (options: EmailOptions) => mailer.sendEmail(options);
export const sendContactFormNotification = (data: ContactFormData) =>
  mailer.sendContactFormNotification(data);
export const sendContactConfirmation = (email: string, name: string) =>
  mailer.sendContactConfirmation(email, name);
