"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VMark, VWordmark } from "@/components/brand/VMark";
import {
  Activity,
  Bell,
  Boxes,
  ChevronRight,
  GitBranch,
  Globe2,
  KeyRound,
  Layers,
  LifeBuoy,
  MessagesSquare,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/app/chat", label: "Chat with B", icon: MessagesSquare, kbd: "C" },
  { href: "/app/repovision", label: "RepoVision", icon: GitBranch, kbd: "R" },
  { href: "/app/deployments", label: "Deployments", icon: Activity, kbd: "D" },
  { href: "/app/marketplace", label: "Marketplace", icon: Layers, kbd: "M" },
  { href: "/app/integrations", label: "Integrations", icon: Boxes, kbd: "I" },
  { href: "/app/secrets", label: "Secrets Vault", icon: ShieldCheck, kbd: "S" },
  { href: "/app/projects", label: "Projects", icon: Workflow, kbd: "P" },
  { href: "/app/activity", label: "Activity", icon: Bell, kbd: "A" },
  { href: "/app/hub", label: "Hub", icon: Globe2, kbd: "H" },
];

export function WorkspaceShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-dvh bg-void">
      <aside className="sticky top-0 hidden h-dvh w-[260px] shrink-0 flex-col border-r border-white/5 bg-ink md:flex">
        <div className="flex items-center justify-between px-5 py-5">
          <Link href="/app"><VWordmark /></Link>
          <span className="chip">B · ready</span>
        </div>

        <div className="px-3">
          <button className="group flex w-full items-center gap-2 rounded-md border border-white/5 bg-white/[0.02] px-3 py-2 text-left text-sm text-on-surface-variant transition hover:border-white/10">
            <Search size={14} />
            <span className="flex-1 truncate">Quick command</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">⌘K</span>
          </button>
        </div>

        <nav className="mt-4 flex-1 overflow-y-auto px-3 no-scrollbar">
          <p className="label-caps mb-2 px-2 text-muted">Workspace</p>
          {nav.map((item) => {
            const active = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group mb-0.5 flex items-center gap-3 rounded-md px-3 py-2 text-sm transition",
                  active
                    ? "bg-violet-500/15 text-violet-100 ring-1 ring-violet-500/30"
                    : "text-on-surface-variant hover:bg-white/[0.04] hover:text-on-surface"
                )}
              >
                <item.icon size={15} className={active ? "text-cyan-400" : ""} />
                <span className="flex-1">{item.label}</span>
                <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted group-hover:inline">
                  {item.kbd}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/5 p-3">
          <div className="mb-3 rounded-lg border border-white/5 bg-white/[0.02] p-3">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-cyan-400" />
              <p className="label-caps text-muted">B insights</p>
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-on-surface-variant">
              Your <span className="text-on-surface">forge.app</span> latency dropped 12% after the
              last deploy.
            </p>
          </div>
          <Link
            href="/app/settings"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-on-surface-variant hover:bg-white/[0.04] hover:text-on-surface"
          >
            <Settings size={15} /> Settings
          </Link>
          <a
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-on-surface-variant hover:bg-white/[0.04] hover:text-on-surface"
          >
            <LifeBuoy size={15} /> Help
          </a>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <TopBar />
        <div className="pb-24 md:pb-0">{children}</div>
        <MobileNav pathname={pathname || ""} />
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-void/80 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-8">
        <div className="flex items-center gap-2 text-on-surface-variant md:hidden">
          <VMark size={20} />
          <span className="font-display text-sm font-semibold tracking-tight text-on-surface">VForge</span>
        </div>
        <Breadcrumbs />
        <div className="flex items-center gap-2">
          <button
            aria-label="Notifications"
            className="rounded-md border border-white/5 bg-white/[0.02] p-2 text-on-surface-variant hover:text-on-surface"
          >
            <Bell size={15} />
          </button>
          <div className="hidden items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] py-1 pl-1 pr-3 md:flex">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-on-surface">
              you
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function Breadcrumbs() {
  const pathname = usePathname() || "";
  const parts = pathname.split("/").filter(Boolean);
  return (
    <nav className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
      {parts.map((p, i) => (
        <span key={p + i} className="flex items-center gap-1">
          <span className={i === parts.length - 1 ? "text-on-surface" : ""}>{p}</span>
          {i < parts.length - 1 && <ChevronRight size={11} />}
        </span>
      ))}
    </nav>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  const mobileNav = [
    { href: "/app/chat", label: "B", icon: MessagesSquare },
    { href: "/app/deployments", label: "Deploy", icon: Activity },
    { href: "/app/projects", label: "Projects", icon: Workflow },
    { href: "/app/secrets", label: "Vault", icon: KeyRound },
    { href: "/app/activity", label: "Alerts", icon: Bell },
  ];
  return (
    <nav className="fixed inset-x-0 bottom-3 z-40 mx-auto flex max-w-[420px] items-center justify-between gap-1 rounded-2xl border border-white/10 bg-ink/95 px-2 py-1.5 shadow-elev backdrop-blur-xl md:hidden">
      {mobileNav.map((i) => {
        const active = pathname.startsWith(i.href);
        return (
          <Link
            key={i.href}
            href={i.href}
            className={cn(
              "flex flex-1 flex-col items-center gap-0.5 rounded-xl px-2 py-2 transition",
              active ? "bg-violet-500/15 text-violet-100" : "text-on-surface-variant"
            )}
          >
            <i.icon size={16} />
            <span className="font-mono text-[10px] uppercase tracking-widest">{i.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
