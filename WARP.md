# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## About This Project

This is the official CS Girlies website - a React-based web application built with Vite, TypeScript, and styled with Tailwind CSS and shadcn/ui components. The site serves as the main hub for the Computer Science Girlies community, providing information about their mission, resources, hackathons, and ways to get involved.

## Development Commands

### Initial Setup
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Starts the Vite development server on port 8080 (configured in `vite.config.ts`).

### Build Commands
```bash
npm run build          # Production build
npm run build:dev      # Development build (useful for debugging)
npm run preview        # Preview production build locally
```

### Code Quality
```bash
npm run lint           # Run ESLint on the codebase
npm run format         # Format code with Prettier
npm run format:check   # Check if code is properly formatted
```

Note: There are no test scripts configured in this project currently.

## Code Architecture

### Project Structure
```
src/
├── components/
│   └── ui/            # shadcn/ui component library
├── pages/             # Main page components (routed views)
├── lib/              # Utility functions and constants
├── data/             # Static JSON data files
└── hooks/            # Custom React hooks
```

### Key Architecture Patterns

**React Router Setup**: The application uses `react-router-dom` with a straightforward route configuration in `App.tsx`. Main routes include:
- `/` - Homepage (Index)
- `/our-story` - About page
- `/resources` - Resource directory
- `/donate` - Donation page
- `/hackathon` - Hackathon information
- `/hackathon-resources` - Hackathon-specific resources
- `/hackathon-recap` - Hackathon recap page
- `/sponsorship` - Sponsorship information
- `/*` - 404 Not Found page

**UI Component System**: Built on shadcn/ui with Radix UI primitives and styled with Tailwind CSS. All UI components are in `src/components/ui/` and follow the shadcn/ui patterns.

**State Management**: Uses React Query (`@tanstack/react-query`) for server state management, with the QueryClient configured at the app root.

**Styling Approach**: 
- Tailwind CSS for utility-first styling
- Custom CS Girlies brand colors defined in `tailwind.config.ts` under the `csgirlies` color palette (`pink`, `pink-light`, `pink-dark`, `black`, `white`)
- Custom animations and keyframes for enhanced UX (blink, fade-in, slide-in, shimmer, marquee effects)
- Custom fonts: Righteous and Roboto Mono
- Responsive design patterns with container queries
- CSS custom properties for theming support

**Data Management**: Static data is stored in JSON files in `src/data/`:
- `quotes.json` - Inspirational quotes
- `wins.json` - Community success stories
- `resources.json` - Learning resources
- `hackathon-resources.json` - Hackathon-specific resources

**Utility Patterns**: 
- `src/lib/utils.ts` contains the standard `cn()` function for conditional class merging
- `src/lib/constants.ts` centralizes external links and social media URLs
- Path aliasing configured with `@` pointing to `src/` directory

### Development Environment Details

**Build Tool**: Vite with SWC for fast compilation and hot reloading
**TypeScript**: Relaxed TypeScript configuration (allows implicit any, unused parameters/locals, no strict null checks)
**Dev Server**: Configured to run on all interfaces (`::`) at port 8080
**Component Tagging**: Uses `lovable-tagger` in development mode for enhanced debugging
**Code Quality**: ESLint with React hooks and React refresh plugins, Prettier for formatting
**Package Manager**: Uses npm (package-lock.json present)


### Component Organization

**Page Components**: Located in `src/pages/` - these are the main routed views (Index, OurStory, Resources, etc.)
**Feature Components**: Located in `src/components/` - reusable components like HeroSection, Navbar, Footer, etc.
**UI Components**: Located in `src/components/ui/` - shadcn/ui component library with extensive Radix UI primitives
**Hooks**: Custom React hooks in `src/hooks/` (use-mobile, use-toast)

## Important Notes

- The project uses a custom brand color scheme defined in Tailwind config (CS Girlies pink variants)
- All UI components follow shadcn/ui conventions and should be imported from `@/components/ui/`
- The site is focused on community building and resource sharing for women in computer science
- Data files in `src/data/` should be updated when adding new resources or community content
- External links are centralized in `src/lib/constants.ts` for easy maintenance
- TypeScript configuration is intentionally relaxed for faster development
