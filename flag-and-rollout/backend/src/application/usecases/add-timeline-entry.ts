import { IncidentRepository } from "../ports/incident.repository";
import { TimelineEntry } from "../../domain/entities/incident";

export class AddTimelineEntry {
  constructor(private readonly incidentRepository: IncidentRepository) {}

  async execute(incidentId: string, entry: TimelineEntry): Promise<void> {
    await this.incidentRepository.addTimelineEntry(incidentId, entry);
  }
}
