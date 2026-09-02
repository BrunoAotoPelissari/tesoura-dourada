import { Scissors } from "lucide-react";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 border-[1.5px] border-gold">
        <Scissors size={15} strokeWidth={1.75} className="text-gold -rotate-[40deg]" />
      </div>
      <span className="font-display text-[1.3rem] leading-none whitespace-nowrap">
        <span className={dark ? "text-ink-on-dark font-medium" : "text-ink font-medium"}>
          Tesoura
        </span>{" "}
        <span className="text-gold italic font-medium">Dourada</span>
      </span>
    </div>
  );
}
