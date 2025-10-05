# 🔄 Migration Guide

If you're familiar with the old structure, this guide will help you quickly adapt to the new organization.

## 📍 File Location Changes

### Components

| Old Location                          | New Location                           |
| ------------------------------------- | -------------------------------------- |
| `src/components/Buttons/`             | `src/components/ui/buttons/`           |
| `src/components/Cards/`               | `src/components/ui/cards/`             |
| `src/components/Inputs/`              | `src/components/ui/inputs/`            |
| `src/components/Avtars/`              | `src/components/ui/avatars/`           |
| `src/components/Loaders/`             | `src/components/ui/loaders/`           |
| `src/components/Switch/`              | `src/components/ui/switches/`          |
| `src/components/Tables/`              | `src/components/ui/tables/`            |
| `src/components/Pricing/`             | `src/components/ui/pricing/`           |
| `src/components/Navbars/`             | `src/components/layout/navbars/`       |
| `src/components/Footers/`             | `src/components/layout/footers/`       |
| `src/components/SignIn/`              | `src/components/forms/signin/`         |
| `src/components/Signup/`              | `src/components/forms/signup/`         |
| `src/components/AppUI/Navbar.jsx`     | `src/components/layout/Navbar.jsx`     |
| `src/components/AppUI/Footer.jsx`     | `src/components/layout/Footer.jsx`     |
| `src/components/AppUI/ModeToggle.jsx` | `src/components/layout/ModeToggle.jsx` |
| `src/components/AppUI/Form.jsx`       | `src/components/forms/Form.jsx`        |

### Pages

| Old Location                             | New Location                                        |
| ---------------------------------------- | --------------------------------------------------- |
| `src/pages/Home.jsx`                     | `src/features/showcase/pages/Home.jsx`              |
| `src/pages/About.jsx`                    | `src/features/docs/pages/About.jsx`                 |
| `src/pages/Component.jsx`                | `src/features/showcase/pages/Component.jsx`         |
| `src/pages/ComponentShowcase.jsx`        | `src/features/showcase/pages/ComponentShowcase.jsx` |
| `src/pages/*Showcase.jsx`                | `src/features/showcase/pages/*Showcase.jsx`         |
| `src/pagesComponents/PageShowcase/`      | `src/features/showcase/pages/templates/`            |
| `src/components/AppUI/ContactUs.jsx`     | `src/features/docs/pages/ContactUs.jsx`             |
| `src/components/AppUI/PrivacyPolicy.jsx` | `src/features/docs/pages/PrivacyPolicy.jsx`         |
| `src/components/AppUI/Terms.jsx`         | `src/features/docs/pages/Terms.jsx`                 |

### Page Templates

| Old Location                         | New Location                              |
| ------------------------------------ | ----------------------------------------- |
| `src/pagesComponents/404Page/`       | `src/features/templates/error-pages/`     |
| `src/pagesComponents/AboutPage/`     | `src/features/templates/about-pages/`     |
| `src/pagesComponents/BlogPage/`      | `src/features/templates/blog-pages/`      |
| `src/pagesComponents/ContactPage/`   | `src/features/templates/contact-pages/`   |
| `src/pagesComponents/DashboardPage/` | `src/features/templates/dashboard/`       |
| `src/pagesComponents/EcommercePage/` | `src/features/templates/ecommerce-pages/` |
| `src/pagesComponents/HomePage/`      | `src/features/templates/home-pages/`      |
| `src/pagesComponents/ServicePage/`   | `src/features/templates/service-pages/`   |

### Styles

| Old Location    | New Location           |
| --------------- | ---------------------- |
| `src/App.css`   | `src/styles/App.css`   |
| `src/index.css` | `src/styles/index.css` |

## 🔄 Import Statement Updates

### Component Imports

**Old:**

```javascript
import PixelButton from "./components/Buttons/PixelButton";
import RetroButton from "../../../components/Buttons/RetroButton";
import BlogCard from "../../components/Cards/BlogCard";
```

**New:**

```javascript
import { PixelButton, RetroButton } from "@/components/ui/buttons";
import { BlogCard } from "@/components/ui/cards";
```

### Page Imports

**Old:**

```javascript
import Home from "./pages/Home";
import About from "./pages/About";
```

**New:**

```javascript
import Home from "@/features/showcase/pages/Home";
import About from "@/features/docs/pages/About";
// Or use the routes config
import { appRoutes } from "@/config/routes";
```

### Style Imports

**Old:**

```javascript
import "./App.css";
import "./index.css";
```

**New:**

```javascript
import "@/styles/App.css";
import "@/styles/index.css";
```

## 🆕 New Features to Use

### 1. Path Aliases

Replace all relative imports with path aliases:

**Before:**

```javascript
import Component from "../../../components/Buttons/PixelButton";
```

**After:**

```javascript
import { PixelButton } from "@/components/ui/buttons";
```

### 2. Constants

Use centralized constants instead of hardcoded strings:

**Before:**

