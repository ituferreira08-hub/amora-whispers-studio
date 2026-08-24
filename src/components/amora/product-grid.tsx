import { categories, products, type Category, type Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/config/site";
import { Reveal, SectionLabel } from "./ui";
import { ProductCard } from "./product-card";

export function ProductGrid({
  selected,
  onSelect,
  onOpen,
}: {
  selected: Category | "Todas";
  onSelect: (category: Category | "Todas") => void;
  onOpen: (product: Product) => void;
}) {
  const list = selected === "Todas" ? products : products.filter((p) => p.category === selected);
  const filters: (Category | "Todas")[] = ["Todas", ...categories.map((c) => c.name)];

  return (
    <section id="colecao" className="mx-auto max-w-[110rem] px-5 pb-24 md:px-10 md:pb-32">
      <Reveal className="max-w-2xl">
        <SectionLabel>Catálogo</SectionLabel>
        <h2 className="mt-6 text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.05]">
          Peças que fazem você se sentir incrível.
        </h2>
      </Reveal>

      <div
        role="tablist"
        aria-label="Filtrar por categoria"
        className="mt-10 flex flex-wrap gap-x-7 gap-y-3"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            role="tab"
            aria-selected={selected === filter}
            onClick={() => {
              if (filter !== "Todas") trackEvent("category_click", { category: filter });
              onSelect(filter);
            }}
            data-active={selected === filter}
            className={cn(
              "label-xs link-underline py-2 transition-opacity",
              selected === filter ? "opacity-100" : "opacity-45 hover:opacity-100",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-5 gap-y-14 min-[420px]:grid-cols-2 md:gap-x-8 lg:grid-cols-4">
        {list.map((product, i) => (
          <Reveal key={product.id} delay={(i % 4) * 80}>
            <ProductCard product={product} onOpen={onOpen} />
          </Reveal>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="mt-12 text-sm text-muted-foreground">
          Em breve novas peças nesta categoria. Fale com uma consultora para consultar disponibilidade.
        </p>
      ) : null}
    </section>
  );
}
