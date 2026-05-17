import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function WorkspacePreview() {
  return (
    <section id="workspace" className="border-b border-white/5">
      <div className="mx-auto max-w-container px-5 py-20 md:px-margin-desktop md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <span className="label-caps text-violet-300">The Workspace</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl text-balance">
              A calm operating system for your product.
            </h2>
            <p className="mt-5 text-on-surface-variant">
              The center of VForge is B. Left, your navigation across RepoVision, Deployments,
              Marketplace, Secrets and Domains. Right, a live operational panel showing the pulse
              of your product in real time.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-on-surface">
              <li>· Cinematic dark, premium glassmorphism, violet/cyan accents.</li>
              <li>· Conversational primary surface — never overwhelmed by infrastructure.</li>
              <li>· Visual confirmations, never raw config files in your face.</li>
            </ul>

            <Link href="/app" className="btn-primary mt-8 inline-flex">
              Enter the workspace <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 bg-violet-cyan opacity-20 blur-3xl" />
            <div className="glass-strong rounded-2xl border border-white/10 p-3 shadow-elev">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-3 rounded-lg bg-black/40 p-3">
                  {["Chat", "RepoVision", "Deployments", "Marketplace", "Integrations", "Secrets", "Projects", "Hub"].map(
                    (l, i) => (
                      <div
                        key={l}
                        className={`mb-1 truncate rounded px-2 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] ${
                          i === 0
                            ? "bg-violet-500/15 text-violet-100"
                            : "text-on-surface-variant"
                        }`}
                      >
                        {l}
                      </div>
                    )
                  )}
                </div>
                <div className="col-span-6 rounded-lg bg-black/40 p-4">
                  <p className="label-caps mb-2 text-muted">B · Operator</p>
                  <div className="space-y-2 text-[13px]">
                    <div className="rounded-md border border-white/10 bg-white/[0.03] p-2 text-on-surface-variant">
                      Set up Stripe with subscriptions for our pro tier.
                    </div>
                    <div className="rounded-md border border-violet-500/20 bg-violet-500/[0.08] p-2 text-on-surface">
                      Done. Created products, prices, webhooks and a checkout component on /pricing.
                    </div>
                    <div className="rounded-md border border-white/10 bg-white/[0.03] p-2 text-on-surface-variant">
                      Connect forge.app and certify it.
                    </div>
                  </div>
                  <div className="mt-3 rounded-md border border-white/10 bg-black/40 p-2 font-mono text-[12px] text-on-surface-variant">
                    <span className="text-cyber-cyan">›</span> ask B...
                  </div>
                </div>
                <div className="col-span-3 rounded-lg bg-black/40 p-3">
                  <p className="label-caps mb-2 text-muted">Live</p>
                  {[
                    { k: "Build", v: "42s", c: "text-cyber-cyan" },
                    { k: "Status", v: "Healthy", c: "text-success-emerald" },
                    { k: "Errors", v: "0", c: "text-on-surface" },
                    { k: "Latency", v: "84ms", c: "text-violet-300" },
                  ].map((m) => (
                    <div key={m.k} className="mb-2 rounded border border-white/5 px-2 py-1.5">
                      <p className="label-caps text-muted">{m.k}</p>
                      <p className={`font-display text-sm font-semibold ${m.c}`}>{m.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
