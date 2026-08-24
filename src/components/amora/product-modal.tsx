import { useEffect, useState } from "react";
import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { openWhatsApp, trackEvent } from "@/config/site";
import { Cta } from "./ui";

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
    if (product) trackEvent("product_view", { product: product.name });
  }, [product]);

  return (
    <Dialog.Root open={!!product} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" />
        <Dialog.Content className="fixed inset-0 z-50 overflow-y-auto bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out md:inset-6 lg:inset-10">
          {product ? (
            <>
              <div className="sticky top-0 z-10 flex justify-end bg-background/90 p-4">
                <Dialog.Close
                  aria-label="Fechar"
                  className="inline-flex h-11 w-11 items-center justify-center"
                >
                  <X strokeWidth={1.2} className="h-6 w-6" />
                </Dialog.Close>
              </div>

              <div className="grid gap-10 px-5 pb-16 md:grid-cols-2 md:gap-14 md:px-10 lg:gap-20">
                <div>
                  <div className="img-zoom">
                    <img
                      src={product.images[active]}
                      alt={`${product.name} — imagem ${active + 1}`}
                      width={900}
                      height={1200}
                      className="aspect-[3/4] w-full object-cover"
                    />
                  </div>
                  {product.images.length > 1 ? (
                    <div className="mt-3 flex gap-3">
                      {product.images.map((image, i) => (
                        <button
                          key={image}
                          onClick={() => setActive(i)}
                          aria-label={`Ver imagem ${i + 1}`}
                          aria-current={active === i}
                          className={cn(
                            "w-20 shrink-0 transition-opacity",
                            active === i ? "opacity-100" : "opacity-50 hover:opacity-100",
                          )}
                        >
                          <img
                            src={image}
                            alt=""
                            width={160}
                            height={200}
                            loading="lazy"
                            className="aspect-[4/5] w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="md:pt-6">
                  <span className="label-xs text-muted-foreground">{product.category}</span>
                  <Dialog.Title className="font-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
                    {product.name}
                  </Dialog.Title>
                  <Dialog.Description className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                    {product.description}
                  </Dialog.Description>
                  {product.price ? <p className="mt-6 text-lg text-wine">{product.price}</p> : null}

                  <dl className="mt-10 space-y-7">
                    <div className="hairline-t pt-5">
                      <dt className="label-xs text-muted-foreground">Cores</dt>
                      <dd className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                        {product.colors.map((color) => (
                          <span key={color}>{color}</span>
                        ))}
                      </dd>
                    </div>
                    <div className="hairline-t pt-5">
                      <dt className="label-xs text-muted-foreground">Tamanhos</dt>
                      <dd className="mt-3 flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <span
                            key={size}
                            className="label-xs border border-border px-3 py-2 text-[0.6rem]"
                          >
                            {size}
                          </span>
                        ))}
                      </dd>
                    </div>
                    <div className="hairline-t pt-5">
                      <dt className="label-xs text-muted-foreground">Composição</dt>
                      <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {product.composition}
                      </dd>
                    </div>
                    <div className="hairline-t pt-5">
                      <dt className="label-xs text-muted-foreground">Cuidados</dt>
                      <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {product.care}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                    <Cta
                      onClick={() => {
                        trackEvent("interest_click", { product: product.name });
                        openWhatsApp(product.name);
                      }}
                    >
                      Tenho interesse
                    </Cta>
                    <Cta variant="outline" onClick={() => openWhatsApp()}>
                      Falar com uma consultora
                    </Cta>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
