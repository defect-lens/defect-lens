import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Info,
  ScanSearch,
  ShieldAlert,
  TrendingUp,
  Wrench,
} from "lucide-react";


const maintenanceInputs = [
  {
    title: "Inspection history",
    description: "Historical inspection outcomes and recurring defects.",
    icon: ClipboardList,
  },
  {
    title: "Defect progression",
    description: "Changes in validated defect observations over time.",
    icon: TrendingUp,
  },
  {
    title: "Maintenance context",
    description: "Maintenance records and verified component information.",
    icon: Wrench,
  },
];

export default function PredictiveIntelligence() {
  return (
      <div className="mx-auto max-w-[1450px] space-y-8">
        <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-orange-400">
              <Activity className="h-4 w-4" />
              PREDICTIVE MAINTENANCE
            </div>

            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Predictive intelligence<span className="text-orange-400">.</span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-400">
              Organize component health information and explore maintenance
              insights based on validated inspection and maintenance data.
            </p>
          </div>

          <Link
            to="/inspection/new"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
          >
            <ScanSearch className="h-4 w-4" />
            New inspection
          </Link>
        </section>

        <section className="flex items-start gap-3 rounded-2xl border border-orange-400/15 bg-orange-400/[0.035] p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

          <div>
            <h2 className="font-semibold text-neutral-200">
              Predictive models are awaiting integration
            </h2>

            <p className="mt-1 text-sm leading-6 text-neutral-400">
              Reliable maintenance predictions require suitable historical
              data, a validated prediction model and a defined maintenance
              outcome. No risk score or failure probability is being invented
              for this interface.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-4">
            <h2 className="font-heading text-lg font-semibold text-white">
              Component health overview
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Health indicators will be calculated from connected data.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Components monitored",
                icon: Wrench,
                description: "Components with recorded inspection history.",
              },
              {
                label: "Risk assessments",
                icon: ShieldAlert,
                description: "Assessments produced by a validated model.",
              },
              {
                label: "Maintenance due",
                icon: CalendarClock,
                description: "Components with verified maintenance schedules.",
              },
              {
                label: "Historical trends",
                icon: TrendingUp,
                description: "Changes derived from historical observations.",
              },
            ].map((metric) => {
              const Icon = metric.icon;

              return (
                <article
                  key={metric.label}
                  className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-neutral-400">{metric.label}</p>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-400/[0.06]">
                      <Icon className="h-5 w-5 text-orange-400" />
                    </div>
                  </div>

                  <p className="mt-5 font-heading text-3xl font-semibold text-neutral-500">
                    —
                  </p>

                  <p className="mt-3 text-xs leading-5 text-neutral-500">
                    {metric.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <article className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-400/[0.06]">
                <TrendingUp className="h-5 w-5 text-orange-400" />
              </div>

              <div>
                <h2 className="font-heading font-semibold text-white">
                  Component condition trends
                </h2>
                <p className="mt-1 text-xs text-neutral-500">
                  Historical observations over time
                </p>
              </div>
            </div>

            <div className="flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 px-6 py-8 text-center">
              <Activity className="h-8 w-8 text-neutral-600" />

              <h3 className="mt-4 font-semibold text-neutral-300">
                Historical data required
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-500">
                Trend visualization will appear after component inspection
                records have been collected.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-400/[0.06]">
                <CalendarClock className="h-5 w-5 text-orange-400" />
              </div>

              <div>
                <h2 className="font-heading font-semibold text-white">
                  Maintenance planning
                </h2>
                <p className="mt-1 text-xs text-neutral-500">
                  Review and organize upcoming maintenance
                </p>
              </div>
            </div>

            <div className="flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 px-6 py-8 text-center">
              <CalendarClock className="h-8 w-8 text-neutral-600" />

              <h3 className="mt-4 font-semibold text-neutral-300">
                No maintenance records available
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-500">
                Maintenance schedules will appear when the application
                stores verified maintenance information.
              </p>
            </div>
          </article>
        </section>

        <section className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 sm:p-7">
          <h2 className="font-heading text-lg font-semibold text-white">
            Data needed for predictive maintenance
          </h2>

          <p className="mt-2 text-sm leading-6 text-neutral-500">
            These are the principal data sources the predictive workflow
            can use once implemented.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {maintenanceInputs.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/[0.07] bg-black/10 p-4"
                >
                  <Icon className="h-5 w-5 text-orange-400" />

                  <h3 className="mt-4 font-semibold text-neutral-200">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                    Integration pending
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Link
          to="/analytics/explainability"
          className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 transition hover:border-orange-400/20 sm:p-6"
        >
          <div>
            <h2 className="font-semibold text-white">
              Explore model explainability
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Learn how inspection findings can be explained with evidence.
            </p>
          </div>

          <ArrowRight className="h-5 w-5 text-neutral-500 transition group-hover:translate-x-1 group-hover:text-orange-400" />
        </Link>
      </div>
  );
}