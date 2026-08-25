import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { AboutSection } from "@/components/amora/about-section";
import { Benefits } from "@/components/amora/benefits";
import { CategorySection } from "@/components/amora/category-section";
import { ConsultSection } from "@/components/amora/consult-section";
import { CtaSection } from "@/components/amora/cta-section";
import { EditorialSection } from "@/components/amora/editorial-section";
import { FaqSection } from "@/components/amora/faq-section";
import { Footer } from "@/components/amora/footer";
import { Header } from "@/components/amora/header";
import { Hero } from "@/components/amora/hero";
import { ProductGrid } from "@/components/amora/product-grid";
import { ProductModal } from "@/components/amora/product-modal";
import { WhatsAppFloat } from "@/components/amora/whatsapp-float";
import { WhyAmora } from "@/components/amora/why-amora";
import { scrollToId } from "@/components/amora/ui";
import type { Category, Product } from "@/data/products";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [category, setCategory] = useState<Category | "Todas">("Todas");
  const [openProduct, setOpenProduct] = useState<Product | null>(null);

  const selectCategory = useCallback((next: Category | "Todas") => {
    setCategory(next);
    requestAnimationFrame(() => scrollToId("colecao"));
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <CategorySection onSelect={selectCategory} />
        <ProductGrid
          selected={category}
          onSelect={setCategory}
          onOpen={setOpenProduct}
        />
        <EditorialSection />
        <ConsultSection />
        <AboutSection />
        <WhyAmora />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ProductModal product={openProduct} onClose={() => setOpenProduct(null)} />
    </>
  );
}
