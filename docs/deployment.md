# Deployment Guide

## Development Environment

### Prerequisites
- Node.js 18+
- Bun package manager

### Local Setup
```bash
# Clone repository
git clone https://github.com/Computer-Science-Girlies/cs-girlies-com.git

# Install dependencies
bun install

# Start development server
bun dev
```

## Build Configuration

### Vite Config
Current configuration in `vite.config.ts`

### Build Scripts
Available in `package.json`

## Vercel Deployment

### Configuration
Current `vercel.json`

### Deployment Process
1. Push to main branch
2. Vercel automatically:
   - Detects changes
   - Runs build
   - Updates production

## Build Process

### Development
```bash
# Start dev server
bun dev

# Server runs on:
http://localhost:8080
```

### Production
```bash
# Create production build
bun run build

# Preview build locally
bun preview
```