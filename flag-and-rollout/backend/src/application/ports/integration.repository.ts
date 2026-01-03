import { Integration } from "../../domain/entities/integration";

export interface IntegrationRepository {
  getAll(): Promise<Integration[]>;
}
