# Architecture Overview

## Tech Stack

The website is built with:

- **Frontend Framework**: React 18.3 with TypeScript 5.5
- **Build Tool**: Vite 5.4
- **Routing**: React Router DOM 6.26
- **UI Components**: 
  - shadcn/ui (based on Radix UI components)
  - Sonner for toast notifications
  - Vaul for drawer components
  - Embla Carousel for carousels
  - Lucide React for icons
- **Form Handling**:
  - React Hook Form 7.53
  - Zod 3.23 for validation
- **Styling**: 
  - Tailwind CSS 3.4
  - class-variance-authority for component variants
  - tailwind-merge for className merging
  - tailwindcss-animate for animations
- **Data Management**: 
  - TanStack Query 5.56
  - date-fns for date manipulation
- **Package Manager**: Bun

## Project Structure

```
src/
├── components/     # React components
│   └── ui/        # shadcn/ui components
├── pages/         # Route pages (Index, Resources, etc.)
├── data/         # JSON data files
│   ├── hackathon-resources.json
│   ├── quotes.json
│   ├── resources.json
│   └── wins.json
├── hooks/        # Custom hooks
│   ├── use-mobile.tsx  # Mobile detection
│   └── use-toast.ts   # Toast notifications
├── lib/          # Utilities
│   ├── constants.ts    # App constants
│   └── utils.ts       # Helper functions
└── App.tsx       # Main app component

public/           # Static assets (images, icons)
raw-data/        # Source data files
```

## Pages and Routing

Main routes configured in `App.tsx`:
- `/` - Index/Home
- `/our-story` - About page
- `/resources` - Resource library
- `/donate` - Donation page
- `/hackathon` - Hackathon info
- `/hackathon-resources` - Hackathon resources
- `/sponsorship` - Sponsorship info

## Component Structure

### UI Components (shadcn/ui)
Located in `components/ui/`:
- Button, Card, Dialog
- Navigation menus
- Forms and inputs
- Layout components

### Page Components
Each page is composed of section components:
- HeroSection
- StatsSection
- WhatWeDoSection
- QuoteSection
- etc.

## State Management

Current state management is simple:
- **Local State**: React's useState for component-level state (e.g., active tabs, menu open states)
- **Static Data**: Imported JSON files from data/ directory
- **Constants**: Global constants in lib/constants.ts (e.g., social links, URLs)

## Styling System

The site uses Tailwind CSS with custom configuration:

- Base theme colors:
  - csgirlies-pink (brand color)
  - black (background)
  - white/gray (text)

- Responsive breakpoints:
  - Mobile: Default
  - md: 768px and up
  - lg: 1024px and up

- Custom utilities:
  - cs-container: Main container class
  - custom-scrollbar: Styled scrollbars

## Current Implementation

### Entry Point
- `main.tsx` renders the root App component using React 18's createRoot
- App wrapped with TanStack Query and React Router providers

### Component Features
- Toast notifications using Sonner
- Drawer components using Vaul
- Carousels powered by Embla Carousel
- Icons from Lucide React library
- Form handling with React Hook Form + Zod validation

### UI Structure
- Responsive Navbar with mobile menu
- Themed components using class-variance-authority
- Animation system using tailwindcss-animate
- Custom tooltips and modals via Radix UI primitives

### Data Flow
- Static JSON files for resources
- Local state with useState
- Form state management via React Hook Form
- Date formatting with date-fns

### Asset Management
- Public assets in /public
- Raw data files in /raw-data
- Icon components from Lucide React
- Custom fonts via Tailwind

### Build Configuration
- Vite 5.4 with SWC plugin
- PostCSS with autoprefixer
- TypeScript 5.5 compilation
- ESLint with TypeScript and React rules
- Development server on port 8080
