import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ScanSearch,
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  ShieldCheck,
  CircleCheck,
} from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(
      "Authentication isn't connected yet. Your credentials haven't been sent.",
    );
  }

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#090b10] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-orange-500/[0.07] blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/[0.04] blur-[150px]" />

      {/* Left visual panel */}
      <section className="relative hidden w-1/2 flex-col justify-between overflow-hidden border-r border-white/[0.08] p-10 lg:flex xl:p-14">
        {/* Decorative grid */}
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-black shadow-lg shadow-orange-500/20">
              <ScanSearch size={24} />
            </span>

            <span className="font-heading text-xl font-bold tracking-tight">
              Defect<span className="text-orange-400">Lens</span>
            </span>
          </Link>
        </div>

        <div className="relative z-10 my-16 max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/[0.06] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-orange-400" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-300">
              Intelligent quality inspection
            </span>
          </div>

          <h1 className="font-heading text-4xl font-semibold leading-[1.15] tracking-tight xl:text-6xl">
            Quality starts
            <br />
            with seeing
            <br />
            <span className="gradient-text">every detail.</span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400 xl:text-base">
            Access your inspection workspace to review automotive images,
            examine available findings, and organize quality information.
          </p>

          {/* Capability cards — no fabricated metrics */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <div className="glass rounded-xl p-4">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-orange-400/[0.09] text-orange-400">
                <ScanSearch size={19} />
              </div>

              <h3 className="text-sm font-medium text-white">
                Visual inspection
              </h3>

              <p className="mt-1 text-xs leading-5 text-zinc-500">
                Review images and available model findings.
              </p>
            </div>

            <div className="glass rounded-xl p-4">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-orange-400/[0.09] text-orange-400">
                <ShieldCheck size={19} />
              </div>

              <h3 className="text-sm font-medium text-white">
                Quality insights
              </h3>

              <p className="mt-1 text-xs leading-5 text-zinc-500">
                Organize inspection records and evidence.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
          <p className="text-xs text-zinc-500">
            Intelligent visual quality inspection
          </p>

          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <CircleCheck size={14} className="text-orange-400" />
            <span>Defect Lens</span>
          </div>
        </div>
      </section>

      {/* Right login panel */}
      <section className="relative flex min-h-screen w-full flex-col lg:w-1/2">
        {/* Mobile brand */}
        <div className="flex items-center justify-between p-5 sm:p-8 lg:justify-end lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 lg:hidden">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-black">
              <ScanSearch size={20} />
            </span>

            <span className="font-heading text-lg font-bold">
              Defect<span className="text-orange-400">Lens</span>
            </span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            <span>Back to home</span>
          </Link>
        </div>

        {/* Login form */}
        <div className="flex flex-1 items-center justify-center px-5 pb-12 sm:px-10 lg:px-12">
          <div className="w-full max-w-[420px]">
            <div className="mb-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-400/[0.08] text-orange-400">
                <LockKeyhole size={23} />
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
                Welcome back
              </p>

              <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Sign in to your
                <br />
                <span className="text-zinc-500">workspace.</span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Enter your account details to continue to Defect Lens.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-200"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="h-12 w-full rounded-xl border border-white/[0.1] bg-white/[0.03] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-white/[0.16] focus:border-orange-400/60 focus:ring-2 focus:ring-orange-400/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-zinc-200"
                  >
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-xs font-medium text-orange-400 transition hover:text-orange-300"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="h-12 w-full rounded-xl border border-white/[0.1] bg-white/[0.03] pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-white/[0.16] focus:border-orange-400/60 focus:ring-2 focus:ring-orange-400/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((previous) => !previous)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-zinc-500 transition hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Error / connection message */}
              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-orange-400/20 bg-orange-400/[0.06] px-4 py-3 text-sm leading-6 text-orange-200"
                >
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 text-sm font-semibold text-white shadow-lg shadow-orange-500/10 transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:ring-offset-2 focus:ring-offset-[#090b10]"
              >
                Sign in

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-5 text-zinc-500">
                Authentication will be enabled when the backend service is
                connected.
              </p>
            </form>

            {/* Registration link */}
            <div className="mt-8 border-t border-white/[0.08] pt-6 text-center">
              <p className="text-sm text-zinc-400">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-orange-400 transition hover:text-orange-300"
                >
                  Create account
                </Link>
              </p>
            </div>

            <p className="mt-10 text-center text-xs text-zinc-600">
              © {new Date().getFullYear()} Defect Lens
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}