# Simple User API

A basic Node.js and Express API for managing users with CRUD operations.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The API will run on `http://localhost:3000`

## Endpoints

### Get All Users
```
GET /users
```

### Get Single User
```
GET /users/:id
```

### Create User
```
POST /users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

### Update User
```
PUT /users/:id
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 31
}
```

### Delete User
```
DELETE /users/:id
```

### Health Check
```
GET /health
```

## Features

- ✓ Get all users
- ✓ Get single user by ID
- ✓ Create new user
- ✓ Update existing user
- ✓ Delete user
- ✓ Email validation and duplicate checking
- ✓ 2 initial seed users
- ✓ JSON responses with success status

## Testing

You can test the API using:
- Postman
- cURL
- VS Code REST Client
- Cypress (as you mentioned)

### Example cURL requests:

```bash
# Get all users
curl http://localhost:3000/users

# Create a user
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Bob","email":"bob@example.com","age":25}'

# Update a user
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"John Updated","age":31}'

# Delete a user
curl -X DELETE http://localhost:3000/users/1
```
