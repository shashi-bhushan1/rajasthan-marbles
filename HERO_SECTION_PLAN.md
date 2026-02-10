# Hero Section Carousel Implementation Plan

## Overview
Implement a full-screen hero section with an image carousel featuring 4 background images that automatically rotate. The hero section will cover the entire viewport including the header area, with navigation arrows for manual control and centered text overlay.

---

## 1. Component Structure

### 1.1 New Components to Create
- **`components/HeroSection.tsx`** - Main hero carousel component
  - Handles image carousel logic
  - Manages auto-play and manual navigation
  - Contains overlay text and CTA buttons

### 1.2 Component Hierarchy
```
app/
├── layout.tsx (Header will be positioned absolutely over hero)
├── page.tsx (Will contain HeroSection component)
└── components/
    ├── Header.tsx (Modified to be transparent/overlay on hero)
    └── HeroSection.tsx (New - Full-screen carousel)
```

---

## 2. Image Selection Strategy

### 2.1 Image Requirements
- **Theme**: Tiles, marbles, or finished homes showcasing these materials
- **Quantity**: 4 high-quality images
- **Aspect Ratio**: 16:9 or 21:9 (wide format for hero sections)
- **Resolution**: Minimum 1920x1080px (Full HD) or higher
- **Format**: JPG or WebP for optimal performance

