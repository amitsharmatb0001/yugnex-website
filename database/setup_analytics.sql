-- Complete Analytics Setup Script
-- Run this file with: mysql -u root -p < database/setup_analytics.sql

-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS yugnex_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Use the database
USE yugnex_db;

-- Create analytics_pageviews table
CREATE TABLE IF NOT EXISTS analytics_pageviews (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  path VARCHAR(500) NOT NULL,
  referrer VARCHAR(500) DEFAULT NULL,
  user_agent_hash CHAR(64) DEFAULT NULL COMMENT 'SHA-256 hash of user agent for privacy',
  country CHAR(2) DEFAULT NULL COMMENT 'Country code from Cloudflare headers',
  timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  INDEX idx_path (path(255)),
  INDEX idx_timestamp (timestamp),
  INDEX idx_country (country)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create analytics_security_events table
CREATE TABLE IF NOT EXISTS analytics_security_events (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  event_name VARCHAR(100) NOT NULL,
  metadata JSON DEFAULT NULL COMMENT 'Additional event context',
  timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  INDEX idx_event_name (event_name),
  INDEX idx_timestamp (timestamp)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Show created tables
SHOW TABLES LIKE 'analytics_%';
