"use client";

import { Scissors } from "lucide-react";
import { Eyebrow } from "./ui/eyebrow";
import { GoldButton } from "./ui/gold-button";
import { GhostButton } from "./ui/ghost-button";

const swatches = ["#1B2A4A", "#A97C2E", "#17150F", "#D8D2C0", "#5B5346", "#EDE2C6"];

export function Hero({ onOpenAssistant }: { onOpenAssistant: () => void }) {
  return (
    <section id="topo" className="relative overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Eyebrow>Catálogo B2B · Uniformes personalizados</Eyebrow>
          <h1 className="font-display text-[2.6rem] sm:text-6xl lg:text-[3.6rem] leading-[1.04] mb-6 text-ink font-medium">
            Uniformes que
            <br />
            vestem sua <span className="text-gold italic">marca</span>
          </h1>
          <p className="text-base md:text-lg mb-9 max-w-md text-ink-soft font-sans">
            Personalização para empresas, equipes esportivas e eventos — do
            briefing à entrega, sua identidade em cada peça.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <GoldButton
              onClick={() =>
                document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Conhecer produtos
            </GoldButton>
            <GhostButton onClick={onOpenAssistant}>Encontrar meu uniforme</GhostButton>
          </div>
        </div>

        <div className="relative h-[340px] sm:h-[420px] lg:h-[460px]">
          <div className="absolute inset-0 flex flex-wrap content-center gap-3 opacity-90">
            {swatches.map((swatch, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-sm"
                style={{
                  backgroundColor: swatch,
                  width: index % 2 === 0 ? "30%" : "22%",
                  height: index % 3 === 0 ? "150px" : "110px",
                  transform: `rotate(${(index % 2 === 0 ? -1 : 1) * (2 + index)}deg)`,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full flex items-center justify-center bg-bg border-[1.5px] border-gold shadow-[0_20px_60px_rgba(23,21,15,0.18)]">
              <Scissors size={52} strokeWidth={1.25} className="text-gold -rotate-[40deg]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
