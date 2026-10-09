import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Eye,
  FileSearch,
  Info,
  Layers3,
  ScanSearch,
  ShieldCheck,
  Target,
} from "lucide-react";


const explanationMethods = [
  {
    title: "Visual evidence",
    description:
      "Show the image regions that a validated vision model identifies as relevant.",
    icon: Eye,
  },
  {
    title: "Prediction details",
    description:
      "Display actual model labels, scores and thresholds alongside their definitions.",
    icon: Target,
  },
  {
    title: "Model transparency",
    description:
      "Record model versions, processing details and known limitations.",
    icon: BrainCircuit,
  },
];

export default function Explainability() {
  return (
      <div className="mx-auto max-w-[1400px] space-y-8">
        <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-orange-400">
              <BrainCircuit className="h-4 w-4" />
              RESPONSIBLE AI
            </div>

            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Model explainability<span className="text-orange-400">.</span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-400">
              Make visual quality assessments easier to review through
              traceable evidence, model information and transparent findings.
            </p>
          </div>

          <Link
            to="/inspection/history"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3.5 text-sm font-semibold text-neutral-200 transition hover:border-orange-400/30 hover:text-orange-300"
          >
            <FileSearch className="h-4 w-4" />
            Inspection history
          </Link>
        </section>

        <section className="flex items-start gap-3 rounded-2xl border border-orange-400/15 bg-orange-400/[0.035] p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

          <div>
            <h2 className="font-semibold text-neutral-200">
              Explainability service not connected
            </h2>

            <p className="mt-1 text-sm leading-6 text-neutral-400">
              Visual explanations must be generated from actual model
              outputs. This page does not display synthetic heatmaps,
              invented confidence scores or unsupported AI reasoning.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 sm:p-7">
            <div className="mb-5">
              <h2 className="font-heading text-lg font-semibold text-white">
                Visual evidence viewer
              </h2>

              <p className="mt-1 text-sm text-neutral-500">
                Model-generated evidence will be displayed here.
              </p>
            </div>

            <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/15 px-6 py-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/15 bg-orange-400/[0.06]">
                <Eye className="h-7 w-7 text-orange-400" />
              </div>

              <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                No explanation selected
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-500">
                Select a processed inspection when model explanations are
                available. Relevant image regions and supporting evidence
                will appear in this workspace.
              </p>

              <Link
                to="/inspection/history"
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-neutral-300 transition hover:border-orange-400/30 hover:text-white"
              >
                Browse inspections
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <article className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 sm:p-7">
            <h2 className="font-heading text-lg font-semibold text-white">
              Explanation details
            </h2>

            <p className="mt-1 text-sm text-neutral-500">
              Information associated with a real model prediction.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  label: "Predicted defect",
                  value: "Awaiting model output",
                },
                {
                  label: "Confidence score",
                  value: "Not available",
                },
                {
                  label: "Model version",
                  value: "Not available",
                },
                {
                  label: "Evidence reference",
                  value: "Not available",
                },
                {
                  label: "Explanation method",
                  value: "Not configured",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/[0.07] bg-black/10 p-4"
                >
                  <p className="text-xs text-neutral-500">{item.label}</p>

                  <p className="mt-2 break-words text-sm font-medium text-neutral-300">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section>
          <div className="mb-4">
            <h2 className="font-heading text-lg font-semibold text-white">
              Explanation capabilities
            </h2>

            <p className="mt-1 text-sm text-neutral-500">
              The information each explanation should provide.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {explanationMethods.map((method) => {
              const Icon = method.icon;

              return (
                <article
                  key={method.title}
                  className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 transition hover:border-orange-400/20"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-400/[0.06]">
                    <Icon className="h-5 w-5 text-orange-400" />
                  </div>

                  <h3 className="mt-5 font-heading font-semibold text-white">
                    {method.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    {method.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-white/[0.07] pt-4 text-xs text-neutral-500">
                    <Layers3 className="h-4 w-4" />
                    Planned capability
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

            <div>
              <h2 className="font-semibold text-white">
                Human review and model limitations
              </h2>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Explanations help reviewers understand model outputs but
                do not prove that a prediction is correct. Manufacturing
                decisions should follow validated quality procedures and
                appropriate human review.
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
                <CheckCircle2 className="h-4 w-4 text-orange-400" />
                Designed for evidence-based review
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}