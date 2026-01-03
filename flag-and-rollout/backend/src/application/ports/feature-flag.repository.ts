import { FeatureFlag } from "../../domain/entities/feature-flag";

export interface FeatureFlagRepository {
  getAll(): Promise<FeatureFlag[]>;
  getById(id: string): Promise<FeatureFlag | null>;
  update(flag: FeatureFlag): Promise<void>;
}
