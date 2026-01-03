import { KpiCard } from "@/lib/schemas/kpi";

export function KpiCard({ label, value, unit, trend }: KpiCard) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <div className="mt-3 flex items-end gap-2">
        <span className="text-3xl font-semibold text-white">{value}</span>
        {unit ? <span className="text-sm text-slate-400">{unit}</span> : null}
      </div>
      {trend ? <p className="mt-2 text-xs text-emerald-300">{trend}</p> : null}
    </div>
  );
}
