import { PolicyRepository } from "../ports/policy.repository";
import { Policy } from "../../domain/entities/policy";

export class GetPolicies {
  constructor(private readonly repository: PolicyRepository) {}

  async execute(): Promise<Policy[]> {
    return this.repository.getAll();
  }
}
