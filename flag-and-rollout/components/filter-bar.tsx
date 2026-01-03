export function FilterBar() {
  return (
    <div className="mb-5 flex flex-wrap items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
      <div className="flex items-center gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
          Filters
        </span>
        <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">
          TODO: wire to backend
        </span>
      </div>
      <select className="rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2 text-slate-200">
        <option>All Severities</option>
        <option>Sev1</option>
        <option>Sev2</option>
        <option>Sev3</option>
        <option>Sev4</option>
      </select>
      <select className="rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2 text-slate-200">
        <option>All Statuses</option>
        <option>Investigating</option>
        <option>Mitigating</option>
        <option>Monitoring</option>
        <option>Resolved</option>
      </select>
      <input
        className="flex-1 rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2 text-slate-200"
        placeholder="Search incidents"
      />
      <button className="rounded-md bg-indigo-500/20 px-3 py-2 text-xs font-semibold text-indigo-200">
        Export list
      </button>
    </div>
  );
}
