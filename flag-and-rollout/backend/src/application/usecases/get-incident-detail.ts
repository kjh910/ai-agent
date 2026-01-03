import { IncidentRepository } from "../ports/incident.repository";
import { Incident } from "../../domain/entities/incident";

export class GetIncidentDetail {
  constructor(private readonly incidentRepository: IncidentRepository) {}

  async execute(id: string): Promise<Incident> {
    const incident = await this.incidentRepository.getById(id);
    if (!incident) {
      throw new Error("Incident not found");
    }
    return incident;
  }
}
