import { journey } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";

export function Journey() {
  return (
    <section className="py-20 md:py-28 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeading eyebrow="Como funciona" title="Da ideia à entrega" center />
        <div className="relative">
          <div
            className="hidden md:block absolute top-[22px] left-0 right-0 h-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--color-gold) 0, var(--color-gold) 6px, transparent 6px, transparent 12px)",
            }}
          />
          <div
            className="md:hidden absolute top-0 bottom-0 left-[22px] w-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg, var(--color-gold) 0, var(--color-gold) 6px, transparent 6px, transparent 12px)",
            }}
          />
          <div className="grid md:grid-cols-6 gap-8 md:gap-4">
            {journey.map((step, index) => (
              <div key={step.title} className="relative flex md:flex-col gap-4 md:gap-0 pl-14 md:pl-0">
                <div className="absolute left-0 md:static md:mb-5 w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold font-sans shrink-0 bg-bg border-[1.5px] border-gold text-gold">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-display text-base mb-1.5 text-ink font-medium">{step.title}</h4>
                  <p className="text-[0.85rem] leading-relaxed text-ink-soft font-sans">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
