# 🚀 Quick Start Guide

Get up and running with RetroUI in minutes!

## ⚡ Installation

```bash
# Clone the repository
git clone https://github.com/Omi-Patel/retroUI_Component.git
cd retroUI_Component

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

## 📦 Using Components

### Import a Component

```jsx
import { PixelButton } from "@/components/ui/buttons";

function MyPage() {
  return <PixelButton onClick={() => alert("Clicked!")}>Click Me</PixelButton>;
}
```

### Import Multiple Components

```jsx
import {
  PixelButton,
  RetroButton,
  ThreeDButton,
} from "@/components/ui/buttons";
```

### Import from Category

```jsx
// Import all button components
import * as Buttons from "@/components/ui/buttons";

// Usage
<Buttons.PixelButton>Click</Buttons.PixelButton>;
```

## 🎨 Available Component Categories

### UI Components

```jsx
// Buttons
import {
  PixelButton,
  RetroButton,
  ThreeDButton,
} from "@/components/ui/buttons";

// Cards
import { BlogCard, ProductCard, ProfileCard } from "@/components/ui/cards";

// Inputs
import { BasicInput, NeonInput, RoundedInput } from "@/components/ui/inputs";

// Loaders
import {
  RetroLoader,
  SpinnerLoader,
  BarsLoader,
} from "@/components/ui/loaders";

// Switches
import { BasicSwitch, GlowSwitch, IconSwitch } from "@/components/ui/switches";

// Tables
import {
  BasicTable,
  StripedTable,
  AnimatedTable,
} from "@/components/ui/tables";

// Pricing
import { Pricing, PricingRetro3D } from "@/components/ui/pricing";

// Avatars
import { Avatar } from "@/components/ui/avatars";
```

### Layout Components

```jsx
// Navbars
import {
  GradientNavbar,
  NeonNavbar,
  PixelNavbar,
} from "@/components/layout/navbars";

// Footers
import {
  BasicFooter,
  NeonFooter,
  PixelFooter,
} from "@/components/layout/footers";
```

### Form Components

```jsx
// Sign In
import { Signin, SignInPage } from "@/components/forms/signin";

// Sign Up
import {
  SignupBasic,
  SignupMinimal,
  SignupSocial,
} from "@/components/forms/signup";
```

## 🪝 Using Custom Hooks

### useLocalStorage

```jsx
import { useLocalStorage } from "@/lib/hooks";

function MyComponent() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme (Current: {theme})
    </button>
  );
}
```

### useMediaQuery

```jsx
import { useIsMobile, useIsTablet, useIsDesktop } from "@/lib/hooks";

function ResponsiveComponent() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  return (
    <div>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}
```

## 🛠️ Using Utilities

### className Utility (cn)

```jsx
import { cn } from "@/lib/utils";

function MyComponent({ className, isActive }) {
  return (
    <div className={cn("base-class", isActive && "active-class", className)}>
      Content
    </div>
  );
}
```

### Format Utilities

```jsx
import { formatDate, formatCurrency, truncate } from "@/lib/utils";

function ProductCard({ date, price, description }) {
  return (
    <div>
      <p>{formatDate(date)}</p>
      <p>{formatCurrency(price)}</p>
      <p>{truncate(description, 100)}</p>
    </div>
  );
}
```

## 🎨 Customizing Theme

Edit `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        neon: "#39ff14",
        // Add your custom colors
        primary: "#ff6b9d",
        secondary: "#c06bf8",
      },
    },
  },
};
```

## 🗺️ Using Routes

### Access Route Constants

```jsx
import { ROUTES } from "@/config/constants";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.COMPONENTS}>Components</Link>
      <Link to={ROUTES.ABOUT}>About</Link>
    </nav>
  );
}
```

### Adding New Routes

1. Add route constant in `src/config/constants.js`:

```javascript
export const ROUTES = {
  // ... existing routes
  MY_NEW_PAGE: "/my-new-page",
};
```

2. Add route definition in `src/config/routes.jsx`:

```javascript
const MyNewPage = React.lazy(() =>
  import("@/features/showcase/pages/MyNewPage")
);

export const appRoutes = [
  // ... existing routes
  {
    path: ROUTES.MY_NEW_PAGE,
    element: MyNewPage,
    title: "My New Page",
  },
];
```

## 📁 Project Structure at a Glance

```
src/
├── components/        # Reusable components
│   ├── ui/           # UI components
│   ├── layout/       # Layout components
│   └── forms/        # Form components
├── features/         # Feature modules
│   ├── showcase/     # Component showcases
│   ├── docs/         # Documentation pages
│   └── templates/    # Page templates
├── lib/              # Utilities & hooks
│   ├── hooks/        # Custom hooks
│   └── utils/        # Utility functions
├── config/           # Configuration
│   ├── constants.js  # Constants & routes
│   └── routes.jsx    # Route definitions
└── styles/           # Global styles
```

## 🔥 Common Patterns

### Creating a New Component

```jsx
import React from "react";
import { cn } from "@/lib/utils";

/**
 * Component description
 * @param {Object} props - Component props
 */
export default function MyComponent({
  children,
  className,
  variant = "default",
  ...props
}) {
  return (
    <div
      className={cn(
        "base-classes",
        variant === "special" && "special-classes",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
```

### Creating a Showcase Page

```jsx
import React from "react";
import { MyComponent } from "@/components/ui/mycomponent";

export default function MyComponentShowcase() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">My Component</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Default</h2>
        <MyComponent>Example</MyComponent>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Special Variant</h2>
        <MyComponent variant="special">Example</MyComponent>
      </section>
    </div>
  );
}
```

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Building
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors
npm run format           # Format with Prettier
```

## 💡 Tips

1. **Use Path Aliases** - Import with `@/` prefix for cleaner code
2. **Check Showcase Pages** - See live examples of all components
3. **Use Barrel Exports** - Import multiple components from one location
4. **Leverage Hooks** - Use provided hooks for common functionality
5. **Follow Patterns** - Check existing components for examples

## 🆘 Need Help?

- 📖 Read [README.md](README.md) for detailed documentation
- 🏗️ Check [ARCHITECTURE.md](ARCHITECTURE.md) for design decisions
- 🤝 See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- 💬 Open a GitHub issue for questions

## 🎉 You're Ready!

Start exploring the components in your browser at `http://localhost:5173`

Happy coding! 🚀
