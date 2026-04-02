# Implementation Rules

## General Principles
- Keep the public site fast and mostly static.
- Use the smallest correct Astro component structure.
- Prefer reusable sections over page-specific hacks.
- Keep client-side JavaScript minimal and intentional.
- Preserve mobile quality. Small business traffic is often mobile-heavy.
- Use the fallback-content layer when Sanity is not configured.

## UI/UX Implementation Guidelines

### When Making Visual Changes

1. **Check Brand Instructions First**
   - Always read `.agents/instructions/brand.md` before changing colors or typography
   - The color palette is: Amarillo Girasol (primary), Crema Suave, Naranja Melocotón, Rosa Pastel, Verde Eucalipto, Blanco Hueso
   - The ONLY font is Courier Prime (typewriter style)

2. **Color Application Priority**
   - Backgrounds → Blanco Hueso (`#F9F7F2`)
   - Primary CTAs → Amarillo Girasol (`#F7BC1E`)
   - Cards/Surfaces → Crema Suave (`#FDE8A4`)
   - Hover states → Naranja Melocotón (`#EEA45D`)
   - Soft accents → Rosa Pastel (`#F5B7B1`)
   - Muted elements → Verde Eucalipto (`#73938B`)

3. **CSS Variables to Use**
   Located in `src/styles/global.css`:
   - `--color-brand-primary` - Amarillo Girasol
   - `--color-brand-secondary` - Crema Suave
   - `--color-brand-background` - Blanco Hueso
   - `--color-brand-warm` - Naranja Melocotón
   - `--color-brand-soft` - Rosa Pastel
   - `--color-brand-muted` - Verde Eucalipto
   - `--color-brand-text` - `#2C2416`
   - `--color-brand-text-soft` - `#5C4D3C`

4. **Font Rules**
   - Only use `font-family: var(--font-body)` (defined as Courier Prime)
   - No mixing fonts - headings, body, buttons all use the same typeface
   - For emphasis, use `font-weight: 700` or `font-style: italic` instead of different fonts

5. **Component Updates**
   When updating UI components:
   - `Button.astro` - Use `bg-brand-primary` for primary, `border-brand-primary` for secondary
   - `HeroSection.astro` - Background should be `bg-brand-background` with warm accents
   - Cards - Use `bg-brand-secondary` or white with warm border colors
   - Navigation - Light background (Blanco Hueso) with text-brand-text

6. **Tailwind Classes Available**
   - `bg-brand-primary`, `bg-brand-secondary`, `bg-brand-background`
   - `text-brand-text`, `text-brand-text-soft`
   - `border-brand-primary`, `border-brand-warm`, `border-brand-muted`

7. **Testing Visual Changes**
   - Run `pnpm dev` and check both desktop and mobile
   - Verify on `/contacto/` for form elements
   - Test on homepage all sections
   - Ensure Amarillo Girasol is the dominant accent color

8. **What to Avoid**
   - Do NOT use old olive/sage colors (brand-olive, brand-sage)
   - Do NOT introduce new font families
   - Do NOT use cool/bluish tones
   - Do NOT make Amarillo Girasol the background (it's too bright for large areas)
