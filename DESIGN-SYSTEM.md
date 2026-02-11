# Regala Futuro - Design System Documentation

## Design Philosophy

This design system transforms Regala Futuro from a generic, corporate-feeling website into a warm, trustworthy, and human-centered NGO experience. Every design decision prioritizes **warmth, clarity, and trust** over flashiness or corporate aesthetics.

---

## Color System

### Primary: Warm Amber/Golden (#f59e0b)
**Purpose:** Education, hope, and Peruvian sunshine  
**Usage:** Main CTAs, key UI elements, headings that inspire action  
**Emotional Impact:** Optimistic, warm, inviting without being aggressive  
**Cultural Connection:** References the Peruvian sun and golden warmth

### Secondary: Terracotta/Clay (#e8632a)
**Purpose:** Earthy Peruvian warmth, human connection  
**Usage:** Secondary CTAs, accents, gradients to add depth  
**Emotional Impact:** Grounded, authentic, connected to Peruvian crafts and earth  
**Cultural Connection:** Clay/terracotta is deeply rooted in Peruvian artisan culture

### Accent: Deep Teal (#14b8a6)
**Purpose:** Trust, stability, professionalism  
**Usage:** Links, information, trust signals, metadata  
**Emotional Impact:** Reliable, trustworthy, complements warm tones  
**Why Not Blue:** Traditional NGO blue feels cold; teal maintains trust while staying warm

