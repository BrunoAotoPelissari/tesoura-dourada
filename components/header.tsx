"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./ui/logo";
import { WhatsAppGlyph } from "./ui/whatsapp-glyph";
import { waLink } from "@/lib/whatsapp";

const links = [
  { label: "Produtos", id: "produtos" },
  { label: "Categorias", id: "categorias" },
  { label: "Personalização", id: "personalizacao" },
  { label: "Blog", id: "blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-line">
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-[76px] flex items-center justify-between">
        <button onClick={() => scrollTo("topo")} aria-label="Topo da página">
          <Logo />
        </button>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-[0.92rem] font-medium font-sans text-ink-soft transition-opacity hover:opacity-60"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={waLink("Olá! Vim pelo site e gostaria de saber mais sobre uniformes personalizados.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold font-sans bg-whatsapp text-white transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppGlyph size={16} /> WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden px-5 pb-6 flex flex-col gap-1 border-t border-line">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-left py-3 text-[0.95rem] font-medium font-sans text-ink border-b border-line"
            >
              {l.label}
            </button>
          ))}
          <a
            href={waLink("Olá! Vim pelo site e gostaria de saber mais sobre uniformes personalizados.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold font-sans bg-whatsapp text-white"
          >
            <WhatsAppGlyph size={16} /> Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
