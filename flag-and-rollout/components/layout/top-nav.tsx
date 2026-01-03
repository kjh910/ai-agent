import Link from "next/link";

export function TopNav() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 text-sm font-semibold text-indigo-200">
            AO
          </div>
          <div>
            <p className="text-sm font-semibold">AIOps Command</p>
            <p className="text-xs text-slate-400">Realtime incident oversight</p>
          </div>
        </div>
        <nav className="flex items-center gap-6 text-sm text-slate-300">
          <Link className="hover:text-white" href="/dashboard">
            Overview
          </Link>
          <Link className="hover:text-white" href="/incidents">
            Incidents
          </Link>
          <Link className="hover:text-white" href="/features">
            Feature Flags
          </Link>
          <Link className="hover:text-white" href="/settings">
            Settings
          </Link>
        </nav>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-200">
            All systems normal
          </span>
          <span>On-call: SRE West</span>
        </div>
      </div>
    </header>
  );
}
