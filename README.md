# Arquitectura NodeJS - Group 09

Monorepo project built with Node.js, NestJS, and managed with Turbo for efficient builds and development workflows.

## 🏗️ Project Structure

This is a monorepo containing multiple applications and shared libraries:

```
├── apps/
│   ├── ambulance/     # NestJS application for ambulance services
│   └── store/         # NestJS application for store management
├── libs/
│   └── ambulance-lib/ # Shared library with common utilities
└── turbo.json         # Turbo build configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 22.12.0
- **Package Manager**: npm 11.4.2

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cursosdevfull/Arquitectura_NodeJS_Group09.git
cd Arquitectura_NodeJS_Group09
```

2. Install dependencies:
```bash
npm install
```

## 📋 Available Scripts

### Development
```bash
# Start all applications in development mode
npm run dev

# Start specific application
cd apps/ambulance && npm run dev
cd apps/store && npm run dev
```

### Building
```bash
# Build all applications and libraries
npm run build

# Build specific application
cd apps/ambulance && npm run build
cd apps/store && npm run build
```

### Code Quality
```bash
# Check code formatting and linting with Biome
npm run biome-check

# Auto-fix formatting and linting issues
npm run biome-check:fix

# Run all format and lint fixes across workspace
npm run format-and-lint:fix

# Type checking across all packages
npm run typecheck
```

## 🏥 Applications

### Ambulance Service
- **Location**: `apps/ambulance/`
- **Framework**: NestJS
- **Port**: TBD
- **Description**: Service for managing ambulance operations

### Store Service
- **Location**: `apps/store/`
- **Framework**: NestJS
- **Port**: TBD
- **Description**: Service for managing store operations

## 📚 Shared Libraries

### ambulance-lib
- **Location**: `libs/ambulance-lib/`
- **Description**: Shared utilities and common functionality
- **Build Tool**: tsup (for fast TypeScript bundling)

## 🛠️ Technology Stack

- **Runtime**: Node.js 22.12.0
- **Framework**: NestJS
- **Build System**: Turbo
- **Code Quality**: Biome (ESLint + Prettier alternative)
- **Language**: TypeScript
- **Testing**: Jest
- **Package Manager**: npm with workspaces

## 🔧 Development Tools

- **Turbo**: For fast, incremental builds across the monorepo
- **Biome**: For fast linting and formatting
- **TypeScript**: For type safety
- **Jest**: For unit and e2e testing
- **ESLint**: Additional linting support

## 📦 Workspace Configuration

This project uses npm workspaces to manage dependencies across multiple packages:
- `apps/*` - All application packages
- `libs/*` - All shared library packages

## 🚦 Build Pipeline

The build pipeline is orchestrated by Turbo and includes:
1. **Type checking** - Ensures TypeScript compilation
2. **Building** - Compiles all applications and libraries
3. **Testing** - Runs unit and e2e tests
4. **Linting** - Code quality checks with Biome

## 📄 License

ISC

## 🤝 Contributing

This is a course project for NodeJS Architecture - Group 09.

## 📞 Support

For issues and questions, please use the [GitHub Issues](https://github.com/cursosdevfull/Arquitectura_NodeJS_Group09/issues) page.