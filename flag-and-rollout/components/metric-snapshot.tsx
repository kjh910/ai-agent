import { FeatureMetric } from "@/lib/schemas/features";

export function MetricSnapshot({ metrics }: { metrics: FeatureMetric[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-lg border border-slate-800 bg-slate-950/60 p-3"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            {metric.label}
          </p>
          <p className="mt-2 text-lg font-semibold text-white">
            {metric.value}
          </p>
          {metric.delta ? (
            <p className="text-xs text-emerald-300">{metric.delta}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
