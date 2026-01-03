import { FeatureFlag } from "../../domain/entities/feature-flag";
import { FeatureFlagDto, featureFlagSchema } from "../dto/feature-flags.dto";

export function mapFeatureFlagToDto(flag: FeatureFlag): FeatureFlagDto {
  return featureFlagSchema.parse(flag);
}
