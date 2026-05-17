import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";

const plans = [
  {
    name: "Solo",
    price: "$0",
    cadence: "/month",
    blurb: "For first sparks. Build with B, deploy with friends.",
    features: [
      "1 project",
      "B with daily quota",
      "GitHub + Vercel connection",
      "Community Marketplace",
      "Glossary onboarding",
    ],
    cta: "Start free",
    href: "/sign-up",
    highlight: false,
  },
  {
    name: "Studio",
    price: "$29",
    cadence: "/month",
    blurb: "For founders and small teams shipping real products.",
    features: [
      "Unlimited projects",
      "B with priority models",
      "Custom domains & SSL",
      "Secrets Vault with rotations",
      "Stripe, Twilio, Maps modules",
      "Email & in-app support",
    ],
    cta: "Choose Studio",
    href: "/sign-up?plan=studio",
    highlight: true,
  },
  {
    name: "Forge",
    price: "$99",
    cadence: "/month",
    blurb: "For operators running multiple products at scale.",
    features: [
      "Team seats & roles",
      "Audit trails & approvals",
      "Private modules",
      "Multi-region deploys",
      "Org-wide secrets policies",
      "Dedicated success engineer",
    ],
    cta: "Choose Forge",
    href: "/sign-up?plan=forge",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <MarketingHeader />
      <main className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[40vh] bg-violet-aura" />
        <div className="mx-auto max-w-container px-5 pb-20 pt-16 md:px-margin-desktop md:pt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="chip mx-auto border-violet-500/30 bg-violet-500/5 text-violet-200 w-fit">
              <Sparkles size={12} className="text-cyan-400" /> Built like an OS, priced like a tool
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
              Operate one product or a portfolio.
            </h1>
            <p className="mt-3 text-on-surface-variant">
              Every plan includes B, the conversational operator. Upgrade as your stack grows.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {plans.map((p) => (
              <article
                key={p.name}
                className={`relative overflow-hidden rounded-2xl border p-7 ${
                  p.highlight
                    ? "glow-border border-transparent bg-gradient-to-b from-violet-500/[0.07] to-cyan-400/[0.04]"
                    : "border-white/5 bg-white/[0.02]"
                }`}
              >
                {p.highlight && (
                  <span className="chip absolute right-4 top-4 border-cyan-400/30 bg-cyan-400/5 text-cyan-200">
                    Most chosen
                  </span>
                )}
                <h2 className="font-display text-2xl font-semibold">{p.name}</h2>
                <p className="mt-1 text-sm text-on-surface-variant">{p.blurb}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-semibold tracking-tight">{p.price}</span>
                  <span className="text-sm text-on-surface-variant">{p.cadence}</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-on-surface">
                      <Check size={14} className="text-success-emerald" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className={`mt-8 inline-flex w-full justify-center ${p.highlight ? "btn-primary" : "btn-ghost"}`}
                >
                  {p.cta}
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Need an enterprise tier? <Link href="#" className="text-cyber-cyan">Talk to us</Link>
          </p>
        </div>
      </main>
      <MarketingFooter />
    </>
  );
}
