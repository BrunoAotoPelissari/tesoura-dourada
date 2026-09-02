// Dados mockados. Quando o catálogo real existir (Supabase, CMS etc.),
// troque estas constantes por chamadas de dados — a UI já está pronta
// para consumir este mesmo formato.

export const categories = [
  "Camisetas",
  "Polos",
  "Moletons",
  "Jalecos",
  "Esportivo",
  "Sociais",
  "Jaquetas",
  "Bonés",
];

export interface Product {
  name: string;
  category: string;
  price: string;
  fabric: string;
  swatch: string;
}

export const featuredProducts: Product[] = [
  { name: "Camiseta Corporativa Premium", category: "Camisetas", price: "a partir de R$ 39,90", fabric: "Algodão penteado", swatch: "#2B3A55" },
  { name: "Polo Piquet Bordada", category: "Polos", price: "a partir de R$ 69,90", fabric: "Piquet", swatch: "#17150F" },
  { name: "Moletom Canguru Personalizado", category: "Moletons", price: "a partir de R$ 89,90", fabric: "Moletom flanelado", swatch: "#5B5346" },
  { name: "Jaleco Profissional", category: "Jalecos", price: "a partir de R$ 79,90", fabric: "Gabardine", swatch: "#D8D2C0" },
];

export interface CustomizationMethod {
  name: string;
  desc: string;
  icon: "Sparkles" | "Zap" | "Palette" | "Droplets";
}

export const customization: CustomizationMethod[] = [
  { name: "Bordado", desc: "Acabamento nobre e durável — ideal para logos e brasões.", icon: "Sparkles" },
  { name: "DTF", desc: "Cores vibrantes com ótima durabilidade em qualquer tecido.", icon: "Zap" },
  { name: "Serigrafia", desc: "Alto volume de peças com custo reduzido por unidade.", icon: "Palette" },
  { name: "Sublimação", desc: "Estampa total, sem limite de cores ou textura.", icon: "Droplets" },
];

export interface JourneyStep {
  title: string;
  desc: string;
}

export const journey: JourneyStep[] = [
  { title: "Briefing", desc: "Entendemos sua marca, seu público e a ocasião das peças." },
  { title: "Proposta", desc: "Sugerimos tecidos, técnicas e valores dentro do orçamento." },
  { title: "Layout", desc: "Criamos a arte final para sua aprovação." },
  { title: "Aprovação", desc: "Você revisa e valida cada detalhe antes da produção." },
  { title: "Produção", desc: "Corte, costura e personalização com controle de qualidade." },
  { title: "Entrega", desc: "10 a 15 dias úteis após a aprovação." },
];

export interface CaseStudy {
  name: string;
  tag: string;
  desc: string;
  color: string;
}

export const cases: CaseStudy[] = [
  { name: "Corrida de Rua R.O.N.E", tag: "Evento esportivo · Curitiba, PR", desc: "Camisetas para a tradicional corrida da Companhia R.O.N.E. do Batalhão de Polícia de Choque, em homenagem aos profissionais da segurança pública.", color: "#1B2A4A" },
  { name: "BP Choque", tag: "II Corrida Noturna · PMPR", desc: "Camisetas, bonés e canecas para a corrida noturna da Polícia Militar do Paraná, com organização técnica da Assessocor.", color: "#141414" },
  { name: "Terra à Vista", tag: "Ação social · Barco Sorriso", desc: "3ª edição da ação na Portelinha: camisas para os voluntários que levaram atendimento odontológico e médico a dezenas de famílias.", color: "#1E7FA8" },
];

export interface BlogPost {
  title: string;
  tag: string;
}

export const blogPosts: BlogPost[] = [
  { title: "DTF ou serigrafia: qual escolher para o uniforme da sua equipe?", tag: "Personalização" },
  { title: "5 erros comuns ao uniformizar sua empresa (e como evitar)", tag: "Gestão" },
  { title: "Bordado vs. sublimação: qual técnica dura mais na lavagem?", tag: "Técnicas" },
];

export interface AssistantStep {
  key: "quem" | "peca" | "qtd";
  question: string;
  options: string[];
}

export const assistantSteps: AssistantStep[] = [
  { key: "quem", question: "Para quem você está comprando?", options: ["Empresa", "Evento", "Equipe esportiva", "Profissional", "Uso pessoal"] },
  { key: "peca", question: "Qual peça procura?", options: ["Camiseta", "Polo", "Jaqueta", "Moletom", "Outro"] },
  { key: "qtd", question: "Qual quantidade?", options: ["1–10", "10–50", "50–100", "100+"] },
];
