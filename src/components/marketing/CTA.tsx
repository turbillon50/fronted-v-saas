import Link from "next/link";

export function CTA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-container px-5 py-24 md:px-margin-desktop md:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink p-10 text-center md:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/30 blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyber-cyan/20 blur-[120px]" />
          <span className="label-caps text-cyber-cyan">Begin</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl text-balance">
            Stop assembling tools. Operate a product.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-on-surface-variant">
            Your stack, your domains, your secrets, your deploys — orchestrated by B in a single
            conversational workspace.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/sign-up" className="btn-primary">
              Create your VForge
            </Link>
            <Link href="/pricing" className="btn-ghost">
              See pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
