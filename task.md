# Project Roadmap: Fixify Platform

## Phase 1: Foundation & Design System
- [x] **Design System Setup** <!-- id: 1 -->
    - [x] Update `globals.css` with requested Color Palette (Charcoal #1A1A1D, Soft Gray #F7F7F8, Blue #2B7FFF).
    - [x] Global Text Color Update (Charcoal -> Rich Black #00171f)
    - [x] Global Brand Color Update (Blue -> Cyan #00a8e8)
    - [x] Styling Refinement (Rounded corners, Shadows).
- [x] **Site Map Implementation** (Create Route Skeletons) <!-- id: 2 -->
    - `/login` & `/signup`
    - `/book` (Booking Flow)
    - `/track-repair` (Tracking)
    - `/services` (Categories)
    - `/dashboard` (User Profile)
    - `/support` (Help Center)

## Phase 2: Core User Flows
- [x] **Authentication** <!-- id: 3 -->
    - [x] Login Page UI
    - [x] Signup Page UI
- [x] **Booking System** <!-- id: 4 -->
    - [x] Address Input Step
    - [x] Date/Time Selection
    - [x] Item Upload & Pricing
- [x] **Tracking System** <!-- id: 5 -->
    - [x] Progress Bar UI
    - [x] Status Updates

## Phase 3: Content & Dashboards
- [x] **Service Categories** <!-- id: 6 -->
    - [x] Category Listing Page
    - [x] Detail Pages (Implemented as generic listing for now)

## Phase 4: Polish & Interact
- [x] **Animations** (Framer Motion transitions) <!-- id: 9 -->
    - [x] Add Global Page Transitions (`template.tsx`)
- [x] **Navigation & Links** <!-- id: 10 -->
    - [x] Connect Home Page CTAs to `/book` and `/services`
- [x] **Final Verification** <!-- id: 11 -->
    - [x] Full User Journey Walkthrough

## Phase 5: Content Alignment
- [x] **Navigation Overhaul** (`header.tsx`) <!-- id: 12 -->
    - [x] Update Logo & Tooltip
    - [x] **Fix "Services" Link** <!-- id: 24 -->
        - [x] Change dropdown to direct link (`/services`)
    - [x] **Fix "Support" Link** <!-- id: 25 -->
        - [x] Change dropdown to direct link (`/support/contact`)
    - [x] Redesign: VEED Style (Matte Black Pill, 50px Rounded, Border Shine)
    - [x] Interactions: Focus Mode (Page Blur) & Cursor Spotlight
    - [x] **Star Border Animation** <!-- id: 26 -->
        - [x] Implement continuous Star Border animation (White, 6s loop)
        - [x] Refine Star Border thickness to 1px
    - [x] **CTA Button Refinement** <!-- id: 27 -->
        - [x] Update colors: Normal (`#00a8e8`), Hover (`#007ea7`)
        - [x] **Hover Border Gradient** <!-- id: 29 -->
            - [x] Create `hover-border-gradient.tsx`
            - [x] Apply to "Sign Up" button
            - [x] Apply to "Book a Service" button
    - [x] **Scroll Theme Adaptation** <!-- id: 30 -->
        - [x] Switch Navbar to Light Mode (Black Text) after Hero section
    - [x] **Animated Background Hover** <!-- id: 31 -->
        - [x] Apply `AnimatedBackground` to Navbar Links
    - [x] **Enhance Cursor Spotlight** <!-- id: 28 -->
        - [x] Increase opacity and localize gradient for better visibility
- [x] **New Content Pages** <!-- id: 13 -->
    - [x] `/how-it-works` (Steps & Trust section)
    - [x] `/pricing` (Transparent pricing sections)
- [x] **Copy Refinements** <!-- id: 14 -->
    - [x] `/login` & `/signup` headers
    - [x] `/track-repair` steps alignment

## Phase 6: Missing Pages Implementation
- [x] **Service Details** (`/services/[category]`) <!-- id: 15 -->
    - [x] Dynamic page handling Electronics, Appliances, etc.
- [x] **Support Pages** <!-- id: 16 -->
    - [x] `/support/help-center`
    - [x] `/support/faqs`
    - [x] `/support/contact`

## Phase 7: Maintenance & Bug Fixes
- [x] **Fix Reported Website Error** <!-- id: 18 -->
    - [x] Wrap `useSearchParams` usage in Suspense
    - [x] Fix Case Sensitive Import Error (`@/components/ui/input`)
- [x] **Fix Nav Blur Issue** <!-- id: 19 -->
    - [x] Reset `isNavHovered` on pathname change
- [x] **Refactor Navigation Links** <!-- id: 20 -->
    - [x] Remove `legacyBehavior` usage
    - [x] Implement `asChild` pattern for Radix + Next.js Link
- [x] **Resolve Website "Not Working"** <!-- id: 21 -->
    - [x] Restarted Development Server
    - [x] Verified Availability via Browser Screenshot
- [x] **Announcement Integration** <!-- id: 22 -->
    - [x] Fix Hydration Mismatch (`layout.tsx`)
    - [x] Create `announcement.tsx`
    - [x] Integrate into `Hero.tsx`
    - [x] Redesign Announcement (Dark/Glass Theme)
- [x] **Style Adjustments**
    - [x] Set Navbar background to 30% opacity (Glass effect)
    - [x] Sync Navbar & Page Numbers to use `#00a8e8` (Cyan)
    - [x] Separate Button Color (#007ea7) from Text Color
    - [x] Set Navbar Hover Colors to White

## Phase 8: Deployment & Handoff
- [x] **GitHub Repository Setup** <!-- id: 23 -->
    - [x] Install Git & GitHub CLI
    - [x] Authenticate
    - [x] Codebase Handoff (Pushed to GitHub)
    - [x] Make Repository Public

## Phase 9: Interactivity Enhancements
- [x] **Toast Notifications** <!-- id: 32 -->
    - [x] Integrate `sonner` library
    - [x] Add `<Toaster />` to Layout
    - [x] Add Toast Triggers to:
        - [x] Header Links (Services, Support, Pricing, etc.)
        - [x] Header Buttons (Login, Sign Up - *Sign Up verified*)
        - [x] Hero Buttons (Book, View Services)
        - [x] Footer Links (Placeholders)
