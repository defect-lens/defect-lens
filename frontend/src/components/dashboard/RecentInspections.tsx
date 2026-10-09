import { Link } from "react-router-dom";
import {
  ArrowRight,
  ClipboardList,
  Clock3,
  ScanSearch,
} from "lucide-react";

export default function RecentInspections() {
  return (
    <section className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#10131a]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] p-5 sm:p-6">
        <div>
          <h2 className="font-heading text-lg font-semibold text-white">
            Recent inspections
          </h2>
          <p className="mt-1 text-xs text-neutral-500">
            Your inspection records will appear here.
          </p>
        </div>

        <Link
          to="/inspection/history"
          className="flex items-center gap-2 text-xs font-medium text-orange-400 transition hover:text-orange-300"
        >
          View history
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="flex min-h-[260px] flex-col items-center justify-center px-5 py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025]">
          <ClipboardList className="h-6 w-6 text-neutral-500" />
        </div>

        <h3 className="mt-5 font-heading text-base font-semibold text-neutral-200">
          No inspection records yet
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-500">
          Start a new inspection to begin building your quality inspection
          history. Actual results will appear here after the inspection
          service is connected.
        </p>

        <Link
          to="/inspection/new"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
        >
          <ScanSearch className="h-4 w-4" />
          Start inspection
        </Link>
      </div>

      <div className="flex items-center gap-2 border-t border-white/[0.07] px-5 py-3 text-xs text-neutral-500 sm:px-6">
        <Clock3 className="h-3.5 w-3.5" />
        Inspection history becomes available when records are connected.
      </div>
    </section>
  );
}