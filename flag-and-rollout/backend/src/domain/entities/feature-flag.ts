export type FeatureStatus = "Off" | "Limited" | "On" | "Paused";

export type FeatureMetric = {
  label: string;
  value: string;
  delta?: string;
};

export type FeatureFlag = {
  id: string;
  name: string;
  description: string;
  owner: string;
  status: FeatureStatus;
  rolloutPercentage: number;
  approvalRequired: boolean;
  lastUpdated: string;
  metrics: FeatureMetric[];
};
