import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 text-center bg-bg-dark">
      <div className="max-w-2xl mx-auto px-5">
        <h2 className="font-display text-3xl md:text-[2.5rem] leading-tight mb-6 text-ink-on-dark font-medium">
          Precisa de um projeto?
        </h2>
        <p className="mb-9 text-ink-soft-on-dark font-sans">
          Fale agora com a Tesoura Dourada e receba uma proposta feita sob
          medida para sua empresa, equipe ou evento.
        </p>
        <a
          href={waLink("Olá! Tenho um projeto de uniformes personalizados e gostaria de uma proposta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold font-sans bg-gold text-bg-dark transition-transform hover:-translate-y-0.5"
        >
          Falar com a Tesoura Dourada <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
