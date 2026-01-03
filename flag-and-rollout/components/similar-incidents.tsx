import Link from "next/link";

import { SimilarIncident } from "@/lib/schemas/incidents";

export function SimilarIncidents({
  items
}: {
  items: SimilarIncident[];
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
      <h3 className="text-sm font-semibold text-white">Similar Incidents</h3>
      <p className="mt-1 text-xs text-slate-400">
        Mocked recommendations. TODO: connect vector retrieval.
      </p>
      <ul className="mt-4 space-y-3">
        {items.map((incident) => (
          <li key={incident.id} className="flex items-center justify-between">
            <div>
              <Link
                href={`/incidents/${incident.id}`}
                className="text-sm font-semibold text-indigo-200 hover:text-indigo-100"
              >
                {incident.id}
              </Link>
              <p className="text-xs text-slate-400">{incident.title}</p>
            </div>
            <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">
              {Math.round(incident.similarity * 100)}% match
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
