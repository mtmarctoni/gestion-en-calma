# Brand Direction

## Brand Personality
- Tone: calm, close, trustworthy, capable.
- Visual language: natural, warm, modern, quietly confident.
- Avoid anything that feels mystical, luxury-for-luxury's-sake, or generic wellness sludge.
- The site should feel like relief and order, not chaos dressed up as productivity.

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Amarillo Girasol | `#F7BC1E` | Primary action color, main CTAs, dominant accents |
| Crema Suave | `#FDE8A4` | Card backgrounds, secondary surfaces, soft fills |
| Blanco Hueso | `#F9F7F2` | Main page background, base surface |

### Warm Accents (Instagram-inspired)
| Name | Hex | Usage |
|------|-----|-------|
| Naranja Melocotón | `#EEA45D` | Hover states, secondary buttons, warm accents |
| Terracotta | `#D4755F` | Bold accent panels, creative sections, energy |
| Terracotta Light | `#E08B77` | Soft terracotta backgrounds |

### Cool Accents (From Instagram visual style)
| Name | Hex | Usage |
|------|-----|-------|
| Teal/Turquesa | `#5A8A8A` | Calming sections, alternate panels, variety |
| Teal Light | `#7BA3A3` | Soft teal backgrounds, decorative elements |
| Verde Eucalipto | `#73938B` | Muted actions, tertiary elements, calming touches |
| Verde Oliva | `#8B9A6D` | Natural accents, organic feel |
| Oliva Light | `#A3B085` | Soft olive backgrounds |

### Soft Accents
| Name | Hex | Usage |
|------|-----|-------|
| Rosa Pastel | `#F5B7B1` | Soft highlights, tags, gentle accents |
| Blush/Rosa Pálido | `#E8C4C4` | Feminine touches, soft panels, alternative cards |
| Blush Deep | `#D9A8A8` | Deeper pink accents |

### Text Colors
| Name | Hex | Usage |
|------|-----|-------|
| Text Primary | `#2C2416` | Headings, body text on light backgrounds |
| Text Secondary | `#5C4D3C` | Subtitles, descriptions, muted text |
| Text Muted | `#8B7355` | Captions, labels, metadata |

### CSS Variable Mapping
```css
/* Core */
--color-brand-primary: #F7BC1E;
--color-brand-secondary: #FDE8A4;
--color-brand-background: #F9F7F2;
--color-brand-warm: #EEA45D;
--color-brand-soft: #F5B7B1;
--color-brand-muted: #73938B;

/* Extended Instagram Palette */
--color-brand-teal: #5A8A8A;
--color-teal-light: #7BA3A3;
--color-brand-terracotta: #D4755F;
--color-terracotta-light: #E08B77;
--color-brand-olive: #8B9A6D;
--color-olive-light: #A3B085;
--color-brand-blush: #E8C4C4;
--color-blush-deep: #D9A8A8;

/* Text */
--color-brand-text: #2C2416;
--color-brand-text-soft: #5C4D3C;
--color-brand-text-muted: #8B7355;
```

## Typography

### Font Family
- **Primary Font**: Courier Prime (typewriter/slab serif style)
- **Fallback Stack**: `'Courier Prime', 'Courier New', Courier, monospace`
- **Usage**: ALL text - headings, body, buttons, everything
- **Why**: Retro typewriter aesthetic that feels personal, handcrafted, and approachable

### Font Loading
Import via: `import '@fontsource/courier-prime';` in BaseLayout.astro

## Visual Application Rules

### Multi-Color Strategy
Use the FULL palette - not just yellow:
1. **Alternate section colors** - Mix yellow, teal, blush, and olive sections
2. **Color-coded cards** - Use different surface colors for different content types:
   - `surface-primary-panel` - Yellow for CTAs and important messages
   - `surface-teal` - Teal for calm/informational content
   - `surface-terracotta` - Terracotta for energy and creative sections
   - `surface-blush` - Blush for soft, approachable content
   - `surface-olive` - Olive for natural/organic themes

3. **Decorative blobs** - Use colored decorative elements:
   - `blob-yellow` - Amarillo Girasol
   - `blob-teal` - Turquesa
   - `blob-terracotta` - Terracotta
   - `blob-blush` - Rosa pálido
   - `blob-olive` - Verde oliva

### Surface Classes Available
- `surface-card` - Default warm cream
- `surface-card-soft` - Softer cream
- `surface-teal` / `surface-teal-light` - Turquoise panels
- `surface-terracotta` / `surface-terracotta-light` - Coral/orange panels
- `surface-blush` / `surface-blush-light` - Pink panels
- `surface-olive` / `surface-olive-light` - Green panels
- `surface-primary-panel` - Yellow action panels

### Section Backgrounds
- `section-warm` - Yellow tinted
- `section-teal` - Teal tinted
- `section-blush` - Pink tinted
- `section-olive` - Olive tinted

### What NOT to Do
- Do NOT use cool/blue tones (except the teal from our palette)
- Do NOT use gradients that clash (yellow + teal is OK, yellow + blue is not)
- Do NOT make every section yellow - alternate colors for visual interest
- Amarillo Girasol should still be the PRIMARY energy, but not the ONLY color
