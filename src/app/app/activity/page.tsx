import { PageHeader } from "@/components/workspace/PageHeader";
import { Activity, AlertTriangle, CheckCircle2, GitBranch, Globe2, KeyRound, Rocket, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  { icon: Rocket, time: "12m ago", tone: "emerald", title: "Deploy promoted", body: "orion-web → production · build 42s · 0 errors" },
  { icon: Sparkles, time: "23m ago", tone: "violet", title: "B finished a task", body: "Stripe checkout component added to /pricing" },
  { icon: ShieldCheck, time: "1h ago", tone: "cyan", title: "Audit policy verified", body: "All secrets sealed · rotations on schedule" },
  { icon: GitBranch, time: "2h ago", tone: "violet", title: "PR opened", body: "feat/bookings on orion-api · awaiting approval" },
  { icon: Globe2, time: "3h ago", tone: "emerald", title: "Domain certified", body: "forge.app SSL renewed · DNSSEC active" },
  { icon: AlertTriangle, time: "5h ago", tone: "crimson", title: "Webhook retry", body: "stripe.checkout.session.completed retried 2/3" },
  { icon: KeyRound, time: "1d ago", tone: "violet", title: "Secret rotated", body: "DATABASE_URL · orion-api" },
  { icon: CheckCircle2, time: "1d ago", tone: "emerald", title: "Backup verified", body: "Nightly Postgres dump · 142 MB · integrity OK" },
];

export default function ActivityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Activity"
        title="The narrated history of your product."
        description="A single, chronological feed of everything B does, what changes, and what needs your attention."
        actions={<button className="btn-ghost">Export · CSV</button>}
      />

      <div className="mx-auto max-w-3xl px-5 py-8 md:px-8">
        <ol className="relative space-y-4 border-l border-white/5 pl-6">
          {items.map((it, i) => (
            <li key={i} className="relative">
              <span
                className={`absolute -left-[26px] top-1.5 inline-flex h-3 w-3 items-center justify-center rounded-full ring-2 ring-void ${
                  it.tone === "violet" ? "bg-violet-400" : it.tone === "cyan" ? "bg-cyber-cyan" : it.tone === "emerald" ? "bg-success-emerald" : "bg-error-crimson"
                }`}
              />
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <it.icon size={15} className="text-on-surface-variant" />
                    <p className="font-display font-semibold text-on-surface">{it.title}</p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted">{it.time}</span>
                </div>
                <p className="mt-2 text-sm text-on-surface-variant">{it.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
