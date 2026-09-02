import { Eyebrow } from "./eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`font-display text-3xl md:text-[2.75rem] leading-[1.1] font-medium ${
          dark ? "text-ink-on-dark" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
