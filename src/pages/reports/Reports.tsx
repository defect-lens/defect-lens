import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownToLine,
  CalendarDays,
  ClipboardList,
  FileBarChart,
  FileText,
  Info,
  Search,
  ShieldCheck,
} from "lucide-react";

export default function Reports() {
  const [search, setSearch] = useState("");
  const [notice, setNotice] = useState("");

  // Actual reports will be loaded from the backend.
  const reports: Array<{
    id: string;
    title: string;
    inspectionId: string;
    createdAt: string;
    status: string;
  }> = [];

  const filteredReports = reports.filter((report) =>
    `${report.title} ${report.inspectionId}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
      <div className="mx-auto max-w-[1450px] space-y-8">
        <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-orange-400">
              <FileBarChart className="h-4 w-4" />
              QUALITY DOCUMENTATION
            </div>
            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Reports<span className="text-orange-400">.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-400">
              Find inspection reports and organize quality documentation
              generated from verified inspection records.
            </p>
          </div>

          <Link
            to="/inspection/history"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
          >
            <ClipboardList className="h-4 w-4" />
            View inspections
          </Link>
        </header>

        <section className="flex items-start gap-3 rounded-2xl border border-orange-400/15 bg-orange-400/[0.035] p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
          <div>
            <h2 className="font-semibold text-neutral-200">
              Report generation is awaiting integration
            </h2>
            <p className="mt-1 text-sm leading-6 text-neutral-400">
              Reports will appear after report generation and persistent
              storage are connected. No files have been generated or exported.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              title: "Total reports",
              icon: FileText,
              description: "Saved report records",
            },
            {
              title: "Inspection reports",
              icon: ClipboardList,
              description: "Reports linked to inspections",
            },
            {
              title: "Recent reports",
              icon: CalendarDays,
              description: "Reports created recently",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-400">
                    {item.title}
                  </span>
                  <Icon className="h-5 w-5 text-orange-400" />
                </div>
                <p className="mt-5 font-heading text-3xl font-semibold text-neutral-500">
                  —
                </p>
                <p className="mt-2 text-xs text-neutral-500">
                  {item.description}
                </p>
              </article>
            );
          })}
        </section>

        <section className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#10131a]">
          <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] p-5 sm:flex-row sm:items-center sm:p-6">
            <div>
              <h2 className="font-heading text-lg font-semibold text-white">
                Report library
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                Search saved reports by title or inspection reference.
              </p>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search reports..."
                aria-label="Search reports"
                className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-orange-400/50 sm:w-64"
              />
            </div>
          </div>

          {filteredReports.length === 0 ? (
            <div className="flex min-h-[300px] flex-col items-center justify-center px-6 py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/15 bg-orange-400/[0.06]">
                <FileBarChart className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                {search ? "No matching reports" : "Your report library is empty"}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-neutral-500">
                {search
                  ? "Try another search term."
                  : "Generated reports will appear here once report creation and backend storage are implemented."}
              </p>
              {!search && (
                <Link
                  to="/inspection/history"
                  className="mt-6 rounded-xl border border-white/10 px-4 py-3 text-sm text-neutral-300 transition hover:border-orange-400/30 hover:text-white"
                >
                  Open inspection history
                </Link>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-white/[0.07] text-xs text-neutral-500">
                  <tr>
                    <th className="px-5 py-4 font-medium">Report</th>
                    <th className="px-5 py-4 font-medium">Inspection</th>
                    <th className="px-5 py-4 font-medium">Created</th>
                    <th className="px-5 py-4 font-medium">Status</th>
                    <th className="px-5 py-4 font-medium">Export</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {filteredReports.map((report) => (
                    <tr key={report.id}>
                      <td className="px-5 py-4 text-white">{report.title}</td>
                      <td className="px-5 py-4 text-neutral-400">
                        {report.inspectionId}
                      </td>
                      <td className="px-5 py-4 text-neutral-400">
                        {report.createdAt}
                      </td>
                      <td className="px-5 py-4 text-neutral-400">
                        {report.status}
                      </td>
                      <td className="px-5 py-4">
                        <button
                          type="button"
                          onClick={() =>
                            setNotice(
                              "Export is not connected. No file has been downloaded.",
                            )
                          }
                          className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300"
                        >
                          <ArrowDownToLine className="h-4 w-4" />
                          Export
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {notice && (
            <p role="status" className="border-t border-white/[0.07] p-4 text-sm text-orange-300">
              {notice}
            </p>
          )}
        </section>

        <section className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-[#10131a] p-5">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
          <div>
            <h2 className="font-semibold text-white">Traceable documentation</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Production reports should retain their inspection reference,
              creation time, relevant model version and evidence references.
            </p>
          </div>
        </section>
      </div>
  );
}