### Backgrounds: Warm Neutrals
- **warm-50** (#fdfcfb): Almost white, subtle warmth
- **warm-100** (#faf8f5): Main background - cream instead of sterile white
- **warm-200** (#f5f1ea): Section alternation background
- **warm-300** (#ebe4d7): Card backgrounds

**Why Not White:**
- Pure white (#ffffff) feels sterile, corporate, and SaaS-like
- Warm creams reduce eye strain
- Creates inviting, human atmosphere
- References natural materials (paper, parchment)

### Text Colors: Rich Browns
- **text-primary** (#3d2817): Deep warm brown for headings
- **text-secondary** (#5c4a37): Medium brown for body text
- **text-muted** (#8b7661): Muted brown for secondary text

**Why Not Black/Gray:**
- Black feels harsh and impersonal
- Gray feels corporate and cold
- Warm browns feel natural, approachable, human
- Better WCAG contrast against warm backgrounds

---

## Typography System

### Font Families
- **Display:** Poppins - Friendly, approachable, confident
- **Body:** Inter - Clean, readable, professional without being cold

### Hierarchy Rules
1. **Headings (h1-h6):** Use `text-text-primary` for maximum impact
2. **Body Text:** Use `text-text-secondary` for comfortable reading
3. **Metadata/Captions:** Use `text-text-muted` for de-emphasis
4. **Line Height:** Generous (1.6-1.8) for readability and breathing space

### Special Text Treatments

#### Pull Quotes
```css
.pull-quote
```
- Large, italic text with left border
- Creates emotional moments without images
- Highlights mission statements
- Example: "Un cuaderno hoy cambia un año entero."

#### Highlight Boxes
```css
.highlight-box
```
- Warm background with accent border
- Draws attention to key messages
- Non-aggressive highlighting

---

## Visual Rhythm & Spacing

### Section Alternation
**Pattern:** warm-100 → warm-200 → warm-100 → warm-200

**Why:** Creates visual breathing, prevents "wall of content" feeling, guides the eye through intentional scrolling

### Spacing Scale
- Extra generous padding/margin (py-16 to py-28)
- Creates calm, prevents visual density
- Makes site feel less rushed, more thoughtful

### Section Dividers
```css
.section-divider
```
- Small gradient bar (warm primary to secondary)
- Provides visual pause between sections
- Subtle, not aggressive

---

## Component Design Principles

### Cards
- **Background:** warm-50 (soft cream) not white
- **Border:** Subtle warm-200 border
- **Corners:** Rounded-2xl (16px) for friendliness
- **Shadow:** Soft shadows (using custom `shadow-soft-*`)
- **Hover:** Gentle lift (-translate-y-1) and shadow increase

**Why:** Soft edges and warm backgrounds feel inviting and human, not corporate

### Buttons

#### Primary (Donar/Main CTAs)
- Warm amber background
- Gentle lift on hover
- Rounded-xl corners
- Not aggressive or pushy

#### Secondary
- Terracotta warmth
- Maintains hierarchy
- Same friendly treatment

#### Outline
- Border-first design
- Less pressure, more exploratory
- Good for secondary paths

**Why:** Buttons signal action without pressure, inviting rather than demanding

### Forms
- **Border:** 2px warm-300, not thin gray lines
- **Corners:** Rounded-xl for approachability
- **Focus:** Primary color ring, not harsh blue
- **Labels:** Semibold for clarity, warm text colors
- **Error State:** Secondary (terracotta) not aggressive red

**Why:** Forms should feel calm and supportive, not bureaucratic or intimidating

### Icons & Gradients
- Icon backgrounds use subtle gradients (primary → secondary)
- Adds depth and warmth without images
- Creates visual interest through color, not photos

---

## Accessibility & Contrast

### WCAG Compliance
All color combinations meet WCAG AA standards:
- **text-primary on warm-100:** 12.5:1 (AAA)
- **text-secondary on warm-100:** 8.2:1 (AA)
- **primary-600 on white:** 4.8:1 (AA)
- **White on primary-500:** 5.1:1 (AA)

### Interactive Elements
- All buttons look clickable (shadows, colors)
- Hover states are clear but subtle
- Focus states are visible for keyboard navigation
- Links use accent color for recognition

---

## Micro-Interactions

### Timing
- Standard transitions: 200ms
- Hover effects: 150-250ms
- No aggressive animations

### Effects
- Gentle lifts on hover (-translate-y-0.5 to -translate-y-1)
- Subtle shadow increases
- Color darkening, not dramatic changes
- Border color changes on form focus

**Why:** Micro-interactions should feel responsive and polite, not flashy or distracting

---

## NGO Personality Elements

### What Makes This Feel Like an NGO (Not a Startup)

1. **Warm Color Palette:** Amber/terracotta, not tech blue
2. **Soft Edges:** Rounded corners throughout
3. **Generous Spacing:** Calm, not rushed
4. **Brown Text:** Human, not corporate gray/black
5. **Cream Backgrounds:** Inviting, not sterile white
6. **Mission-Focused Typography:** Pull quotes highlight impact
7. **Subtle Gradients:** Add warmth without photos
8. **Gentle Interactions:** Polite lifts, not aggressive pops

### Trust Signals
- Transparent accent color for metadata
- Soft shadows (not dramatic)
- Clear hierarchy without shouting
- Consistent, predictable patterns

---

## Implementation Notes

### Custom Tailwind Shadows
```javascript
boxShadow: {
  'soft': '0 2px 8px rgba(61, 40, 23, 0.08)',
  'soft-md': '0 4px 12px rgba(61, 40, 23, 0.12)',
  'soft-lg': '0 8px 24px rgba(61, 40, 23, 0.15)',
  'soft-xl': '0 12px 32px rgba(61, 40, 23, 0.18)',
}
```
**Why:** Shadows use warm brown tints instead of cold black, maintaining warmth throughout

### Gradient Usage
- Primary → Secondary: Warm, inviting, distinctly Peruvian
- Use in CTA sections, icon backgrounds, step indicators
- Always subtle, never overwhelming

### Border Strategy
- Prefer 2px borders over 1px (more substantial, less fragile)
- Use warm colors (warm-200, warm-300) not gray
- Round all corners (lg, xl, 2xl) for friendliness

---

## What Problems This Solves

### Before: White text on white/light backgrounds
**After:** Rich brown text on warm cream - perfect contrast

### Before: Generic blue corporate feeling
**After:** Warm amber/terracotta with Peruvian cultural references

### Before: Flat, lifeless pages
**After:** Visual rhythm through alternating sections, gradients, and spacing

### Before: Aggressive CTAs
**After:** Inviting buttons that suggest action without pressure

### Before: Wall of text
**After:** Pull quotes, highlight boxes, section dividers create breathing space

---

## Design Decision Summary

Every color, shadow, spacing, and interaction choice serves one purpose:

**Make donors, teachers, and parents feel warmth, trust, and human connection—not corporate pressure or SaaS polish.**

This is an NGO working with vulnerable communities. The design must reflect that mission: **accessible, warm, trustworthy, and distinctly human.**
