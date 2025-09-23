# Overview

This is a modern portfolio website built for a senior frontend developer named Jorris. The application showcases professional skills, experience, projects, and provides contact functionality. Built with React, TypeScript, and modern web technologies, it features a dark theme with professional blue gradients, responsive design, and smooth animations throughout.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: React Router DOM for client-side navigation
- **Styling**: Tailwind CSS with custom design system and CSS variables for theming
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **State Management**: React Query for server state and built-in React hooks for local state

## Design System
- **Theme**: Dark portfolio theme with professional corporate blue primary colors
- **Typography**: Inter and Plus Jakarta Sans fonts for professional appearance
- **Color Palette**: HSL-based color system with CSS custom properties for easy theme switching
- **Animations**: Custom CSS animations with intersection observer for scroll-triggered effects
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

## Component Architecture
- **Layout Components**: Shared Navigation, Footer, and Layout wrapper
- **Page Components**: Dedicated pages for Home, About, Portfolio, Articles, Contact, and Hire Me
- **UI Components**: Reusable shadcn/ui components with consistent styling
- **Animation Components**: Custom AnimatedElement wrapper for scroll animations
- **Utility Hooks**: Custom hooks for typewriter effects, scroll animations, and mobile detection

## Development Tools
- **Linting**: ESLint with TypeScript support and React-specific rules
- **Code Quality**: Relaxed TypeScript configuration for rapid development
- **Dev Server**: Vite dev server with HMR on port 5000
- **Build Process**: Vite build with TypeScript compilation and asset optimization

## Performance Optimizations
- **Code Splitting**: React.lazy for route-based code splitting
- **Image Optimization**: Placeholder images with proper alt text and responsive sizing
- **Animation Performance**: Hardware-accelerated CSS animations with reduced motion support
- **Bundle Optimization**: Tree shaking and modern JavaScript output

# External Dependencies

## UI and Styling
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives for complex components
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx**: Utility for constructing className strings conditionally
- **lucide-react**: Icon library with consistent SVG icons

## Animations and Interactions
- **embla-carousel-react**: Touch-friendly carousel component
- **next-themes**: Theme switching capability for light/dark modes

## Data Management
- **@tanstack/react-query**: Server state management with caching and synchronization
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for form schemas

## Date and Time
- **date-fns**: Modern JavaScript date utility library
- **react-day-picker**: Flexible date picker component

## Development and Build
- **@vitejs/plugin-react-swc**: Fast React refresh with SWC compiler
- **typescript-eslint**: TypeScript-aware linting rules
- **autoprefixer**: CSS vendor prefix automation
- **lovable-tagger**: Development-only component tagging for the Lovable platform

## Accessibility and UX
- **cmdk**: Command palette component for keyboard navigation
- **input-otp**: Accessible OTP input component
- **sonner**: Toast notification system

The application uses a modern React architecture with TypeScript for type safety, Tailwind CSS for styling, and a comprehensive set of UI components for a professional portfolio experience.