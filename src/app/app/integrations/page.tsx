import { PageHeader } from "@/components/workspace/PageHeader";
import {
  CheckCircle2,
  CircleDot,
  CreditCard,
  Database,
  Eye,
  Github,
  Globe2,
  KeyRound,
  MapPin,
  Phone,
  Rocket,
} from "lucide-react";

const integrations = [
  { name: "GitHub", icon: Github, status: "healthy", scope: "Org: forge-studio · 12 repos", time: "synced 1m ago" },
  { name: "Vercel", icon: Rocket, status: "healthy", scope: "Team: forge · 4 projects", time: "synced 30s ago" },
  { name: "Clerk", icon: KeyRound, status: "healthy", scope: "Instance: orion-prod", time: "synced 5m ago" },
  { name: "Stripe", icon: CreditCard, status: "degraded", scope: "Live mode · 3 products", time: "webhook retry 2/3" },
  { name: "Twilio", icon: Phone, status: "healthy", scope: "Phone: +1 (415) ••• ••• 4488", time: "synced 12m ago" },
  { name: "Google Maps", icon: MapPin, status: "healthy", scope: "Project: orion-maps", time: "synced 1h ago" },
  { name: "Neon Postgres", icon: Database, status: "healthy", scope: "DB: orion-prod · us-east-1", time: "queries 142k / 24h" },
  { name: "Domains", icon: Globe2, status: "healthy", scope: "forge.app · studio.forge.app", time: "DNSSEC active" },
  { name: "AI Vision", icon: Eye, status: "pending", scope: "Awaiting key", time: "not configured" },
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Integrations"
        title="The connective tissue of your stack."
        description="Live status, scopes, webhooks and rotations across every connected service. B repairs what it can, asks for the rest."
        actions={<button className="btn-primary">Connect new</button>}
      />

      <div className="grid grid-cols-1 gap-3 p-5 md:grid-cols-2 md:p-8 xl:grid-cols-3">
        {integrations.map((i) => (
          <article key={i.name} className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-on-surface-variant">
                  <i.icon size={18} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">{i.name}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{i.scope}</p>
                </div>
              </div>
              <StatusBadge status={i.status as "healthy" | "degraded" | "pending"} />
            </div>
            <div className="mt-4 flex items-center justify-between text-[12px]">
              <span className="font-mono uppercase tracking-widest text-muted">{i.time}</span>
              <button className="font-mono text-[11px] uppercase tracking-widest text-cyber-cyan hover:text-cyan-300">
                Manage →
              </button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function StatusBadge({ status }: { status: "healthy" | "degraded" | "pending" }) {
  if (status === "healthy")
    return (
      <span className="chip text-success-emerald">
        <CheckCircle2 size={11} /> healthy
      </span>
    );
  if (status === "degraded")
    return (
      <span className="chip text-yellow-300">
        <CircleDot size={11} className="animate-pulse" /> degraded
      </span>
    );
  return <span className="chip text-on-surface-variant">● pending</span>;
}
