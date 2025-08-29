# Interactive Components

Components with user interaction or animation.

## CasinoCounter

**File**: `src/components/CasinoCounter.tsx`

**Props**:
```ts
end: number        // Target number
duration?: number  // Animation duration in ms
```
- Animated number counter
- Slot machine effect
- Configurable duration

## ScrambleText

**File**: `src/components/ScrambleText.tsx`

**Props**:
```ts
text: string     // Text to animate
delay?: number   // Delay before animation starts
```
- Text scramble animation effect
- Configurable start delay
- Terminal-style output

## TestimonialCarousel

**File**: `src/components/TestimonialCarousel.tsx`
- Member testimonials slider
- Uses Embla Carousel
- Navigation arrows
- Auto-advance

## WinsCarousel

**File**: `src/components/WinsCarousel.tsx`
- Community achievements slider
- Uses Embla Carousel
- Responsive design
- Auto-playing

## ResourceCard

**File**: `src/components/ResourceCard.tsx`

**Props**:
```ts
resource: {
  title: string
  description: string
  url: string
  author: string
}
```
- Resource information display
- External link handling
- Hover effects

## SocialMediaStats

**File**: `src/components/SocialMediaStats.tsx`
- Social media metrics display
- Animated counters
- Icon integration
