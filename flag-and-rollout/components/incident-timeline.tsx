import { IncidentTimelineEvent } from "@/lib/schemas/incidents";

export function IncidentTimeline({
  events
}: {
  events: IncidentTimelineEvent[];
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
      <h3 className="text-sm font-semibold text-white">Timeline</h3>
      <ul className="mt-4 space-y-4">
        {events.map((event) => (
          <li key={event.time} className="flex gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-xs text-indigo-200">
              {event.time}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-100">
                {event.title}
              </p>
              <p className="text-xs text-slate-400">{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
