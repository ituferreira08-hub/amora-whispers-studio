import { categories, type Category } from "@/data/products";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/config/site";
import { Reveal, SectionLabel } from "./ui";

export function CategorySection({ onSelect }: { onSelect: (category: Category) => void }) {
  return (
    <section id="categorias" className="mx-auto max-w-[110rem] px-5 pb-24 md:px-10 md:pb-32">
      <Reveal className="max-w-2xl">
        <SectionLabel>Categorias</SectionLabel>
        <h2 className="mt-6 text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.05]">
          Conheça nossa coleção
        </h2>
        <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
          Peças escolhidas para acompanhar todos os seus momentos.
        </p>
      </Reveal>

      <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-5">
        {categories.map((category, i) => (
          <Reveal
            as="li"
            key={category.name}
            delay={i * 70}
            className={cn(category.span ? "md:col-span-3" : "md:col-span-2")}
          >
            <button
              onClick={() => {
                trackEvent("category_click", { category: category.name });
                onSelect(category.name);
              }}
              className="img-zoom group relative block w-full text-left"
            >
              <img
                src={category.image}
                alt={`Categoria ${category.name}`}
                width={900}
                height={1200}
                loading="lazy"
                className={cn(
                  "w-full object-cover",
                  category.span ? "aspect-[4/5] md:aspect-[4/3]" : "aspect-[4/5]",
                )}
              />
              <span aria-hidden className="absolute inset-0 bg-ink/20 transition-colors duration-500 group-hover:bg-ink/35" />
              <span className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                <span className="label-xs block text-ink-foreground">{category.name}</span>
                <span className="mt-2 block text-xs text-ink-foreground/75">{category.caption}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
