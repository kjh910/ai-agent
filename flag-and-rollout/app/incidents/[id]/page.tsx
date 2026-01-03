import { IncidentTimeline } from "@/components/incident-timeline";
import { PageHeader } from "@/components/page-header";
import { RunbookSteps } from "@/components/runbook-steps";
import { SimilarIncidents } from "@/components/similar-incidents";
import { StatusBadge, SeverityBadge } from "@/components/badges";
import { incidentDetail } from "@/lib/mock-data";

export default function IncidentDetailPage({
  params
}: {
  params: { id: string };
}) {
  const detail = incidentDetail;

  return (
    <div className="space-y-6">
      <PageHeader
        title={`Incident ${params.id}`}
        description="Detailed view of active response, impacted systems, and next steps."
        actions={
          <button className="rounded-md bg-rose-500/20 px-4 py-2 text-xs font-semibold text-rose-200">
            Escalate
          </button>
        }
      />
      <section className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              {detail.service}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              {detail.title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">{detail.summary}</p>
          </div>
          <div className="flex flex-col items-end gap-2 text-xs text-slate-400">
            <SeverityBadge severity={detail.severity} />
            <StatusBadge status={detail.status} />
            <p>Started: {detail.startedAt}</p>
            <p>Owner: {detail.owner}</p>
          </div>
        </div>
      </section>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <IncidentTimeline events={detail.timeline} />
          <RunbookSteps steps={detail.runbook} />
        </div>
        <div className="space-y-6">
          <SimilarIncidents items={detail.similarIncidents} />
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
            <h3 className="text-sm font-semibold text-white">AI Response</h3>
            <p className="mt-2 text-xs text-slate-400">
              TODO: Summaries must be schema-valid JSON with human approval.
            </p>
            <pre className="mt-3 rounded-lg bg-slate-950/70 p-3 text-xs text-slate-300">
{`{
  "summary": "Partner timeouts increasing latency.",
  "recommended_actions": ["Throttle traffic", "Notify partner"],
  "confidence": 0.64
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
