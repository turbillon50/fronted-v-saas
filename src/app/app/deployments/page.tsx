import type { LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/workspace/PageHeader";
import { Activity, CheckCircle2, CircleDot, Rocket, Timer, XCircle } from "lucide-react";

const deploys = [
  { id: "dpl_84z", project: "orion-web", env: "production", commit: "feat: stripe checkout", status: "ready", duration: "42s", time: "12m ago" },
  { id: "dpl_83p", project: "orion-api", env: "preview", commit: "feat: bookings endpoint", status: "building", duration: "—", time: "4m ago" },
  { id: "dpl_82s", project: "orion-web", env: "preview", commit: "design: cinematic hero", status: "ready", duration: "38s", time: "3h ago" },
  { id: "dpl_81n", project: "orion-jobs", env: "production", commit: "feat: nightly backup", status: "ready", duration: "27s", time: "1d ago" },
  { id: "dpl_80c", project: "orion-api", env: "production", commit: "fix: rate limit", status: "failed", duration: "1m 12s", time: "1d ago" },
];

export default function DeploymentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Deployments"
        title="Every release, every preview, narrated."
        description="Conversational deploys with B. Approve production, watch builds, roll back instantly."
        actions={
          <>
            <button className="btn-ghost">Open Vercel</button>
            <button className="btn-primary"><Rocket size={13} /> Promote preview</button>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-3 px-5 pt-6 md:grid-cols-4 md:px-8">
        <StatCard icon={Activity} label="Healthy" value="99.98%" tone="emerald" />
        <StatCard icon={Timer} label="Avg build" value="38s" tone="cyan" />
        <StatCard icon={CheckCircle2} label="Released today" value="7" tone="violet" />
        <StatCard icon={XCircle} label="Failed (7d)" value="1" tone="crimson" />
      </div>

      <div className="px-5 py-6 md:px-8">
        <div className="overflow-hidden rounded-xl border border-white/5">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.02] text-on-surface-variant">
              <tr className="font-mono text-[11px] uppercase tracking-widest">
                <th className="px-4 py-3">Deploy</th>
                <th className="px-4 py-3">Project</th>
                <th className="px-4 py-3">Env</th>
                <th className="px-4 py-3">Commit</th>
                <th className="px-4 py-3">Build</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">When</th>
              </tr>
            </thead>
            <tbody>
              {deploys.map((d) => (
                <tr key={d.id} className="border-t border-white/5 hover:bg-white/[0.02]">
                  <td className="px-4 py-3 font-mono text-[12px] text-on-surface-variant">{d.id}</td>
                  <td className="px-4 py-3 text-on-surface">{d.project}</td>
                  <td className="px-4 py-3">
                    <span className={
                      d.env === "production"
                        ? "chip text-success-emerald"
                        : "chip text-cyber-cyan"
                    }>● {d.env}</span>
                  </td>
                  <td className="px-4 py-3 text-on-surface">{d.commit}</td>
                  <td className="px-4 py-3 font-mono text-[12px] text-on-surface-variant">{d.duration}</td>
                  <td className="px-4 py-3">
                    {d.status === "ready" && <span className="chip text-success-emerald"><CheckCircle2 size={11} /> ready</span>}
                    {d.status === "building" && <span className="chip text-cyber-cyan"><CircleDot size={11} className="animate-pulse" /> building</span>}
                    {d.status === "failed" && <span className="chip text-error-crimson">● failed</span>}
                  </td>
                  <td className="px-4 py-3 font-mono text-[12px] text-muted">{d.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  tone: "emerald" | "cyan" | "violet" | "crimson";
}) {
  const m = {
    emerald: "text-success-emerald",
    cyan: "text-cyber-cyan",
    violet: "text-violet-300",
    crimson: "text-error-crimson",
  };
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
      <Icon size={14} className={`${m[tone]} opacity-90`} />
      <p className="label-caps mt-2 text-muted">{label}</p>
      <p className={`font-display text-2xl font-semibold ${m[tone]}`}>{value}</p>
    </div>
  );
}
