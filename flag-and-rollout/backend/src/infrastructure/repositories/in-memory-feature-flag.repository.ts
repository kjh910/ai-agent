import { FeatureFlagRepository } from "../../application/ports/feature-flag.repository";
import { FeatureFlag } from "../../domain/entities/feature-flag";

export class InMemoryFeatureFlagRepository implements FeatureFlagRepository {
  private flags: FeatureFlag[] = [
    {
      id: "flag-1",
      name: "Checkout Autosave",
      description: "Autosave carts during checkout recovery.",
      owner: "Checkout Team",
      status: "Limited",
      rolloutPercentage: 35,
      approvalRequired: true,
      lastUpdated: "2024-06-17 16:40 UTC",
      metrics: [
        { label: "Crash-free", value: "99.2%", delta: "+0.3%" },
        { label: "p95 latency", value: "420ms", delta: "-18ms" }
      ]
    },
    {
      id: "flag-2",
      name: "Search relevance v3",
      description: "New ranking model behind gradual rollout.",
      owner: "Discovery",
      status: "On",
      rolloutPercentage: 100,
      approvalRequired: false,
      lastUpdated: "2024-06-17 12:05 UTC",
      metrics: [
        { label: "CTR", value: "+4.1%" },
        { label: "Latency", value: "260ms", delta: "+12ms" }
      ]
    }
  ];

  async getAll(): Promise<FeatureFlag[]> {
    return [...this.flags];
  }

  async getById(id: string): Promise<FeatureFlag | null> {
    return this.flags.find((flag) => flag.id === id) ?? null;
  }

  async update(flag: FeatureFlag): Promise<void> {
    const index = this.flags.findIndex((item) => item.id === flag.id);
    if (index >= 0) {
      this.flags[index] = flag;
      return;
    }
    this.flags.push(flag);
  }
}
