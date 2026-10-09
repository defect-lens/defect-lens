import { ArrowUpRight } from "lucide-react";
import Logo from "../common/Logo";

const productLinks = [
  { label: "Platform", href: "#features" },
  { label: "How it works", href: "#workflow" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#08090d]">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo />

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
              Intelligent visual inspection and quality insights for
              automotive manufacturing.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Product
            </h3>

            <div className="flex flex-col items-start gap-4">
              {productLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-zinc-400 transition hover:text-orange-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Account links */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Get started
            </h3>

            <div className="flex flex-col items-start gap-4">
              <a
                href="/login"
                className="text-sm text-zinc-400 transition hover:text-orange-400"
              >
                Log in
              </a>

              <a
                href="/register"
                className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-orange-400"
              >
                Create an account

                <ArrowUpRight
                  size={14}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.07] pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Defect Lens. All rights reserved.</p>

          <a href="#home" className="transition hover:text-orange-400">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}