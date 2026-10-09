import {
  ScanSearch,
  Image as ImageIcon,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export default function ProductPreview() {
  return (
    <section
      id="product-preview"
      className="relative overflow-hidden bg-[#090b10] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-orange-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">
              Product preview
            </span>

            <span className="h-px w-8 bg-orange-400" />
          </div>

          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your inspection workflow.
            <br />

            <span className="text-zinc-500">
              One connected workspace.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            A closer look at the workspace designed to bring image inspection,
            defect findings, and quality information together.
          </p>
        </div>

        {/* Product window */}
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#0e1118] shadow-2xl shadow-black/40">
          {/* Window header */}
          <div className="flex flex-col gap-4 border-b border-white/[0.08] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-400/[0.08] text-orange-400">
                <ScanSearch size={21} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  Inspection Workspace
                </h3>

                <p className="mt-1 text-xs text-zinc-500">
                  Visual quality inspection
                </p>
              </div>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              Interface preview
            </div>
          </div>

          {/* Main workspace */}
          <div className="grid gap-0 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Image preview panel */}
            <div className="border-b border-white/[0.08] p-5 sm:p-7 lg:border-b-0 lg:border-r">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-medium text-white">
                    Image inspection
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    Upload an automotive component image to begin.
                  </p>
                </div>

                <ImageIcon
                  size={20}
                  className="shrink-0 text-zinc-500"
                />
              </div>

              {/* Illustrative image, not analyzed */}
              <div className="relative min-h-[240px] overflow-hidden rounded-xl border border-white/10 bg-[#151820] sm:min-h-[320px]">
                <img
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85"
                  alt="Illustrative automotive image; not an inspection result"
                  className="absolute inset-0 h-full w-full object-cover opacity-60"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-black/10 to-black/20" />

                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-[#090b10]/85 p-4 backdrop-blur-xl sm:inset-x-5 sm:bottom-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-zinc-300">
                      <ImageIcon size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white">
                        Inspection image preview
                      </p>

                      <p className="mt-1 text-xs leading-5 text-zinc-400">
                        Illustrative automotive imagery — no AI analysis has
                        been performed on this image.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Details panel */}
            <div className="flex flex-col p-5 sm:p-7">
              <h4 className="text-sm font-medium text-white">
                Workspace overview
              </h4>

              <p className="mt-2 text-xs leading-6 text-zinc-500">
                Designed to keep the inspection process organized from image
                submission to result review.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-400/[0.09] text-orange-400">
                    <ImageIcon size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      Image submission
                    </p>

                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      Select an image for inspection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-400/[0.09] text-orange-400">
                    <ScanSearch size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      Detection results
                    </p>

                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      Review findings when model processing is available.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-400/[0.09] text-orange-400">
                    <ShieldCheck size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      Evidence and reporting
                    </p>

                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      Access available findings and inspection records.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-7">
                <a
                  href="/register"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
                >
                  Get started

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <p className="mt-3 text-center text-xs leading-5 text-zinc-500">
                  Actual inspection results depend on the connected backend
                  and model service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}