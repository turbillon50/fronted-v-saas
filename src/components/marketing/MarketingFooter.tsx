import Link from "next/link";
import { VWordmark } from "@/components/brand/VMark";

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="mx-auto grid max-w-container grid-cols-2 gap-12 px-5 py-16 md:grid-cols-4 md:px-margin-desktop">
        <div className="col-span-2 space-y-5">
          <VWordmark />
          <p className="max-w-sm text-sm leading-relaxed text-on-surface-variant">
            VForge is an AI-native operational workspace. Build, deploy and orchestrate every
            service of your product through a single conversation with B.
          </p>
        </div>
        <div>
          <h4 className="label-caps mb-4 text-on-surface">Platform</h4>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li><Link href="/#workspace" className="hover:text-cyber-cyan">Workspace</Link></li>
            <li><Link href="/marketplace" className="hover:text-cyber-cyan">Marketplace</Link></li>
            <li><Link href="/glossary" className="hover:text-cyber-cyan">Glossary</Link></li>
            <li><Link href="/pricing" className="hover:text-cyber-cyan">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="label-caps mb-4 text-on-surface">Company</h4>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li><a className="hover:text-cyber-cyan" href="#">About</a></li>
            <li><a className="hover:text-cyber-cyan" href="#">Manifesto</a></li>
            <li><a className="hover:text-cyber-cyan" href="#">Security</a></li>
            <li><a className="hover:text-cyber-cyan" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-4 px-5 py-6 md:flex-row md:px-margin-desktop">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            © {new Date().getFullYear()} VForge — Operate the future, conversationally.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Zenith Forge System · v0.1
          </p>
        </div>
      </div>
    </footer>
  );
}
