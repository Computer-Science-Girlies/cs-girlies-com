# Layout Components

Core layout components used throughout the application.

## Navbar

**File**: `src/components/Navbar.tsx`

Primary navigation component present on all pages.

**Features**:
- Responsive mobile/desktop layouts
- Mobile hamburger menu
- Logo centered between nav items
- Smooth hover transitions

**Props**: None (self-contained)

## Footer

**File**: `src/components/Footer.tsx`

Global footer component with links and social media.

**Props**:
```ts
className?: string  // Additional CSS classes
```

**Features**:
- Social media links
- Navigation links
- Discord community link
- Responsive layout

## Window

**File**: `src/components/Window.tsx`

Retro-style window container component.

**Props**:
```ts
title: string       // Window title
className?: string  // Additional CSS classes
children: ReactNode // Window content
```

**Features**:
- Retro window styling
- Title bar with close button
- Custom scrollbar
- Optional className for variants
