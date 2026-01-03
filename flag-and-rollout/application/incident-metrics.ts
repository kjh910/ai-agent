import { Incident } from "@/lib/schemas/incidents";
import { isActiveIncident } from "@/domain/incident";

export type IncidentMetrics = {
  openIncidents: number;
  sev1Count: number;
};

export function computeIncidentMetrics(incidents: Incident[]): IncidentMetrics {
  return incidents.reduce<IncidentMetrics>(
    (metrics, incident) => {
      if (isActiveIncident(incident)) {
        metrics.openIncidents += 1;
      }
      if (incident.severity === "Sev1") {
        metrics.sev1Count += 1;
      }
      return metrics;
    },
    { openIncidents: 0, sev1Count: 0 }
  );
}
