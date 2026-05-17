import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { VWordmark } from "@/components/brand/VMark";
import { VWatermark } from "@/components/brand/VWatermark";
import { Sparkles } from "lucide-react";

export default function SignInPage() {
  const hasClerk = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

  return (
    <div className="relative isolate min-h-dvh overflow-hidden">
      <VWatermark />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-violet-aura" />

      <header className="relative z-10 mx-auto flex max-w-container items-center justify-between px-5 py-6 md:px-margin-desktop">
        <Link href="/"><VWordmark /></Link>
        <Link href="/sign-up" className="font-mono text-[11px] uppercase tracking-[0.18em] text-on-surface-variant hover:text-on-surface">
          Don’t have access? Sign up →
        </Link>
      </header>

      <main className="relative z-10 mx-auto grid max-w-container grid-cols-1 gap-12 px-5 pb-20 md:grid-cols-2 md:px-margin-desktop md:pt-10">
        <section className="hidden md:flex flex-col justify-center">
          <span className="chip mb-5 border-violet-500/30 bg-violet-500/5 text-violet-200 w-fit">
            <Sparkles size={12} className="text-cyber-cyan" /> Operator-grade workspace
          </span>
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
            Welcome back to your forge.
          </h1>
          <p className="mt-4 max-w-md text-on-surface-variant">
            B is standing by. Resume conversations, audit recent deploys, rotate secrets — all from
            a single calm surface.
          </p>
          <ul className="mt-8 space-y-2 font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
            <li>· End-to-end encrypted secrets</li>
            <li>· SOC2-ready audit trails</li>
            <li>· SSO with GitHub & Google</li>
          </ul>
        </section>

        <section className="flex items-start justify-center">
          {hasClerk ? (
            <SignIn signUpUrl="/sign-up" forceRedirectUrl="/app" />
          ) : (
            <ClerkPlaceholder mode="sign-in" />
          )}
        </section>
      </main>
    </div>
  );
}

function ClerkPlaceholder({ mode }: { mode: "sign-in" | "sign-up" }) {
  return (
    <div className="glass-strong w-full max-w-md rounded-2xl p-8">
      <h2 className="font-display text-2xl font-semibold">
        {mode === "sign-in" ? "Sign in to VForge" : "Create your VForge"}
      </h2>
      <p className="mt-2 text-sm text-on-surface-variant">
        Authentication is powered by Clerk. Add{" "}
        <code className="font-mono text-cyber-cyan">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> and{" "}
        <code className="font-mono text-cyber-cyan">CLERK_SECRET_KEY</code> to enable the full flow.
      </p>
      <div className="mt-6 space-y-3">
        <button className="btn-ghost w-full justify-start">Continue with GitHub</button>
        <button className="btn-ghost w-full justify-start">Continue with Google</button>
        <div className="my-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted">
          <span className="h-px flex-1 bg-white/10" /> or <span className="h-px flex-1 bg-white/10" />
        </div>
        <input className="input-base" placeholder="you@studio.com" />
        <input className="input-base" placeholder="••••••••" type="password" />
        <Link href="/onboarding" className="btn-primary w-full">
          {mode === "sign-in" ? "Enter VForge" : "Continue"}
        </Link>
      </div>
    </div>
  );
}

export { ClerkPlaceholder };
