import { ArrowUpRight } from "lucide-react";
export default function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand">
      <span className="brand-mark" aria-hidden="true">
        <ArrowUpRight size={22} strokeWidth={2.5} />
      </span>
      {!compact && (
        <span>
          Faisal SAFADI<span className="brand-light"> | web studio</span>
        </span>
      )}
    </span>
  );
}
