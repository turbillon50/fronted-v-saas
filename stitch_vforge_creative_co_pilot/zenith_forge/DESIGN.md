---
name: Zenith Forge
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#a7caf3'
  on-secondary: '#063254'
  secondary-container: '#274b6e'
  on-secondary-container: '#99bbe4'
  tertiary: '#c3d000'
  on-tertiary: '#2f3300'
  tertiary-container: '#8e9800'
  on-tertiary-container: '#292c00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#d0e4ff'
  secondary-fixed-dim: '#a7caf3'
  on-secondary-fixed: '#001d35'
  on-secondary-fixed-variant: '#25496c'
  tertiary-fixed: '#dfed1a'
  tertiary-fixed-dim: '#c3d000'
  on-tertiary-fixed: '#1b1d00'
  on-tertiary-fixed-variant: '#454a00'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  electric-blue: '#3B82F6'
  cyber-cyan: '#22D3EE'
  charcoal-surface: '#121212'
  success-emerald: '#10B981'
  error-crimson: '#EF4444'
  off-white: '#F8FAFC'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '300'
    lineHeight: 24px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '300'
    lineHeight: 20px
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies the philosophy of "Zen Tech"—a marriage of high-performance engineering and meditative clarity. It targets sophisticated developers and data architects who value silent efficiency over visual noise. 

The aesthetic is **Futuristic Minimalism**, characterized by high-contrast absolute blacks and electric neon accents. The interface should feel like a high-end physical console: expansive negative space, razor-sharp precision, and modular layouts that prioritize data density without sacrificing legibility. Every element exists to reduce cognitive load while maintaining an aura of cutting-edge technical mastery.

## Colors
The palette is rooted in a "Void" foundation using an absolute black (#050505) for primary backgrounds to maximize the luminance of neon elements. 

- **Primary & Accents:** Utilize vibrant purples and cyans for interactive states and the signature "V" light element. 
- **Surface Strategy:** Use charcoal grays (#121212) for elevated panels to create subtle depth against the void.
- **Data States:** Use Emerald Green for success/positive growth and Crimson for errors/critical alerts.
- **Text:** All primary content must use "Off-white" to prevent the harsh eye strain associated with pure #FFFFFF on #000000 backgrounds.

## Typography
The typography system follows a rigorous hierarchy to reflect "Code as Art."

- **Headlines:** Use **Geist** with tight letter spacing for a technical, structured feel.
- **Body:** Use **Hanken Grotesk** at a Light (300) weight. This creates the "Silent" feel of the system, offering high legibility with an airy, refined texture.
- **Technical/Labels:** Use **JetBrains Mono** for all metadata, status labels, and code blocks to ground the interface in its functional SaaS roots.
- **Scale:** Large headlines on desktop should scale down aggressively for mobile to maintain the grid's integrity.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid Grid**. Content is housed in a centered container (1440px) with generous outer margins to emphasize the "Zen" negative space.

- **Grid:** A 12-column system for desktop, collapsing to 4 columns on mobile. 
- **Rhythm:** An 8px linear scale (using 4px units for micro-adjustments).
- **Modular Panels:** Use a "Floating" logic where sections are separated by 32px or 48px gaps, creating distinct islands of information rather than a continuous wall of data.
- **Reflow:** On tablet, gutters should remain wide (24px) to preserve the airy aesthetic, while margins tighten to 32px.

## Elevation & Depth
Depth is not conveyed through heavy shadows, but through **Tonal Layering and Micro-Glows**.

- **Layers:** Background is #050505. Secondary surfaces (cards, sidebars) use #121212. Hover states or active modals use a slightly lighter #1A1A1A.
- **Micro-Glows:** Instead of traditional shadows, use a 1px inner border or an extremely soft (opacity 0.05) outer bloom in the primary accent color (#8B5CF6) for focused elements.
- **Borders:** Use thin, low-contrast 1px strokes (#262626) to define boundaries. Avoid borders where negative space can achieve the same separation.

## Shapes
The shape language is "Soft-Precision." We use a **Soft (4px)** radius for most UI components (buttons, input fields, tags). 

- **Containers:** Larger panels and cards use `rounded-lg` (8px).
- **Interactive Elements:** Buttons and form inputs remain at `rounded-md` (4px) to maintain a crisp, engineered look.
- **Icons:** Use Lucide-style linear icons with a 1.5px stroke weight. Icons should always be square-capped (butt joins) to reinforce the technical clarity.

## Components
- **Buttons:** Primary buttons use a solid gradient of Electric Blue to Vibrant Purple with off-white text. Secondary buttons use a Ghost style: transparent background with a 1px charcoal border, turning cyan on hover.
- **Input Fields:** Minimalist design with only a bottom border in charcoal; upon focus, the border transitions to a cyan-to-purple gradient with a micro-glow.
- **Chips/Status:** Use the monospace label font. Backgrounds should be low-opacity tints of the status color (e.g., 10% Emerald Green) with 100% opacity text.
- **Cards:** Floating modular panels with #121212 background and no shadow. Use a 1px #262626 border.
- **The "V" Element:** Use the V-symbol as a subtle background watermark or a glowing decorative element in the top-left of major navigation panels.
- **Lists:** High-density, no dividers. Use vertical spacing and hover-state background shifts to indicate rows.