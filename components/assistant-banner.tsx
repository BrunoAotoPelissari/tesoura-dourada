"use client";

import { Eyebrow } from "./ui/eyebrow";
import { GoldButton } from "./ui/gold-button";

export function AssistantBanner({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="py-16 md:py-20 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <Eyebrow dark>Assistente exclusivo</Eyebrow>
          <h3 className="font-display text-2xl md:text-[2rem] mb-2 text-ink-on-dark font-medium">
            Não sabe por onde começar?
          </h3>
          <p className="max-w-md text-ink-soft-on-dark font-sans">
            Responda 3 perguntas rápidas e encontre o uniforme ideal para o
            seu time, empresa ou evento.
          </p>
        </div>
        <GoldButton onClick={onOpen} className="shrink-0">
          Encontrar o uniforme ideal
        </GoldButton>
      </div>
    </section>
  );
}
