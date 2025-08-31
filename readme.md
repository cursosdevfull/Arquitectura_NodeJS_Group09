# Arquitectura NodeJS - Group 09

Un proyecto educativo que demuestra las mejores prácticas de arquitectura en Node.js, incluyendo aplicaciones NestJS con TypeORM y librerías compartidas.

## 🏗️ Estructura del Proyecto

```
Arquitectura_NodeJS_Group09/
├── app-typeorm/          # Aplicación principal con NestJS y TypeORM
│   ├── src/
│   │   ├── core/         # Módulos core (base de datos, configuración)
│   │   ├── user/         # Módulo de usuarios (entidades, controladores)
│   │   └── main.ts       # Punto de entrada de la aplicación
│   ├── test/             # Tests E2E
│   ├── compose.yml       # Docker Compose para servicios
│   └── package.json
├── libs/                 # Librerías compartidas
│   └── utils/            # Utilidades comunes (@cursosdev/utils)
└── README.md            # Este archivo
```

## 🚀 Tecnologías Utilizadas

### Backend
- **[NestJS](https://nestjs.com/)** - Framework progresivo de Node.js
- **[TypeORM](https://typeorm.io/)** - ORM para TypeScript y JavaScript
- **[MySQL](https://www.mysql.com/)** - Base de datos relacional
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado de JavaScript

### Herramientas de Desarrollo
- **[Docker](https://www.docker.com/)** & **Docker Compose** - Containerización
- **[Jest](https://jestjs.io/)** - Framework de testing
- **[ESLint](https://eslint.org/)** & **[Prettier](https://prettier.io/)** - Calidad de código
- **[phpMyAdmin](https://www.phpmyadmin.net/)** - Administración de MySQL

### Librerías Compartidas
- **[@cursosdev/utils](https://www.npmjs.com/package/@cursosdev/utils)** - Utilidades para tokens JWT

## 🛠️ Configuración del Entorno

### Prerrequisitos
- Node.js >= 18.x
- npm >= 8.x
- Docker & Docker Compose
- Git

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/cursosdevfull/Arquitectura_NodeJS_Group09.git
   cd Arquitectura_NodeJS_Group09
   ```

2. **Configurar la base de datos**
   ```bash
   cd app-typeorm
   docker-compose up -d
   ```

3. **Instalar dependencias**
   ```bash
   npm install
   ```

4. **Ejecutar la aplicación**
   ```bash
   npm run start:dev
   ```

## 🐳 Servicios Docker

El proyecto incluye una configuración completa de Docker Compose:

### Servicios Disponibles

- **MySQL Server** (Puerto 3306)
  - Usuario: `user`
  - Contraseña: `12345`
  - Base de datos: `db`

- **phpMyAdmin** (Puerto 8080)
  - URL: http://localhost:8080
  - Acceso con las credenciales de MySQL

### Comandos Docker

```bash
# Iniciar servicios
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down

# Detener y eliminar volúmenes
docker-compose down -v
```

## 📱 Aplicación TypeORM (app-typeorm)

### Características

- **Arquitectura Modular**: Separación clara de responsabilidades
- **Patrones de Diseño**: Repository pattern, Dependency Injection
- **Base de Datos**: Integración completa con MySQL via TypeORM
- **Validación**: Validación de datos de entrada
- **Testing**: Tests unitarios y E2E

### Entidades

#### UserEntity
```typescript
- id: number (PK)
- name: string
- age: number (nullable)
- email: string (unique)
- password: string
- isActive: boolean
- roleId: number (FK)
```

#### RoleEntity
```typescript
- id: number (PK)
- name: string
- description: string
```

### Endpoints API

#### Usuarios
- `GET /users` - Operaciones CRUD de usuarios (ejemplo)

### Scripts Disponibles

```bash
# Desarrollo
npm run start:dev      # Modo desarrollo con watch
npm run start:debug    # Modo debug

# Producción
npm run build         # Compilar aplicación
npm run start:prod    # Ejecutar en producción

# Testing
npm run test          # Tests unitarios
npm run test:watch    # Tests en modo watch
npm run test:cov      # Tests con coverage
npm run test:e2e      # Tests E2E

# Calidad de código
npm run lint          # Linting
npm run format        # Formatear código
```

## 📚 Librería Utils

### Instalación y Uso

```bash
npm install @cursosdev/utils
```

```typescript
import { Tokens } from '@cursosdev/utils';

// Generar access token
const accessToken = Tokens.generateAccessToken(
  { userId: '123', role: 'user' },
  'secret-key',
  '1h'
);

// Generar refresh token
const refreshToken = Tokens.generateRefreshToken();
```

Para más detalles, consulta el [README de la librería Utils](./libs/utils/readme.md).

## 🏛️ Arquitectura

### Patrones Implementados

1. **Module Pattern**: Organización modular con NestJS
2. **Repository Pattern**: Abstracción de acceso a datos
3. **Dependency Injection**: Inversión de control para testing y mantenibilidad
4. **Factory Pattern**: Proveedores de TypeORM
5. **Entity Pattern**: Modelado de datos con TypeORM

### Estructura de Capas

```
Presentation Layer    → Controllers (HTTP endpoints)
Business Logic Layer  → Services (Business rules)
Data Access Layer     → Repositories (Data operations)
Database Layer        → MySQL + TypeORM
```

## 🧪 Testing

### Estrategia de Testing

- **Tests Unitarios**: Componentes individuales
- **Tests de Integración**: Módulos completos
- **Tests E2E**: Flujos completos de usuario

### Ejecutar Tests

```bash
# Todos los tests
npm test

# Tests con coverage
npm run test:cov

# Tests E2E
npm run test:e2e

# Tests en modo watch
npm run test:watch
```

## 📋 Desarrollo

### Flujo de Desarrollo

1. **Branching**: Usar ramas feature para nuevas funcionalidades
2. **Commits**: Mensajes descriptivos siguiendo conventional commits
3. **Testing**: Ejecutar tests antes de commit
4. **Linting**: Código debe pasar ESLint y Prettier

### Comandos Útiles

```bash
# Crear nueva rama
git checkout -b feat/nueva-funcionalidad

# Verificar calidad de código
npm run lint

# Formatear código
npm run format

# Ejecutar todos los checks
npm run lint && npm test
```

## 🚀 Despliegue

### Variables de Entorno

```env
# Base de datos
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=user
DB_PASSWORD=12345
DB_DATABASE=db

# Aplicación
PORT=3000
NODE_ENV=production

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=1h
```

### Construcción para Producción

```bash
# Compilar aplicación
npm run build

# Ejecutar en producción
npm run start:prod
```

## 📖 Recursos de Aprendizaje

- [Documentación de NestJS](https://docs.nestjs.com/)
- [Guía de TypeORM](https://typeorm.io/#/undefined/readme)
- [Best Practices de Node.js](https://nodejs.org/en/docs/guides/)
- [Docker Compose Reference](https://docs.docker.com/compose/)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feat/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feat/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de uso educativo como parte del curso de Arquitectura NodeJS - Group 09.

## 👥 Autores

- **Curso**: Arquitectura NodeJS
- **Grupo**: 09
- **Instructor**: [cursosdevfull](https://github.com/cursosdevfull)

---

## 📞 Soporte

Para preguntas o soporte relacionado con este proyecto educativo:

- **Issues**: [GitHub Issues](https://github.com/cursosdevfull/Arquitectura_NodeJS_Group09/issues)
- **Documentación**: Consulta los READMEs específicos de cada módulo

---

**🎓 Proyecto Educativo** - Este repositorio forma parte del material educativo del curso de Arquitectura NodeJS Group 09.