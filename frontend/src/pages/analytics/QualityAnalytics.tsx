import { Link } from "react-router-dom";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Gauge,
  Info,
  ScanSearch,
  TrendingUp,
} from "lucide-react";


const metricCards = [
  {
    title: "Total inspections",
    icon: ClipboardList,
    description: "Number of inspections saved in the system.",
  },
  {
    title: "Defects identified",
    icon: Activity,
    description: "Defects confirmed by completed model inference.",
  },
  {
    title: "Quality rate",
    icon: Gauge,
    description: "Calculated from validated inspection results.",
  },
  {
    title: "Inspection trend",
    icon: TrendingUp,
    description: "Changes over the selected reporting period.",
  },
];

function EmptyChart({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-[250px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-black/10 px-6 py-8 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-400/[0.06]">
        <BarChart3 className="h-5 w-5 text-orange-400" />
      </div>

      <h3 className="mt-4 font-semibold text-neutral-200">{title}</h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-500">
        {description}
      </p>

      <span className="mt-4 rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-500">
        Awaiting real data
      </span>
    </div>
  );
}

export default function QualityAnalytics() {
  return (
      <div className="mx-auto max-w-[1450px] space-y-8">
        <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-orange-400">
              <BarChart3 className="h-4 w-4" />
              QUALITY INTELLIGENCE
            </div>

            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Quality analytics<span className="text-orange-400">.</span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-400">
              Explore inspection activity, defect patterns and manufacturing
              quality trends using validated inspection data.
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
              Analytics workspace
            </h2>
            <p className="mt-1 text-sm leading-6 text-neutral-400">
              Analytics will populate when the application is connected to
              persisted inspections and validated inference results. No
              illustrative numbers are presented as real performance.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="font-heading text-lg font-semibold text-white">
              Performance overview
            </h2>

            <span className="text-xs text-neutral-500">
              No reporting period selected
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metricCards.map((metric) => {
              const Icon = metric.icon;

              return (
                <article
                  key={metric.title}
                  className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 transition hover:border-orange-400/20"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-400">
                      {metric.title}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-400/[0.06]">
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
            <div className="mb-5 flex items-start justify-between gap-3">
              <div>
                <h2 className="font-heading text-lg font-semibold text-white">
                  Inspection activity
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                  Inspection volume over time
                </p>
              </div>

              <div className="rounded-xl border border-white/10 p-2.5">
                <TrendingUp className="h-5 w-5 text-orange-400" />
              </div>
            </div>

            <EmptyChart
              title="No trend data yet"
              description="Inspection activity will be charted after real inspection timestamps are available."
            />
          </article>

          <article className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 sm:p-6">
            <div className="mb-5 flex items-start justify-between gap-3">
              <div>
                <h2 className="font-heading text-lg font-semibold text-white">
                  Defect distribution
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                  Confirmed defects by category
                </p>
              </div>

              <div className="rounded-xl border border-white/10 p-2.5">
                <Activity className="h-5 w-5 text-orange-400" />
              </div>
            </div>

            <EmptyChart
              title="No confirmed defects"
              description="Category distribution will appear after actual model findings are saved."
            />
          </article>
        </section>

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <article className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 sm:p-6 xl:col-span-2">
            <div className="mb-5">
              <h2 className="font-heading text-lg font-semibold text-white">
                Quality performance
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                Quality measures calculated from validated results
              </p>
            </div>

            <EmptyChart
              title="Quality metrics are unavailable"
              description="Quality rates require a defined calculation method and real inspection outcomes."
            />
          </article>

          <article className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/[0.06]">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>

              <div>
                <h2 className="font-heading font-semibold text-white">
                  Data integrity
                </h2>
                <p className="text-xs text-neutral-500">
                  Analytics readiness
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Inspection records",
                "Validated model results",
                "Historical quality data",
                "Reporting calculations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between gap-3 border-b border-white/[0.06] pb-3 last:border-0"
                >
                  <span className="text-sm text-neutral-400">{item}</span>
                  <span className="text-xs text-neutral-500">Pending</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <Link
          to="/analytics/defects"
          className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 transition hover:border-orange-400/20 sm:p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-400/[0.06]">
              <ArrowDownRight className="h-5 w-5 text-orange-400" />
            </div>

            <div>
              <h2 className="font-semibold text-white">Explore defect analysis</h2>
              <p className="mt-1 text-sm text-neutral-500">
                Review defect categories and evidence.
              </p>
            </div>
          </div>

          <ArrowRight className="h-5 w-5 text-neutral-500 transition group-hover:translate-x-1 group-hover:text-orange-400" />
        </Link>
      </div>
  );
}