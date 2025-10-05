# 🏗️ RetroUI Architecture

This document describes the architectural decisions and structure of the RetroUI Component Library.

## 📐 Design Principles

1. **Separation of Concerns** - Clear boundaries between UI, business logic, and configuration
2. **Modularity** - Components are self-contained and reusable
3. **Scalability** - Feature-based architecture supports growth
4. **Maintainability** - Consistent patterns and clear file organization
5. **Performance** - Code splitting, lazy loading, and optimized builds
6. **Developer Experience** - Path aliases, barrel exports, and TypeScript support

## 📂 Folder Structure

### High-Level Overview

```
retro-component/
├── public/              # Static assets (images, favicon)
├── src/                 # Source code
│   ├── assets/         # Dynamic assets
│   ├── components/     # Reusable components
│   ├── features/       # Feature modules
│   ├── lib/           # Utilities & hooks
│   ├── config/        # Configuration
│   ├── styles/        # Global styles
│   ├── App.jsx        # Root component
│   └── main.jsx       # Entry point
├── .vscode/           # VSCode settings
└── config files       # Build and tooling config
```

### Detailed Breakdown

#### 1. `/src/components` - Reusable Components

Organized by type and purpose:

```
components/
├── ui/                # Presentational UI components
│   ├── buttons/      # Button variants
│   ├── cards/        # Card components
│   ├── inputs/       # Input fields
│   ├── avatars/      # Avatar components
│   ├── loaders/      # Loading indicators
│   ├── switches/     # Toggle switches
│   ├── tables/       # Table components
│   └── pricing/      # Pricing cards
├── layout/           # Layout components
│   ├── navbars/      # Navigation bars
│   ├── footers/      # Footer variants
│   ├── Navbar.jsx    # Main app navbar
│   ├── Footer.jsx    # Main app footer
│   └── ModeToggle.jsx
└── forms/            # Form components
    ├── signin/       # Sign-in forms
    ├── signup/       # Sign-up forms
    └── Form.jsx      # Shared form component
```

**Naming Convention:**

- Each category has an `index.js` for barrel exports
- Components use PascalCase (e.g., `PixelButton.jsx`)
- Related components grouped in folders

#### 2. `/src/features` - Feature Modules

Feature-based organization for better scalability:

```
features/
├── showcase/         # Component showcase feature
│   └── pages/       # Showcase pages
│       ├── Home.jsx
│       ├── Component.jsx
│       ├── ComponentShowcase.jsx
│       ├── CardShowcase.jsx
│       └── templates/
│           └── index.jsx
├── docs/            # Documentation feature
│   └── pages/
│       ├── About.jsx
│       ├── ContactUs.jsx
│       ├── PrivacyPolicy.jsx
│       └── Terms.jsx
└── templates/       # Page template feature
    ├── error-pages/
    ├── about-pages/
    ├── blog-pages/
    ├── contact-pages/
    ├── dashboard/
    ├── ecommerce-pages/
    ├── home-pages/
    └── service-pages/
```

**Benefits:**

- Easy to locate related code
- Can be extracted into separate packages
- Clear feature boundaries

#### 3. `/src/lib` - Shared Libraries

Utilities and custom hooks:

```
lib/
├── hooks/           # Custom React hooks
│   ├── useLocalStorage.js
│   ├── useMediaQuery.js
│   └── index.js
└── utils/           # Utility functions
    ├── cn.js       # className utilities
    ├── format.js   # Formatting functions
    └── index.js
```

**Purpose:**

- Shared business logic
- Reusable hooks
- Helper functions

#### 4. `/src/config` - Configuration

Centralized configuration management:

```
config/
├── constants.js     # App constants, routes, theme colors
└── routes.jsx       # Route definitions with lazy loading
```

**Benefits:**

- Single source of truth
- Easy to update URLs
- Centralized route management

## 🔧 Key Architectural Patterns

### 1. Path Aliases

Configured in `vite.config.js` and `jsconfig.json`:

```javascript
import { Button } from "@/components/ui";
import { useLocalStorage } from "@/hooks";
import { ROUTES } from "@/config/constants";
```

**Benefits:**

- Cleaner imports
- No relative path hell
- Easy refactoring

### 2. Barrel Exports

Every directory has an `index.js` that exports all components:

```javascript
// components/ui/buttons/index.js
export { default as PixelButton } from "./PixelButton";
export { default as RetroButton } from "./RetroButton";
export { default as ThreeDButton } from "./ThreeDButton";
```

**Usage:**

