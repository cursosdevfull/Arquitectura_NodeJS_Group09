# Arquitectura NodeJS - Grupo 09

Este proyecto implementa una arquitectura de microservicios utilizando **NestJS** para el desarrollo de aplicaciones de salud.

## 🏗️ Arquitectura del Sistema

El proyecto está estructurado como una arquitectura de microservicios con los siguientes servicios:

### 📋 Servicios Implementados

#### 1. **Ambulance Service** 
- **Puerto**: 3000
- **Descripción**: Servicio para la gestión de ambulancias
- **Tecnología**: NestJS + TypeScript
- **Ubicación**: `./ambulance/`

#### 2. **Medical Histories Service**
- **Puerto**: Por definir
- **Descripción**: Servicio para la gestión de historiales médicos
- **Tecnología**: NestJS + TypeScript  
- **Ubicación**: `./medical-histories/`

## 🛠️ Tecnologías Utilizadas

- **Framework**: NestJS 11.x
- **Lenguaje**: TypeScript
- **Runtime**: Node.js
- **Testing**: Jest
- **Linting**: ESLint + Prettier
- **Build Tool**: Nest CLI

## 📁 Estructura del Proyecto

```
Arquitectura_NodeJS_Group09/
├── README.md
├── ambulance/                    # Microservicio de ambulancias
│   ├── src/
│   │   ├── app.controller.ts     # Controlador principal
│   │   ├── app.service.ts        # Servicios de negocio
│   │   ├── app.module.ts         # Módulo principal
│   │   └── main.ts               # Punto de entrada
│   ├── test/                     # Pruebas E2E
│   ├── package.json
│   ├── requests.http             # Archivo de pruebas HTTP
│   └── tsconfig.json
└── medical-histories/            # Microservicio de historiales médicos
    ├── src/
    │   ├── app.controller.ts     # Controlador principal
    │   ├── app.service.ts        # Servicios de negocio
    │   ├── app.module.ts         # Módulo principal
    │   └── main.ts               # Punto de entrada
    ├── test/                     # Pruebas E2E
    ├── package.json
    └── tsconfig.json
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación por Servicio

#### Ambulance Service
```bash
cd ambulance
npm install
```

#### Medical Histories Service
```bash
cd medical-histories
npm install
```

## 🏃‍♂️ Ejecución

### Desarrollo
```bash
# Servicio de Ambulancias
cd ambulance
npm run start:dev

# Servicio de Historiales Médicos
cd medical-histories
npm run start:dev
```

### Producción
```bash
# Servicio de Ambulancias
cd ambulance
npm run build
npm run start:prod

# Servicio de Historiales Médicos
cd medical-histories
npm run build
npm run start:prod
```

## 🧪 Testing

### Pruebas Unitarias
```bash
# En cada servicio
npm run test
```

### Pruebas E2E
```bash
# En cada servicio
npm run test:e2e
```

### Cobertura de Código
```bash
# En cada servicio
npm run test:cov
```

## 🔧 Scripts Disponibles

Cada microservicio incluye los siguientes scripts npm:

- `start` - Inicia la aplicación
- `start:dev` - Inicia en modo desarrollo con watch
- `start:debug` - Inicia en modo debug
- `start:prod` - Inicia la versión de producción
- `build` - Compila el proyecto
- `test` - Ejecuta pruebas unitarias
- `test:watch` - Ejecuta pruebas en modo watch
- `test:cov` - Genera reporte de cobertura
- `test:e2e` - Ejecuta pruebas end-to-end
- `lint` - Ejecuta el linter
- `format` - Formatea el código

## 📡 API Testing

El servicio de ambulancias incluye un archivo `requests.http` para testing de endpoints:

```http
### Get
GET http://localhost:3000
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👥 Equipo

**Grupo 09** - Curso de Arquitectura NodeJS

## 📄 Licencia

Este proyecto está bajo la Licencia UNLICENSED - ver los archivos package.json para detalles.

## 🔮 Próximas Implementaciones

- [ ] Configuración de base de datos
- [ ] Implementación de DTOs y validaciones
- [ ] Sistema de autenticación y autorización
- [ ] Configuración de Docker
- [ ] Gateway API
- [ ] Documentación con Swagger/OpenAPI
- [ ] Implementación de patrones CQRS
- [ ] Monitoreo y logging centralizado