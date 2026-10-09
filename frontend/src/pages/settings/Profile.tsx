import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  KeyRound,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";

import Logo from "../../components/common/Logo";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setMessage("Enter a valid email address.");
      return;
    }

    setMessage(
      "The recovery form is valid, but password recovery is not connected yet. No email has been sent.",
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090b10] px-4 py-12 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(240,120,73,0.11),transparent_45%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:54px_54px]" />

      <div className="relative w-full max-w-[480px]">
        <Link to="/" className="mb-9 inline-flex">
          <Logo />
        </Link>

        <section className="rounded-3xl border border-white/[0.09] bg-[#10131a]/90 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-9">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-400/[0.07]">
            <KeyRound className="h-6 w-6 text-orange-400" />
          </div>

          <div className="mt-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-orange-400">
              ACCOUNT RECOVERY
            </p>

            <h1 className="mt-3 font-heading text-3xl font-bold text-white">
              Forgot your password?
            </h1>

            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Enter your account email address to begin the password recovery
              process.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-neutral-300">
                Email address
              </span>

              <span className="relative block">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />

                <input
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setMessage("");
                  }}
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-orange-400/50"
                />
              </span>
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Request password reset
              <ArrowRight className="h-4 w-4" />
            </button>

            {message && (
              <div
                role="status"
                className="flex items-start gap-3 rounded-xl border border-orange-400/20 bg-orange-400/[0.04] p-4"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />

                <p className="text-sm leading-6 text-neutral-300">
                  {message}
                </p>
              </div>
            )}
          </form>

          <div className="mt-7 flex items-start gap-3 border-t border-white/[0.07] pt-6">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" />
            <p className="text-xs leading-5 text-neutral-500">
              Password recovery will be enabled after secure authentication
              and email delivery are integrated.
            </p>
          </div>

          <Link
            to="/login"
            className="mt-7 inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-orange-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to login
          </Link>
        </section>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-neutral-600">
          <LockKeyhole className="h-3.5 w-3.5" />
          Defect Lens · Quality intelligence workspace
        </div>
      </div>
    </main>
  );
}