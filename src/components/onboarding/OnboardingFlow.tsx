"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Circle,
  Github,
  Globe2,
  Database,
  CreditCard,
  Phone,
  MapPin,
  KeyRound,
  Sparkles,
  Info,
  Rocket,
} from "lucide-react";
import { VWordmark } from "@/components/brand/VMark";

type Integration = {
  id: string;
  name: string;
  icon: LucideIcon;
  blurb: string;
  glossary: string;
  required?: boolean;
};

const integrations: Integration[] = [
  {
    id: "github",
    name: "GitHub",
    icon: Github,
    blurb: "Host your code and let B push changes for you.",
    glossary:
      "GitHub stores your project’s code in repositories. VForge uses it to read, modify and create new repositories on your behalf — with your approval.",
    required: true,
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: Rocket,
    blurb: "Deploy frontends, previews and edge functions instantly.",
    glossary:
      "Vercel turns your code into a live website. Every change creates a preview URL; production deploys go live with one approval from you.",
    required: true,
  },
  {
    id: "domains",
    name: "Domains",
    icon: Globe2,
    blurb: "Buy or connect a domain. B handles the DNS.",
    glossary:
      "A domain is the address users type to reach your product. VForge configures it automatically and issues SSL certificates for you.",
  },
  {
    id: "neon",
    name: "Database",
    icon: Database,
    blurb: "Spin up Postgres in seconds with branching previews.",
    glossary:
      "A database stores the real data of your product — users, payments, files. We use serverless Postgres with branching for safe migrations.",
  },
  {
    id: "stripe",
    name: "Stripe",
    icon: CreditCard,
    blurb: "Charge customers, manage subscriptions, taxes and refunds.",
    glossary:
      "Stripe handles money — subscriptions, one-time payments, invoices. B configures products, prices and webhooks for you.",
  },
  {
    id: "twilio",
    name: "Twilio",
    icon: Phone,
    blurb: "SMS, WhatsApp and voice notifications.",
    glossary:
      "Twilio sends messages to your users — confirmations, alerts, two-factor codes — across SMS, WhatsApp and voice.",
  },
  {
    id: "maps",
    name: "Maps",
    icon: MapPin,
    blurb: "Geocoding, places, routing for any location feature.",
    glossary:
      "Maps lets your product show locations, search addresses, and calculate routes. Useful for delivery, real estate or social apps.",
  },
];

type Step = "welcome" | "profile" | "connect" | "first-project" | "summary";

