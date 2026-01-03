import { FilterBar } from "@/components/filter-bar";
import { IncidentTable } from "@/components/incident-table";
import { PageHeader } from "@/components/page-header";
import { incidents } from "@/lib/mock-data";

export default function IncidentsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Incidents"
        description="Track, triage, and coordinate incident response."
        actions={
          <button className="rounded-md bg-indigo-500/20 px-4 py-2 text-xs font-semibold text-indigo-200">
            New incident
          </button>
        }
      />
      <FilterBar />
      <IncidentTable incidents={incidents} />
    </div>
  );
}
