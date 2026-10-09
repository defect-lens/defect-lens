import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitted(false);

    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password recovery will be connected to the backend later.
    setSubmitted(true);
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090b10] px-5 py-12 text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-400/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />
      </div>

      <section className="relative w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="mb-10 flex items-center justify-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/30 bg-orange-500/10">
            <ScanSearch className="h-6 w-6 text-orange-400" />
          </div>

          <span className="font-heading text-2xl font-bold tracking-tight">
            Defect <span className="text-orange-400">Lens</span>
          </span>
        </Link>

        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-9">
          {!submitted ? (
            <>
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10">
                <Mail className="h-7 w-7 text-orange-400" />
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
                Account recovery
              </p>

              <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Forgot your password?
              </h1>

              <p className="mt-4 text-sm leading-6 text-neutral-400">
                Enter the email address associated with your account to begin
                the password recovery process.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-neutral-200"
                  >
                    Email address
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        setError("");
                      }}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-black/20 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-orange-400/60 focus:ring-2 focus:ring-orange-400/10"
                    />
                  </div>
                </div>

                {error && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-300"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#090b10]"
                >
                  Continue
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              <div className="mt-7 flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

                <p className="text-xs leading-5 text-neutral-400">
                  Your account recovery will be handled securely once the
                  authentication backend is connected.
                </p>
              </div>
            </>
          ) : (
            <div className="py-5 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
                <CheckCircle2 className="h-8 w-8 text-emerald-400" />
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                Input validated
              </p>

              <h1 className="font-heading text-3xl font-bold">
                You're all set.
              </h1>

              <p className="mt-4 text-sm leading-6 text-neutral-400">
                The email address{" "}
                <span className="break-all font-medium text-white">
                  {email.trim()}
                </span>{" "}
                passed validation.
              </p>

              <div className="mt-6 rounded-xl border border-orange-400/20 bg-orange-400/5 p-4 text-left">
                <p className="text-sm font-medium text-orange-300">
                  Password recovery isn't connected yet.
                </p>

                <p className="mt-2 text-xs leading-5 text-neutral-400">
                  No email has been sent and your password has not been
                  changed. This feature will become functional when the
                  backend is integrated.
                </p>
              </div>

              <Link
                to="/login"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                Return to login
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/login"
          className="mx-auto mt-7 flex w-fit items-center gap-2 text-sm text-neutral-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>

        <p className="mt-10 text-center text-xs text-neutral-600">
          © {new Date().getFullYear()} Defect Lens. Built for smarter quality
          inspection.
        </p>
      </section>
    </main>
  );
}