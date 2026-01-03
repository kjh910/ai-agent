export type IncidentSeverity = "Sev1" | "Sev2" | "Sev3" | "Sev4";
export type IncidentStatus =
  | "Investigating"
  | "Mitigating"
  | "Monitoring"
  | "Resolved";

export type TimelineEntry = {
  id: string;
  time: string;
  title: string;
  description: string;
};

export type RunbookStep = {
  step: string;
  owner: string;
  status: "Done" | "In Progress" | "Blocked";
};

export type SimilarIncident = {
  id: string;
  title: string;
  similarity: number;
};

export type Incident = {
  id: string;
  title: string;
  service: string;
  severity: IncidentSeverity;
  status: IncidentStatus;
  startedAt: string;
  owner: string;
  summary: string;
  timeline: TimelineEntry[];
  runbook: RunbookStep[];
  similarIncidents: SimilarIncident[];
};
