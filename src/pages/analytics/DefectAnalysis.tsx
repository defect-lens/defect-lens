import { Link } from "react-router-dom";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Info,
  Layers3,
  ScanSearch,
  ShieldAlert,
  Wrench,
} from "lucide-react";

const defectCategories = [
  {
    name: "Surface scratches",
    description: "Surface-level marks and abrasions on automotive components.",
    icon: AlertCircle,
  },
  {
    name: "Dents",
    description: "Localized deformation of a component surface.",
    icon: ShieldAlert,
  },
  {
    name: "Surface cracks",
    description: "Visible cracks or material fractures.",
    icon: AlertCircle,
  },
  {
    name: "Missing bolts",
    description: "Missing or incorrectly fitted fastening components.",
    icon: Wrench,
  },
  {
    name: "Weld defects",
    description: "Visible irregularities around welded joints.",
    icon: Layers3,
  },
  {
    name: "Rust spots",
    description: "Visible corrosion and oxidation on metal surfaces.",
    icon: AlertCircle,
  },
  {
    name: "Panel misalignment",
    description: "Uneven panel positioning or inconsistent panel gaps.",
    icon: ScanSearch,
  },
];

export default function DefectAnalysis() {
  return (
    <div className="space-y-8">
      {/* Page introduction */}
      <section className="flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            <Layers3 size={16} />
            Defect intelligence
          </div>

          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Defect analysis<span className="text-orange-400">.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Explore supported defect categories, understand inspection
            classifications, and review evidence from automotive components.
          </p>
        </div>

        <Link
          to="/inspection/new"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
        >
          <ScanSearch size={17} />
          New inspection
          <ArrowRight size={16} />
        </Link>
      </section>

      {/* Information notice */}
      <section className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.045] p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
            <Info size={20} className="text-orange-400" />
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-white">
              Findings require verified model output
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              The categories below describe the defect types the platform is
              designed to support. They are not actual detection results.
              Defect detections, severity classifications, and evidence must
              come from saved inspection results.
            </p>
          </div>
        </div>
      </section>

      {/* Category heading */}
      <section>
        <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-heading text-lg font-semibold text-white">
              Supported defect categories
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Defect types supported by the inspection workflow
            </p>
          </div>

          <span className="text-xs text-gray-500">
            {defectCategories.length} category definitions
          </span>
        </div>

        {/* Category cards */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {defectCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.name}
                className="group rounded-2xl border border-white/[0.08] bg-[#11141c] p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-[#141720] sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/[0.08]">
                    <Icon size={21} className="text-orange-400" />
                  </div>

                  <span className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[10px] text-gray-500">
                    Supported type
                  </span>
                </div>

                <h4 className="mt-6 font-heading text-base font-semibold text-white">
                  {category.name}
                </h4>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-400">
                  {category.description}
                </p>

                <div className="mt-5 border-t border-white/[0.06] pt-4">
                  <Link
                    to="/inspection/new"
                    className="inline-flex items-center gap-2 text-xs font-medium text-orange-400 transition hover:text-orange-300"
                  >
                    Start inspection
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Workflow reminder */}
      <section className="rounded-2xl border border-white/[0.08] bg-[#11141c] p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
            <CheckCircle2 size={22} className="text-emerald-400" />
          </div>

          <div className="flex-1">
            <h3 className="font-heading font-semibold text-white">
              Ready to inspect a component?
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-400">
              Upload a component image and provide inspection details to begin
              the inspection workflow.
            </p>
          </div>

          <Link
            to="/inspection/new"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-gray-200 transition hover:border-orange-500/30 hover:text-orange-300"
          >
            Open inspection
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}