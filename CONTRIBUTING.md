# Contributing to RetroUI Component Library

Thank you for your interest in contributing to RetroUI! This document provides guidelines and instructions for contributing.

## 🎯 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and encourage diverse contributions
- Focus on constructive feedback
- Maintain professional communication

## 🚀 Getting Started

### 1. Fork and Clone

```bash
# Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/retroUI_Component.git
cd retroUI_Component

# Add upstream remote
git remote add upstream https://github.com/Omi-Patel/retroUI_Component.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

## 📝 Development Guidelines

### Project Structure

Follow the established folder structure:

```
src/
├── components/     # Reusable UI components
├── features/       # Feature-based modules
├── lib/           # Utilities and hooks
├── config/        # Configuration files
└── styles/        # Global styles
```

### Naming Conventions

- **Components**: PascalCase (e.g., `PixelButton.jsx`)
- **Files**: camelCase for utilities, PascalCase for components
- **Variables**: camelCase (e.g., `const userName`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `const API_URL`)

### Code Style

- Use functional components with hooks
- Prefer arrow functions
- Use destructuring when appropriate
- Add JSDoc comments for functions
- Keep components small and focused
- Use path aliases (@/components, @/lib, etc.)

### Example Component

```jsx
import React from "react";
import { cn } from "@/lib/utils";

/**
 * A retro-styled button component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} props.onClick - Click handler
 * @param {string} props.variant - Button variant
 */
export default function RetroButton({
  children,
  onClick,
  variant = "primary",
  className,
  ...props
}) {
  return (
    <button
      className={cn("retro-button", `retro-button--${variant}`, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Adding New Components

1. Create component file in appropriate directory
2. Export from directory's `index.js`
3. Add showcase page if applicable
4. Update documentation

Example:

```bash
# 1. Create component
src/components/ui/buttons/MyNewButton.jsx

# 2. Export in index
src/components/ui/buttons/index.js

# 3. Create showcase (optional)
src/features/showcase/pages/MyNewButtonShowcase.jsx
```

## 🧪 Testing

- Test your changes in the browser
- Check responsive design (mobile, tablet, desktop)
- Verify dark mode compatibility
- Test in different browsers

## 📤 Submitting Changes

### Commit Messages

Follow conventional commits format:

```
feat: add new gradient button variant
fix: correct navbar responsive layout
docs: update installation instructions
style: format code with prettier
refactor: reorganize button components
```

### Pull Request Process

1. **Update your fork**

```bash
git fetch upstream
git rebase upstream/develop
```

2. **Push your changes**

```bash
git push origin feature/your-feature-name
```

3. **Create Pull Request**

- Go to GitHub and create a PR
- Use a clear, descriptive title
- Describe what changes you made and why
- Reference any related issues

### PR Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Refactoring
- [ ] Performance improvement

## Screenshots (if applicable)

Add screenshots for UI changes

## Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] No console errors or warnings
- [ ] Responsive design tested
- [ ] Dark mode tested (if applicable)
```

## 🐛 Reporting Bugs

### Before Submitting

- Check existing issues
- Verify it's reproducible
- Test in latest version

### Bug Report Template

```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce:

1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen

**Screenshots**
If applicable

**Environment:**

- Browser: [e.g. Chrome 120]
- OS: [e.g. Windows 11]
- Version: [e.g. 1.0.0]
```

## 💡 Feature Requests

We welcome feature suggestions! Please:

1. Check if it already exists in issues
2. Describe the feature clearly
3. Explain the use case
4. Provide examples if possible

## 📚 Documentation

- Update README.md for major changes
- Add JSDoc comments to functions
- Update CHANGELOG.md
- Create examples for new components

## ❓ Questions?

- Open a discussion on GitHub
- Check existing documentation
- Review closed issues

## 🎉 Recognition

Contributors will be:

- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Part of our community

Thank you for contributing to RetroUI! 🚀
