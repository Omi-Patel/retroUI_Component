# Variant Layout Consistency Guide

## Overview

All component showcase pages now follow a consistent, professional variant layout pattern inspired by industry-leading documentation sites.

## ✅ Completed Pages

### Updated with Consistent Layout:

1. **Component.jsx** (Overview) - ✅
2. **ComponentShowcase.jsx** (Buttons) - ✅
3. **CardShowcase.jsx** - ✅
4. **InputShowcase.jsx** - ✅
5. **LoaderShowcase.jsx** - ✅
6. **AvtarShowcase.jsx** - ✅
7. **SwitchShowcase.jsx** - ✅

### Remaining (Following Same Pattern):

8. **TableShowcase.jsx** - 📋 Ready to update
9. **PricingShowcase.jsx** - 📋 Ready to update
10. **NavbarShowcase.jsx** - 📋 Ready to update
11. **FooterShowcase.jsx** - 📋 Ready to update
12. **SigninShowcase.jsx** - 📋 Ready to update
13. **SignupShowcase.jsx** - 📋 Ready to update

## Standard Variant Layout Pattern

### 1. Page Structure

```jsx
<DocsContent
  title="Component Name"
  description="Description"
  badge="UI Components"
>
  {/* Installation Info */}
  <InfoBox type="info" title="Installation">
    ...
  </InfoBox>

  {/* Variant Selector */}
  <DocsSection title="Available Variants" id="variants">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {/* Variant buttons */}
    </div>
  </DocsSection>

  {/* Preview/Code Tabs */}
  <DocsSection id="preview">
    <AnimatePresence mode="wait">
      {/* Component info + tabs + content */}
    </AnimatePresence>
  </DocsSection>

  {/* Usage Documentation */}
  <DocsSection title="Usage" id="usage">
    ...
  </DocsSection>

  {/* Features Grid */}
  <DocsSection title="Features" id="features">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Feature cards */}
    </div>
  </DocsSection>
</DocsContent>
```

### 2. Variant Selector Design

#### Button Grid Layout:

```jsx
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
  {Object.keys(components).map((key) => (
    <button
      key={key}
      onClick={() => setActiveComponent(key)}
      className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
        activeComponent === key
          ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
          : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300"
      }`}
    >
      {components[key].title}
    </button>
  ))}
</div>
```

#### Key Features:

- ✅ Responsive grid (2 cols mobile, 3 tablet, 5 desktop)
- ✅ Active state with teal color
- ✅ Hover states on non-active buttons
- ✅ Consistent padding and spacing
- ✅ Dark mode support

### 3. Component Data Structure

```javascript
const components = {
  ComponentName: {
    component: ComponentName, // React component
    title: "Display Name", // For UI display
    description: "Brief description", // One-liner
    code: `/* Full code string */`, // Formatted code
  },
  // ... more variants
};
```

### 4. Tab Navigation

#### Preview/Code Tabs:

```jsx
<div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
  <button onClick={() => setActiveTab("preview")}>
    <div className="flex items-center gap-2">
      <Eye className="w-4 h-4" />
      Preview
    </div>
    {activeTab === "preview" && (
      <motion.div
        layoutId="activeTab"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
      />
    )}
  </button>
  {/* Code tab... */}
</div>
```

#### Features:

- ✅ Animated underline with Framer Motion
- ✅ Icon + text labels
- ✅ Active state indication
- ✅ Smooth transitions

### 5. Code Block Presentation

#### Window Controls + Code:

```jsx
<div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
  {/* macOS-style window controls */}
  <div className="bg-gray-800 dark:bg-gray-900 px-4 py-3 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <span className="text-xs text-gray-400 ml-2">{activeComponent}.jsx</span>
    </div>

    {/* Copy button */}
    <button onClick={copyToClipboard}>
      {copySuccess ? <Check /> : <Copy />}
      {copySuccess ? "Copied!" : "Copy Code"}
    </button>
  </div>

  {/* Syntax highlighted code */}
  <SyntaxHighlighter
    language="jsx"
    style={atomDark}
    showLineNumbers={true}
    customStyle={{ margin: 0, borderRadius: 0 }}
  >
    {code}
  </SyntaxHighlighter>
</div>
```

### 6. Component Preview Box

```jsx
<ComponentPreview>
  <activeData.component />
