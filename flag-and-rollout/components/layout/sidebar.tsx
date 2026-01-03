import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Overview" },
  { href: "/incidents", label: "Incidents" },
  { href: "/features", label: "Feature Flags" },
  { href: "/settings", label: "Settings" }
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-slate-800 bg-slate-900/40 px-6 py-8 lg:block">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
          Navigation
        </p>
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800/70 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-10 space-y-3 rounded-lg border border-slate-800 bg-slate-950/70 p-4">
        <p className="text-xs text-slate-400">On-call playbook</p>
        <p className="text-sm font-semibold text-slate-200">
          Escalate to Incident Commander
        </p>
        <button className="w-full rounded-md bg-indigo-500/20 px-3 py-2 text-xs font-semibold text-indigo-200">
          View escalation path
        </button>
      </div>
    </aside>
  );
}
