import { IncidentRepository } from "../ports/incident.repository";
import { Incident } from "../../domain/entities/incident";

export class GetIncidentList {
  constructor(private readonly incidentRepository: IncidentRepository) {}

  async execute(): Promise<Incident[]> {
    return this.incidentRepository.getAll();
  }
}
