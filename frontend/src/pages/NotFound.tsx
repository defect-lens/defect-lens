import { Link } from "react-router-dom";
import { ArrowLeft, Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090b10] px-6 text-white">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-3xl border border-orange-400/20 bg-orange-500/10">
          <SearchX size={38} className="text-orange-400" />
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-orange-400">
          Error 404
        </p>

        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Page not found<span className="text-orange-400">.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-gray-400">
          The page you are looking for doesn't exist or may have been moved.
          Let's get you back to the Defect Lens workspace.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            <Home size={16} />
            Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/5"
          >
            <ArrowLeft size={16} />
            Go back
          </button>
        </div>
      </div>
    </main>
  );
}