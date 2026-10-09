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
  UserRound,
  ShieldCheck,
  Check,
} from "lucide-react";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!fullName.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please complete all fields.");
      return;
    }

    if (fullName.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Include at least one uppercase letter in your password.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Include at least one lowercase letter in your password.");
      return;
    }

    if (!/[0-9]/.test(password)) {
      setError("Include at least one number in your password.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    setSuccess(
      "Your details are valid. Account creation will be available when authentication is connected.",
    );
  }

  const passwordChecks = [
    { label: "At least 8 characters", valid: password.length >= 8 },
    { label: "One uppercase letter", valid: /[A-Z]/.test(password) },
    { label: "One lowercase letter", valid: /[a-z]/.test(password) },
    { label: "One number", valid: /[0-9]/.test(password) },
  ];

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#090b10] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-orange-500/[0.07] blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/[0.04] blur-[150px]" />

      {/* Left panel */}
      <section className="relative hidden w-1/2 flex-col justify-between overflow-hidden border-r border-white/[0.08] p-10 lg:flex xl:p-14">
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
              Start your workspace
            </span>
          </div>

          <h1 className="font-heading text-4xl font-semibold leading-[1.15] tracking-tight xl:text-6xl">
            Better quality
            <br />
            begins with
            <br />
            <span className="gradient-text">better insight.</span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400 xl:text-base">
            Create your account to access a workspace designed for automotive
            visual inspection and quality analysis.
          </p>

          <div className="mt-10 space-y-4">
            {[
              "Organize inspection records",
              "Review available defect findings",
              "Explore quality information",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-orange-400/20 bg-orange-400/[0.08] text-orange-400">
                  <Check size={14} />
                </span>

                <span className="text-sm text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 border-t border-white/[0.08] pt-6">
          <p className="text-xs text-zinc-500">
            Intelligent visual quality inspection
          </p>
        </div>
      </section>

      {/* Registration panel */}
      <section className="relative flex min-h-screen w-full flex-col lg:w-1/2">
        {/* Header */}
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
            Back to home
          </Link>
        </div>

        {/* Form */}
        <div className="flex flex-1 items-center justify-center px-5 pb-12 sm:px-10 lg:px-12">
          <div className="w-full max-w-[440px]">
            <div className="mb-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-400/[0.08] text-orange-400">
                <UserRound size={23} />
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
                Create your account
              </p>

              <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Join Defect Lens.
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Enter your details to get started.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Full name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-zinc-200"
                >
                  Full name
                </label>

                <div className="relative">
                  <UserRound
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    className="h-12 w-full rounded-xl border border-white/[0.1] bg-white/[0.03] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-400/60 focus:ring-2 focus:ring-orange-400/10"
                  />
                </div>
              </div>

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
                    className="h-12 w-full rounded-xl border border-white/[0.1] bg-white/[0.03] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-400/60 focus:ring-2 focus:ring-orange-400/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-zinc-200"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="h-12 w-full rounded-xl border border-white/[0.1] bg-white/[0.03] pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-400/60 focus:ring-2 focus:ring-orange-400/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((previous) => !previous)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-zinc-500 transition hover:text-white"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {/* Password requirements */}
                {password.length > 0 && (
                  <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">
                    {passwordChecks.map((check) => (
                      <div
                        key={check.label}
                        className={`flex items-center gap-2 text-[11px] ${
                          check.valid ? "text-orange-300" : "text-zinc-500"
                        }`}
                      >
                        <Check size={13} />
                        {check.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Confirm password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-zinc-200"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <ShieldCheck
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(event) =>
                      setConfirmPassword(event.target.value)
                    }
                    className="h-12 w-full rounded-xl border border-white/[0.1] bg-white/[0.03] pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-400/60 focus:ring-2 focus:ring-orange-400/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((previous) => !previous)
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-zinc-500 transition hover:text-white"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Feedback */}
              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-sm leading-6 text-red-300"
                >
                  {error}
                </div>
              )}

              {success && (
                <div
                  role="status"
                  className="rounded-xl border border-orange-400/20 bg-orange-400/[0.06] px-4 py-3 text-sm leading-6 text-orange-200"
                >
                  {success}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 text-sm font-semibold text-white shadow-lg shadow-orange-500/10 transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:ring-offset-2 focus:ring-offset-[#090b10]"
              >
                Create account

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-5 text-zinc-500">
                Account creation will be enabled when authentication is
                connected.
              </p>
            </form>

            {/* Login link */}
            <div className="mt-7 border-t border-white/[0.08] pt-6 text-center">
              <p className="text-sm text-zinc-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-orange-400 transition hover:text-orange-300"
                >
                  Sign in
                </Link>
              </p>
            </div>

            <p className="mt-8 text-center text-xs text-zinc-600">
              © {new Date().getFullYear()} Defect Lens
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}