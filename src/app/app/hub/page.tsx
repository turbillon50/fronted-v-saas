import { PageHeader } from "@/components/workspace/PageHeader";
import { ArrowRight, BookOpen, Compass, Lightbulb, MessageCircle, Sparkles, Trophy, Users } from "lucide-react";

export default function HubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hub"
        title="A calm place for ideas, knowledge and community."
        description="Templates from other operators, learning paths, and the latest from B."
      />

      <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-12 md:p-8">
        <article className="md:col-span-7 relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-cyan-400/[0.04] p-7">
          <span className="chip border-violet-500/30 bg-violet-500/5 text-violet-200">
            <Sparkles size={11} /> Featured
          </span>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
            “Operate, don’t orchestrate.”
          </h2>
          <p className="mt-3 max-w-xl text-on-surface-variant">
            A short manifesto on why infrastructure should disappear, and why your product deserves
            a single calm surface.
          </p>
          <button className="btn-primary mt-6">Read the essay <ArrowRight size={13} /></button>
          <div className="pointer-events-none absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-violet-500/30 blur-3xl" />
        </article>

        <article className="md:col-span-5 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <BookOpen size={18} className="text-cyber-cyan" />
          <h3 className="mt-3 font-display text-lg font-semibold">Learning paths</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center justify-between rounded-md border border-white/5 px-3 py-2.5">
              <span>Build your first SaaS in 20 minutes</span>
              <ArrowRight size={12} />
            </li>
            <li className="flex items-center justify-between rounded-md border border-white/5 px-3 py-2.5">
              <span>Connect a domain with DNSSEC</span>
              <ArrowRight size={12} />
            </li>
            <li className="flex items-center justify-between rounded-md border border-white/5 px-3 py-2.5">
              <span>Modeling subscriptions with Stripe</span>
              <ArrowRight size={12} />
            </li>
          </ul>
        </article>

        <article className="md:col-span-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <Compass size={18} className="text-violet-300" />
          <h3 className="mt-3 font-display text-lg font-semibold">Templates</h3>
          <p className="mt-2 text-sm text-on-surface-variant">
            Studio booking · Marketplace · Internal tool · Mobile-first PWA.
          </p>
          <button className="btn-ghost mt-5">Browse all</button>
        </article>

        <article className="md:col-span-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <Users size={18} className="text-cyber-cyan" />
          <h3 className="mt-3 font-display text-lg font-semibold">Community</h3>
          <p className="mt-2 text-sm text-on-surface-variant">
            Builders sharing operator recipes, modules and post-mortems.
          </p>
          <button className="btn-ghost mt-5">Open Discord</button>
        </article>

        <article className="md:col-span-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <Lightbulb size={18} className="text-yellow-300" />
          <h3 className="mt-3 font-display text-lg font-semibold">B tips this week</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-on-surface-variant">
            <li>· Use “preview” for risky migrations.</li>
            <li>· Ask B for a security audit monthly.</li>
            <li>· Rotate API keys with one sentence.</li>
          </ul>
        </article>

        <article className="md:col-span-6 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <Trophy size={18} className="text-violet-300" />
          <h3 className="mt-3 font-display text-lg font-semibold">Latest from the Forge</h3>
          <p className="mt-2 text-sm text-on-surface-variant">
            New: Operator Bots, Audit Vault, AI Vision module · We’re hiring · A new keynote drop.
          </p>
          <button className="btn-primary mt-5"><MessageCircle size={13} /> Tell B to summarize</button>
        </article>

        <article className="md:col-span-6 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <h3 className="font-display text-lg font-semibold">Support</h3>
          <p className="mt-2 text-sm text-on-surface-variant">
            Open a thread with a real engineer. Most replies under 4h.
          </p>
          <button className="btn-ghost mt-5">Contact support</button>
        </article>
      </div>
    </>
  );
}
