"use client";

import Link from "next/link";
import { VWordmark } from "@/components/brand/VMark";
import { useT, interpolate } from "@/i18n/AppProviders";

export function MarketingFooter() {
  const t = useT();
  return (
    <footer className="border-t border-app bg-ink">
      <div className="mx-auto grid max-w-container grid-cols-2 gap-12 px-5 py-16 md:grid-cols-4 md:px-margin-desktop">
        <div className="col-span-2 space-y-5">
          <VWordmark />
          <p className="max-w-sm text-sm leading-relaxed text-on-surface-variant">
            {t.marketing.footer_tagline}
          </p>
        </div>
        <div>
          <h4 className="label-caps mb-4 text-on-surface">{t.marketing.footer_platform}</h4>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li><Link href="/#workspace" className="hover:text-cyber-cyan">{t.common.nav_workspace}</Link></li>
            <li><Link href="/marketplace" className="hover:text-cyber-cyan">{t.common.nav_marketplace}</Link></li>
            <li><Link href="/glossary" className="hover:text-cyber-cyan">{t.common.nav_glossary}</Link></li>
            <li><Link href="/pricing" className="hover:text-cyber-cyan">{t.common.nav_pricing}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="label-caps mb-4 text-on-surface">{t.marketing.footer_company}</h4>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li><a className="hover:text-cyber-cyan" href="#">{t.marketing.footer_about}</a></li>
            <li><a className="hover:text-cyber-cyan" href="#">{t.marketing.footer_manifesto}</a></li>
            <li><a className="hover:text-cyber-cyan" href="#">{t.marketing.footer_security}</a></li>
            <li><a className="hover:text-cyber-cyan" href="#">{t.marketing.footer_contact}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-app">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-4 px-5 py-6 md:flex-row md:px-margin-desktop">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {interpolate(t.marketing.footer_legal, { year: new Date().getFullYear() })}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {t.marketing.footer_system}
          </p>
        </div>
      </div>
    </footer>
  );
}
