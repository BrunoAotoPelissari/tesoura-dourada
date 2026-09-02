export function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`text-xs font-semibold tracking-[0.2em] uppercase mb-3 font-sans ${
        dark ? "text-gold-bright" : "text-gold"
      }`}
    >
      {children}
    </div>
  );
}
