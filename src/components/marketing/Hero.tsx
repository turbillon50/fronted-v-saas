"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { VWatermark } from "@/components/brand/VWatermark";
import { OperatorPreview } from "./OperatorPreview";
import { useT } from "@/i18n/AppProviders";

export function Hero() {
  const t = useT();
  return (
    <section className="relative isolate overflow-hidden border-b border-app">
      <VWatermark />
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-violet-aura" />

      <div className="mx-auto max-w-container px-5 pt-24 pb-20 md:px-margin-desktop md:pt-32 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <span className="chip mb-6 border-violet-500/30 bg-violet-500/5 text-violet-200">
            <Sparkles size={12} className="text-cyber-cyan" />
            {t.marketing.hero_eyebrow}
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-[72px]">
            {t.marketing.hero_title_a}{" "}
            <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {t.marketing.hero_title_b}
            </span>{" "}
            {t.marketing.hero_title_c}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">
            {t.marketing.hero_subtitle}
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Link href="/sign-up" className="btn-primary group">
              {t.marketing.hero_cta_primary}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/glossary" className="btn-ghost">
              {t.marketing.hero_cta_secondary}
            </Link>
          </div>

          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            {t.marketing.hero_trust}
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
