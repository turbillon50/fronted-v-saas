"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  CheckCircle2,
  CircleDot,
  Cpu,
  GitBranch,
  Globe2,
  Layers,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export function OperatorPreview() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="absolute -inset-8 -z-10 bg-violet-cyan opacity-20 blur-[80px]" />
      <div className="glass-strong overflow-hidden rounded-2xl shadow-elev">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-error-crimson/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success-emerald/70" />
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            vforge://workspace/orion
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyber-cyan">
            ● live
          </div>
        </div>

        <div className="grid grid-cols-12 gap-0">
          {/* Sidebar */}
          <div className="col-span-3 hidden border-r border-white/5 bg-black/30 p-4 md:block">
            <p className="label-caps mb-3 text-muted">Workspace</p>
            {[
              { icon: Sparkles, label: "Chat with B", active: true },
              { icon: GitBranch, label: "RepoVision" },
              { icon: Activity, label: "Deployments" },
              { icon: Layers, label: "Marketplace" },
              { icon: ShieldCheck, label: "Secrets Vault" },
              { icon: Globe2, label: "Domains" },
              { icon: Workflow, label: "Projects" },
            ].map((i) => (
              <div
                key={i.label}
                className={`mb-1 flex items-center gap-3 rounded-md px-3 py-2 text-sm ${
                  i.active
                    ? "bg-violet-500/15 text-violet-100 ring-1 ring-violet-500/30"
                    : "text-on-surface-variant"
                }`}
              >
                <i.icon size={14} />
                {i.label}
              </div>
            ))}
          </div>

          {/* Center conversation */}
          <div className="col-span-12 md:col-span-6 p-5 md:p-7">
            <p className="label-caps mb-4 text-muted">B · Operator</p>
            <Bubble role="user">I want to launch a SaaS for small studios. Frontend, auth, payments and a map.</Bubble>
            <Bubble role="b" delay={0.2}>
              On it. Spinning up:
              <ul className="mt-3 space-y-1.5 text-[13px]">
                <li className="flex items-center gap-2 text-on-surface">
                  <CheckCircle2 size={14} className="text-success-emerald" />
                  Next.js + Tailwind frontend
                </li>
                <li className="flex items-center gap-2 text-on-surface">
                  <CheckCircle2 size={14} className="text-success-emerald" />
                  Clerk authentication
                </li>
                <li className="flex items-center gap-2 text-on-surface">
                  <CircleDot size={14} className="animate-pulse text-cyber-cyan" />
                  Stripe payments — configuring
                </li>
                <li className="flex items-center gap-2 text-on-surface-variant">
                  <CircleDot size={14} className="text-muted" />
                  Google Maps integration — queued
                </li>
              </ul>
            </Bubble>

            <div className="mt-5 rounded-lg border border-white/10 bg-black/40 p-3">
              <div className="font-mono text-[12px] text-on-surface-variant">
                <span className="text-cyber-cyan">›</span> connect github · deploy to vercel · open
                domain panel...
              </div>
            </div>
          </div>

          {/* Right ops */}
          <div className="col-span-12 border-t border-white/5 p-5 md:col-span-3 md:border-l md:border-t-0 md:p-6">
            <p className="label-caps mb-4 text-muted">Live Operations</p>
            <Stat label="Deploys" value="2/2" hint="Production" />
            <Stat label="Build" value="42s" hint="Vercel · iad1" tone="cyan" />
            <Stat label="Integrations" value="6" hint="Healthy" tone="violet" />
            <Stat label="Secrets" value="14" hint="Encrypted" />

            <div className="mt-5 rounded-md border border-white/10 bg-black/30 p-3">
              <p className="label-caps mb-2 text-muted">Recent</p>
              <Activity_Item icon={GitBranch} label="repo · auth-service" tone="violet" />
              <Activity_Item icon={Cpu} label="db · neon-prod migrated" tone="cyan" />
              <Activity_Item icon={Globe2} label="domain · forge.app linked" tone="emerald" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({
  role,
  children,
  delay = 0,
}: {
  role: "user" | "b";
  children: React.ReactNode;
  delay?: number;
}) {
  const isB = role === "b";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`mb-3 max-w-[90%] rounded-xl border px-4 py-3 text-[14px] leading-relaxed ${
        isB
          ? "ml-0 border-violet-500/20 bg-violet-500/[0.06] text-on-surface"
          : "ml-auto border-white/10 bg-white/[0.03] text-on-surface-variant"
      }`}
    >
      {isB && (
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300">
          B
        </p>
      )}
      {children}
    </motion.div>
  );
}

function Stat({
  label,
  value,
  hint,
  tone = "default",
}: {
  label: string;
  value: string;
  hint: string;
  tone?: "default" | "cyan" | "violet";
}) {
  const dotClass =
    tone === "cyan"
      ? "bg-cyber-cyan shadow-[0_0_10px_rgba(34,211,238,0.6)]"
      : tone === "violet"
      ? "bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.6)]"
      : "bg-success-emerald shadow-[0_0_10px_rgba(16,185,129,0.5)]";
  return (
    <div className="mb-3 flex items-center justify-between rounded-md border border-white/5 bg-white/[0.02] px-3 py-2.5">
      <div>
        <p className="label-caps text-muted">{label}</p>
        <p className="font-display text-lg font-semibold text-on-surface">{value}</p>
      </div>
      <div className="flex items-center gap-2 text-[11px] text-on-surface-variant">
        <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
        {hint}
      </div>
    </div>
  );
}

function Activity_Item({
  icon: Icon,
  label,
  tone,
}: {
  icon: LucideIcon;
  label: string;
  tone: "violet" | "cyan" | "emerald";
}) {
  const c =
    tone === "violet"
      ? "text-violet-300"
      : tone === "cyan"
      ? "text-cyber-cyan"
      : "text-success-emerald";
  return (
    <div className="flex items-center gap-2 py-1.5 text-[12px] text-on-surface-variant">
      <Icon size={12} className={c} />
      <span className="truncate font-mono">{label}</span>
    </div>
  );
}
