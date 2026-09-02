import { ArrowRight, type LucideIcon } from "lucide-react";

interface GoldButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  icon?: LucideIcon;
  className?: string;
}

export function GoldButton({
  children,
  onClick,
  href,
  icon: Icon = ArrowRight,
  className = "",
}: GoldButtonProps) {
  const classes = `group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold font-sans tracking-wide bg-ink text-white transition-all duration-300 hover:gap-3.5 hover:-translate-y-0.5 ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <Icon size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      <Icon size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
    </button>
  );
}
