# 🎨 RetroUI Component Library

> A modern, industry-standard React component library with retro aesthetics

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-purple.svg)](https://vitejs.dev/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Component Categories](#component-categories)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

**RetroUI** is a comprehensive collection of retro-themed UI components designed for modern web applications. Built with React, Vite, and Tailwind CSS, it follows industry-standard practices for maintainability, scalability, and performance.

## ✨ Features

- 🎯 **70+ Retro-styled Components** - Buttons, cards, inputs, tables, and more
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🎨 **Multiple Variants** - Each component comes with several design variants
- ⚡ **Performance Optimized** - Code splitting and lazy loading built-in
- 🔧 **Highly Customizable** - Easy to theme and extend
- 📦 **Modern Architecture** - Feature-based folder structure
- 🛠️ **TypeScript Ready** - JSConfig with path aliases
- 🎭 **Dark Mode Support** - Built-in theme switching
- 📖 **Live Showcase** - Interactive component gallery

## 📁 Project Structure

```
retro-component/
├── public/                  # Static assets
│   ├── Images/
│   └── favicon2.png
├── src/
│   ├── assets/             # Dynamic assets (images, icons)
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # UI components (buttons, cards, etc.)
│   │   │   ├── buttons/
│   │   │   ├── cards/
│   │   │   ├── inputs/
│   │   │   ├── avatars/
│   │   │   ├── loaders/
│   │   │   ├── switches/
│   │   │   ├── tables/
│   │   │   └── pricing/
│   │   ├── layout/        # Layout components (navbar, footer)
│   │   │   ├── navbars/
│   │   │   └── footers/
│   │   └── forms/         # Form components (signin, signup)
│   │       ├── signin/
│   │       └── signup/
│   ├── features/          # Feature-based modules
│   │   ├── showcase/      # Component showcase pages
│   │   │   └── pages/
│   │   ├── docs/          # Documentation pages
│   │   │   └── pages/
│   │   └── templates/     # Full page templates
│   │       ├── error-pages/
│   │       ├── about-pages/
│   │       ├── blog-pages/
│   │       ├── contact-pages/
│   │       ├── dashboard/
│   │       ├── ecommerce-pages/
│   │       ├── home-pages/
│   │       └── service-pages/
│   ├── lib/               # Utilities and helpers
│   │   ├── hooks/         # Custom React hooks
│   │   └── utils/         # Utility functions
│   ├── config/            # App configuration
│   │   ├── constants.js   # App constants and routes
│   │   └── routes.jsx     # Route definitions
│   ├── styles/            # Global styles
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx            # Root component
│   └── main.jsx           # Entry point
├── .gitignore
├── eslint.config.js       # ESLint configuration
├── jsconfig.json          # Path aliases configuration
├── package.json
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md

```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Omi-Patel/retroUI_Component.git
cd retroUI_Component
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

The application will open at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🧩 Component Categories

### UI Components

- **Buttons** - Pixel, Retro, 3D, Round variants
- **Cards** - Blog, Product, Profile, Service, Testimonial
- **Inputs** - Basic, Focused, Neon, Outline, Rounded
- **Avatars** - Customizable user avatars
- **Loaders** - 8 different loading animations
- **Switches** - Basic, Bordered, Glow, Icon, Labeled
- **Tables** - Animated, Basic, Blog, E-commerce, Striped
- **Pricing** - Multiple pricing card designs

### Layout Components

- **Navbars** - Gradient, Neon, Pixel, Retro variants
- **Footers** - Basic, Bordered, Classic, Neon, Pixel, Shadow

### Form Components

- **Sign In** - Multiple sign-in page layouts
- **Sign Up** - 8 different signup form variants

### Page Templates

Complete, ready-to-use page templates for:

- Home Pages
- About Pages
- Blog Pages
- Contact Pages
- Service Pages
- E-commerce Pages
- Dashboard
- Error Pages (404, etc.)

## 🏗️ Architecture

### Path Aliases

The project uses path aliases for cleaner imports:

```javascript
import { Button } from "@/components/ui";
import { useLocalStorage } from "@/hooks";
import { ROUTES } from "@/config/constants";
```

### Code Splitting

Routes are lazy-loaded for optimal performance:

```javascript
const Home = React.lazy(() => import("@/features/showcase/pages/Home"));
```

### Barrel Exports

Each directory includes an `index.js` for convenient imports:

```javascript
// Import multiple components at once
import {
  PixelButton,
  RetroButton,
  ThreeDButton,
} from "@/components/ui/buttons";
```

## 🎨 Customization

### Theme Configuration

Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      neon: '#39ff14',
      // Add your custom colors
    },
  },
}
```

### Using Components

```jsx
import { PixelButton } from "@/components/ui/buttons";

function MyComponent() {
  return (
    <PixelButton onClick={() => console.log("Clicked!")}>Click Me</PixelButton>
  );
}
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Use meaningful component and variable names
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Powered by [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

## 📞 Contact

**Om Patel** - [@Omi-Patel](https://github.com/Omi-Patel)

Project Link: [https://github.com/Omi-Patel/retroUI_Component](https://github.com/Omi-Patel/retroUI_Component)

---

Made with ❤️ by the RetroUI Team
