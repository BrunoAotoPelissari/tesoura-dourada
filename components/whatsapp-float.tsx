import { WhatsAppGlyph } from "./ui/whatsapp-glyph";
import { waLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Olá! Vim pelo site e gostaria de falar sobre uniformes personalizados.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 bg-whatsapp"
    >
      <span className="absolute inset-0 rounded-full animate-ping bg-whatsapp opacity-35" />
      <WhatsAppGlyph size={26} />
    </a>
  );
}
