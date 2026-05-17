# vForge PWA Design Specification & Technical Meta-Prompt

## Vision: Zen Tech Co-Pilot
vForge is a high-performance SaaS platform where "Code is Art, Data is Poetry." The PWA must feel like a seamless extension of the developer's mind—silent, powerful, and impeccably clear.

---

## 1. The Entry Experience: Dynamic Splash & Launch
**Concept:** The "Heartbeat of the Forge."
- **Visuals:** A pitch-black background (`#000000`). In the center, the neon "V" logo (electric blue to purple gradient).
- **Animation:** 
    - **Phase 1 (The Pulse):** The "V" logo starts as a dim glow and pulses with a "breathing" neon effect.
    - **Phase 2 (The Draw):** The lines of the "V" draw themselves on-screen using an SVG stroke-dashoffset animation.
    - **Phase 3 (The Expansion):** Once the logo is fully lit, a subtle circular ripple (blur/glow) expands from the center, transitioning the splash into the dashboard.
- **Vibe:** Anticipation. Speed. Precision.

## 2. PWA Structural Requirements
- **Framework:** Next.js / React with Tailwind CSS.
- **Capability:** Full offline support via Service Workers. Add to Home Screen (A2HS) optimized.
- **Layout:** Responsive "Shell" architecture. 
    - **Desktop:** Side navigation for deep work.
    - **Mobile:** Bottom navigation bar for thumb-friendly access.
- **Transitions:** 
    - Use `framer-motion` for layout transitions. 
    - Cross-fade with a slight vertical slide (10px) between views.
    - Zero-latency feel: Instant UI feedback on clicks.

## 3. Visual Language (Zenith Forge System)
- **Palette:**
    - Background: `#0e0e0e` (Deepest Charcoal/Black).
    - Surfaces: `#1a1a1a` (Glassmorphism with `backdrop-blur-xl`).
    - Accents: Electric Cyan (`#00f0ff`) and Cyber Purple (`#9d00ff`).
    - Success: Emerald Green (`#10b981`).
- **Typography:**
    - Headers: Geist Sans (Wide, Bold, tracking-tighter).
    - Body: Geist Sans (Regular, high line-height).
    - Monospace: Geist Mono (JetBrains Mono equivalent) for all console/API data.
- **Borders:** 1px solid borders using `#ffffff10` or subtle neon gradients.

## 4. Interaction Patterns
- **The "V" Integration:** The "V" is not just a logo; it’s an interactive element. Hovering over active modules triggers a subtle neon glow reflecting the logo’s gradient.
- **Modularity:** Everything is a "Card." Cards should have a subtle "floating" effect with micro-shadows.
- **Glassmorphism:** Navigation bars and overlays should use high-blur backgrounds to maintain depth.

---

## 5. The Technical Meta-Prompt (For Implementation)
*Copy and paste this to your development environment to guide the generation of the PWA code:*

> "Develop a high-fidelity PWA for 'vForge', a developer-centric SaaS. Use Next.js, Tailwind CSS, and Framer Motion. 
>
> **The App Shell:** Implement a dark-mode-only interface using #0e0e0e as the base. Use a persistent sidebar on desktop and a bottom-docked nav on mobile. 
> 
> **The Splash Screen:** Create a full-screen entry component with a center-aligned SVG 'V' logo. Animate the 'V' with a neon-breathing pulse and a drawing effect using stroke-dashoffset. Transition the splash to the dashboard with a soft-radial expansion.
>
> **Layout & Motion:** Every page transition should be a fluid cross-fade. Components should enter the viewport with a subtle slide-up and fade-in (duration 0.3s, ease-out). 
>
> **Design Details:** 
> - Use Geist Sans for UI and Geist Mono for code blocks. 
> - Apply backdrop-blur-xl to all navigation components. 
> - Use 1px borders with a 10% white opacity for a technical, layered look. 
> - Buttons should have a subtle neon-glow hover state matching the #00f0ff to #9d00ff gradient. 
>
> **Screens to Build:** Splash Experience, Dashboard Command Center (multi-pane), Integration Catalog (grid-based), and the Forge AI Chat Interface."
