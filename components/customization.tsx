import { customization } from "@/lib/data";
import { iconMap } from "./ui/icon-map";
import { SectionHeading } from "./ui/section-heading";

export function Customization() {
  return (
    <section id="personalizacao" className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeading eyebrow="Técnicas" title="Personalize do seu jeito" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {customization.map(({ name, desc, icon }) => {
            const Icon = iconMap[icon];
            return (
              <div
                key={name}
                className="p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 border border-line bg-white"
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-5 bg-gold-pale">
                  <Icon size={19} strokeWidth={1.6} className="text-gold" />
                </div>
                <h3 className="font-display text-lg mb-2 text-ink font-medium">{name}</h3>
                <p className="text-sm leading-relaxed text-ink-soft font-sans">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
