"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { AssistantBanner } from "@/components/assistant-banner";
import { Categories } from "@/components/categories";
import { FeaturedProducts } from "@/components/featured-products";
import { Customization } from "@/components/customization";
import { Journey } from "@/components/journey";
import { Cases } from "@/components/cases";
import { Blog } from "@/components/blog";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { AssistantModal } from "@/components/assistant-modal";

export default function Home() {
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <div className="bg-bg">
      <Header />
      <Hero onOpenAssistant={() => setAssistantOpen(true)} />
      <AssistantBanner onOpen={() => setAssistantOpen(true)} />
      <Categories />
      <FeaturedProducts />
      <Customization />
      <Journey />
      <Cases />
      <Blog />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />

      {assistantOpen && <AssistantModal onClose={() => setAssistantOpen(false)} />}
    </div>
  );
}
