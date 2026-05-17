"use client";

import Link from "next/link";
import { VWordmark } from "@/components/brand/VMark";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/#product", label: "Product" },
  { href: "/#workspace", label: "Workspace" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/glossary", label: "Glossary" },
  { href: "/pricing", label: "Pricing" },
];

export function MarketingHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-void/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-5 md:px-margin-desktop">
        <Link href="/" aria-label="VForge home" className="flex items-center gap-2">
          <VWordmark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[12px] uppercase tracking-[0.18em] text-on-surface-variant transition hover:text-on-surface"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/sign-in" className="btn-ghost">
            Sign in
          </Link>
          <Link href="/sign-up" className="btn-primary">
            Get Access
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-md border border-white/10 p-2 text-on-surface"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-void/95 md:hidden">
          <div className="mx-auto flex max-w-container flex-col gap-1 px-5 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 font-mono text-[12px] uppercase tracking-[0.18em] text-on-surface-variant hover:bg-white/5 hover:text-on-surface"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Link href="/sign-in" className="btn-ghost flex-1">
                Sign in
              </Link>
              <Link href="/sign-up" className="btn-primary flex-1">
                Get Access
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
