# Navbar Component

`Navbar.tsx` is the main navigation component used across all pages.

## Usage

```tsx
import Navbar from '@/components/Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      {/* Page content */}
    </>
  );
}
```

## Features

- Responsive design with mobile menu
- Logo placement
- Navigation links
- Mobile hamburger menu
- Smooth transitions

## Implementation

### State Management
```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);
const isMobile = useIsMobile();
```

### Navigation Links
- Home
- Donate
- Resources
- Our Story
- Hackathon

### Mobile Menu
- Hamburger button
- Animated dropdown
- Touch-friendly targets

## Styling

### Desktop
```tsx
<div className="flex items-center space-x-6">
  <Link to="/" className="font-bold text-csgirlies-pink">
    HOME
  </Link>
  {/* Other links */}
</div>
```

### Mobile
```tsx
<div className="absolute top-full left-0 right-0 bg-black">
  <nav className="cs-container flex flex-col space-y-4">
    {/* Mobile menu items */}
  </nav>
</div>
```

## Accessibility

- ARIA labels
- Skip navigation link
- Keyboard navigation
- Focus management
- Color contrast

## Best Practices

1. Keep navigation simple
2. Consistent active states
3. Clear current page indicator
4. Smooth animations
5. Proper spacing for touch targets
