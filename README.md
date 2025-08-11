# 🎨 React Design System

A modern, accessible, and customizable React Design System built with TypeScript, CSS custom properties, and Storybook.

[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## ✨ Features

- **🎭 Polymorphic Components**: Components that can render as different HTML elements
- **🎨 Design Tokens**: CSS custom properties for consistent theming
- **📱 Responsive**: Mobile-first design approach
- **♿ Accessible**: WCAG compliant components
- **📚 Storybook**: Interactive documentation and testing
- **�� TypeScript**: Full type safety and IntelliSense
- **🎯 Variant System**: Flexible component variants and states

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
# Start Storybook
npm run storybook

# Build tokens
npm run build:tokens

# Build library
npm run build
```

### Usage

```tsx
import { Button, Input, Card } from "design-system";

function App() {
  return (
    <div>
      <Button variant="solid" color="primary">
        Click me
      </Button>

      <Input
        label="Email"
        placeholder="Enter your email"
        isInvalid={true}
        helperText="Invalid email format"
      />

      <Card variant="elevated" header="Welcome">
        <p>This is a beautiful card component!</p>
      </Card>
    </div>
  );
}
```

## 🧩 Components

### Button

Highly customizable button with multiple variants, colors, sizes, and states.

**Variants**: `solid`, `bordered`, `light`, `flat`, `faded`  
**Colors**: `default`, `primary`, `secondary`, `tertiary`, `success`, `warning`, `danger`  
**Sizes**: `sm`, `md`, `lg`  
**States**: `loading`, `disabled`, `icon-only`

### Input

Form input with validation states, icons, and helper text.

**Sizes**: `sm`, `md`, `lg`  
**States**: `normal`, `invalid`, `success`, `disabled`  
**Features**: `startContent`, `endContent`, `helperText`

### Card

Content container with different styles and layouts.

**Variants**: `elevated`, `outlined`, `ghost`  
**Padding**: `sm`, `md`, `lg`  
**Features**: `header`, `footer`, `interactive`

## �� Design System

### Design Tokens

- **Colors**: Semantic color palette with primary, secondary, success, warning, danger
- **Typography**: Consistent font sizes, weights, and line heights
- **Spacing**: 8px grid system for consistent layouts
- **Shadows**: Elevation system for depth
- **Border Radius**: Flexible radius options from none to full

### CSS Architecture

- **CSS Custom Properties**: Dynamic theming and customization
- **BEM Methodology**: Predictable and maintainable CSS
- **Utility Classes**: Reusable design utilities
- **Responsive Design**: Mobile-first approach with breakpoints

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **CSS Custom Properties** - Design tokens
- **Storybook** - Component documentation
- **Vite** - Build tool
- **Vitest** - Testing framework
- **PostCSS** - CSS processing

## 📖 Documentation

Visit our [Storybook](http://localhost:6006) for interactive component documentation, examples, and testing.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🇪🇸 Español

### Sistema de Diseño React

Un sistema de diseño moderno, accesible y personalizable para React construido con TypeScript, propiedades CSS personalizadas y Storybook.

#### 🎯 Características Principales

- **Componentes Polimórficos**: Componentes que pueden renderizarse como diferentes elementos HTML
- **Tokens de Diseño**: Propiedades CSS personalizadas para temas consistentes
- **Responsivo**: Enfoque de diseño mobile-first
- **Accesible**: Componentes compatibles con WCAG
- **Storybook**: Documentación interactiva y testing
- **TypeScript**: Seguridad de tipos completa e IntelliSense
- **Sistema de Variantes**: Variantes y estados flexibles de componentes

#### �� Uso Rápido

```tsx
import { Button, Input, Card } from "design-system";

function App() {
  return (
    <div>
      <Button variant="solid" color="primary">
        Haz clic aquí
      </Button>

      <Input
        label="Email"
        placeholder="Ingresa tu email"
        isInvalid={true}
        helperText="Formato de email inválido"
      />

      <Card variant="elevated" header="Bienvenido">
        <p>¡Este es un hermoso componente de tarjeta!</p>
      </Card>
    </div>
  );
}
```

#### �� Componentes Disponibles

- **Button**: Botón altamente personalizable con múltiples variantes
- **Input**: Campo de entrada con estados de validación
- **Card**: Contenedor de contenido con diferentes estilos

Para más información, visita nuestra [Storybook](http://localhost:6006) para documentación interactiva de componentes, ejemplos y testing.
