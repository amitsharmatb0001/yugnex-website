-- Add missing organization column to existing contacts table
-- Run this in phpMyAdmin SQL tab or MySQL command line

ALTER TABLE contacts 
ADD COLUMN organization VARCHAR(200) AFTER email;
