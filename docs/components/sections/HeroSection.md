# Hero Section Component

`HeroSection.tsx` is the main landing section of the website.

## Usage

```tsx
import HeroSection from '@/components/HeroSection';

function HomePage() {
  return <HeroSection />;
}
```

## Features

- Full-width hero banner
- Animated text with scramble effect
- Call-to-action buttons
- Responsive design

## Props

This component doesn't accept any props as it's a self-contained landing section.

## Implementation Details

### Dependencies
- ScrambleText component for text animation
- Button component from UI library

### Styling
- Uses Tailwind CSS for responsive design
- Black background with pink accent colors
- Custom animations for text effects

### Performance
- Optimized images with proper sizing
- Lazy-loaded assets
- Minimized layout shifts

### Accessibility
- Proper heading structure
- ARIA labels
- Keyboard navigation support

## Example

```tsx
<section className="bg-black py-24 md:py-32">
  <div className="cs-container">
    <h1 className="text-4xl md:text-6xl font-bold text-csgirlies-pink">
      Welcome to CS Girlies
    </h1>
    {/* Other content */}
  </div>
</section>
```

## Notes

- Keep animations subtle to avoid distracting from content
- Ensure text remains readable at all viewport sizes
- Test performance on mobile devices
