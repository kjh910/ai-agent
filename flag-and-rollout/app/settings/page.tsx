import { PageHeader } from "@/components/page-header";

const policies = [
  {
    title: "Auto-rollback policy",
    description: "Trigger rollback after 3 consecutive Sev1 alerts."
  },
  {
    title: "Incident communications",
    description: "Post updates to #incident-room every 15 minutes."
  }
];

const integrations = [
  {
    title: "PagerDuty",
    status: "Connected"
  },
  {
    title: "Slack",
    status: "Connected"
  },
  {
    title: "ServiceNow",
    status: "Pending approval"
  }
];

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Settings"
        description="Policies, escalations, and integration controls."
      />
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="text-sm font-semibold text-white">Policies</h3>
          <ul className="mt-4 space-y-3">
            {policies.map((policy) => (
              <li
                key={policy.title}
                className="rounded-lg border border-slate-800 bg-slate-950/60 p-4"
              >
                <p className="text-sm font-semibold text-slate-100">
                  {policy.title}
                </p>
                <p className="text-xs text-slate-400">{policy.description}</p>
              </li>
            ))}
          </ul>
          <button className="mt-4 rounded-md bg-indigo-500/20 px-4 py-2 text-xs font-semibold text-indigo-200">
            Add policy
          </button>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="text-sm font-semibold text-white">Integrations</h3>
          <ul className="mt-4 space-y-3">
            {integrations.map((integration) => (
              <li
                key={integration.title}
                className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 p-4"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-100">
                    {integration.title}
                  </p>
                  <p className="text-xs text-slate-400">{integration.status}</p>
                </div>
                <button className="rounded-md bg-slate-800 px-3 py-2 text-xs text-slate-200">
                  Manage
                </button>
              </li>
            ))}
          </ul>
          <button className="mt-4 rounded-md bg-indigo-500/20 px-4 py-2 text-xs font-semibold text-indigo-200">
            Add integration
          </button>
        </div>
      </section>
    </div>
  );
}
