# CLAUDE.md — Contexto operativo para VForge

> Este archivo es la memoria persistente de VForge entre sesiones.
> Yo (Claude) lo leo automáticamente al arrancar cualquier chat sobre este repo.
> Si vas a cambiar algo importante del proyecto, actualiza esto.

---

## Quién soy y para quién es esto

**Luis de la Torre** (`turbillon50` en GitHub, `Luis VanDeFi` en algunos sources).

VForge es un proyecto personal con **dos vidas**:

1. **Vida 1 — Mi cockpit operativo personal.** Un workspace conversacional premium para operar mis propios productos. Reemplaza el ir y venir entre dashboards de Vercel, Stripe, Clerk, GitHub, etc. La capa de motor la pone Claude Code on Web + entornos con env vars; VForge es la cara visual y la marca personal.

2. **Vida 2 — SaaS pública (futuro).** Va a crecer como producto vendible: workspace operativo nativo de IA para founders y estudios pequeños que no quieren tocar dashboards técnicos. Mismo aesthetic, onboarding cero-jerga, modular, premium.

**Caso de uso ancla actual:** estoy desarrollando un app para un **gimnasio con coach personalizado**. VForge fue la base de aprendizaje (design system + arquitectura + flujos conversacionales) y muchos de sus patrones se reutilizan ahí.

> Decisión clave (mayo 2026): VForge se va a desplegar a producción aunque dupliquemos parcialmente Claude Code, porque es marca, identidad y producto futuro — no sólo herramienta interna.

---

## Identidad de marca

- **Nombre:** VForge
- **Operador conversacional:** B (personaje central, siempre presente)
- **Tagline:** *"Build and operate complete products through conversation."*
- **Personalidad:** sereno, premium, cinemático, intencional. NO gamer-cyberpunk. NO dashboard genérico SaaS.
- **Filosofía:** *"Operate, don't orchestrate."* El usuario nunca debería sentirse abrumado por infraestructura.

## Sistema visual (Zenith Forge)

- **Paleta dark (default):** void `#050505`, ink `#0a0a0a`, surface `#131313`, surface-low `#1a1a1a`
- **Paleta light:** void `#f5f5f7`, surface `#ffffff`, on-surface `#0c0c10`
- **Acentos (ambos modos):** violet `#8b5cf6 → #a078ff → #b497ff`, cyan `#22d3ee`, electric blue `#3b82f6`, success-emerald `#10b981`, error-crimson `#ef4444`
- **Tipografías:** Geist (display), Hanken Grotesk (body), JetBrains Mono (labels, código)
- **Efectos:** glassmorphism con `backdrop-blur`, scanlines sutiles (sólo dark), V watermark de fondo, glows violet/cyan
- **Radius:** 4px buttons, 8px cards, 16px contenedores grandes
- Variables CSS en `src/app/globals.css`. Tokens semánticos en `tailwind.config.ts` (void, ink, surface, on-surface, border, tint-1/2/3) — todos reaccionan al `data-theme`.

## Stack técnico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 14.2 (App Router) |
| Lenguaje | TypeScript estricto |
| Estilos | Tailwind CSS + CSS variables |
| Auth | Clerk (con fallback visual cuando no hay keys) |
| Animación | Framer Motion |
| Iconos | lucide-react |
| Fonts | `geist/font/sans`, `geist/font/mono`, `Hanken_Grotesk` desde next/font |
| i18n | Custom AppProviders (Context + cookie + localStorage), ES default + EN |
| Tema | data-theme="dark"|"light" en `<html>`, persistido en localStorage |
| PWA | manifest.webmanifest + service worker (`public/sw.js`) |

**Comandos:**
```bash
npm install --legacy-peer-deps
npm run dev
npm run build
```

## Arquitectura de rutas

| Ruta | Qué es |
|---|---|
| `/` | Landing (hero, problem, capabilities, how, workspace preview, CTA) |
| `/glossary` | Glosario visual cero-jerga |
| `/pricing` | Solo / Studio / Forge |
| `/marketplace` | Catálogo público de módulos |
| `/sign-in`, `/sign-up` | Clerk (con placeholder si faltan keys) |
| `/onboarding` | 5 pasos conversacionales con B |
| `/app/chat` | Chat con B + ops panel (centro de gravedad del producto) |
| `/app/repovision` | Repos visuales |
| `/app/deployments` | Releases narrados |
| `/app/marketplace` | Módulos instalables |
| `/app/integrations` | Salud de integraciones |
| `/app/secrets` | Bóveda de secretos |
| `/app/projects` | Cartera de productos |
| `/app/activity` | Feed cronológico |
| `/app/hub` | Plantillas, learning paths, comunidad |
| `/app/settings` | Perfil, apariencia, notificaciones |

