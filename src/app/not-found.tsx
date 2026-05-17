import Link from "next/link";
import { VWordmark } from "@/components/brand/VMark";

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] bg-violet-aura" />
      <VWordmark />
      <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-cyber-cyan">404 · drift</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
        Nothing to operate here.
      </h1>
      <p className="mt-3 max-w-md text-on-surface-variant">
        That route doesn’t exist — yet. Ask B and we’ll forge it.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn-ghost">Back to landing</Link>
        <Link href="/app/chat" className="btn-primary">Open the workspace</Link>
      </div>
    </div>
  );
}