</ComponentPreview>
```

#### Styling:

- ✅ Centered content
- ✅ Gradient background
- ✅ Min height for consistency
- ✅ Rounded borders
- ✅ Dark mode support

### 7. Info Boxes

#### Types Available:

```jsx
<InfoBox type="info" title="Installation">...</InfoBox>
<InfoBox type="success" title="Pro Tip">...</InfoBox>
<InfoBox type="warning" title="Note">...</InfoBox>
<InfoBox type="error" title="Warning">...</InfoBox>
```

#### Colors:

- **Info**: Blue (💡)
- **Success**: Green (✅)
- **Warning**: Yellow (⚠️)
- **Error**: Red (❌)

### 8. Features Grid

```jsx
<DocsSection title="Features" id="features">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {features.map((feature) => (
      <div className="flex gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
        <div className="flex-shrink-0">
          <feature.icon className="w-6 h-6 text-teal-500" />
        </div>
        <div>
          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
            {feature.title}
          </h5>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {feature.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</DocsSection>
```

## Design Consistency Rules

### Colors:

- **Primary**: Teal/Cyan (`teal-500`, `cyan-500`)
- **Active State**: `teal-50` (light), `teal-900/20` (dark)
- **Borders**: `gray-200` (light), `gray-800` (dark)
- **Text**: `gray-900` (light), `gray-100` (dark)

### Spacing:

- **Grid Gap**: `gap-3` for variant buttons
- **Section Margin**: `mb-8` or `mb-12`
- **Card Padding**: `p-4` or `p-6`
- **Page Padding**: `p-6 sm:p-8 lg:p-12`

### Typography:

- **Page Title**: `text-3xl sm:text-4xl lg:text-5xl font-bold`
- **Section Title**: `text-2xl font-bold`
- **Subsection**: `text-lg font-semibold`
- **Body Text**: `text-base`
- **Small Text**: `text-sm`
- **Code**: `text-xs font-mono`

### Animations:

- **Page Entry**: Fade in + slide up (20px)
- **Tab Switch**: Animated underline with `layoutId`
- **Variant Switch**: AnimatePresence with fade
- **Button Hover**: Scale + color transitions
- **Duration**: 200-300ms standard

## Implementation Checklist

When updating a showcase page, ensure:

- [ ] Uses `DocsContent` wrapper
- [ ] Has badge, title, and description
- [ ] Includes installation InfoBox
- [ ] Has consistent variant selector grid
- [ ] Implements Preview/Code tabs
- [ ] Shows component info (title + description)
- [ ] Uses ComponentPreview for demos
- [ ] Has proper code block with window controls
- [ ] Includes copy-to-clipboard functionality
- [ ] Has Usage section with examples
- [ ] Has Features grid with icons
- [ ] Uses consistent colors (teal/cyan)
- [ ] Supports dark mode throughout
- [ ] Has proper spacing and typography
- [ ] Includes AnimatePresence for transitions
- [ ] Mobile responsive (grid breakpoints)

## Benefits of This Pattern

### For Users:

✅ **Consistent navigation** - Same layout across all pages
✅ **Easy comparison** - Quick variant switching
✅ **Copy-paste ready** - One-click code copying
✅ **Clear documentation** - Organized sections
✅ **Visual feedback** - Active states and animations

### For Developers:

✅ **Maintainable** - Single pattern to follow
✅ **Scalable** - Easy to add new variants
✅ **Reusable** - Component-based structure
✅ **Type-safe** - Consistent data structure
✅ **Professional** - Industry-standard design

## Next Steps

### To Update Remaining Pages:

1. Import layout components:

```jsx
import {
  DocsContent,
  DocsSection,
  ComponentPreview,
  InfoBox,
} from "@/components/layout";
```

2. Structure component data:

```jsx
const components = {
  Name: { component, title, description, code },
  // ...
};
```

3. Implement state management:

```jsx
const [activeComponent, setActiveComponent] = useState("First");
const [activeTab, setActiveTab] = useState("preview");
const [copySuccess, setCopySuccess] = useState(false);
```

4. Follow the standard layout pattern
5. Test responsiveness and dark mode
6. Verify animations work smoothly

## Summary

✅ **7 pages updated** with consistent variant layouts
📋 **6 pages remaining** (ready to follow pattern)
🎨 **Professional design** matching industry standards
⚡ **Smooth animations** with Framer Motion
🌙 **Full dark mode** support
📱 **Fully responsive** at all breakpoints
♿ **Accessible** with proper ARIA labels
📋 **Copy-ready code** with one click

---

**Last Updated:** October 18, 2025  
**Pattern Version:** 1.0  
**Status:** ✅ Active