```javascript
// Import multiple components from one location
import {
  PixelButton,
  RetroButton,
  ThreeDButton,
} from "@/components/ui/buttons";
```

### 3. Lazy Loading

Routes are lazy-loaded for better performance:

```javascript
const Home = React.lazy(() => import("@/features/showcase/pages/Home"));

// In App.jsx
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</Suspense>;
```

**Benefits:**

- Smaller initial bundle size
- Faster page loads
- Better user experience

### 4. Feature-Based Structure

Features are self-contained modules:

```
showcase/
├── pages/          # Feature pages
├── components/     # Feature-specific components (if needed)
└── index.js        # Feature exports
```

**Benefits:**

- Easy to understand
- Simple to test
- Can be split into microservices

### 5. Configuration-Driven Routes

Routes defined in configuration file:

```javascript
// config/routes.jsx
export const appRoutes = [
  {
    path: ROUTES.HOME,
    element: Home,
    title: "Home",
  },
  // ... more routes
];

// App.jsx
{
  appRoutes.map((route) => (
    <Route key={route.path} path={route.path} element={<route.element />} />
  ));
}
```

**Benefits:**

- DRY principle
- Easy to add/modify routes
- Centralized management

## 🎨 Styling Architecture

### Tailwind CSS

- Utility-first approach
- Custom theme configuration
- Dark mode support

### Global Styles

```
styles/
├── index.css       # Base Tailwind imports
└── App.css         # Application-specific styles
```

### Component Styles

- Inline Tailwind classes
- Dynamic class composition with `cn()` utility

## ⚡ Performance Optimizations

1. **Code Splitting**

   - Route-based splitting
   - Component lazy loading

2. **Build Optimization**

   - Manual chunk splitting
   - Vendor code separation

3. **Asset Optimization**
   - Image optimization
   - Tree shaking

## 🔐 Best Practices

### Component Design

```jsx
/**
 * Component with proper JSDoc
 * @param {Object} props - Component props
 */
export default function MyComponent({ children, className, ...props }) {
  return (
    <div className={cn("base-classes", className)} {...props}>
      {children}
    </div>
  );
}
```

### Custom Hooks

```javascript
/**
 * Custom hook with proper documentation
 * @param {string} key - Storage key
 * @param {any} initialValue - Initial value
 * @returns {Array} - [value, setValue]
 */
export function useLocalStorage(key, initialValue) {
  // Implementation
}
```

### Utility Functions

```javascript
/**
 * Utility function with clear purpose
 * @param {string} text - Text to truncate
 * @param {number} length - Max length
 * @returns {string} - Truncated text
 */
export function truncate(text, length = 100) {
  // Implementation
}
```

## 🚀 Future Enhancements

1. **TypeScript Migration**

   - Type safety
   - Better IDE support

2. **Testing**

   - Unit tests with Vitest
   - Component tests with Testing Library
   - E2E tests with Playwright

3. **Storybook**

   - Component documentation
   - Interactive playground

4. **CI/CD**

   - Automated testing
   - Automated deployments

5. **Monorepo Structure**
   - Separate packages for components
   - Shared utilities package

## 📊 Build Configuration

### Vite Configuration

- Path aliases
- Build optimizations
- Development server settings
- Code splitting rules

### ESLint Configuration

- React rules
- React hooks rules
- Custom rules

### Tailwind Configuration

- Custom colors
- Dark mode
- Content paths

## 🎯 Decision Log

### Why Feature-Based Structure?

**Pros:**

- Better scalability
- Clear boundaries
- Easy navigation
- Simple to extract

**Cons:**

- Deeper nesting
- Learning curve

**Decision:** Pros outweigh cons for long-term maintenance

### Why Barrel Exports?

**Pros:**

- Clean imports
- Single source
- Easy to update

**Cons:**

- Potential circular dependencies
- Larger bundle in dev

**Decision:** Benefits worth the trade-offs with proper structure

### Why Lazy Loading?

**Pros:**

- Better performance
- Smaller initial load
- Progressive loading

**Cons:**

- Complexity
- Loading states needed

**Decision:** Essential for production applications

## 📝 Maintenance Guidelines

1. **Adding Components**

   - Place in correct category
   - Add to index.js
   - Create showcase if needed

2. **Adding Features**

   - Create feature folder
   - Add pages and components
   - Export from index.js
   - Update routes

3. **Updating Configuration**
   - Update constants.js
   - Update routes.jsx
   - Update documentation

---

This architecture supports current needs while remaining flexible for future growth.
