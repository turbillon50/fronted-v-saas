"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { VWatermark } from "@/components/brand/VWatermark";
import { OperatorPreview } from "./OperatorPreview";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/5">
      <VWatermark />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-violet-aura" />

      <div className="mx-auto max-w-container px-5 pt-24 pb-20 md:px-margin-desktop md:pt-32 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <span className="chip mb-6 border-violet-500/30 bg-violet-500/5 text-violet-200">
            <Sparkles size={12} className="text-cyan-400" />
            Introducing B — your AI operator
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-[72px]">
            Build and operate complete{" "}
            <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              products
            </span>{" "}
            through conversation.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">
            VForge is an AI-native operational workspace. Generate frontend and backend, manage
            repositories, deploy infrastructure, connect integrations, secrets and domains — all
            orchestrated by <span className="text-cyan-400">B</span>, your conversational operator.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Link href="/sign-up" className="btn-primary group">
              Start with B
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/glossary" className="btn-ghost">
              Watch the tour
            </Link>
          </div>

          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            No credit card · GitHub · Vercel · Clerk · Stripe · Twilio · Maps
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 md:mt-20"
        >
          <OperatorPreview />
        </motion.div>
      </div>
    </section>
  );
}
