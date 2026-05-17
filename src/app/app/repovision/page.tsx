import { PageHeader } from "@/components/workspace/PageHeader";
import { Activity, ArrowRight, CheckCircle2, CircleDot, GitBranch, GitCommit, GitPullRequest } from "lucide-react";

type Repo = {
  name: string;
  description: string;
  env: "production" | "preview" | "staging";
  branch: string;
  build: "ok" | "running" | "failed";
  lastDeploy: string;
  commits: { msg: string; author: string; time: string }[];
};

const repos: Repo[] = [
  {
    name: "orion-web",
    description: "Customer-facing PWA · Next.js · Tailwind",
    env: "production",
    branch: "main",
    build: "ok",
    lastDeploy: "12m ago",
    commits: [
      { msg: "feat: stripe checkout component", author: "B", time: "12m ago" },
      { msg: "chore: bump @clerk/nextjs", author: "B", time: "1h ago" },
      { msg: "design: cinematic hero", author: "you", time: "3h ago" },
    ],
  },
  {
    name: "orion-api",
    description: "REST API · Node · Postgres",
    env: "preview",
    branch: "feat/bookings",
    build: "running",
    lastDeploy: "4m ago",
    commits: [
      { msg: "feat: bookings endpoint", author: "B", time: "4m ago" },
      { msg: "db: bookings migration", author: "B", time: "5m ago" },
    ],
  },
  {
    name: "orion-jobs",
    description: "Background queues · Cron · Webhooks",
    env: "staging",
    branch: "main",
    build: "ok",
    lastDeploy: "2h ago",
    commits: [{ msg: "feat: nightly backup", author: "B", time: "2h ago" }],
  },
];

export default function RepoVisionPage() {
  return (
    <>
      <PageHeader
        eyebrow="RepoVision"
        title="Every repository, every environment, one view."
        description="Visual oversight of the code that powers your products. B writes; you stay in control."
        actions={
          <>
            <button className="btn-ghost">Connect repo</button>
            <button className="btn-primary">Ask B to refactor</button>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 md:p-8 xl:grid-cols-3">
        {repos.map((r) => (
          <article key={r.name} className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition hover:border-violet-500/30">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight">{r.name}</h3>
                <p className="text-sm text-on-surface-variant">{r.description}</p>
              </div>
              <EnvBadge env={r.env} />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-[12px] text-on-surface-variant">
              <span className="chip"><GitBranch size={11} /> {r.branch}</span>
              <BuildBadge state={r.build} />
              <span className="chip">deploy · {r.lastDeploy}</span>
            </div>

            <div className="mt-5">
              <p className="label-caps mb-2 text-muted">Recent commits</p>
              <ul className="space-y-2 text-[13px]">
                {r.commits.map((c) => (
                  <li key={c.msg} className="flex items-start gap-2">
                    <GitCommit size={13} className="mt-0.5 text-on-surface-variant" />
                    <div className="flex-1">
                      <p className="text-on-surface">{c.msg}</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                        {c.author} · {c.time}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <GitPullRequest size={14} />
                <span className="font-mono text-[11px] uppercase tracking-widest">2 open PRs</span>
              </div>
              <button className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-cyber-cyan hover:text-cyan-300">
                Open <ArrowRight size={12} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function EnvBadge({ env }: { env: "production" | "preview" | "staging" }) {
  const map = {
    production: "bg-success-emerald/10 text-success-emerald ring-success-emerald/30",
    preview: "bg-cyan-400/10 text-cyber-cyan ring-cyan-400/30",
    staging: "bg-violet-500/10 text-violet-300 ring-violet-500/30",
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ring-1 ${map[env]}`}>
      ● {env}
    </span>
  );
}

function BuildBadge({ state }: { state: "ok" | "running" | "failed" }) {
  if (state === "running")
    return <span className="chip text-cyber-cyan"><CircleDot size={11} className="animate-pulse" /> building</span>;
  if (state === "failed")
    return <span className="chip text-error-crimson">● failed</span>;
  return <span className="chip text-success-emerald"><CheckCircle2 size={11} /> green</span>;
}
