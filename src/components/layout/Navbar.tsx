import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "../common/Logo";

const links = [
  { label: "Platform", href: "#features" },
  { label: "How it works", href: "#workflow" },
   { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#090b10]/85 backdrop-blur-2xl">
      <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Logo />

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="/login"
            className="text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            Log in
          </a>

          <a
            href="/register"
            className="flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
          >
            Get started <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#090b10] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-zinc-300"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-zinc-300"
            >
              Log in
            </a>

            <a
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-black"
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}