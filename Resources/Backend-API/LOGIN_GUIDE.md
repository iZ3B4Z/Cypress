# Login API Documentation

## Overview
El sistema de login está **completamente aislado** de los usuarios principales. No afectará ninguno de tus datos existentes.

### Test Credentials (Para tus Cypress tests)

```
User 1:
Email: testuser@cypress.com
Password: cypress123

User 2:
Email: admin@cypress.com
Password: admin123
```

## Endpoints de Login

### 1. POST /auth/login
Realiza login y obtiene un token

**Request:**
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "testuser@cypress.com",
    "password": "cypress123"
  }'
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "base64_encoded_token",
  "user": {
    "id": 100,
    "name": "Test User",
    "email": "testuser@cypress.com",
    "role": "test"
  }
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

---

### 2. GET /auth/me
Obtiene el usuario actualmente autenticado

**Request:**
```bash
curl -X GET http://localhost:3000/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": 100,
    "name": "Test User",
    "email": "testuser@cypress.com",
    "role": "test"
  }
}
```

---

### 3. POST /auth/logout
Cierra la sesión

**Request:**
```bash
curl -X POST http://localhost:3000/auth/logout \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

**Response:**
```json
{
  "success": true,
  "message": "Logout successful"
}
```

---

## Ejemplo en Cypress

```javascript
// En tu archivo de tests de Cypress

describe('Login Tests', () => {
  const baseUrl = 'http://localhost:3000';
  
  it('should login with valid credentials', () => {
    cy.request('POST', `${baseUrl}/auth/login`, {
      email: 'testuser@cypress.com',
      password: 'cypress123'
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.success).to.be.true;
      expect(response.body.token).to.exist;
      
      // Guardar el token para usarlo en otros requests
      cy.wrap(response.body.token).as('authToken');
    });
  });

  it('should get current user with token', function() {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/auth/me`,
      headers: {
        'Authorization': `Bearer ${this.authToken}`
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.user.email).to.equal('testuser@cypress.com');
    });
  });

  it('should fail login with invalid credentials', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/auth/login`,
      body: {
        email: 'testuser@cypress.com',
        password: 'wrongpassword'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(401);
      expect(response.body.success).to.be.false;
    });
  });
});
```

---

## Resumen de Seguridad

✅ **Usuarios de prueba aislados** - Los usuarios de test están separados en `testUsers.js`
✅ **Usuarios originales intactos** - John Doe y Jane Smith nunca son afectados
✅ **Datos de test no interferentes** - Los IDs de test comienzan en 100 (tu ID siguiente es 3)
✅ **Tus tests de Cypress siguen funcionando** - Los emails como `john@example.com` siguen disponibles

---

## Cómo Agregar Más Usuarios de Prueba

Solo edita `testUsers.js` y agrega más usuarios:

```javascript
const testUsers = [
  {
    id: 100,
    name: 'Test User',
    email: 'testuser@cypress.com',
    password: 'cypress123',
    role: 'test'
  },
  {
    id: 101,
    name: 'Admin Test',
    email: 'admin@cypress.com',
    password: 'admin123',
    role: 'admin'
  },
  // Agregar aquí más usuarios de prueba
  {
    id: 102,
    name: 'New Test User',
    email: 'newtestuser@cypress.com',
    password: 'newpass123',
    role: 'test'
  }
];
```

---

## Notas Importantes

- **Passwords en texto plano**: Esta es una solución de desarrollo. En producción, usa bcrypt o JWT.
- **Tokens simples**: Los tokens se guardan en memoria. Con cada reinicio del servidor, se pierden.
- **Solo para testing**: No uses esto para autenticación real en producción.
