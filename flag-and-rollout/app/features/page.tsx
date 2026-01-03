import { FeatureFlagCard } from "@/components/feature-flag-card";
import { PageHeader } from "@/components/page-header";
import { featureFlags } from "@/lib/mock-data";

export default function FeaturesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Feature Flags"
        description="Coordinate safe rollout and monitor feature health."
        actions={
          <button className="rounded-md bg-indigo-500/20 px-4 py-2 text-xs font-semibold text-indigo-200">
            Request approval
          </button>
        }
      />
      <div className="grid gap-6">
        {featureFlags.map((flag) => (
          <FeatureFlagCard key={flag.id} flag={flag} />
        ))}
      </div>
    </div>
  );
}
