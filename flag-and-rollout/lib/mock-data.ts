import { kpiCardSchema } from "@/lib/schemas/kpi";
import {
  incidentDetailSchema,
  incidentSchema
} from "@/lib/schemas/incidents";
import { featureFlagSchema } from "@/lib/schemas/features";

export const kpiCards = kpiCardSchema.array().parse([
  {
    id: "open-incidents",
    label: "Incidents Open",
    value: 12,
    trend: "-2 since yesterday"
  },
  {
    id: "sev1",
    label: "Sev1 Count",
    value: 2,
    trend: "+1 in last 4h"
  },
  {
    id: "rollbacks",
    label: "Rollbacks Today",
    value: 3,
    trend: "Stable"
  }
]);

export const incidents = incidentSchema.array().parse([
  {
    id: "INC-1429",
    title: "Latency spike in checkout",
    service: "Payments API",
    severity: "Sev1",
    status: "Mitigating",
    startedAt: "2024-06-18 09:12 UTC",
    owner: "A. Kim"
  },
  {
    id: "INC-1430",
    title: "Auth token refresh failures",
    service: "Identity",
    severity: "Sev2",
    status: "Investigating",
    startedAt: "2024-06-18 09:35 UTC",
    owner: "M. Patel"
  },
  {
    id: "INC-1431",
    title: "Elevated error rate",
    service: "Order Service",
    severity: "Sev3",
    status: "Monitoring",
    startedAt: "2024-06-18 07:58 UTC",
    owner: "S. Lee"
  },
  {
    id: "INC-1432",
    title: "Search indexing delay",
    service: "Catalog",
    severity: "Sev4",
    status: "Resolved",
    startedAt: "2024-06-17 21:10 UTC",
    owner: "T. Gomez"
  }
]);

export const incidentDetail = incidentDetailSchema.parse({
  id: "INC-1429",
  title: "Latency spike in checkout",
  service: "Payments API",
  severity: "Sev1",
  status: "Mitigating",
  startedAt: "2024-06-18 09:12 UTC",
  owner: "A. Kim",
  summary:
    "Investigating increased p95 latency driven by partner timeouts. AI summary output must remain JSON and await human approval.",
  timeline: [
    {
      time: "09:12",
      title: "Alert fired",
      description: "p95 latency breached 800ms threshold."
    },
    {
      time: "09:18",
      title: "Traffic shifted",
      description: "Rerouted 20% traffic away from affected region."
    },
    {
      time: "09:31",
      title: "Partner degraded",
      description: "External payment partner returning 503s."
    }
  ],
  runbook: [
    {
      step: "Confirm partner status page and incident ticket.",
      owner: "A. Kim",
      status: "Done"
    },
    {
      step: "Throttle non-critical traffic.",
      owner: "M. Patel",
      status: "In Progress"
    },
    {
      step: "Prepare rollback plan if latency persists.",
      owner: "S. Lee",
      status: "Blocked"
    }
  ],
  similarIncidents: [
    {
      id: "INC-1398",
      title: "Checkout latency from partner timeout",
      similarity: 0.91
    },
    {
      id: "INC-1405",
      title: "Payment gateway saturation",
      similarity: 0.87
    }
  ]
});

export const featureFlags = featureFlagSchema.array().parse([
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
  },
  {
    id: "flag-3",
    name: "Fraud scoring v2",
    description: "Expanded rules for high-risk regions.",
    owner: "Risk Ops",
    status: "Paused",
    rolloutPercentage: 0,
    approvalRequired: true,
    lastUpdated: "2024-06-16 18:20 UTC",
    metrics: [
      { label: "False positives", value: "1.3%", delta: "-0.2%" },
      { label: "Manual reviews", value: "842" }
    ]
  }
]);
