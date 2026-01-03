import { IncidentRepository } from "../../application/ports/incident.repository";
import { Incident, TimelineEntry } from "../../domain/entities/incident";

export class InMemoryIncidentRepository implements IncidentRepository {
  private incidents: Incident[] = [
    {
      id: "INC-1429",
      title: "Latency spike in checkout",
      service: "Payments API",
      severity: "Sev1",
      status: "Mitigating",
      startedAt: "2024-06-18 09:12 UTC",
      owner: "A. Kim",
      summary: "Investigating increased p95 latency driven by partner timeouts.",
      timeline: [
        {
          id: "tl-1",
          time: "09:12",
          title: "Alert fired",
          description: "p95 latency breached 800ms threshold."
        }
      ],
      runbook: [
        { step: "Confirm partner status page.", owner: "A. Kim", status: "Done" },
        {
          step: "Throttle non-critical traffic.",
          owner: "M. Patel",
          status: "In Progress"
        }
      ],
      similarIncidents: [
        {
          id: "INC-1398",
          title: "Checkout latency from partner timeout",
          similarity: 0.91
        }
      ]
    }
  ];

  async getAll(): Promise<Incident[]> {
    return [...this.incidents];
  }

  async getById(id: string): Promise<Incident | null> {
    return this.incidents.find((incident) => incident.id === id) ?? null;
  }

  async upsert(incident: Incident): Promise<void> {
    const index = this.incidents.findIndex((item) => item.id === incident.id);
    if (index >= 0) {
      this.incidents[index] = incident;
      return;
    }
    this.incidents.push(incident);
  }

  async addTimelineEntry(id: string, entry: TimelineEntry): Promise<void> {
    const incident = await this.getById(id);
    if (!incident) {
      throw new Error("Incident not found");
    }
    incident.timeline = [...incident.timeline, entry];
    await this.upsert(incident);
  }
}
