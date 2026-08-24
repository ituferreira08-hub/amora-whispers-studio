import type { Product } from "@/data/products";
import { openWhatsApp, trackEvent } from "@/config/site";
import { Cta } from "./ui";

export function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: (product: Product) => void;
}) {
  return (
    <article className="group flex flex-col">
      <button
        onClick={() => onOpen(product)}
        aria-label={`Ver detalhes de ${product.name}`}
        className="img-zoom relative block w-full"
      >
        <img
          src={product.images[0]}
          alt={`${product.name} — ${product.description}`}
          width={900}
          height={1200}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover"
        />
        {product.featured ? (
          <span className="label-xs absolute left-3 top-3 bg-background/90 px-2.5 py-1 text-[0.55rem]">
            Destaque
          </span>
        ) : null}
      </button>

      <div className="flex flex-1 flex-col pt-5">
        <span className="label-xs text-[0.55rem] text-muted-foreground">{product.category}</span>
        <h3 className="mt-2 text-xl leading-snug">
          <button onClick={() => onOpen(product)} className="link-underline text-left">
            {product.name}
          </button>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        {product.price ? <p className="mt-3 text-sm text-wine">{product.price}</p> : null}
        <Cta
          variant="outline"
          size="sm"
          className="mt-5 self-start"
          onClick={() => {
            trackEvent("interest_click", { product: product.name });
            openWhatsApp(product.name);
          }}
        >
          Tenho interesse
        </Cta>
      </div>
    </article>
  );
}
