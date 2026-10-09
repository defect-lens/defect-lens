import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Crosshair,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Activity,
} from "lucide-react";

const defects = [
  {
    name: "Surface scratch",
    confidence: "98.6%",
    color: "border-orange-400",
    position: "left-[19%] top-[27%]",
    width: "w-[30%]",
    height: "h-[18%]",
  },
  {
    name: "Panel irregularity",
    confidence: "96.2%",
    color: "border-emerald-400",
    position: "right-[12%] bottom-[19%]",
    width: "w-[29%]",
    height: "h-[20%]",
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-orange-500/[0.09] blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-amber-500/[0.06] blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-14 px-5 pb-24 pt-12 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-12 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/[0.07] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-300">
              Intelligent Quality Inspection
            </span>
          </div>

          <h1 className="max-w-3xl font-heading text-[3.2rem] font-semibold leading-[1.06] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.25rem]">
            See every
            <br />
            defect.
            <br />
            <span className="gradient-text">Miss nothing.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            Bring intelligence to automotive manufacturing. Detect visual
            defects, understand quality patterns, and turn inspection data into
            actionable insights—all in one platform.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/register"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-4 text-sm font-semibold text-black shadow-xl shadow-orange-500/10 transition hover:-translate-y-0.5 hover:bg-orange-400"
            >
              Explore the platform
              <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </a>

            <a
              href="#workflow"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-6 py-4 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              See how it works
              <ArrowDown size={16} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-zinc-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-orange-400" />
              Computer vision
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-orange-400" />
              Explainable AI
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-orange-400" />
              Predictive insights
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[620px] lg:ml-auto"
        >
          <div className="absolute -inset-8 rounded-[40px] bg-orange-500/[0.06] blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#11141b] p-3 shadow-2xl shadow-black/50 sm:p-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-2 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                  <ScanLine size={19} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Visual Inspection
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                    Preview interface · Demo
                  </p>
                </div>
              </div>

              <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-[10px] font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                UI Preview
              </span>
            </div>

            <div className="relative mt-3 aspect-[1.12/1] overflow-hidden rounded-xl bg-[#20242b]">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85"
                alt="Automotive vehicle body shown as an illustrative inspection image"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0e]/90 via-black/15 to-black/20" />

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-white/15 bg-black/50 px-3 py-2 backdrop-blur-xl">
                <Crosshair size={14} className="text-orange-400" />
                <span className="text-[10px] font-medium text-white">
                  Vision analysis preview
                </span>
              </div>

              {defects.map((defect, index) => (
                <motion.div
                  key={defect.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.4 }}
                  className={`absolute ${defect.position} ${defect.width} ${defect.height} rounded-md border ${defect.color} bg-orange-400/[0.06]`}
                >
                  <span className="absolute -top-6 left-0 whitespace-nowrap rounded bg-black/80 px-2 py-1 text-[9px] font-medium text-white backdrop-blur">
                    {defect.name}
                  </span>
                  <span className="absolute -bottom-5 right-0 whitespace-nowrap text-[9px] text-white drop-shadow">
                    Illustrative · {defect.confidence}
                  </span>
                </motion.div>
              ))}

              <motion.div
                animate={{ y: ["0%", "340%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-orange-400 shadow-[0_0_15px_3px_rgba(249,115,22,0.45)]"
              />

              <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-[#0b0d12]/85 p-4 backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                      Inspection workspace
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Visual quality analysis
                    </p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <Sparkles size={20} />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-white/[0.045] p-3">
                    <p className="text-[9px] text-zinc-500">Model</p>
                    <p className="mt-1 text-xs font-semibold text-white">YOLO</p>
                  </div>
                  <div className="rounded-lg bg-white/[0.045] p-3">
                    <p className="text-[9px] text-zinc-500">Analysis</p>
                    <p className="mt-1 text-xs font-semibold text-white">Vision AI</p>
                  </div>
                  <div className="rounded-lg bg-white/[0.045] p-3">
                    <p className="text-[9px] text-zinc-500">Insights</p>
                    <p className="mt-1 text-xs font-semibold text-white">Explainable</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <ShieldCheck size={15} className="text-orange-400" />
                AI-assisted visual inspection
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
                <Activity size={12} />
                Interface concept
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 top-[20%] hidden rounded-xl border border-white/10 bg-[#171a22]/95 p-4 shadow-xl backdrop-blur-xl sm:block lg:-right-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                <Activity size={19} />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Quality intelligence</p>
                <p className="mt-1 text-[10px] text-zinc-500">Insights at a glance</p>
              </div>
              <ArrowUpRight size={15} className="text-orange-400" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}