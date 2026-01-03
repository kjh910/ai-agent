import { PolicyRepository } from "../../application/ports/policy.repository";
import { Policy } from "../../domain/entities/policy";

export class InMemoryPolicyRepository implements PolicyRepository {
  private policies: Policy[] = [
    {
      id: "policy-1",
      title: "Auto-rollback policy",
      description: "Trigger rollback after 3 consecutive Sev1 alerts."
    },
    {
      id: "policy-2",
      title: "Incident communications",
      description: "Post updates to #incident-room every 15 minutes."
    }
  ];

  async getAll(): Promise<Policy[]> {
    return [...this.policies];
  }
}