export function OnboardingFlow() {
  const [step, setStep] = useState<Step>("welcome");
  const [connected, setConnected] = useState<Record<string, boolean>>({});
  const [name, setName] = useState("");
  const [role, setRole] = useState("Founder");
  const [projectName, setProjectName] = useState("Orion Studio");
  const [intent, setIntent] = useState("");

  const order: Step[] = ["welcome", "profile", "connect", "first-project", "summary"];
  const stepIndex = order.indexOf(step);
  const progress = ((stepIndex + 1) / order.length) * 100;

  const goNext = () => setStep(order[Math.min(stepIndex + 1, order.length - 1)]);
  const goBack = () => setStep(order[Math.max(stepIndex - 1, 0)]);

  return (
    <div className="relative z-10 mx-auto flex min-h-dvh max-w-3xl flex-col px-5 py-10 md:px-0">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <Link href="/"><VWordmark /></Link>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Onboarding · step {stepIndex + 1} / {order.length}
        </span>
      </div>

      {/* Progress */}
      <div className="mb-10 h-1 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="h-full bg-gradient-to-r from-violet-500 via-violet-400 to-cyan-400 shadow-[0_0_20px_rgba(139,92,246,0.5)]"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="glass-strong rounded-2xl p-8 md:p-10"
        >
          {step === "welcome" && (
            <Welcome onContinue={goNext} />
          )}

          {step === "profile" && (
            <Profile
              name={name}
              setName={setName}
              role={role}
              setRole={setRole}
              onContinue={goNext}
            />
          )}

          {step === "connect" && (
            <Connect
              connected={connected}
              onToggle={(id) =>
                setConnected((p) => ({ ...p, [id]: !p[id] }))
              }
            />
          )}

          {step === "first-project" && (
            <FirstProject
              projectName={projectName}
              setProjectName={setProjectName}
              intent={intent}
              setIntent={setIntent}
            />
          )}

          {step === "summary" && (
            <Summary
              name={name}
              project={projectName}
              connected={connected}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={goBack}
          disabled={stepIndex === 0}
          className="btn-ghost disabled:opacity-30"
        >
          <ArrowLeft size={14} /> Back
        </button>
        {step !== "summary" ? (
          <button onClick={goNext} className="btn-primary">
            Continue <ArrowRight size={14} />
          </button>
        ) : (
          <Link href="/app" className="btn-primary">
            Enter the workspace <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </div>
  );
}

function Welcome({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/10 ring-1 ring-violet-500/30 animate-breathe">
        <Sparkles className="text-cyan-400" size={22} />
      </div>
      <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl text-balance">
        Hello. I’m B.
      </h1>
      <p className="mx-auto mt-3 max-w-md text-on-surface-variant">
        I’ll be your operator. Together we’ll connect a few services, then I’ll start building your
        first product. Take it at your pace — every action is yours to approve.
      </p>
      <button onClick={onContinue} className="btn-primary mt-8">
        Let’s begin <ArrowRight size={14} />
      </button>
    </div>
  );
}

function Profile({
  name,
  setName,
  role,
  setRole,
  onContinue,
}: {
  name: string;
  setName: (s: string) => void;
  role: string;
  setRole: (s: string) => void;
  onContinue: () => void;
}) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold tracking-tight">Tell me about you</h2>
      <p className="mt-2 text-on-surface-variant">
        This shapes how I’ll talk to you, explain things, and what I’ll prioritize.
      </p>

      <div className="mt-7 grid gap-5">
        <label className="block">
          <span className="label-caps text-muted">Your name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Camila"
            className="input-base mt-2"
          />
        </label>

        <div>
          <span className="label-caps text-muted">Your role</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Founder", "Engineer", "Designer", "Operator", "Hobbyist"].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`rounded-full border px-4 py-1.5 text-sm transition ${
                  role === r
                    ? "border-violet-400/50 bg-violet-500/15 text-violet-100"
                    : "border-white/10 text-on-surface-variant hover:border-white/20"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Connect({
  connected,
  onToggle,
}: {
  connected: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold tracking-tight">Connect your ecosystem</h2>
      <p className="mt-2 text-on-surface-variant">
        I’ll guide you through each one. You can skip any service and connect it later from the
        Marketplace.
      </p>

      <div className="mt-7 grid gap-3">
        {integrations.map((i) => {
          const isOn = !!connected[i.id];
          return (
            <div
              key={i.id}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-white/10"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    isOn
                      ? "bg-success-emerald/15 text-success-emerald ring-1 ring-success-emerald/30"
                      : "bg-white/5 text-on-surface-variant"
                  }`}
                >
                  <i.icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-display font-semibold">{i.name}</p>
                    {i.required && <span className="chip">Recommended</span>}
                  </div>
                  <p className="text-sm text-on-surface-variant">{i.blurb}</p>
                </div>
                <button
                  onClick={() => setOpen(open === i.id ? null : i.id)}
                  className="rounded-md p-2 text-muted hover:bg-white/5 hover:text-on-surface"
                  aria-label={`What is ${i.name}?`}
                >
                  <Info size={16} />
                </button>
                <button
                  onClick={() => onToggle(i.id)}
                  className={isOn ? "btn-ghost" : "btn-primary"}
                >
                  {isOn ? (
                    <>
                      <CheckCircle2 size={14} className="text-success-emerald" /> Connected
                    </>
                  ) : (
                    <>Connect</>
                  )}
                </button>
              </div>

              <AnimatePresence>
                {open === i.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 rounded-md border border-cyan-400/20 bg-cyan-400/[0.04] p-3 text-sm text-on-surface-variant">
                      <span className="label-caps mr-2 text-cyber-cyan">Glossary</span>
                      {i.glossary}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FirstProject({
  projectName,
  setProjectName,
  intent,
  setIntent,
}: {
  projectName: string;
  setProjectName: (s: string) => void;
  intent: string;
  setIntent: (s: string) => void;
}) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold tracking-tight">Your first project</h2>
      <p className="mt-2 text-on-surface-variant">
        Give it a name and tell me what you want to build. I’ll draft the architecture for your
        approval inside the workspace.
      </p>

      <div className="mt-7 grid gap-5">
        <label className="block">
          <span className="label-caps text-muted">Project name</span>
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="input-base mt-2"
            placeholder="e.g. Orion Studio"
          />
        </label>
        <label className="block">
          <span className="label-caps text-muted">What are we building?</span>
          <textarea
            value={intent}
            onChange={(e) => setIntent(e.target.value)}
            placeholder="A small-studio SaaS with bookings, payments and SMS reminders. Premium dark UI. Maps for the studio location."
            rows={5}
            className="input-base mt-2 resize-none"
          />
        </label>
        <div className="rounded-md border border-violet-400/20 bg-violet-500/[0.06] p-4 text-sm text-violet-100">
          <span className="label-caps mr-2 text-violet-300">B</span>
          I’ll propose the stack inside the workspace — frontend, backend, integrations and a
          deploy plan. You approve, I execute.
        </div>
      </div>
    </div>
  );
}

function Summary({
  name,
  project,
  connected,
}: {
  name: string;
  project: string;
  connected: Record<string, boolean>;
}) {
  const ok = Object.keys(connected).filter((k) => connected[k]);
  return (
    <div className="text-center">
      <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-success-emerald/10 ring-1 ring-success-emerald/30">
        <CheckCircle2 size={22} className="text-success-emerald" />
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight">
        {name ? `Welcome, ${name}.` : "Welcome aboard."}
      </h2>
      <p className="mx-auto mt-3 max-w-md text-on-surface-variant">
        Your workspace is ready. I’ll start by drafting <span className="text-on-surface">{project || "your project"}</span>.
      </p>

      <div className="mx-auto mt-7 max-w-md rounded-xl border border-white/10 bg-white/[0.02] p-5 text-left">
        <p className="label-caps mb-3 text-muted">Connected</p>
        {integrations.map((i) => (
          <div
            key={i.id}
            className="flex items-center justify-between border-b border-white/5 py-2 text-sm last:border-0"
          >
            <span className="flex items-center gap-2 text-on-surface">
              <i.icon size={14} className="text-on-surface-variant" /> {i.name}
            </span>
            {ok.includes(i.id) ? (
              <span className="flex items-center gap-1.5 text-success-emerald">
                <CheckCircle2 size={12} /> ready
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-muted">
                <Circle size={12} /> later
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
