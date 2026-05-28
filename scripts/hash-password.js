#!/usr/bin/env node

/*
  Password Hash Generator
  
  Usage: node scripts/hash-password.js your_password
  
  This script generates a bcrypt hash for the admin password.
  Copy the output to ADMIN_PASSWORD_HASH in .env.local
*/

const bcrypt = require('bcryptjs')

const password = process.argv[2]

if (!password) {
    console.error('Usage: node scripts/hash-password.js your_password')
    process.exit(1)
}

const hash = bcrypt.hashSync(password, 10)

console.log('\n✅ Password hash generated successfully!\n')
console.log('Add this to your .env.local file:\n')
console.log(`ADMIN_PASSWORD_HASH=${hash}\n`)
