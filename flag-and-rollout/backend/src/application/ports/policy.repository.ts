import { Policy } from "../../domain/entities/policy";

export interface PolicyRepository {
  getAll(): Promise<Policy[]>;
}
