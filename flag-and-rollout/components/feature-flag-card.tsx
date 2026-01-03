import { FeatureFlag } from "@/lib/schemas/features";
import { MetricSnapshot } from "@/components/metric-snapshot";

export function FeatureFlagCard({ flag }: { flag: FeatureFlag }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            {flag.owner}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">{flag.name}</h3>
          <p className="mt-1 text-sm text-slate-400">{flag.description}</p>
        </div>
        <div className="text-right text-xs text-slate-400">
          <p>Status</p>
          <p className="mt-1 rounded-full bg-slate-800 px-3 py-1 text-slate-200">
            {flag.status}
          </p>
          <p className="mt-2">Updated: {flag.lastUpdated}</p>
        </div>
      </div>
      <div className="mt-4 rounded-lg border border-slate-800 bg-slate-950/60 p-4">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Rollout</span>
          <span>{flag.rolloutPercentage}%</span>
        </div>
        <input
          className="mt-3 w-full accent-indigo-500"
          type="range"
          min={0}
          max={100}
          value={flag.rolloutPercentage}
          disabled={flag.approvalRequired}
          readOnly
        />
        {flag.approvalRequired ? (
          <p className="mt-2 text-xs text-amber-300">
            Approval required before adjusting rollout.
          </p>
        ) : (
          <p className="mt-2 text-xs text-emerald-300">
            Rollout adjustments allowed.
          </p>
        )}
      </div>
      <div className="mt-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
          Metrics Snapshot (mocked)
        </p>
        <div className="mt-3">
          <MetricSnapshot metrics={flag.metrics} />
        </div>
      </div>
    </div>
  );
}
