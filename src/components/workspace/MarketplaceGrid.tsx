"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  CreditCard,
  Database,
  Eye,
  Globe2,
  HardDrive,
  KeyRound,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

type Module = {
  id: string;
  name: string;
  category: string;
  icon: LucideIcon;
  blurb: string;
  installed?: boolean;
  recommended?: boolean;
};

const all: Module[] = [
  { id: "clerk", name: "Clerk", category: "Auth", icon: KeyRound, blurb: "Drop-in authentication with SSO, MFA and orgs.", installed: true, recommended: true },
  { id: "stripe", name: "Stripe", category: "Payments", icon: CreditCard, blurb: "Subscriptions, one-time, taxes and invoices.", installed: true, recommended: true },
  { id: "twilio", name: "Twilio", category: "Messaging", icon: Phone, blurb: "SMS, WhatsApp and voice notifications." },
  { id: "maps", name: "Google Maps", category: "Maps", icon: MapPin, blurb: "Geocoding, places and routes." },
  { id: "neon", name: "Neon Postgres", category: "Database", icon: Database, blurb: "Serverless Postgres with branching.", installed: true },
  { id: "vision", name: "AI Vision", category: "AI", icon: Eye, blurb: "Image understanding for moderation, OCR, captioning.", recommended: true },
  { id: "mail", name: "Resend", category: "Email", icon: Mail, blurb: "Transactional email with deliverability built-in." },
  { id: "storage", name: "Storage", category: "Files", icon: HardDrive, blurb: "Object storage with signed URLs and CDN." },
  { id: "vercel", name: "Vercel", category: "Deploy", icon: Rocket, blurb: "Edge deploys, previews and analytics.", installed: true },
  { id: "domains", name: "Domains", category: "DNS", icon: Globe2, blurb: "Register, link and certify domains." },
  { id: "agent", name: "Operator Bots", category: "AI", icon: Bot, blurb: "Custom B-personalities for specific workflows." },
  { id: "audit", name: "Audit Vault", category: "Security", icon: ShieldCheck, blurb: "Tamper-evident logs and SOC2 reports." },
];

const categories = ["All", "Auth", "Payments", "Messaging", "Maps", "Database", "AI", "Email", "Files", "Deploy", "DNS", "Security"];

export function MarketplaceGrid({ context }: { context?: "workspace" | "marketing" }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const list = all.filter(
    (m) =>
      (cat === "All" || m.category === cat) &&
      (q === "" || m.name.toLowerCase().includes(q.toLowerCase()) || m.blurb.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div>
      <div className="flex flex-col gap-3 px-5 py-5 md:flex-row md:items-center md:px-8">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search modules…"
            className="input-base pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest transition ${
                cat === c
                  ? "border-violet-400/50 bg-violet-500/15 text-violet-100"
                  : "border-white/5 text-on-surface-variant hover:border-white/15"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 px-5 pb-10 md:grid-cols-2 md:px-8 lg:grid-cols-3">
        {list.map((m) => (
          <motion.article
            key={m.id}
            layout
            className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-5 transition hover:border-violet-500/30 hover:bg-white/[0.04]"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-cyan opacity-0 blur-3xl transition group-hover:opacity-15" />
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300 ring-1 ring-violet-500/20">
                  <m.icon size={18} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">{m.name}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{m.category}</p>
                </div>
              </div>
              {m.recommended && (
                <span className="chip text-cyber-cyan"><Sparkles size={10} /> B picks</span>
              )}
            </div>
            <p className="mt-3 text-sm text-on-surface-variant">{m.blurb}</p>
            <div className="mt-5 flex items-center justify-between">
              {m.installed ? (
                <span className="chip text-success-emerald">● installed</span>
              ) : (
                <span className="chip">● available</span>
              )}
              <button className={m.installed ? "btn-ghost !px-3 !py-1.5 text-[10px]" : "btn-primary !px-3 !py-1.5 text-[10px]"}>
                {m.installed ? "Configure" : "Install"}
              </button>
            </div>
          </motion.article>
        ))}
      </div>
      {context === "workspace" && (
        <div className="mx-5 mb-10 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] p-5 md:mx-8">
          <p className="label-caps mb-2 text-cyber-cyan">Ask B</p>
          <p className="text-on-surface">
            “I need payments.” “I need authentication.” “I need maps.” — B picks and installs the right
            module for your project, configures it, and exposes the APIs you need.
          </p>
        </div>
      )}
    </div>
  );
}
