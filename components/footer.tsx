import { MapPin, Phone, Mail } from "lucide-react";
import { FiInstagram } from "react-icons/fi";
import { Logo } from "./ui/logo";
import { WhatsAppGlyph } from "./ui/whatsapp-glyph";
import { waLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-line-on-dark">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <Logo dark />
          <p className="mt-4 text-sm leading-relaxed max-w-xs text-ink-soft-on-dark font-sans">
            Especialistas em uniformes personalizados — parceiros de
            empresas, equipes esportivas e eventos há mais de duas décadas.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold font-sans tracking-[0.2em] uppercase mb-4 text-gold-bright">
            Contato
          </h4>
          <ul className="space-y-3 text-sm text-ink-soft-on-dark font-sans">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0" /> Rua Dr. Bley
              Zornig, 978 — Boqueirão, Curitiba
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0" /> (41) 99552-3092
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0" /> vendas.camisetaspersonalizadas@gmail.com
            </li>
            <li className="flex items-center gap-2.5">
              <FiInstagram size={16} className="shrink-0" /> @tesoura.dourada
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold font-sans tracking-[0.2em] uppercase mb-4 text-gold-bright">
            Fale agora
          </h4>
          <a
            href={waLink("Olá! Vim pelo site da Tesoura Dourada.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold font-sans bg-whatsapp text-white"
          >
            <WhatsAppGlyph size={16} /> WhatsApp
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-6 text-xs flex flex-col sm:flex-row justify-between gap-2 border-t border-line-on-dark text-ink-soft-on-dark font-sans">
        <span>© {new Date().getFullYear()} Tesoura Dourada Uniformes. Todos os direitos reservados.</span>
        <span>tesouradourada.com.br</span>
      </div>
    </footer>
  );
}
