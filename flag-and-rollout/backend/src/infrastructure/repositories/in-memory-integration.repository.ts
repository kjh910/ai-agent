import { IntegrationRepository } from "../../application/ports/integration.repository";
import { Integration } from "../../domain/entities/integration";

export class InMemoryIntegrationRepository implements IntegrationRepository {
  private integrations: Integration[] = [
    { id: "int-1", title: "PagerDuty", status: "Connected" },
    { id: "int-2", title: "Slack", status: "Connected" },
    { id: "int-3", title: "ServiceNow", status: "Pending" }
  ];

  async getAll(): Promise<Integration[]> {
    return [...this.integrations];
  }
}
