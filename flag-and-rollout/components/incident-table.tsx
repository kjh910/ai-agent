import Link from "next/link";

import { Incident } from "@/lib/schemas/incidents";
import { SeverityBadge, StatusBadge } from "@/components/badges";

export function IncidentTable({ incidents }: { incidents: Incident[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900/60 text-xs uppercase tracking-widest text-slate-500">
          <tr>
            <th className="px-4 py-3">Incident</th>
            <th className="px-4 py-3">Service</th>
            <th className="px-4 py-3">Severity</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Started</th>
            <th className="px-4 py-3">Owner</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800 bg-slate-950/40">
          {incidents.map((incident) => (
            <tr key={incident.id} className="hover:bg-slate-900/40">
              <td className="px-4 py-4">
                <Link
                  className="font-semibold text-indigo-200 hover:text-indigo-100"
                  href={`/incidents/${incident.id}`}
                >
                  {incident.id}
                </Link>
                <p className="text-xs text-slate-400">{incident.title}</p>
              </td>
              <td className="px-4 py-4 text-slate-300">{incident.service}</td>
              <td className="px-4 py-4">
                <SeverityBadge severity={incident.severity} />
              </td>
              <td className="px-4 py-4">
                <StatusBadge status={incident.status} />
              </td>
              <td className="px-4 py-4 text-slate-400">{incident.startedAt}</td>
              <td className="px-4 py-4 text-slate-300">{incident.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