## Convenciones de código

- **Componentes "use client"** cuando usan hooks o el AppProviders. Las pages que sólo renderizan markup son client también porque casi todo usa `useT()`.
- **Traducciones:** todo string visible va en `src/i18n/dictionaries.ts`. Nunca hardcodees copy en componentes. Si añades una pantalla, añades las dos claves (ES + EN).
- **Colores:** usa tokens semánticos (`bg-tint-1`, `border-app`, `text-on-surface-variant`) — NO hardcodees `bg-black` o `text-white`. Eso rompe el light mode.
- **Iconos:** lucide-react. Stroke 1.5, square caps.
- **Botones:** `.btn-primary` (gradient violet→cyan) y `.btn-ghost` (outline). Definidos en globals.css.
- **`label-caps`:** la clase para etiquetas en mayúsculas tipo "OPERATOR · READY". JetBrains Mono.
- **Sin emojis en código a menos que yo (Luis) los pida.** Sin docstrings largos.

## Roadmap mental

### Hecho ✅
- Frontend completo de VForge con todas las pantallas
- Sistema i18n ES/EN con switcher
- Sistema dual dark/light con toggle
- PWA installable + offline shell
- Clerk integration con fallback
- Branch: `claude/vforge-saas-workspace-OsK7I`
- PR: https://github.com/turbillon50/fronted-v-saas/pull/1

### Pendiente inmediato 🚧
- Deploy a Vercel (proyecto `vforge` ya existe: `prj_EBymOJI4YNLM4AG40ZpWmMKRN66c`, team `team_gK8RSuGh0CYHEjgEqFRR2iIk`)
- Para desplegar: `VERCEL_TOKEN` debe estar en el entorno de Claude Code on Web
- Conectar Clerk con keys reales
- Dominio (a definir)

### Roadmap medio plazo
- Conectar B a una API real (Claude Agent SDK por debajo, branded como B)
- Backend mínimo: crear/listar proyectos, persistir conversaciones
- Módulo "Gimnasio" (caso de uso del cliente) — usar VForge como template visual
- Stripe real para el plan Studio/Forge
- Multi-tenant cuando vaya a SaaS pública

### Roadmap largo plazo
- B con personalidad real (no scripted) — Claude Agent SDK
- Marketplace de verdad con módulos instalables que tocan el código del proyecto del usuario
- Operator Bots (B custom por workflow)
- Audit Vault con logs verificables
- Móvil PWA como "control center" ejecutivo

## Cómo opero yo (Claude) este proyecto

0. **REGLA DE RAMAS — LUIS LA HIZO EXPLÍCITA:** trabajamos SIEMPRE en `main`. NO crear ramas, NO crear PRs, NO hacer merges desde feature branches. Esto es un frontend personal de un solo desarrollador — la ceremonia de Git le quita tiempo y le frustra. Si yo (Claude) creo una rama sin que Luis me la pida explícitamente, está mal hecho. Commit directo a main, push, listo.

1. **Antes de tocar nada:** leo este archivo + el `README.md` + recientes commits para entender en qué estamos.
2. **Cambios pequeños:** los hago directo, los pruebo con `npx next build`, y commiteo.
3. **Cambios grandes o de identidad visual:** pregunto a Luis primero. La estética NO se cambia sin permiso.
4. **Idioma:** Luis habla español. Le respondo en español. Las traducciones del producto van en ES + EN.
5. **Tono al hablar con Luis:** directo, honesto, sin halagos vacíos. Si algo no tiene sentido construir, lo digo. Si una idea es buena, también.
6. **Commits:** mensajes claros en español o inglés, con el contexto del *por qué*. Sin firmar como Claude por instrucción del sistema. Cierre con URL de la sesión.
7. **Deploy:** sólo cuando Luis lo confirma. Vercel es el destino. No tocar dominios sin permiso.

## Cosas que NO debo hacer

- No re-instalar Tailwind 4 ni Next 15 sin pedir permiso (compat. con Clerk 6)
- No remover el modo light o el i18n para "simplificar"
- No cambiar la paleta sin aprobación de Luis
- No comparar VForge con Claude Code en docs públicos — son cosas distintas para audiencias distintas
- No commitear sin que Luis lo pida explícitamente

## Cómo retomar en una sesión nueva

Si Luis dice "sigue con VForge":

1. Lee este archivo
2. `git log -5 --oneline` para ver qué se hizo último
3. `git status` por si quedó algo sin commitear
4. Mira PRs abiertas en `turbillon50/fronted-v-saas`
5. Pregunta a Luis qué quiere atacar — no asumas
