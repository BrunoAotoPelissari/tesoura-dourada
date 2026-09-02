export function GhostButton({
  children,
  onClick,
  dark = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  dark?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold font-sans tracking-wide border transition-colors duration-300 ${
        dark ? "border-line-on-dark text-ink-on-dark" : "border-line text-ink"
      }`}
    >
      {children}
    </button>
  );
}
