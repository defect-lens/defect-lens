import {
  ScanSearch,
  BrainCircuit,
  ChartNoAxesCombined,
  Wrench,
  FileSearch,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: ScanSearch,
    title: "Visual Defect Detection",
    description:
      "Analyze automotive component images to identify visible defects such as scratches, dents, cracks, and rust.",
    tag: "Computer Vision",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Explainable AI",
    description:
      "Understand model-generated findings through supporting visual evidence and clear explanations.",
    tag: "AI Explainability",
  },
  {
    number: "03",
    icon: ChartNoAxesCombined,
    title: "Quality Analytics",
    description:
      "Explore inspection records and quality trends to better understand recurring defects and production quality.",
    tag: "Data Analytics",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Predictive Intelligence",
    description:
      "Use available inspection and maintenance records to support maintenance planning and risk analysis.",
    tag: "Predictive Analytics",
  },
  {
    number: "05",
    icon: FileSearch,
    title: "Inspection Traceability",
    description:
      "Keep inspection records organized so teams can review findings and track quality issues over time.",
    tag: "Record Management",
  },
  {
    number: "06",
    icon: ClipboardCheck,
    title: "Quality Reports",
    description:
      "Present inspection findings and available analytical insights in structured reports for quality review.",
    tag: "Reporting",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative bg-[#090b10] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="mb-14 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-orange-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">
                Platform capabilities
              </span>
            </div>

            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              A smarter approach to
              <br className="hidden sm:block" />{" "}
              <span className="text-zinc-500">
                automotive quality inspection.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
            Bring visual inspection, defect analysis, and quality information
            together in one platform designed for automotive manufacturing.
          </p>
        </div>

        {/* Six equal-height feature cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className="glass glass-hover group flex h-full min-h-[290px] flex-col rounded-2xl p-6 sm:p-7"
              >
                {/* Icon and number */}
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-400/[0.08] text-orange-400 transition-colors duration-300 group-hover:bg-orange-400 group-hover:text-black">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="font-heading text-sm font-medium tracking-wider text-zinc-600">
                    {feature.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">
                    {feature.description}
                  </p>

                  {/* Consistent footer alignment */}
                  <div className="mt-7 flex min-h-[44px] items-center justify-between gap-3 border-t border-white/[0.07] pt-5">
                    <span className="text-xs font-medium tracking-wide text-zinc-500">
                      {feature.tag}
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-400"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}