import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  accent?: "orange" | "blue" | "green" | "purple";
}

const accents = {
  orange: "bg-orange-400/10 text-orange-400 border-orange-400/15",
  blue: "bg-sky-400/10 text-sky-400 border-sky-400/15",
  green: "bg-emerald-400/10 text-emerald-400 border-emerald-400/15",
  purple: "bg-violet-400/10 text-violet-400 border-violet-400/15",
};

export default function StatCard({
  title,
  value,
  description,
  icon: Icon,
  accent = "orange",
}: StatCardProps) {
  return (
    <article className="group rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-400/20 hover:bg-[#131720] sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-neutral-400">{title}</p>
          <p className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white">
            {value}
          </p>
        </div>

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${accents[accent]}`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <p className="mt-4 text-xs leading-5 text-neutral-500">
        {description}
      </p>
    </article>
  );
}