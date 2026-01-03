import { RunbookStep } from "@/lib/schemas/incidents";

export function RunbookSteps({ steps }: { steps: RunbookStep[] }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
      <h3 className="text-sm font-semibold text-white">Runbook Steps</h3>
      <ul className="mt-4 space-y-3">
        {steps.map((step, index) => (
          <li key={`${step.step}-${index}`} className="space-y-1">
            <p className="text-sm text-slate-200">{step.step}</p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Owner: {step.owner}</span>
              <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">
                {step.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
