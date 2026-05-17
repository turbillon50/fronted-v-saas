import {
  Code2,
  Database,
  Globe2,
  KeyRound,
  Layers,
  PlugZap,
  Rocket,
  Terminal,
  Workflow,
} from "lucide-react";

const items = [
  { icon: Code2, title: "Frontend Generation", text: "Next.js + Tailwind UIs scaffolded from intent. Components, routing, design system inherited." },
  { icon: Terminal, title: "Backend Generation", text: "APIs, jobs, queues, auth, and persistence created in step with the frontend." },
  { icon: Rocket, title: "Deployments", text: "Vercel-native pipelines. Previews, production, rollbacks — one sentence away." },
  { icon: PlugZap, title: "Integrations", text: "Stripe, Twilio, Clerk, Maps, AI Vision. Installed, configured, healthchecked." },
  { icon: KeyRound, title: "Secrets Vault", text: "Encrypted credentials with per-project scopes, rotations and audit trails." },
  { icon: Globe2, title: "Domains", text: "Buy, link and certify domains conversationally with DNS guidance built-in." },
  { icon: Database, title: "Databases", text: "Provision and migrate Neon, Postgres, Redis. Schema diffs explained in plain language." },
  { icon: Workflow, title: "Automations", text: "Cron, webhooks, event-driven workflows orchestrated across services." },
  { icon: Layers, title: "Modules Marketplace", text: "Install capability packs into any project. Composable, removable, auditable." },
];

export function Capabilities() {
  return (
    <section id="product" className="border-b border-white/5">
      <div className="mx-auto max-w-container px-5 py-20 md:px-margin-desktop md:py-28">
        <div className="flex flex-col items-center text-center">
          <span className="label-caps text-cyber-cyan">What B can do</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl text-balance">
            One operator. The whole stack.
          </h2>
          <p className="mt-4 max-w-2xl text-on-surface-variant">
            Speak naturally. B translates intent into a coordinated execution across your entire
            product surface — code, infra, services, secrets.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-6 transition hover:border-violet-500/30 hover:bg-white/[0.035]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-cyan opacity-0 blur-3xl transition group-hover:opacity-20" />
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300 ring-1 ring-violet-500/20">
                <it.icon size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
