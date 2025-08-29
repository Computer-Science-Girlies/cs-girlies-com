# Routing Documentation

## Route Structure

The application uses React Router DOM 6.26 for client-side routing. All routes are defined in `src/App.tsx`.

### Navigation Components

1. **Navbar**
   - Main navigation component
   - Mobile-responsive menu
   - Logo and links

2. **Footer**
   - Present on all pages
   - Social media links
   - Secondary navigation

### Navigation Implementation

- Uses `Link` from react-router-dom
- Client-side navigation only
- 404 handling with NotFound component

### Route Access

All routes are:
- Publicly accessible
- Client-side rendered
- No authentication required
- No route guards implemented