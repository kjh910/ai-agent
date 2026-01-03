import { Incident } from "../../domain/entities/incident";
import { IncidentRepository } from "../ports/incident.repository";
import { CreateOrUpdateIncidentRequest } from "../dto/incidents.dto";

export class CreateOrUpdateIncidentFromAlert {
  constructor(private readonly incidentRepository: IncidentRepository) {}

  async execute(request: CreateOrUpdateIncidentRequest): Promise<Incident> {
    const existing = await this.incidentRepository.getById(request.id);

    const baseIncident: Incident = existing ?? {
      id: request.id,
      title: request.title,
      service: request.service,
      severity: request.severity,
      status: request.status,
      startedAt: request.startedAt,
      owner: request.owner,
      summary: request.summary ?? "Alert ingested.",
      timeline: [],
      runbook: [
        { step: "Acknowledge alert", owner: request.owner, status: "Done" },
        { step: "Assess impact", owner: request.owner, status: "In Progress" }
      ],
      similarIncidents: []
    };

    const updated: Incident = {
      ...baseIncident,
      title: request.title,
      service: request.service,
      severity: request.severity,
      status: request.status,
      startedAt: request.startedAt,
      owner: request.owner,
      summary: request.summary ?? baseIncident.summary
    };

    await this.incidentRepository.upsert(updated);
    return updated;
  }
}
