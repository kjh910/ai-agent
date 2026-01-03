import { Incident } from "../../domain/entities/incident";
import { IncidentDto, incidentSchema } from "../dto/incidents.dto";

export function mapIncidentToDto(incident: Incident): IncidentDto {
  return incidentSchema.parse(incident);
}
