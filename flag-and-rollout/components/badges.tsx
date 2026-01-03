import { clsx } from "clsx";

import { Incident } from "@/lib/schemas/incidents";

export function SeverityBadge({ severity }: { severity: Incident["severity"] }) {
  const colorMap: Record<Incident["severity"], string> = {
    Sev1: "bg-rose-500/20 text-rose-200",
    Sev2: "bg-amber-500/20 text-amber-200",
    Sev3: "bg-sky-500/20 text-sky-200",
    Sev4: "bg-emerald-500/20 text-emerald-200"
  };

  return (
    <span
      className={clsx(
        "rounded-full px-3 py-1 text-xs font-semibold",
        colorMap[severity]
      )}
    >
      {severity}
    </span>
  );
}

export function StatusBadge({ status }: { status: Incident["status"] }) {
  const colorMap: Record<Incident["status"], string> = {
    Investigating: "bg-slate-500/20 text-slate-200",
    Mitigating: "bg-indigo-500/20 text-indigo-200",
    Monitoring: "bg-amber-500/20 text-amber-200",
    Resolved: "bg-emerald-500/20 text-emerald-200"
  };

  return (
    <span
      className={clsx(
        "rounded-full px-3 py-1 text-xs font-semibold",
        colorMap[status]
      )}
    >
      {status}
    </span>
  );
}
