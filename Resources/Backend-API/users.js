const express = require('express');
const app = express();
const PORT = 3000;

// Import test users
const testUsers = require('./testUsers');

// Middleware
app.use(express.json());

// In-memory user storage - starts with original users + test users
let users = [...testUsers];

let nextId = 3;

// Token storage for authentication
const tokens = new Map();

// ========================================
// AUTHENTICATION ROUTES
// ========================================

/**
 * POST /auth/login
 * Login endpoint for test users
 */
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }

  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }

  // Check password (only for test users)
  if (user.password && user.password !== password) {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }

  // Generate token
  const token = Buffer.from(`${user.id}:${Date.now()}`).toString('base64');
  tokens.set(token, user);

  res.json({
    success: true,
    message: 'Login successful',
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role || null
    }
  });
});

/**
 * POST /auth/logout
 * Logout endpoint
 */
app.post('/auth/logout', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token || !tokens.has(token)) {
    return res.status(401).json({
      success: false,
      message: 'Invalid token'
    });
  }

  tokens.delete(token);

  res.json({
    success: true,
    message: 'Logout successful'
  });
});

/**
 * GET /auth/me
 * Get current logged in user
 */
app.get('/auth/me', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token || !tokens.has(token)) {
    return res.status(401).json({
      success: false,
      message: 'Not authenticated'
    });
  }

  const user = tokens.get(token);

  res.json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role || null
    }
  });
});

// ========================================
// USER MANAGEMENT ROUTES
// ========================================

// Get all users
app.get('/users', (req, res) => {
  res.json({
    success: true,
    data: users,
    count: users.length
  });
});

// Get a single user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  res.json({
    success: true,
    data: user
  });
});

// Create a new user
app.post('/users', (req, res) => {
  const { name, email, age } = req.body;
  
  // Validation
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Name and email are required'
    });
  }
  
  const newUser = {
    id: nextId++,
    name,
    email,
    age: age || null
  };
  
  users.push(newUser);
  
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: newUser
  });
});

// Update a user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  const { name, email, age } = req.body;
  
  // Check if new email already exists (excluding current user)
  if (email && email !== user.email) {
    const emailExists = users.some(u => u.email === email && u.id !== user.id);
    if (emailExists) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists'
      });
    }
  }
  
  // Update fields
  if (name) user.name = name;
  if (email) user.email = email;
  if (age !== undefined) user.age = age;
  
  res.json({
    success: true,
    message: 'User updated successfully',
    data: user
  });
});

// Delete a user
app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  } 
  
  const deletedUser = users.splice(index, 1);
  
  res.json({
    success: true,
    message: 'User deleted successfully',
    data: deletedUser[0]
  });

});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✓ User API Server is running on http://localhost:${PORT}`);
  console.log(`Initial users: ${users.length}`);
});
