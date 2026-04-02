# Design System Reference

## CSS Custom Properties (src/styles/global.css)

### Core Color Tokens
```css
/* Primary Palette */
--color-brand-primary: #F7BC1E;     /* Amarillo Girasol - CTAs, primary accents */
--color-brand-secondary: #FDE8A4;   /* Crema Suave - cards, surfaces */
--color-brand-background: #F9F7F2;  /* Blanco Hueso - page background */

/* Extended Instagram Palette */
--color-brand-warm: #EEA45D;        /* Naranja Melocotón - hover states */
--color-brand-soft: #F5B7B1;      /* Rosa Pastel - soft highlights */
--color-brand-muted: #73938B;       /* Verde Eucalipto - muted elements */
--color-brand-teal: #5A8A8A;        /* Teal/Turquesa - cool accents */
--color-teal-light: #7BA3A3;      /* Teal light variant */
--color-brand-terracotta: #D4755F;  /* Terracotta - bold energy accents */
--color-terracotta-light: #E08B77;/* Terracotta light variant */
--color-brand-olive: #8B9A6D;       /* Verde Oliva - natural tones */
--color-olive-light: #A3B085;     /* Olive light variant */
--color-brand-blush: #E8C4C4;       /* Blush/Rosa Pálido - soft panels */
--color-blush-deep: #D9A8A8;        /* Blush deep variant */

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
--shadow-soft: 0 4px 20px rgba(247, 188, 30, 0.12);
--shadow-warm: 0 8px 30px rgba(238, 164, 93, 0.18);
--shadow-panel: 0 12px 40px rgba(247, 188, 30, 0.15);
--shadow-card: 0 2px 12px rgba(44, 36, 22, 0.06);
--shadow-teal: 0 8px 30px rgba(90, 138, 138, 0.2);
--shadow-terracotta: 0 8px 30px rgba(212, 117, 95, 0.2);
```

## Tailwind Classes Available

### Background Colors
- `bg-brand-primary` - Amarillo Girasol
- `bg-brand-secondary` - Crema Suave
- `bg-brand-background` - Blanco Hueso
- `bg-brand-warm` - Naranja Melocotón
- `bg-brand-soft` - Rosa Pastel
- `bg-brand-muted` - Verde Eucalipto
- `bg-brand-teal` - Teal
- `bg-teal-light` - Teal light
- `bg-brand-terracotta` - Terracotta
- `bg-terracotta-light` - Terracotta light
- `bg-brand-olive` - Olive
- `bg-olive-light` - Olive light
- `bg-brand-blush` - Blush
- `bg-blush-deep` - Blush deep

### Text Colors
- `text-brand-text` - Primary text
- `text-brand-text-soft` - Secondary text
- `text-brand-text-muted` - Captions

### Border Colors
- `border-brand-primary` - Amarillo
- `border-brand-terracotta` - Terracotta
- `border-brand-teal` - Teal
- `border-brand-blush` - Blush
- `border-brand-olive` - Olive

## Surface Classes (Multi-Color System)

### Warm/Cream Surfaces
- `surface-card` - Default warm cream
- `surface-card-soft` - Softer cream
- `surface-card-deep` - Deeper cream
- `surface-primary-panel` - Yellow action panels (CTAs)

### Cool Surfaces (Teal)
- `surface-teal` - Full teal panel with white text
- `surface-teal-light` - Light teal tint

### Warm Surfaces (Terracotta)
- `surface-terracotta` - Full terracotta panel with white text
- `surface-terracotta-light` - Light terracotta tint

### Natural Surfaces (Olive)
- `surface-olive` - Full olive panel with white text
- `surface-olive-light` - Light olive tint

### Soft Surfaces (Blush)
- `surface-blush` - Full blush panel
- `surface-blush-light` - Light blush tint

## Section Background Alternatives

Use these to alternate section colors:
- `section-warm` - Yellow tinted background
- `section-teal` - Teal tinted background
- `section-blush` - Pink tinted background
- `section-olive` - Olive tinted background

## Decorative Elements

### Blob Shapes
- `blob` - Organic shape base
- `blob-alt` - Alternative blob shape
- `blob-yellow` - Amarillo Girasol blob
- `blob-teal` - Teal blob
- `blob-terracotta` - Terracotta blob
- `blob-blush` - Blush blob
- `blob-olive` - Olive blob

### Textures & Effects
- `paper-texture` - Subtle paper grain overlay
- `torn-edge` - Torn paper bottom edge
- `brush-stroke` - Brush stroke decorative overlay

## Component Patterns

### Primary Button
```astro
<button class="inline-flex items-center justify-center rounded-xl px-6 py-3.5 bg-brand-primary text-brand-text font-bold shadow-warm hover:bg-brand-warm transition-colors">
  Button Text
</button>
```

### Secondary Button
```astro
<button class="inline-flex items-center justify-center rounded-xl px-6 py-3.5 border-2 border-brand-primary bg-brand-secondary/50 text-brand-text font-bold hover:bg-brand-primary transition-colors">
  Button Text
</button>
```

### Multi-Color Card Grid Pattern
```astro
<!-- Alternate colors for visual variety -->
const surfaceColors = ['surface-card', 'surface-teal-light', 'surface-olive-light'];

{items.map((item, index) => (
  <article class={`${surfaceColors[index % 3]} p-6`}>
    Content
  </article>
))}
```

### Colored Panel with White Text
```astro
<!-- For teal, terracotta, olive full panels -->
<div class="surface-teal p-8">
  <p class="text-white">Content on colored background</p>
</div>
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

## Spacing & Layout
Use Tailwind's default spacing scale:
- `gap-4` (16px) - Between related elements
- `gap-6` (24px) - Between section items
- `gap-8` (32px) - Between major sections
- `p-6` (24px) - Card padding
- `py-16` (64px) - Section vertical spacing

## Border Radius
- `rounded-lg` (8px) - Buttons, inputs
- `rounded-xl` (12px) - Cards, panels
- `rounded-2xl` (16px) - Feature cards
- `rounded-full` - Pills, tags, avatars

## Responsive Breakpoints
- Mobile: default (<640px)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Wide: `xl:` (1280px+)

## Color Strategy Guidelines

1. **Alternate sections** - Don't use same color for all sections
2. **Mix warm and cool** - Yellow/teal/terracotta/blush/olive together
3. **CTAs stay yellow** - Primary actions always use Amarillo Girasol
4. **Full color panels** - Use teal/terracotta/olive for impact areas
5. **Light tints** - Use -light variants for subtle backgrounds
