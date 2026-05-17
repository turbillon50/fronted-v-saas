import {
  Boxes,
  KeyRound,
  PlugZap,
  Rocket,
  ShieldAlert,
  Terminal,
} from "lucide-react";

const pains = [
  { icon: Terminal, label: "Glue-coding CLIs and dashboards" },
  { icon: Boxes, label: "Fragmented stack across 9+ vendors" },
  { icon: KeyRound, label: ".env files leaked in Slack" },
  { icon: PlugZap, label: "OAuth flows nobody understands" },
  { icon: ShieldAlert, label: "Drift between staging and prod" },
  { icon: Rocket, label: "Deploys that take a meeting" },
];

export function Problem() {
  return (
    <section className="border-y border-white/5 bg-ink/60">
      <div className="mx-auto max-w-container px-5 py-20 md:px-margin-desktop md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <span className="label-caps text-cyber-cyan">The problem</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Modern infrastructure is brilliant — and brutally fragmented.
            </h2>
            <p className="mt-5 text-on-surface-variant">
              You shouldn’t need to be a DevOps engineer to ship a beautiful product. VForge replaces
              the dashboard graveyard with a single conversational surface that operates everything
              on your behalf.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {pains.map((p) => (
                <div
                  key={p.label}
                  className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-4 transition hover:border-cyber-cyan/30 hover:bg-white/[0.04]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/[0.04] text-on-surface-variant group-hover:text-cyber-cyan">
                    <p.icon size={16} />
                  </div>
                  <p className="text-sm text-on-surface">{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
