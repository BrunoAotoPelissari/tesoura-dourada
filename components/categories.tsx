import { categories } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";

export function Categories() {
  return (
    <section id="categorias" className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeading eyebrow="Catálogo" title="Encontre o que precisa" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden text-left p-5 flex flex-col justify-end bg-bg-soft border border-line transition-colors duration-300"
            >
              <span className="absolute top-5 right-5 text-xs font-semibold font-sans text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg md:text-xl text-ink font-medium transition-transform duration-300 group-hover:translate-x-1">
                {cat}
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-t from-gold/10 to-transparent" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
