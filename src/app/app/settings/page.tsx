import { PageHeader } from "@/components/workspace/PageHeader";
import { Bell, CreditCard, KeyRound, Palette, ShieldCheck, Users } from "lucide-react";

const sections = [
  { icon: Users, title: "Profile", body: "Your name, role, time zone and avatar." },
  { icon: Palette, title: "Appearance", body: "Cinematic dark is the only mode. Accent intensity controls." },
  { icon: Bell, title: "Notifications", body: "Where to ping you when B needs approval." },
  { icon: ShieldCheck, title: "Security", body: "MFA, devices, SSO and session policies." },
  { icon: KeyRound, title: "Tokens", body: "Personal tokens for CLI and CI/CD access." },
  { icon: CreditCard, title: "Billing", body: "Plan, invoices and seats." },
];

export default function SettingsPage() {
  return (
    <>
      <PageHeader eyebrow="Settings" title="Tune VForge to your style." description="Everything that shapes how B works for you." />
      <div className="grid grid-cols-1 gap-3 p-5 md:grid-cols-2 md:p-8 xl:grid-cols-3">
        {sections.map((s) => (
          <article key={s.title} className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition hover:border-violet-500/30">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300 ring-1 ring-violet-500/20">
                <s.icon size={18} />
              </div>
              <h3 className="font-display text-base font-semibold">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm text-on-surface-variant">{s.body}</p>
            <button className="btn-ghost mt-5 !px-3 !py-1.5 text-[10px]">Open</button>
          </article>
        ))}
      </div>
    </>
  );
}
