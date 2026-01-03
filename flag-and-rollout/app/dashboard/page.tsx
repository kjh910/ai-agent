import { KpiCard } from "@/components/kpi-card";
import { IncidentTable } from "@/components/incident-table";
import { PageHeader } from "@/components/page-header";
import { incidents, kpiCards } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard Overview"
        description="Realtime health snapshot across incidents and rollouts."
      />
      <section className="grid gap-4 md:grid-cols-3">
        {kpiCards.map((card) => (
          <KpiCard key={card.id} {...card} />
        ))}
      </section>
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Active Incidents</h2>
          <span className="text-xs text-slate-400">
            TODO: live updates via websocket
          </span>
        </div>
        <IncidentTable incidents={incidents} />
      </section>
    </div>
  );
}
