"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUp,
  Activity,
  CheckCircle2,
  CircleDot,
  Cpu,
  GitBranch,
  Globe2,
  Layers,
  Paperclip,
  Sparkles,
  Wand2,
  ShieldCheck,
} from "lucide-react";

type Msg = {
  id: string;
  role: "user" | "b";
  text: string;
  actions?: { label: string; status: "done" | "running" | "queued" }[];
};

const seed: Msg[] = [
  {
    id: "m1",
    role: "b",
    text: "Hi — I’m B. Tell me what you want to build, or ask me to operate something. I can scaffold projects, configure integrations, deploy and run audits.",
  },
];

const quickPrompts = [
  { icon: Sparkles, label: "Create a SaaS for bookings" },
  { icon: Wand2, label: "Add Stripe to ‘Orion Studio’" },
  { icon: ShieldCheck, label: "Rotate all secrets in production" },
  { icon: Globe2, label: "Connect domain forge.app" },
];

export function ChatExperience() {
  const [messages, setMessages] = useState<Msg[]>(seed);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    const userMsg: Msg = { id: crypto.randomUUID(), role: "user", text: t };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setPending(true);

    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "b",
          text: "On it. Drafting a plan and queueing the actions. You’ll be asked to approve anything that touches production.",
          actions: [
            { label: "Create Next.js frontend", status: "done" },
            { label: "Generate REST API + Postgres schema", status: "running" },
            { label: "Configure Stripe checkout", status: "queued" },
            { label: "Deploy preview to Vercel", status: "queued" },
          ],
        },
      ]);
      setPending(false);
    }, 900);
  };

  return (
    <div className="grid h-[calc(100dvh-49px)] grid-cols-1 lg:grid-cols-[1fr_320px]">
      <div className="flex min-w-0 flex-col">
        {/* Scroll area */}
        <div ref={scrollerRef} className="flex-1 overflow-y-auto px-4 py-8 md:px-10">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-full bg-violet-500/10 ring-1 ring-violet-500/30">
                <div className="absolute inset-0 animate-pulse-soft rounded-full bg-violet-500/20" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold tracking-tight">B</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Operator · ready · forge.app
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <AnimatePresence initial={false}>
                {messages.map((m) => (
                  <MessageBubble key={m.id} msg={m} />
                ))}
              </AnimatePresence>
              {pending && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-sm text-on-surface-variant"
                >
                  <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                  <span>B is thinking…</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Composer */}
        <div className="border-t border-white/5 bg-void/80 px-4 py-4 backdrop-blur-xl md:px-10">
          <div className="mx-auto max-w-3xl">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickPrompts.map((q) => (
                <button
                  key={q.label}
                  onClick={() => send(q.label)}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1.5 text-[12px] text-on-surface-variant transition hover:border-violet-500/30 hover:bg-violet-500/[0.05] hover:text-violet-100"
                >
                  <q.icon size={12} />
                  {q.label}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="glass relative overflow-hidden rounded-2xl"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background:radial-gradient(120%_60%_at_50%_0%,rgba(139,92,246,0.18),transparent_70%)]" />
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={3}
                placeholder="Ask B to build, deploy, connect or operate anything…"
                className="w-full resize-none bg-transparent px-4 py-3 text-[15px] text-on-surface placeholder:text-muted focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
              />
              <div className="flex items-center justify-between border-t border-white/5 px-3 py-2">
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <button type="button" className="rounded-md p-2 hover:bg-white/5">
                    <Paperclip size={14} />
                  </button>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    Shift + Enter for newline
                  </span>
                </div>
                <button type="submit" className="btn-primary !px-4 !py-2">
                  Send <ArrowUp size={13} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right ops panel */}
      <aside className="hidden border-l border-white/5 bg-ink lg:block">
        <OpsPanel />
      </aside>
    </div>
  );
}

function MessageBubble({ msg }: { msg: Msg }) {
  const isB = msg.role === "b";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`max-w-[88%] ${isB ? "mr-auto" : "ml-auto"}`}
    >
      {isB && (
        <p className="mb-1 ml-1 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300">
          B
        </p>
      )}
      <div
        className={`rounded-2xl border px-4 py-3 text-[14.5px] leading-relaxed ${
          isB
            ? "border-violet-500/20 bg-violet-500/[0.06] text-on-surface"
            : "border-white/10 bg-white/[0.03] text-on-surface-variant"
        }`}
      >
        <p>{msg.text}</p>
        {msg.actions && (
          <ul className="mt-3 space-y-2 rounded-lg border border-white/10 bg-black/30 p-3 text-[13px]">
            {msg.actions.map((a) => (
              <li key={a.label} className="flex items-center gap-2 text-on-surface">
                {a.status === "done" ? (
                  <CheckCircle2 size={14} className="text-success-emerald" />
                ) : a.status === "running" ? (
                  <CircleDot size={14} className="animate-pulse text-cyan-400" />
                ) : (
                  <CircleDot size={14} className="text-muted" />
                )}
                <span className={a.status === "queued" ? "text-on-surface-variant" : ""}>
                  {a.label}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

function OpsPanel() {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-white/5 px-5 py-4">
        <p className="label-caps text-muted">Live operations</p>
      </div>
      <div className="grid grid-cols-2 gap-3 p-5">
        {[
          { k: "Build", v: "42s", c: "text-cyber-cyan", icon: Activity },
          { k: "Errors", v: "0", c: "text-success-emerald", icon: ShieldCheck },
          { k: "Deploys", v: "2/2", c: "text-on-surface", icon: GitBranch },
          { k: "Modules", v: "6", c: "text-violet-300", icon: Layers },
        ].map((m) => (
          <div key={m.k} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
            <m.icon size={14} className={`${m.c} opacity-80`} />
            <p className="label-caps mt-2 text-muted">{m.k}</p>
            <p className={`font-display text-lg font-semibold ${m.c}`}>{m.v}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5 px-5 py-4">
        <p className="label-caps mb-3 text-muted">Recent events</p>
        <ul className="space-y-3 text-sm">
          {[
            { icon: GitBranch, label: "repo · auth-service updated", time: "2m ago", c: "text-violet-300" },
            { icon: Cpu, label: "db · neon-prod migrated", time: "9m ago", c: "text-cyber-cyan" },
            { icon: Globe2, label: "domain · forge.app linked", time: "23m ago", c: "text-success-emerald" },
            { icon: Activity, label: "deploy · pr-12 preview ready", time: "1h ago", c: "text-on-surface" },
          ].map((e) => (
            <li key={e.label} className="flex items-start gap-2">
              <e.icon size={13} className={`mt-0.5 ${e.c}`} />
              <div className="flex-1">
                <p className="text-on-surface">{e.label}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{e.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto border-t border-white/5 p-5">
        <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/[0.04] p-4">
          <p className="label-caps mb-1 text-cyber-cyan">B suggests</p>
          <p className="text-[13px] leading-relaxed text-on-surface">
            Add automated nightly Postgres backups to <span className="text-violet-300">orion-prod</span>?
          </p>
          <div className="mt-3 flex gap-2">
            <button className="btn-primary !px-3 !py-1.5 text-[10px]">Approve</button>
            <button className="btn-ghost !px-3 !py-1.5 text-[10px]">Later</button>
          </div>
        </div>
      </div>
    </div>
  );
}
