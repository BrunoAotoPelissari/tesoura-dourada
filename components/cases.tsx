import { cases } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";

export function Cases() {
  return (
    <section className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeading eyebrow="Portfólio" title="Projetos realizados" />
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((k) => (
            <div key={k.name} className="rounded-2xl overflow-hidden border border-line">
              <div className="h-40 flex items-end p-5" style={{ backgroundColor: k.color }}>
                <span className="text-white text-[0.7rem] font-semibold font-sans tracking-wide uppercase">
                  {k.tag}
                </span>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-display text-lg mb-2 text-ink font-medium">{k.name}</h3>
                <p className="text-sm leading-relaxed text-ink-soft font-sans">{k.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
