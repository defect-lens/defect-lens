import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  Gauge,
  ScanSearch,
  ShieldCheck,
  TrendingUp,
  Upload,
  Wrench,
} from "lucide-react";

import StatCard from "../../components/dashboard/StatCard";
import RecentInspections from "../../components/dashboard/RecentInspections";

const quickActions = [
  {
    title: "New inspection",
    description:
      "Upload an automotive component image for inspection.",
    icon: ScanSearch,
    path: "/inspection/new",
    accent: "orange",
  },
  {
    title: "Quality analytics",
    description:
      "Explore quality metrics using inspection data.",
    icon: BarChart3,
    path: "/analytics/quality",
    accent: "blue",
  },
  {
    title: "Predictive intelligence",
    description:
      "Explore maintenance insights and predictive analysis.",
    icon: Gauge,
    path: "/analytics/predictive",
    accent: "purple",
  },
] as const;

const capabilities = [
  {
    icon: ScanSearch,
    title: "Visual defect detection",
    description:
      "Designed to identify surface scratches, dents, cracks, rust and other supported defect classes.",
  },
  {
    icon: ShieldCheck,
    title: "Explainable inspection",
    description:
      "Present model findings alongside visual evidence and explanations when inference is available.",
  },
  {
    icon: TrendingUp,
    title: "Quality intelligence",
    description:
      "Analyze defect patterns and quality trends using actual inspection records.",
  },
  {
    icon: Wrench,
    title: "Predictive maintenance",
    description:
      "Support maintenance planning using validated historical data and predictive models.",
  },
];

export default function Dashboard() {
  return (
      <div className="space-y-8">
        {/* Page heading */}
        <section className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-medium text-orange-400">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              QUALITY INTELLIGENCE WORKSPACE
            </div>

            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Dashboard<span className="text-orange-400">.</span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-400 sm:text-base">
              Monitor visual quality inspection, explore evidence and
              organize automotive defect analysis from one workspace.
            </p>
          </div>

          <Link
            to="/inspection/new"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
          >
            <Upload className="h-4 w-4" />
            New inspection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        {/* Overview cards */}
        <section>
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="font-heading text-lg font-semibold text-white">
              Inspection overview
            </h2>

            <span className="text-xs text-neutral-500">
              Overview
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Total inspections"
              value="—"
              description="Inspection totals will appear when records are available."
              icon={ClipboardCheck}
              accent="orange"
            />

            <StatCard
              title="Defects identified"
              value="—"
              description="Based on completed inspection results."
              icon={Activity}
              accent="blue"
            />

            <StatCard
              title="Quality score"
              value="—"
              description="Calculated from validated quality data."
              icon={CheckCircle2}
              accent="green"
            />

            <StatCard
              title="Pending reviews"
              value="—"
              description="Based on actual inspection review status."
              icon={Clock3}
              accent="purple"
            />
          </div>
        </section>

        {/* Recent inspections and quality trends */}
        <section className="grid grid-cols-1 gap-5 xl:grid-cols-[1.6fr_1fr]">
          <RecentInspections />

          <div className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-heading text-lg font-semibold text-white">
                  Quality trends
                </h2>

                <p className="mt-1 text-xs text-neutral-500">
                  Visual analytics
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/10">
                <TrendingUp className="h-5 w-5 text-sky-400" />
              </div>
            </div>

            <div className="mt-6 flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.015] px-5 text-center">
              <BarChart3 className="h-9 w-9 text-neutral-600" />

              <p className="mt-4 text-sm font-medium text-neutral-300">
                Quality analytics
              </p>

              <p className="mt-2 max-w-xs text-xs leading-5 text-neutral-500">
                Quality charts will use actual inspection and defect
                records when available.
              </p>

              <Link
                to="/analytics/quality"
                className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-orange-400 hover:text-orange-300"
              >
                Open quality analytics
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick actions */}
        <section>
          <div className="mb-4">
            <h2 className="font-heading text-lg font-semibold text-white">
              Quick actions
            </h2>

            <p className="mt-1 text-sm text-neutral-500">
              Access your inspection and analysis tools.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {quickActions.map((action) => {
              const Icon = action.icon;

              const iconColor =
                action.accent === "orange"
                  ? "text-orange-400 bg-orange-400/10 border-orange-400/15"
                  : action.accent === "blue"
                    ? "text-sky-400 bg-sky-400/10 border-sky-400/15"
                    : "text-violet-400 bg-violet-400/10 border-violet-400/15";

              return (
                <Link
                  key={action.title}
                  to={action.path}
                  className="group rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 transition hover:-translate-y-1 hover:border-orange-400/20 hover:bg-[#131720] sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${iconColor}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <ArrowRight className="h-4 w-4 text-neutral-600 transition group-hover:translate-x-1 group-hover:text-orange-400" />
                  </div>

                  <h3 className="mt-5 font-heading text-base font-semibold text-white">
                    {action.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    {action.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Platform capabilities */}
        <section>
          <div className="mb-4">
            <h2 className="font-heading text-lg font-semibold text-white">
              Platform capabilities
            </h2>

            <p className="mt-1 text-sm text-neutral-500">
              Core capabilities of Defect Lens.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="flex gap-4 rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 transition hover:border-white/[0.14] sm:p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-400/[0.07]">
                    <Icon className="h-5 w-5 text-orange-400" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-neutral-200">
                      {capability.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-neutral-500 sm:text-sm">
                      {capability.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col gap-2 border-t border-white/[0.07] pt-5 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Defect Lens · Visual Quality Inspection Platform
          </p>

          <p className="flex items-center gap-2">
            <FileText className="h-3.5 w-3.5" />
            Quality Intelligence Workspace
          </p>
        </footer>
      </div>
  );
}