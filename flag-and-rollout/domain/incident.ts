import { Incident } from "@/lib/schemas/incidents";

const severityRank: Record<Incident["severity"], number> = {
  Sev1: 1,
  Sev2: 2,
  Sev3: 3,
  Sev4: 4
};

export function isActiveIncident(incident: Incident): boolean {
  return incident.status !== "Resolved";
}

export function compareSeverity(a: Incident, b: Incident): number {
  return severityRank[a.severity] - severityRank[b.severity];
}
