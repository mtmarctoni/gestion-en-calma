# Design System Reference

## CSS Custom Properties (src/styles/global.css)

### Color Tokens
```css
/* Primary Palette */
--color-brand-primary: #F7BC1E;     /* Amarillo Girasol - CTAs, accents */
--color-brand-secondary: #FDE8A4;   /* Crema Suave - cards, surfaces */
--color-brand-background: #F9F7F2;  /* Blanco Hueso - page background */

/* Accent Palette */
--color-brand-warm: #EEA45D;        /* Naranja Melocotón - hover states */
--color-brand-soft: #F5B7B1;      /* Rosa Pastel - soft highlights */
--color-brand-muted: #73938B;       /* Verde Eucalipto - muted elements */

/* Text Colors */
--color-brand-text: #2C2416;        /* Dark warm brown - primary text */
--color-brand-text-soft: #5C4D3C;   /* Medium brown - secondary text */
--color-brand-text-muted: #8B7355;  /* Light brown - captions */
```

### Typography Tokens
```css
--font-body: 'Courier Prime', 'Courier New', Courier, monospace;
```

### Shadow Tokens
```css
--shadow-soft: 0 4px 20px rgba(247, 188, 30, 0.15);
--shadow-warm: 0 8px 30px rgba(238, 164, 93, 0.2);
--shadow-card: 0 2px 12px rgba(44, 36, 22, 0.08);
```

## Tailwind Classes Available

### Background Colors
- `bg-brand-primary` - Amarillo Girasol
- `bg-brand-secondary` - Crema Suave
- `bg-brand-background` - Blanco Hueso
- `bg-brand-warm` - Naranja Melocotón
- `bg-brand-soft` - Rosa Pastel
- `bg-brand-muted` - Verde Eucalipto

### Text Colors
- `text-brand-text` - Primary text color
- `text-brand-text-soft` - Secondary/muted text
- `text-brand-text-muted` - Captions and metadata
- `text-brand-primary` - Amarillo Girasol text
- `text-brand-warm` - Naranja Melocotón text

### Border Colors
- `border-brand-primary` - Amarillo Girasol border
- `border-brand-warm` - Naranja Melocotón border
- `border-brand-muted` - Verde Eucalipto border
- `border-brand-text/10` - Subtle text-colored border

## Component Patterns

### Primary Button
```astro
<button class="inline-flex items-center justify-center rounded-lg px-6 py-3.5 bg-brand-primary text-brand-text font-semibold shadow-soft hover:bg-brand-warm transition-colors">
  Button Text
</button>
```

### Secondary Button
```astro
<button class="inline-flex items-center justify-center rounded-lg px-6 py-3.5 border-2 border-brand-primary text-brand-text font-semibold hover:bg-brand-secondary transition-colors">
  Button Text
</button>
```

### Card Surface
```astro
<div class="bg-brand-secondary border border-brand-warm/20 rounded-xl p-6 shadow-card">
  Card content
</div>
```

### Section Background
```astro
<section class="bg-brand-background">
  Section content
</section>
```

## Font Usage

### Import
```astro
---
import '@fontsource/courier-prime';
---
```

### Apply to Elements
```css
/* All text uses the same typewriter font */
font-family: var(--font-body);

/* Weights available */
font-weight: 400; /* Regular body text */
font-weight: 700; /* Bold headings and emphasis */
```

## Spacing Scale
Use Tailwind's default spacing scale, but prefer these for consistency:
- `gap-4` (16px) - Between related elements
- `gap-6` (24px) - Between section items
- `gap-8` (32px) - Between major sections
- `p-6` (24px) - Card padding
- `p-8` (32px) - Section padding
- `py-16` (64px) - Section vertical spacing

## Border Radius
- `rounded-lg` (8px) - Buttons, inputs, small cards
- `rounded-xl` (12px) - Cards, panels
- `rounded-2xl` (16px) - Feature cards, hero elements

## Responsive Breakpoints
- Mobile: default (<640px)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Wide: `xl:` (1280px+)

## Icon Guidelines
- Keep icons simple and minimal
- Use warm colors (brand-primary, brand-warm) for active states
- Use text-muted for inactive/disabled states
- Icon size: 20px (w-5 h-5) for inline, 24px (w-6 h-6) for buttons
