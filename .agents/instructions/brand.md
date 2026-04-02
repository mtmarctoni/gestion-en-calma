# Brand Direction

## Brand Personality
- Tone: calm, close, trustworthy, capable.
- Visual language: natural, warm, modern, quietly confident.
- Avoid anything that feels mystical, luxury-for-luxury's-sake, or generic wellness sludge.
- The site should feel like relief and order, not chaos dressed up as productivity.

## Color Palette

### Primary Colors (Use these as defaults)
| Name | Hex | Usage |
|------|-----|-------|
| Amarillo Girasol | `#F7BC1E` | Primary action color, CTAs, highlights, accents |
| Crema Suave | `#FDE8A4` | Card backgrounds, secondary surfaces, soft fills |
| Blanco Hueso | `#F9F7F2` | Main page background, base surface |

### Secondary Colors (Use for variety and depth)
| Name | Hex | Usage |
|------|-----|-------|
| Naranja Melocotón | `#EEA45D` | Hover states, secondary buttons, warm accents |
| Rosa Pastel | `#F5B7B1` | Soft accents, tags, subtle highlights, alternative cards |
| Verde Eucalipto | `#73938B` | Muted actions, tertiary elements, calming touches |

### Text Colors
| Name | Hex | Usage |
|------|-----|-------|
| Text Primary | `#2C2416` | Headings, body text on light backgrounds |
| Text Secondary | `#5C4D3C` | Subtitles, descriptions, muted text |
| Text Muted | `#8B7355` | Captions, labels, metadata |

### CSS Variable Mapping
Always use these semantic tokens in CSS/components:
- `--color-brand-primary` = Amarillo Girasol (`#F7BC1E`)
- `--color-brand-secondary` = Crema Suave (`#FDE8A4`)
- `--color-brand-background` = Blanco Hueso (`#F9F7F2`)
- `--color-brand-warm` = Naranja Melocotón (`#EEA45D`)
- `--color-brand-soft` = Rosa Pastel (`#F5B7B1`)
- `--color-brand-muted` = Verde Eucalipto (`#73938B`)
- `--color-brand-text` = `#2C2416`
- `--color-brand-text-soft` = `#5C4D3C`

## Typography

### Font Family
- **Primary Font**: Courier Prime (typewriter/slab serif style)
- **Fallback Stack**: `'Courier Prime', 'Courier New', Courier, monospace`
- **Usage**: ALL text - headings, body, buttons, everything
- **Why**: Retro typewriter aesthetic that feels personal, handcrafted, and approachable

### Font Loading
Import via: `import '@fontsource/courier-prime';` in BaseLayout.astro

### Typography Patterns
- **Headings**: Use same font family, weight 700, tight line-height
- **Body**: Use same font family, weight 400, comfortable line-height
- **Buttons/Labels**: Use same font family, weight 600, uppercase for labels
- **No mixing**: Do NOT combine multiple font families. The typewriter aesthetic should be consistent.

## Visual Application Rules

### Default Color Choices
1. **Backgrounds**: Always start with Blanco Hueso (`#F9F7F2`)
2. **Primary Buttons**: Amarillo Girasol (`#F7BC1E`) with dark text (`#2C2416`)
3. **Cards/Surfaces**: Crema Suave (`#FDE8A4`) or white with warm borders
4. **Hover States**: Shift toward Naranja Melocotón (`#EEA45D`)
5. **Accents**: Use Rosa Pastel (`#F5B7B1`) or Verde Eucalipto (`#73938B`) sparingly

### What NOT to Do
- Do NOT use the old olive/sage green colors (`--color-brand-olive`, `--color-brand-sage`)
- Do NOT use Inter or Fraunces fonts (old fonts)
- Do NOT use cool/blue tones
- Do NOT use gradients that mix cool and warm colors
- Amarillo Girasol should dominate - it's the brand's energy
