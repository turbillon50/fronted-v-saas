import Link from "next/link";
import {
  Boxes,
  Cloud,
  CreditCard,
  Database,
  Globe2,
  KeyRound,
  Layers,
  PlugZap,
  Rocket,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";

const terms = [
  {
    icon: Boxes,
    title: "Repository (GitHub)",
    body: "A folder for your code. GitHub hosts repositories so multiple people (and B) can work on the same code without losing changes.",
    examples: ["B writes code into a branch.", "You approve the changes.", "B merges and triggers a deploy."],
    tone: "violet",
  },
  {
    icon: Rocket,
    title: "Deployment (Vercel)",
    body: "Turning your code into a live website or API. Previews appear instantly for every change, production goes live with your approval.",
    examples: ["Preview URL: project-pr-12.vercel.app", "Production: forge.app"],
    tone: "cyan",
  },
  {
    icon: Globe2,
    title: "Domain",
    body: "The address users type to find your product. B configures DNS records and SSL certificates automatically.",
    examples: ["forge.app", "studio.forge.app"],
    tone: "violet",
  },
  {
    icon: KeyRound,
    title: "Secret",
    body: "A sensitive value (like an API key). Stored encrypted; only services that need it can read it.",
    examples: ["STRIPE_SECRET_KEY", "DATABASE_URL"],
    tone: "cyan",
  },
  {
    icon: PlugZap,
    title: "Integration",
    body: "A pre-built connection to an external service like Stripe or Twilio. B installs, configures and monitors them.",
    examples: ["Stripe for payments", "Twilio for SMS"],
    tone: "violet",
  },
  {
    icon: Database,
    title: "Database",
    body: "Where your product’s real data lives — users, orders, files. B handles schemas, migrations and backups.",
    examples: ["Postgres on Neon", "Redis for cache"],
    tone: "cyan",
  },
  {
    icon: Workflow,
    title: "API",
    body: "A doorway your frontend uses to ask your backend for things. B exposes APIs that match the features you describe.",
    examples: ["GET /api/bookings", "POST /api/stripe/checkout"],
    tone: "violet",
  },
  {
    icon: Layers,
    title: "Module",
    body: "A capability pack — like Auth, Payments, Maps. Modules can be installed or removed from a project at any time.",
    examples: ["Clerk Auth", "Stripe Payments", "Google Maps"],
    tone: "cyan",
  },
  {
    icon: Cloud,
    title: "Environment",
    body: "An isolated stage for your product. ‘Development’ is for you, ‘preview’ for branches, ‘production’ for real users.",
    examples: ["development", "preview", "production"],
    tone: "violet",
  },
  {
    icon: Server,
    title: "Infrastructure",
    body: "The servers and services that make your product work. With VForge, you operate it conversationally instead of clicking 9 dashboards.",
    examples: ["Servers, queues, caches, CDN, jobs"],
    tone: "cyan",
  },
  {
    icon: ShieldCheck,
    title: "Webhook",
    body: "A notification sent from one service to another when something happens. Stripe tells your app when a payment succeeded, for example.",
    examples: ["stripe.checkout.session.completed", "github.push"],
    tone: "violet",
  },
  {
    icon: CreditCard,
    title: "Subscription",
    body: "A recurring payment your users make to access your product. B sets up Stripe products and prices for you.",
    examples: ["Pro plan · $29/mo", "Studio plan · $99/mo"],
    tone: "cyan",
  },
];

export default function GlossaryPage() {
  return (
    <>
      <MarketingHeader />
      <main className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[40vh] bg-violet-aura" />
        <div className="mx-auto max-w-container px-5 pb-20 pt-16 md:px-margin-desktop md:pt-24">
          <div className="max-w-2xl">
            <span className="label-caps text-cyber-cyan">Glossary</span>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
              The vocabulary of operating a product, in plain language.
            </h1>
            <p className="mt-4 text-on-surface-variant">
              Every term you’ll encounter in VForge, explained without jargon. We surface these
              inline during onboarding so you’re never lost.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {terms.map((t) => (
              <article
                key={t.title}
                className="relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-5 transition hover:border-white/10"
              >
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ${
                    t.tone === "violet"
                      ? "bg-violet-500/10 text-violet-300 ring-violet-500/20"
                      : "bg-cyan-400/10 text-cyber-cyan ring-cyan-400/20"
                  }`}
                >
                  <t.icon size={18} />
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{t.body}</p>
                {t.examples?.length ? (
                  <div className="mt-4 rounded-md border border-white/5 bg-black/30 p-3 font-mono text-[11px] text-on-surface-variant">
                    {t.examples.map((e) => (
                      <div key={e}>· {e}</div>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 text-center md:flex-row md:justify-center">
            <Link href="/sign-up" className="btn-primary">
              Learn by doing — start free
            </Link>
            <Link href="/app/chat" className="btn-ghost">
              Ask B anything
            </Link>
          </div>
        </div>
      </main>
      <MarketingFooter />
    </>
  );
}
