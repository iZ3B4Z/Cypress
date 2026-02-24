// Test users database - SHARED inside users.js
// These users are for login testing with passwords
// IDs start at 100 to avoid conflicts with main users (1-2)

const testUsers = [
  {
    id: 1,
    name: 'Test User',
    email: 'testuser@cypress.com',
    password: 'cypress123',
    role: 'test'
  },
  {
    id: 2,
    name: 'Admin Test',
    email: 'jane@example.com',
    password: 'admin123',
    role: 'admin'
  }
];

module.exports = testUsers;
