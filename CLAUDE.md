# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website showcasing Caleb Bae's work as a software engineer, photographer, and videographer. The site features an interactive parallax floating gallery with animated cards that expand to show detailed content sections (Resume, About, Projects, Experience).

## Tech Stack

- **Framework**: Next.js 15.4.5 (App Router)
- **React**: 19.1.0
- **TypeScript**: 5.x with strict mode enabled
- **Styling**: Tailwind CSS 4.x with custom theme using OKLCH color space
- **Animation**: Motion (Framer Motion fork) v12.23.11
- **UI Components**: Custom components inspired by shadcn/ui (New York style)

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### App Structure (Next.js App Router)

- `app/page.tsx` - Main entry point that renders the Home component wrapped in AuroraBackground
- `app/layout.tsx` - Root layout with Geist fonts and metadata configuration
- `app/globals.css` - Global styles with Tailwind imports, CSS variables, and aurora animation keyframes

### Component Organization

**Top-level Components** (`/components`):
- `Home.tsx` - Hero section with animated name/titles using GooeyText morphing effect and social links
- `MotionCards.tsx` - Core interactive gallery system with parallax floating images
- `About.tsx`, `Experience.tsx`, `Projects.tsx`, `Resume.tsx` - Content sections displayed in expanded modal views

**UI Components** (`/components/ui`):
- `aurora-background.tsx` - Animated gradient background effect
- `gooey-text-morphing.tsx` - Text morphing animation for hero section
- `parallax-floating.tsx` - Parallax effect system using context API for element registration

### Key Patterns

**MotionCards Interaction Pattern**:
- Images float with parallax depth using `FloatingElement` components
- Clicking portfolio images (resume, about, experience, projects) expands to show detailed content
- On desktop (≥768px): Split view with enlarged image on left, white content panel slides from right
- On mobile (<768px): Toggle between cover image and full-screen content panel
- Photography images expand to show with captions but no detail panel
- Escape key and backdrop clicks close expanded views

**Custom Hooks**:
- `use-mouse-position-ref.ts` - Tracks mouse/touch position relative to container for parallax effects

**Styling Approach**:
- Uses `cn()` utility (from `lib/utils.ts`) combining clsx and tailwind-merge
- Custom OKLCH color system defined in globals.css with CSS variables
- Responsive design using clamp() for fluid sizing: `w-[clamp(min,preferred,max)]`
- Motion animations configured with Framer Motion variants

### Path Aliases

All imports use `@/*` alias pointing to the root directory:
```typescript
import { Home } from "@/components/Home"
import { cn } from "@/lib/utils"
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref"
```

### Assets

Public directory contains:
- Portfolio cover images: `RESUME.webp`, `ABOUTME.webp`, `EXPERIENCE.webp`, `PROJECTS.webp`
- Photography gallery images: `z5_11zon.webp` through `z11_11zon.webp`
- Project thumbnails: `aquasentry.webp`, `ebby.webp`, `fluently.webp`, `hackportal.webp`, `resa.webp`
- Icons directory with social media SVGs
- PDF resume: `resume-26.pdf`

## Important Notes

- All components in `/components` are client components using "use client" directive
- The site is a single-page application with no routing beyond the main page
- Custom fonts (Geist Sans and Geist Mono) are loaded via next/font/google
- The parallax system uses React context and refs to manage element positions frame-by-frame
- Image captions are defined in `MotionCards.tsx` in the `captions` object
- Tailwind config is minimal; most theming is done via CSS variables in globals.css