### 2.2 Image Sources (Open Source)
1. **Unsplash** (https://unsplash.com)
   - Search terms: "marble tiles", "marble flooring", "luxury marble", "marble bathroom", "marble kitchen"
   - License: Free to use (Unsplash License)

2. **Pexels** (https://pexels.com)
   - Search terms: "marble interior", "tile design", "marble home", "luxury tiles"
   - License: Free to use (Pexels License)

3. **Pixabay** (https://pixabay.com)
   - Search terms: "marble", "tiles", "marble floor", "interior design"
   - License: Free to use (Pixabay License)

### 2.3 Recommended Image Categories
1. **Outdoor/Living Space**: Patio, outdoor area with marble tiles (similar to reference)
2. **Bathroom**: Modern bathroom with marble/tile finishes
3. **Kitchen**: Kitchen with marble countertops or tiles
4. **Living Room**: Interior space showcasing marble flooring or wall tiles

### 2.4 Image Storage Options
- **Option 1**: Download and store in `public/images/hero/` directory
- **Option 2**: Use Next.js Image Optimization with external URLs (if hosting allows)
- **Recommended**: Option 1 for better performance and control

---

## 3. Layout & Positioning

### 3.1 Full-Screen Hero Section
- **Height**: `100vh` (full viewport height)
- **Width**: `100vw` (full viewport width)
- **Position**: Absolute or fixed positioning to cover entire screen
- **Z-index**: Hero background at `z-0`, Header at `z-50`, Content overlay at `z-40`

### 3.2 Header Overlay
- **Position**: Absolute positioning over hero section
- **Background**: Transparent or semi-transparent with backdrop blur
- **Styling**: White text with shadow for readability over images
- **Responsive**: Maintains functionality on all screen sizes

### 3.3 Content Overlay Structure
```
Hero Section (Full Screen)
├── Background Images (Carousel)
│   ├── Image 1 (Active)
│   ├── Image 2
│   ├── Image 3
│   └── Image 4
├── Dark Overlay (for text readability)
├── Navigation Arrows (Left & Right)
├── Content Container (Centered)
│   ├── Title (Large, White, Bold)
│   ├── Description (Medium, White)
│   └── CTA Button ("EXPLORE RANGE" with arrow icon)
└── Carousel Indicators (Dots at bottom)
```

---

## 4. Carousel Functionality

### 4.1 Auto-Play Feature
- **Interval**: 5 seconds per slide (configurable)
- **Transition**: Smooth fade or slide animation (500ms duration)
- **Pause on Hover**: Pause auto-play when user hovers over carousel
- **Resume on Mouse Leave**: Continue auto-play when user moves mouse away

### 4.2 Manual Navigation
- **Left Arrow**: Navigate to previous image
- **Right Arrow**: Navigate to next image
- **Arrow Visibility**: Visible on hover, semi-transparent by default
- **Arrow Position**: Left and right edges of viewport
- **Arrow Styling**: White circular buttons with arrow icons

### 4.3 Carousel Indicators (Based on Reference Design)
- **Position**: Bottom center of hero section
- **Total Indicators**: 4 indicators (one for each image)
- **Style**: 
  - **Active Indicator**: Horizontal rectangular bar (elongated shape)
    - Width: Approximately `40px` or `48px`
    - Height: `4px` or `6px`
    - Color: White or light color
    - Border Radius: `2px` (slightly rounded)
  - **Inactive Indicators**: Small circular dots
    - Size: `8px × 8px` (diameter)
    - Color: White or light gray with reduced opacity (`opacity-60`)
    - Border Radius: `50%` (perfect circle)
- **Spacing**: Evenly spaced with `gap-3` or `space-x-3` (12px gap)
- **Clickable**: Users can click any indicator to jump to specific image
- **Transition**: Smooth transition when switching between active/inactive states
- **Alignment**: Horizontal row, centered at bottom of hero section
- **Z-index**: High enough to appear above background images but below navigation arrows

### 4.4 Image Transition Effects
- **Option 1**: Fade transition (recommended for hero sections)
- **Option 2**: Slide transition (horizontal slide)
- **Duration**: 500-700ms for smooth effect
- **Easing**: `ease-in-out` for natural feel

---

## 5. Content Overlay Design

### 5.1 Text Content Structure
Each slide can have unique content, or use shared content:

**Slide 1 Example:**
- **Title**: "Beauty That Lasts Beyond Seasons"
- **Description**: "Built to endure, designed to impress—our outdoor tiles bring lasting beauty to every season."
- **CTA**: "EXPLORE RANGE" button

**Slide 2 Example:**
- **Title**: "Timeless Tiles for Tranquil Spaces"
- **Description**: "Elevate your bathroom with tiles that blend elegance and serenity. The timeless collection is designed to create a calming environment."
- **CTA**: "EXPLORE RANGE" button

### 5.2 Typography (Extracted from Reference Images)

#### Title Typography
- **Font Family**: `layfort-regular` (custom font - needs to be imported/added)
- **Font Size**: `62px` (desktop) - equivalent to `text-[62px]` in Tailwind
- **Font Weight**: Regular (not bold)
- **Color**: White (`#FFFFFF` / `text-white`)
- **Element**: `h2` tag with classes `text-white mb-4`
- **Dimensions**: Approximately `620px × 148.8px` (width × height)
- **Line Height**: Default or `leading-tight`
- **Responsive Sizing**:
  - Desktop: `62px` (`text-[62px]`)
  - Tablet: `48px` (`text-[48px]`)
  - Mobile: `36px` (`text-[36px]`)

#### Description Typography
- **Font Family**: `Urbanist, sans-serif` (Google Fonts - needs to be imported)
- **Font Size**: `16px` - equivalent to `text-base` in Tailwind
- **Font Weight**: Regular (`font-normal`)
- **Color**: White (`#FFFFFF` / `text-white`)
- **Element**: `p` tag with class `text-white`
- **Line Height**: Default
- **Max Width**: `max-w-2xl` or `max-w-3xl` for readability
- **Responsive Sizing**:
  - Desktop: `16px` (`text-base`)
  - Tablet: `15px` (`text-[15px]`)
  - Mobile: `14px` (`text-sm`)

#### Font Import Requirements
- **Layfort Regular**: Custom font file needs to be added to `public/fonts/` and imported in `globals.css`
- **Urbanist**: Import from Google Fonts in `layout.tsx` or `globals.css`
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  ```

### 5.3 CTA Button
- **Text**: "EXPLORE RANGE"
- **Icon**: Right arrow icon (→ or SVG)
- **Style**: White background with dark text, or transparent with white border
- **Hover Effect**: Scale or background color change
- **Link**: Navigate to `/products` page

### 5.4 Overlay Background
- **Dark Overlay**: Semi-transparent black overlay (`bg-black/40` or `bg-black/50`)
- **Purpose**: Ensure text readability over bright images
- **Gradient**: Optional gradient from top to bottom for better text contrast

---

## 6. State Management

### 6.1 React State Variables
```typescript
const [currentIndex, setCurrentIndex] = useState(0);
const [isAutoPlaying, setIsAutoPlaying] = useState(true);
const [isHovered, setIsHovered] = useState(false);
```

### 6.2 Auto-Play Logic
- Use `useEffect` with `setInterval` for auto-rotation
- Clear interval on component unmount
- Pause interval when `isHovered` is true
- Resume interval when `isHovered` is false

### 6.3 Navigation Functions
- `goToNext()`: Increment index, loop to 0 if at end
- `goToPrevious()`: Decrement index, loop to last if at start
- `goToSlide(index)`: Jump to specific slide
- `pauseAutoPlay()`: Stop auto-rotation
- `resumeAutoPlay()`: Start auto-rotation

---

## 7. Responsive Design

### 7.1 Mobile Considerations
- **Image Aspect Ratio**: May need different images or cropping for mobile
- **Text Size**: Reduce font sizes on mobile (`text-3xl` instead of `text-7xl`)
- **Arrow Buttons**: Larger touch targets (minimum 44x44px)
- **Indicators**: Slightly larger dots for easier tapping
- **Content Padding**: Adjust padding for smaller screens

### 7.2 Tablet Considerations
- **Medium Breakpoint**: Adjust text sizes and spacing
- **Navigation**: Ensure arrows are easily accessible

### 7.3 Desktop Considerations
- **Full Experience**: All features visible and functional
- **Hover States**: Enhanced hover effects on desktop

---

## 8. Performance Optimization

### 8.1 Image Optimization
- Use Next.js `Image` component for automatic optimization
- Implement lazy loading for non-active images
- Use WebP format with JPG fallback
- Preload first image for faster initial load

### 8.2 Code Optimization
- Memoize expensive calculations
- Use `useCallback` for event handlers
- Debounce rapid navigation clicks
- Clean up intervals and event listeners

### 8.3 Loading States
- Show loading skeleton or first image immediately
- Load remaining images in background
- Smooth transition when images are ready

---

## 9. Accessibility Features

### 9.1 Keyboard Navigation
- **Arrow Keys**: Navigate between slides
- **Tab**: Focus on navigation arrows and indicators
- **Enter/Space**: Activate focused element

### 9.2 ARIA Labels
- Add `aria-label` to navigation buttons
- Add `aria-live` region for screen readers
- Label carousel container appropriately

### 9.3 Focus Management
- Visible focus indicators on interactive elements
- Maintain focus order for keyboard users

---

## 10. Implementation Steps

### Phase 1: Setup & Structure
1. Create `components/HeroSection.tsx` component
2. Set up basic structure with placeholder content
3. Configure full-screen layout (100vh)

### Phase 2: Image Integration
1. Download 4 high-quality images from open source sites
2. Store images in `public/images/hero/` directory
3. Create image array/configuration in component
4. Implement Next.js Image component for optimization

### Phase 3: Carousel Logic
1. Implement state management for current slide
2. Add auto-play functionality with interval
3. Create navigation functions (next, previous, goTo)
4. Add pause on hover functionality

### Phase 4: UI Elements
1. Add navigation arrows (left & right)
2. Add carousel indicators with rectangular active state and circular inactive dots
3. Style indicators according to reference design:
   - Active: Horizontal rectangular bar (40-48px width, 4-6px height)
   - Inactive: Small circular dots (8px diameter)
   - Proper spacing between indicators
4. Implement hover states and transitions
5. Add click handlers for indicators to jump to specific slides

### Phase 5: Content Overlay
1. Import required fonts (Layfort Regular and Urbanist) in `globals.css` or `layout.tsx`
2. Add dark overlay for text readability
3. Implement centered text container
4. Add title with `h2` tag using Layfort Regular font (62px)
5. Add description with `p` tag using Urbanist font (16px)
6. Add CTA button ("EXPLORE RANGE" with arrow icon)
7. Style typography and spacing according to extracted specifications

### Phase 6: Header Integration
1. Modify Header component to be transparent/overlay
2. Adjust Header z-index to appear above hero
3. Ensure Header remains functional and readable
4. Test Header dropdown functionality over hero

### Phase 7: Responsive Design
1. Test and adjust mobile layout
2. Optimize text sizes for different breakpoints
3. Ensure touch targets are adequate on mobile
4. Test carousel functionality on all devices

### Phase 8: Polish & Optimization
1. Fine-tune transition timings
2. Optimize image loading
3. Add loading states
4. Test performance and accessibility
5. Final styling adjustments

---

## 11. Technical Specifications

### 11.1 Dependencies
- No additional packages required (using React hooks and Next.js Image)
- Optional: Consider `framer-motion` for advanced animations (not required)

### 11.2 File Structure
```
public/
└── images/
    └── hero/
        ├── hero-1.jpg (or .webp)
        ├── hero-2.jpg
        ├── hero-3.jpg
        └── hero-4.jpg

components/
└── HeroSection.tsx

app/
├── layout.tsx (Header overlay)
└── page.tsx (HeroSection component)
```

### 11.3 CSS Classes (Tailwind)

#### Layout Classes
- Full screen: `h-screen w-full fixed inset-0`
- Overlay: `absolute inset-0 bg-black/40`
- Centered content: `absolute inset-0 flex items-center justify-center`

#### Navigation Arrows
- Position: `absolute top-1/2 -translate-y-1/2 z-50`
- Left arrow: `left-4` or `left-8`
- Right arrow: `right-4` or `right-8`

#### Carousel Indicators
- Container: `absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-40`
- Active indicator (rectangular): `h-1.5 w-12 bg-white rounded-sm transition-all duration-300`
- Inactive indicator (dot): `h-2 w-2 bg-white/60 rounded-full transition-all duration-300 hover:bg-white/80 cursor-pointer`
- Clickable: All indicators should have `cursor-pointer` class

---

## 12. Content Configuration

### 12.1 Slide Data Structure
```typescript
interface HeroSlide {
  id: number;
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/hero/hero-1.jpg",
    title: "Beauty That Lasts Beyond Seasons",
    description: "Built to endure, designed to impress—our outdoor tiles bring lasting beauty to every season.",
    ctaText: "EXPLORE RANGE",
    ctaLink: "/products"
  },
  // ... 3 more slides
];
```

---

## 13. Testing Checklist

- [ ] Auto-play rotates through all 4 images
- [ ] Navigation arrows work correctly
- [ ] Carousel indicators show active slide
- [ ] Clicking indicators jumps to correct slide
- [ ] Auto-play pauses on hover
- [ ] Auto-play resumes on mouse leave
- [ ] Header remains functional over hero
- [ ] Text is readable on all images
- [ ] CTA button navigates correctly
- [ ] Responsive on mobile, tablet, desktop
- [ ] Keyboard navigation works
- [ ] Images load efficiently
- [ ] No layout shift during image changes
- [ ] Smooth transitions between slides

---

## 14. Future Enhancements (Optional)

- Video background option
- Parallax scrolling effect
- Multiple content variations per slide
- Integration with CMS for dynamic content
- Analytics tracking for slide engagement
- A/B testing different slide orders

---

## 15. Typography Implementation Details

### 15.1 Font Files Required
1. **Layfort Regular** (for hero titles)
   - Format: `.woff2`, `.woff`, or `.ttf`
   - Location: `public/fonts/layfort-regular.woff2`
   - CSS Import: Add to `globals.css` using `@font-face`

2. **Urbanist** (for descriptions and navigation)
   - Source: Google Fonts
   - Weights needed: 300, 400, 500, 600, 700
   - Import method: Add link tag in `layout.tsx` or use Next.js font optimization

### 15.2 Font Loading Strategy
- Preload critical fonts (Layfort Regular) for hero section
- Use `font-display: swap` for better performance
- Fallback fonts: `sans-serif` for Urbanist, `serif` or custom fallback for Layfort

### 15.3 Typography CSS Example
```css
/* In globals.css */
@font-face {
  font-family: 'Layfort';
  src: url('/fonts/layfort-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Hero Title */
.hero-title {
  font-family: 'Layfort', serif;
  font-size: 62px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 1.2;
}

/* Hero Description */
.hero-description {
  font-family: 'Urbanist', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 1.6;
}
```

---

## Notes

- Ensure all images are properly licensed for commercial use
- Test carousel performance on slower devices
- Consider implementing preloading for better UX
- Keep carousel accessible and keyboard-friendly
- Maintain consistent styling with overall website theme
- **Font Requirements**: Layfort Regular font file needs to be sourced and added to the project
- **Carousel Indicators**: Active indicator uses rectangular bar style, not circular dot