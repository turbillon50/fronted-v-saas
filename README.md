# VForge

> Build and operate complete products through conversation.

VForge is an AI-native operational workspace. Create applications, generate frontend & backend,
manage repositories, deploy projects, connect integrations, manage secrets and orchestrate
services — all through conversation with **B**, your conversational operator.

This repository contains the Next.js PWA built on top of the original static prototypes located
in [`stitch_vforge_creative_co_pilot/`](./stitch_vforge_creative_co_pilot). The visual language —
cinematic dark, deep black surfaces, premium glassmorphism with violet/cyan accents — is
inherited from the **Zenith Forge** design system.

## Stack

- **Next.js 14** (App Router) · TypeScript
- **Tailwind CSS** with the Zenith Forge tokens
- **Clerk** for authentication (optional — boots without keys for previews)
- **Framer Motion** for cinematic transitions
- **lucide-react** for iconography
- **Geist** (display) + **Hanken Grotesk** (body) + **JetBrains Mono** (labels & code)
- **PWA** — manifest, service worker, offline shell, installable

## Surfaces

- `/` — Landing experience with hero, problem, capabilities, how-it-works, workspace preview, CTA
- `/glossary` — Beginner-friendly visual glossary of the platform vocabulary
- `/pricing` — Solo · Studio · Forge plans
- `/marketplace` — Public modules catalog
- `/sign-in`, `/sign-up` — Clerk auth (graceful fallback when keys are missing)
- `/onboarding` — Conversational, guided multi-step ecosystem connection flow
- `/app` — The operator workspace shell with sidebar, top bar, and mobile bottom navigation
  - `/app/chat` — Conversation with **B** (center) + live ops panel (right)
  - `/app/repovision` — Visual repository management
  - `/app/deployments` — Releases and previews
  - `/app/marketplace` — In-app modules catalog
  - `/app/integrations` — Live connection health
  - `/app/secrets` — Encrypted vault
  - `/app/projects` — Product portfolio
  - `/app/activity` — Narrated audit feed
  - `/app/hub` — Templates, learning paths, community
  - `/app/settings` — Profile, notifications, security, billing

## Run locally

```bash
cp .env.example .env.local   # add Clerk keys (optional)
npm install
npm run dev
```

When `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is empty, the auth screens render an inert visual shell so
the entire surface can still be previewed.

## Design tokens

See [`tailwind.config.ts`](./tailwind.config.ts) and [`src/app/globals.css`](./src/app/globals.css)
for the full design system. The aesthetic intentionally avoids gamer-cyberpunk visuals — calm,
cinematic, premium, operator-grade.
