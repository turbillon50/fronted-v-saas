import Link from "next/link";
import { VWordmark } from "@/components/brand/VMark";

export default function OfflinePage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <VWordmark />
      <h1 className="mt-8 font-display text-3xl font-semibold tracking-tight md:text-4xl">
        You’re offline.
      </h1>
      <p className="mt-3 max-w-md text-on-surface-variant">
        B is still here — the workspace shell is cached. We’ll resume live operations as soon as
        you’re back online.
      </p>
      <Link href="/app/chat" className="btn-primary mt-8">
        Open offline shell
      </Link>
    </div>
  );
}
