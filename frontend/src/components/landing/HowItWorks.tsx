import { motion } from "motion/react";
import {
  Upload,
  ScanSearch,
  BrainCircuit,
  FileBarChart,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Upload",
    description:
      "Provide an automotive surface image through the inspection workspace.",
    icon: Upload,
  },
  {
    number: "02",
    title: "Detect",
    description:
      "Computer vision analyzes the image to identify potential visual defects.",
    icon: ScanSearch,
  },
  {
    number: "03",
    title: "Understand",
    description:
      "Review defect classifications, severity, and supporting explanations.",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "Report",
    description:
      "Review inspection records and turn findings into actionable reports.",
    icon: FileBarChart,
  },
];

export default function HowItWorks() {
  return (
    <section id="workflow" className="border-t border-white/[0.06] bg-[#0c0e13] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
            A clearer workflow
          </p>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            From image to insight.
          </h2>
          <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
            A structured workflow designed to make visual quality inspection
            easier to review, understand, and track.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-heading text-xs tracking-[0.2em] text-orange-400">
                    STEP {step.number}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-400/[0.09] text-orange-400">
                    <Icon size={21} />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    size={17}
                    className="absolute -right-3 top-1/2 z-10 hidden text-orange-400/70 lg:block"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-orange-400/15 bg-gradient-to-r from-orange-500/[0.09] via-orange-500/[0.035] to-transparent p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold text-white">
                Designed for visual quality intelligence
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                A connected workflow for inspection, analytics, and reporting.
              </p>
            </div>
            <a
              href="/register"
              className="inline-flex items-center gap-2 self-start rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400 sm:self-center"
            >
              Explore Defect Lens <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}