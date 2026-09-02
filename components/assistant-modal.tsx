"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { assistantSteps, featuredProducts, type AssistantStep } from "@/lib/data";
import { Eyebrow } from "./ui/eyebrow";
import { WhatsAppGlyph } from "./ui/whatsapp-glyph";
import { waLink } from "@/lib/whatsapp";

type Answers = Partial<Record<AssistantStep["key"], string>>;

export function AssistantModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const isResult = step === assistantSteps.length;

  const pick = (key: AssistantStep["key"], value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setStep((s) => s + 1);
  };

  const resultMessage = `Olá! Usei o assistente do site e busco: ${answers.peca ?? "—"}, para ${answers.quem ?? "—"}, quantidade ${answers.qtd ?? "—"}. Podem me ajudar?`;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-ink/55"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl p-7 sm:p-9 relative max-h-[88vh] overflow-y-auto bg-bg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full transition-colors hover:bg-black/5 text-ink-soft"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {!isResult && (
          <div className="flex items-center gap-1.5 mb-7">
            {assistantSteps.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full flex-1 ${i <= step ? "bg-gold" : "bg-line"}`}
              />
            ))}
          </div>
        )}

        {!isResult ? (
          <div>
            <Eyebrow>
              Passo {step + 1} de {assistantSteps.length}
            </Eyebrow>
            <h3 className="font-display text-2xl mb-6 text-ink font-medium">
              {assistantSteps[step].question}
            </h3>
            <div className="flex flex-col gap-2.5">
              {assistantSteps[step].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => pick(assistantSteps[step].key, opt)}
                  className="text-left px-5 py-4 rounded-xl transition-colors duration-200 flex items-center justify-between group border border-line bg-white text-ink font-sans"
                >
                  {opt}
                  <ChevronRight
                    size={17}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-gold"
                  />
                </button>
              ))}
            </div>
            {step > 0 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium font-sans text-ink-soft"
              >
                <ChevronLeft size={16} /> Voltar
              </button>
            )}
          </div>
        ) : (
          <div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 bg-gold-pale">
              <Check size={22} className="text-gold" />
            </div>
            <Eyebrow>Sugestão pronta</Eyebrow>
            <h3 className="font-display text-2xl mb-2 text-ink font-medium">
              Encontramos um caminho pra você
            </h3>
            <p className="text-sm mb-6 text-ink-soft font-sans">
              {answers.peca} para {String(answers.quem).toLowerCase()}, quantidade{" "}
              {answers.qtd}. Nosso time confirma tecido, técnica e prazo direto com
              você.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-7">
              {featuredProducts.slice(0, 2).map((p) => (
                <div key={p.name} className="rounded-xl overflow-hidden border border-line">
                  <div className="h-20" style={{ backgroundColor: p.swatch }} />
                  <div className="p-3">
                    <p className="text-xs font-medium leading-snug text-ink font-sans">
                      {p.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={waLink(resultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-sm font-semibold font-sans bg-whatsapp text-white"
            >
              <WhatsAppGlyph size={17} /> Continuar no WhatsApp
            </a>
            <button
              onClick={() => {
                setStep(0);
                setAnswers({});
              }}
              className="w-full mt-3 text-sm font-medium font-sans py-2 text-ink-soft"
            >
              Refazer busca
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
