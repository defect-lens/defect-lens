import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  ClipboardList,
  FileSearch,
  Filter,
  Plus,
  Search,
  ScanSearch,
} from "lucide-react";


type InspectionStatus = "All" | "Completed" | "Pending" | "Failed";

export default function InspectionHistory() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<InspectionStatus>("All");

  // No sample records are inserted. This list will be populated by the API.
  const inspections: Array<{
    id: string;
    component: string;
    componentId: string;
    vehicle: string;
    date: string;
    status: Exclude<InspectionStatus, "All">;
  }> = [];

  const filteredInspections = useMemo(() => {
    return inspections.filter((inspection) => {
      const matchesSearch = [
        inspection.component,
        inspection.componentId,
        inspection.vehicle,
        inspection.id,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || inspection.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [inspections, search, status]);

  return (
      <div className="mx-auto max-w-[1400px] space-y-8">
        {/* Header */}
        <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <Link
              to="/dashboard"
              className="mb-5 inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-orange-400"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to dashboard
            </Link>

            <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-orange-400">
              <ClipboardList className="h-4 w-4" />
              INSPECTION MANAGEMENT
            </div>

            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Inspection history<span className="text-orange-400">.</span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-400">
              Search and review automotive component inspections from one
              workspace.
            </p>
          </div>

          <Link
            to="/inspection/new"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
          >
            <Plus className="h-4 w-4" />
            New inspection
          </Link>
        </section>

        {/* Summary */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              label: "Total records",
              value: inspections.length,
              description: "Stored inspection records",
            },
            {
              label: "Completed",
              value: inspections.filter((item) => item.status === "Completed").length,
              description: "Finished inspections",
            },
            {
              label: "Awaiting review",
              value: inspections.filter((item) => item.status === "Pending").length,
              description: "Inspections awaiting review",
            },
          ].map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5"
            >
              <p className="text-sm text-neutral-400">{item.label}</p>
              <p className="mt-3 font-heading text-3xl font-bold text-white">
                {item.value}
              </p>
              <p className="mt-2 text-xs text-neutral-500">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        {/* Records */}
        <section className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#10131a]">
          <div className="border-b border-white/[0.07] p-5 sm:p-6">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div>
                <h2 className="font-heading text-lg font-semibold text-white">
                  All inspections
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                  {filteredInspections.length} records shown
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search inspections..."
                    aria-label="Search inspections"
                    className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-orange-400/50 sm:w-64"
                  />
                </div>

                <div className="relative">
                  <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                  <select
                    value={status}
                    onChange={(event) =>
                      setStatus(event.target.value as InspectionStatus)
                    }
                    aria-label="Filter by inspection status"
                    className="w-full appearance-none rounded-xl border border-white/10 bg-[#141720] py-3 pl-10 pr-8 text-sm text-neutral-300 outline-none focus:border-orange-400/50 sm:w-44"
                  >
                    <option value="All">All statuses</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="Failed">Failed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Empty state */}
          {filteredInspections.length === 0 ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center px-6 py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/15 bg-orange-400/[0.06]">
                {search || status !== "All" ? (
                  <FileSearch className="h-7 w-7 text-orange-400" />
                ) : (
                  <CalendarDays className="h-7 w-7 text-orange-400" />
                )}
              </div>

              <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                {search || status !== "All"
                  ? "No matching inspections"
                  : "Your inspection history starts here"}
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-neutral-500">
                {search || status !== "All"
                  ? "Try a different search term or status filter."
                  : "Inspection records will appear here when inspections are saved through the connected backend. No example records are being displayed."}
              </p>

              {!search && status === "All" && (
                <Link
                  to="/inspection/new"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
                >
                  <ScanSearch className="h-4 w-4" />
                  Start an inspection
                </Link>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-white/[0.07] bg-white/[0.02] text-xs text-neutral-500">
                  <tr>
                    <th className="px-5 py-4 font-medium">Inspection</th>
                    <th className="px-5 py-4 font-medium">Component</th>
                    <th className="px-5 py-4 font-medium">Vehicle</th>
                    <th className="px-5 py-4 font-medium">Date</th>
                    <th className="px-5 py-4 font-medium">Status</th>
                    <th className="px-5 py-4 font-medium">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/[0.06]">
                  {filteredInspections.map((inspection) => (
                    <tr key={inspection.id} className="hover:bg-white/[0.02]">
                      <td className="px-5 py-4 text-neutral-300">
                        {inspection.id}
                      </td>
                      <td className="px-5 py-4 text-white">
                        <div>{inspection.component}</div>
                        <div className="mt-1 text-xs text-neutral-500">
                          {inspection.componentId || "No component ID"}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-neutral-400">
                        {inspection.vehicle || "—"}
                      </td>
                      <td className="px-5 py-4 text-neutral-400">
                        {inspection.date || "—"}
                      </td>
                      <td className="px-5 py-4">
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
                          {inspection.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <Link
                          to={`/inspection/results/${inspection.id}`}
                          className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300"
                        >
                          View
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
  );
}