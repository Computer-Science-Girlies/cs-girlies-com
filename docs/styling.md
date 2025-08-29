# Styling Guide

## Design System

The project uses Tailwind CSS 3.4 with shadcn/ui components and custom configurations.

### Core Libraries

- **Tailwind CSS**: Base styling system
- **class-variance-authority**: Component style variants
- **tailwind-merge**: Merge utility classes
- **tailwindcss-animate**: Animation utilities
- **@tailwindcss/typography**: Typography plugin

### Color Palette

Colors defined in `tailwind.config.ts`

### CSS Structure

1. **Global Styles**
   - `index.css`: Base styles and Tailwind directives
   - `App.css`: App-specific global styles

2. **Component Styles**
   - Inline Tailwind classes
   - shadcn/ui component styles
   - No CSS modules currently in use

3. **Utility Functions**
   - `lib/utils.ts`: cn() function for class merging
   - Tailwind plugin configurations

### Responsive Design

Current breakpoints in use:
```ts
screens: {
  'md': '768px',
  'lg': '1024px',
  '2xl': '1400px'
}
```

Common patterns:
- Default mobile-first styles
- `md:` prefix for tablet/small desktop
- `lg:` prefix for larger screens

### UI Components

shadcn/ui components in `src/components/ui/`

### Custom Classes

Commonly used custom utilities:
- `cs-container`: Main content container
- `cs-button`: Base button styles
- `custom-scrollbar`: Styled scrollbars
- `animate-fade-in`: Custom animation

### Theme Configuration

Current configuration files:
- `tailwind.config.ts`: Core theme settings
- `components.json`: shadcn/ui configuration
