import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Download,
  FileImage,
  FileText,
  Info,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";


export default function InspectionResults() {
  const { id } = useParams<{ id: string }>();

  // Results must come from a real saved inspection and model inference.
  // Do not display invented detections or confidence scores.
  const resultAvailable = false;

  return (
      <div className="mx-auto max-w-[1300px] space-y-8">
        <section>
          <Link
            to="/inspection/history"
            className="mb-5 inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-orange-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to inspection history
          </Link>

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-orange-400">
                <ScanSearch className="h-4 w-4" />
                INSPECTION EVIDENCE
              </div>

              <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Inspection results<span className="text-orange-400">.</span>
              </h1>

              <p className="mt-3 text-sm text-neutral-400">
                Review inspection evidence, model findings and quality
                assessment details.
              </p>
            </div>

            <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-neutral-400 sm:self-auto">
              <ShieldCheck className="h-4 w-4 text-orange-400" />
              Evidence-first review
            </span>
          </div>
        </section>

        {/* Inspection identity */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5">
            <p className="text-xs text-neutral-500">Inspection reference</p>
            <p className="mt-3 break-all font-heading text-lg font-semibold text-white">
              {id || "Not selected"}
            </p>
          </article>

          <article className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5">
            <p className="text-xs text-neutral-500">Analysis status</p>
            <p className="mt-3 flex items-center gap-2 text-lg font-semibold text-neutral-300">
              <Info className="h-5 w-5 text-orange-400" />
              Awaiting results
            </p>
          </article>

          <article className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5">
            <p className="text-xs text-neutral-500">Quality assessment</p>
            <p className="mt-3 font-heading text-lg font-semibold text-white">
              Not available
            </p>
          </article>
        </section>

        {/* Main result area */}
        {!resultAvailable ? (
          <section className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-6 sm:p-10">
            <div className="mx-auto flex max-w-xl flex-col items-center py-10 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-orange-400/15 bg-orange-400/[0.06]">
                <FileImage className="h-9 w-9 text-orange-400" />
              </div>

              <h2 className="mt-6 font-heading text-2xl font-bold text-white">
                Results will appear here
              </h2>

              <p className="mt-3 text-sm leading-7 text-neutral-400">
                This page is ready to display inspection images, defect
                locations, model predictions, evidence and explanations.
                Actual results will appear after an inspection has been
                saved and processed by the connected inference service.
              </p>

              <div className="mt-6 w-full rounded-xl border border-white/[0.07] bg-black/20 p-4 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

                  <div>
                    <p className="text-sm font-medium text-neutral-200">
                      Evidence-based reporting
                    </p>

                    <p className="mt-1 text-xs leading-5 text-neutral-500">
                      Defect labels, locations, confidence scores and
                      recommendations should be populated from actual
                      model output—not example values.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/inspection/new"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                <ScanSearch className="h-4 w-4" />
                Prepare an inspection
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        ) : (
          <section className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-6">
            <p className="text-neutral-300">
              Inspection results are available.
            </p>
          </section>
        )}

        {/* Planned report section */}
        <section className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-400/[0.06]">
                <FileText className="h-5 w-5 text-orange-400" />
              </div>

              <div>
                <h2 className="font-heading font-semibold text-white">
                  Inspection report
                </h2>

                <p className="mt-1 text-sm leading-6 text-neutral-500">
                  Downloadable reports will be available after results
                  have been saved and report generation is implemented.
                </p>
              </div>
            </div>

            <button
              type="button"
              disabled
              title="Reports become available after backend integration."
              className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-neutral-500"
            >
              <Download className="h-4 w-4" />
              Report unavailable
            </button>
          </div>
        </section>
      </div>
  );
}