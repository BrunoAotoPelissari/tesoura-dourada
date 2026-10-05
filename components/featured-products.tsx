import { featuredProducts } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";

export function FeaturedProducts() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHeading eyebrow="Seleção" title="Produtos em destaque" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((products) => (
            <div key={products.name} className="group cursor-pointer">
              <div
                className="aspect-[4/5] rounded-2xl mb-4 relative overflow-hidden transition-transform duration-500 group-hover:-translate-y-1.5"
                style={{ backgroundColor: products.swatch }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "repeating-linear-gradient(115deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 8px)",
                  }}
                />
                <span className="absolute top-4 left-4 text-[0.68rem] font-semibold font-sans px-2.5 py-1 rounded-full tracking-wide bg-bg/90 text-ink">
                  {products.category}
                </span>
              </div>
              <h3 className="font-display text-[1.02rem] mb-1 text-ink font-medium">{products.name}</h3>
              <p className="text-sm mb-1 text-ink-soft font-sans">{products.fabric}</p>
              <p className="text-sm font-semibold font-sans text-gold">{products.price}</p>
            </div>
          ))}
        </div>
        <p className="text-xs mt-8 text-ink-soft font-sans">
          * Peças e preços ilustrativos — serão substituídos pelo catálogo real.
        </p>
      </div>
    </section>
  );
}
