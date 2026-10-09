import { ScanSearch } from "lucide-react";

interface LogoProps {
  light?: boolean;
}

export default function Logo({ light = false }: LogoProps) {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Defect Lens home">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-black shadow-lg shadow-orange-500/20">
        <ScanSearch size={23} strokeWidth={2.2} />
      </span>

      <span className="font-heading text-xl font-bold tracking-tight">
        <span className={light ? "text-white" : "text-white"}>Defect</span>
        <span className="text-orange-400">Lens</span>
      </span>
    </a>
  );
}