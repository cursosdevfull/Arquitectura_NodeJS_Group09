# @cursosdev/utils

A utility library for Node.js applications providing common functionality for token management and authentication.

## 📦 Installation

```bash
npm install @cursosdev/utils
```

```bash
yarn add @cursosdev/utils
```

```bash
pnpm add @cursosdev/utils
```

## 🚀 Features

- **JWT Token Generation**: Generate secure access tokens with customizable payload and expiration
- **Refresh Token Generation**: Create unique refresh tokens using crypto UUID
- **TypeScript Support**: Full TypeScript support with type definitions included
- **Multiple Module Formats**: Available in both CommonJS and ESM formats

## 📋 Requirements

- Node.js >= 14.x
- TypeScript >= 4.x (for TypeScript projects)

## 🛠️ Usage

### Importing the Library

```typescript
// ES6 imports
import { Tokens } from '@cursosdev/utils';

// CommonJS
const { Tokens } = require('@cursosdev/utils');
```

### Generating Access Tokens

```typescript
import { Tokens } from '@cursosdev/utils';

// Generate an access token
const payload = {
  userId: '12345',
  email: 'user@example.com',
  role: 'admin'
};

const secret = 'your-secret-key';
const expiresIn = '1h'; // 1 hour

const accessToken = Tokens.generateAccessToken(payload, secret, expiresIn);
console.log('Access Token:', accessToken);
```

### Generating Refresh Tokens

```typescript
import { Tokens } from '@cursosdev/utils';

// Generate a refresh token
const refreshToken = Tokens.generateRefreshToken();
console.log('Refresh Token:', refreshToken);
```

### Complete Authentication Example

```typescript
import { Tokens } from '@cursosdev/utils';

class AuthService {
  private readonly JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
  private readonly ACCESS_TOKEN_EXPIRY = '15m';
  
  generateTokenPair(user: { id: string; email: string; role: string }) {
    const payload = {
      userId: user.id,
      email: user.email,
      role: user.role
    };
    
    const accessToken = Tokens.generateAccessToken(
      payload, 
      this.JWT_SECRET, 
      this.ACCESS_TOKEN_EXPIRY
    );
    
    const refreshToken = Tokens.generateRefreshToken();
    
    return {
      accessToken,
      refreshToken,
      expiresIn: this.ACCESS_TOKEN_EXPIRY
    };
  }
}

// Usage
const authService = new AuthService();
const user = { id: '123', email: 'user@example.com', role: 'user' };
const tokens = authService.generateTokenPair(user);
console.log(tokens);
```

## 📚 API Reference

### `Tokens.generateAccessToken(payload, secret, expiresIn)`

Generates a JWT access token.

**Parameters:**
- `payload` (Record<string, any>): The data to encode in the token
- `secret` (Secret): The secret key for signing the token
- `expiresIn` (string): Token expiration time (e.g., '1h', '30m', '7d')

**Returns:** `string` - The generated JWT token

**Example:**
```typescript
const token = Tokens.generateAccessToken(
  { userId: '123' }, 
  'secret-key', 
  '1h'
);
```

### `Tokens.generateRefreshToken()`

Generates a unique refresh token using crypto.randomUUID().

**Returns:** `string` - A unique UUID string

**Example:**
```typescript
const refreshToken = Tokens.generateRefreshToken();
// Returns: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
```

## 🔧 Development

### Building the Library

```bash
npm run build
```

This will generate:
- `dist/index.js` - CommonJS format
- `dist/index.mjs` - ESM format  
- `dist/index.d.ts` - TypeScript declarations
- Source maps for debugging

### Project Structure

```
libs/utils/
├── dist/              # Built files (generated)
├── index.ts          # Main entry point
├── tokens.ts         # Token utilities
├── package.json      # Package configuration
├── tsconfig.json     # TypeScript configuration
├── tsup.config.ts    # Build configuration
└── readme.md         # This file
```

## 🤝 Dependencies

- **jsonwebtoken**: For JWT token generation and signing
- **crypto**: Node.js built-in module for UUID generation

## 📄 License

ISC

## 👥 Contributing

This library is part of the Arquitectura NodeJS Group09 course project. Contributions are welcome!

## 🏷️ Version History

### v1.0.0
- Initial release
- JWT access token generation
- Refresh token generation using crypto UUID
- TypeScript support
- Multiple module format support (CJS/ESM)

## 🔗 Links

- [npm package](https://www.npmjs.com/package/@cursosdev/utils)
- [Repository](https://github.com/cursosdevfull/Arquitectura_NodeJS_Group09)

---

**Note**: This utility library is designed for educational purposes as part of a Node.js architecture course. Please ensure proper security practices when using in production environments.