```javascript
<Link to="/components/buttons">Buttons</Link>
```

**After:**

```javascript
import { ROUTES } from "@/config/constants";
<Link to={ROUTES.COMPONENTS_BUTTONS}>Buttons</Link>;
```

### 3. Custom Hooks

Use provided hooks for common functionality:

```javascript
import { useLocalStorage, useMediaQuery } from "@/lib/hooks";

// Persistent state
const [theme, setTheme] = useLocalStorage("theme", "light");

// Responsive detection
const isMobile = useMediaQuery("(max-width: 768px)");
```

### 4. Utility Functions

Use utility functions for common operations:

```javascript
import { cn, formatDate, truncate } from '@/lib/utils';

// Conditional classes
className={cn('base', isActive && 'active')}

// Formatting
<p>{formatDate(new Date())}</p>
<p>{truncate(longText, 100)}</p>
```

### 5. Centralized Routes

Use the route configuration:

**Before:**

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  {/* ... many more routes */}
</Routes>
```

**After:**

```jsx
import { appRoutes } from "@/config/routes";

<Routes>
  {appRoutes.map((route) => (
    <Route key={route.path} path={route.path} element={<route.element />} />
  ))}
</Routes>;
```

## ✅ Quick Checklist

If you're updating existing code:

- [ ] Replace relative imports with path aliases (`@/`)
- [ ] Update component imports to use barrel exports
- [ ] Use `ROUTES` constants instead of hardcoded paths
- [ ] Move custom utilities to `src/lib/utils/`
- [ ] Move custom hooks to `src/lib/hooks/`
- [ ] Update style imports to `@/styles/`
- [ ] Use centralized route configuration
- [ ] Remove relative path chains (`../../../`)

## 🔍 Finding Files Quickly

### VS Code Tips

1. **Quick Open** (`Ctrl+P` or `Cmd+P`)

   - Type `@/` to see path alias suggestions
   - Type filename to find anywhere in project

2. **Go to Definition** (`F12`)

   - Works perfectly with path aliases
   - Jump to component definitions

3. **Find All References** (`Shift+F12`)
   - See where components are used
   - Track dependencies

### File Search Patterns

- **UI Components**: `src/components/ui/`
- **Layout**: `src/components/layout/`
- **Forms**: `src/components/forms/`
- **Showcase Pages**: `src/features/showcase/pages/`
- **Documentation**: `src/features/docs/pages/`
- **Templates**: `src/features/templates/`
- **Hooks**: `src/lib/hooks/`
- **Utils**: `src/lib/utils/`
- **Config**: `src/config/`

## 🎯 Common Tasks

### Adding a New Component

1. Create file in appropriate directory:

   ```
   src/components/ui/buttons/MyButton.jsx
   ```

2. Export in category index:

   ```javascript
   // src/components/ui/buttons/index.js
   export { default as MyButton } from "./MyButton";
   ```

3. Use with path alias:
   ```javascript
   import { MyButton } from "@/components/ui/buttons";
   ```

### Adding a New Page

1. Create in features directory:

   ```
   src/features/showcase/pages/MyPage.jsx
   ```

2. Add route in `src/config/routes.jsx`:

   ```javascript
   const MyPage = React.lazy(() => import("@/features/showcase/pages/MyPage"));

   export const appRoutes = [
     // ... existing routes
     {
       path: "/my-page",
       element: MyPage,
       title: "My Page",
     },
   ];
   ```

### Adding a New Constant

Add to `src/config/constants.js`:

```javascript
export const MY_CONSTANT = "value";
```

Use it:

```javascript
import { MY_CONSTANT } from "@/config/constants";
```

## 💡 Pro Tips

1. **Use Barrel Exports**: Import multiple items from one path

   ```javascript
   import { Button1, Button2, Button3 } from "@/components/ui/buttons";
   ```

2. **Leverage Path Aliases**: Always use `@/` for imports

   ```javascript
   import { Component } from "@/components/ui/buttons";
   ```

3. **Check Index Files**: Each category has an index - use it!

4. **Use Constants**: Never hardcode routes or values

5. **Follow Patterns**: Check existing files for examples

## 🆘 Troubleshooting

### Import Errors

**Problem**: Module not found

```
Cannot find module '@/components/ui/buttons'
```

**Solution**: Restart your dev server after path alias changes

```bash
# Stop server (Ctrl+C)
npm run dev
```

### VSCode Intellisense Not Working

**Solution**: Reload VSCode window

- Open Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
- Type "Reload Window"
- Press Enter

### Linting Errors

**Solution**: Run lint fix

```bash
npm run lint:fix
```

## 📚 Additional Resources

- [QUICK_START.md](QUICK_START.md) - Quick start guide
- [ARCHITECTURE.md](ARCHITECTURE.md) - Architecture deep-dive
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- [README.md](README.md) - Full documentation

---

**Welcome to the new structure!** 🎉

The changes may seem significant, but the new organization will make development much smoother and more efficient.
