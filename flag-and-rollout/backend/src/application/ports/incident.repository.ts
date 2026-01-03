import { Incident, TimelineEntry } from "../../domain/entities/incident";

export interface IncidentRepository {
  getAll(): Promise<Incident[]>;
  getById(id: string): Promise<Incident | null>;
  upsert(incident: Incident): Promise<void>;
  addTimelineEntry(id: string, entry: TimelineEntry): Promise<void>;
}
