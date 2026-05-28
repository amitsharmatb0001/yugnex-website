# Analytics System Setup

This document explains how to set up and use the YugNex self-hosted analytics system.

## Quick Start

### 1. Create Database Tables

Run the SQL schema to create the analytics tables:

```powershell
# Navigate to project directory
cd e:\yugnex-website

# Run the SQL migration (adjust command for your MySQL setup)
mysql -u root -p yugnex_db < database\analytics_schema.sql

# Or using MySQL command-line client:
mysql -u root -p
USE yugnex_db;
SOURCE database/analytics_schema.sql;
```

### 2. Verify Tables Exist

```sql
-- Check tables were created
SHOW TABLES LIKE 'analytics_%';

-- View table structures
DESCRIBE analytics_pageviews;
DESCRIBE analytics_security_events;
```

### 3. Start the Development Server

```powershell
npm run dev
```

### 4. Access the Dashboard

Visit: **http://localhost:3000/admin/analytics**

## What Gets Tracked

### Pageviews
- **Path**: Which pages are visited
- **Referrer**: Where visitors come from
- **Country**: Country code (from Cloudflare headers)
- **User Agent Hash**: SHA-256 hash for privacy

### Security Events
- **Rate Limits**: Contact form spam attempts
- **Turnstile Failures**: CAPTCHA validation failures
- **API Errors**: Backend security issues

## Privacy Features

✅ **No IP addresses stored**  
✅ **User agents hashed** (SHA-256, irreversible)  
✅ **Respects DNT/GPC** (checked client-side)  
✅ **No cookies or tracking**  
✅ **First-party only** (no external services)

## Querying Analytics Data

### Top Pages (Last 30 Days)
```sql
SELECT path, COUNT(*) as views
FROM analytics_pageviews
WHERE timestamp >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY path
ORDER BY views DESC
LIMIT 10;
```

### Traffic by Country
```sql
SELECT country, COUNT(*) as visits
FROM analytics_pageviews
WHERE timestamp >= DATE_SUB(NOW(), INTERVAL 7 DAY)
  AND country IS NOT NULL
GROUP BY country
ORDER BY visits DESC;
```

### Recent Security Events
```sql
SELECT event_name, COUNT(*) as count, MAX(timestamp) as last_occurrence
FROM analytics_security_events
WHERE timestamp >= DATE_SUB(NOW(), INTERVAL 7 DAY)
GROUP BY event_name
ORDER BY count DESC;
```

### Daily Pageview Trend
```sql
SELECT DATE(timestamp) as date, COUNT(*) as views
FROM analytics_pageviews
WHERE timestamp >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY DATE(timestamp)
ORDER BY date DESC;
```

## Troubleshooting

### Tables Not Found
- Ensure you ran the migration: `SOURCE database/analytics_schema.sql;`
- Check database name in `.env.local` matches

### No Data Appearing
- Check browser console for errors
- Verify database connection in `.env.local`
- Check MySQL error logs
- Ensure tables exist: `SHOW TABLES;`

### Dashboard Shows Error
- Verify database credentials are correct
- Check that MySQL server is running
- Look at terminal for error messages

## Data Retention

By default, analytics data is kept indefinitely. To implement automatic cleanup:

```sql
-- Delete pageviews older than 2 years
DELETE FROM analytics_pageviews
WHERE timestamp < DATE_SUB(NOW(), INTERVAL 2 YEAR);

-- Delete security events older than 1 year
DELETE FROM analytics_security_events
WHERE timestamp < DATE_SUB(NOW(), INTERVAL 1 YEAR);
```

You can set up a cron job or scheduled task to run this periodically.
