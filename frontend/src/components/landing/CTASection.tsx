import { ArrowUpRight, ScanSearch, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-[1350px] overflow-hidden rounded-3xl border border-orange-400/20 bg-[#14100e] px-6 py-16 text-center sm:px-12 sm:py-24"
      >
        <div className="pointer-events-none absolute -left-20 -top-32 h-80 w-80 rounded-full bg-orange-500/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-10 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl">
          <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-400/10 text-orange-400">
            <ScanSearch size={26} />
          </div>

          <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
            <Sparkles size={14} /> The future of quality inspection
          </div>

          <h2 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Make every
            <br />
            inspection count.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            Explore a smarter approach to automotive visual inspection with
            AI-assisted defect detection, quality analytics, and predictive
            insights.
          </p>

          <a
            href="/register"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-orange-500 px-7 py-4 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-orange-400"
          >
            Get started <ArrowUpRight size={17} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}