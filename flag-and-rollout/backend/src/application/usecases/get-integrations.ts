import { IntegrationRepository } from "../ports/integration.repository";
import { Integration } from "../../domain/entities/integration";

export class GetIntegrations {
  constructor(private readonly repository: IntegrationRepository) {}

  async execute(): Promise<Integration[]> {
    return this.repository.getAll();
  }
}
