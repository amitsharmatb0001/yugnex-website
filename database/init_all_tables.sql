-- ==========================================
-- YugNex Database Initialization Script
-- ==========================================
-- WARNING: This script does NOT contain a 'USE database_name;' statement.
-- You must select your target database before running this script.
-- Example: USE yugnex_prod; SOURCE init_all_tables.sql;
-- ==========================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- --------------------------------------------------------
-- 1. Admin Users Table
-- Stores admin credentials (password_hash should be bcrypt/argon2)
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin_users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_login` DATETIME DEFAULT NULL,
  
  INDEX `idx_username` (`username`),
  INDEX `idx_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------
-- 2. Contacts Table
-- Stores contact form submissions
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `organization` VARCHAR(200) DEFAULT NULL,
  `message` TEXT NOT NULL,
  `ip_address` VARCHAR(45) DEFAULT NULL,
  `user_agent` TEXT DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` ENUM('new', 'in_progress', 'resolved', 'spam') DEFAULT 'new',
  `notes` TEXT DEFAULT NULL,
  
  INDEX `idx_email` (`email`),
  INDEX `idx_created_at` (`created_at`),
  INDEX `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------
-- 3. Analytics: Page Views
-- Tracks anonymous page visits
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `analytics_pageviews` (
  `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `path` VARCHAR(500) NOT NULL,
  `referrer` VARCHAR(500) DEFAULT NULL,
  `user_agent_hash` CHAR(64) DEFAULT NULL COMMENT 'SHA-256 hash of user agent for privacy',
  `country` CHAR(2) DEFAULT NULL COMMENT 'Country code from Cloudflare headers',
  `timestamp` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  INDEX `idx_path` (`path`(255)),
  INDEX `idx_timestamp` (`timestamp`),
  INDEX `idx_country` (`country`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------
-- 4. Analytics: Security Events
-- Tracks security related events (failed logins, etc.)
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `analytics_security_events` (
  `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `event_name` VARCHAR(100) NOT NULL,
  `metadata` JSON DEFAULT NULL COMMENT 'Additional event context',
  `timestamp` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  INDEX `idx_event_name` (`event_name`),
  INDEX `idx_timestamp` (`timestamp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;

-- End of script
