# Data Management

## Data Sources

### Static JSON Data
Located in `src/data/`

### Source Data
Located in `raw-data/`

## State Management

### Local Component State
The application primarily uses React's built-in state management:
- `useState` for component state
- Props for component communication
- No global state management currently implemented

### Current Hooks

1. `use-mobile.tsx`
```tsx
// Mobile detection hook
const isMobile = useIsMobile();
```

2. `use-toast.ts`
```tsx
// Toast notifications via Sonner
const { toast } = useToast();
```

## Data Loading

### Static Imports
```tsx
// Direct JSON imports
import resourcesData from '@/data/resources.json';
import hackathonResourcesData from '@/data/hackathon-resources.json';
```

### Constants
Global constants in `src/lib/constants.ts`

## Form Handling

Current form handling uses:
- React Hook Form for form state
- Zod for validation schemas
- Custom onChange handlers

## TypeScript Types

Types are maintained for:
- Component props
- JSON data structures
- Form data