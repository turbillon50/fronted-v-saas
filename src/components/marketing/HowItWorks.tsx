import { MessagesSquare, Sparkles, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessagesSquare,
    title: "1. Describe the product",
    text: "Tell B what you want to build. No tickets, no specs — just intent.",
  },
  {
    icon: Sparkles,
    title: "2. B drafts the system",
    text: "Architecture, screens, services and integrations are proposed with previews.",
  },
  {
    icon: ShieldCheck,
    title: "3. You approve & connect",
    text: "Guided onboarding for GitHub, Vercel, Stripe, Twilio. Visual, friendly, secure.",
  },
  {
    icon: Rocket,
    title: "4. VForge operates",
    text: "Deploys, rotations, scaling and incident response — all from one calm conversation.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative border-b border-white/5 bg-ink/40">
      <div className="mx-auto max-w-container px-5 py-20 md:px-margin-desktop md:py-28">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2">
          <div>
            <span className="label-caps text-cyber-cyan">How it works</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl text-balance">
              From sentence to shipped — in one continuous flow.
            </h2>
          </div>
          <p className="text-on-surface-variant md:text-right">
            VForge is not a chatbot. It’s an operator with privileges across your infrastructure,
            kept on rails by your approvals, guardrails and visual confirmations.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="glass relative overflow-hidden rounded-xl p-6"
            >
              <div className="absolute right-4 top-4 font-mono text-[11px] tracking-[0.18em] text-muted">
                0{i + 1}
              </div>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyber-cyan ring-1 ring-cyan-400/20">
                <s.icon size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-on-surface-variant">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
