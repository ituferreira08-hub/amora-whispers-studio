import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-mark.png";
import { cn } from "@/lib/utils";
import { openWhatsApp, siteConfig } from "@/config/site";
import { Cta, scrollToId } from "./ui";

const nav = [
  { label: "Início", id: "inicio" },
  { label: "Coleção", id: "colecao" },
  { label: "Categorias", id: "categorias" },
  { label: "Sobre", id: "sobre" },
  { label: "Dúvidas", id: "duvidas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    requestAnimationFrame(() => scrollToId(id));
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 shadow-[0_1px_20px_-12px_oklch(0.198_0.008_340/35%)] backdrop-blur-none"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[110rem] items-center justify-between gap-6 px-5 transition-all duration-500 md:px-10",
          scrolled ? "h-16" : "h-20 md:h-24",
        )}
      >
        <button
          onClick={() => go("inicio")}
          aria-label={`${siteConfig.brandName} — ir ao início`}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt=""
            width={40}
            height={40}
            className="h-8 w-8 md:h-10 md:w-10"
            loading="lazy"
          />
          <span className="flex flex-col leading-[0.95] text-left">
            <span className="font-display text-lg tracking-[0.22em] md:text-xl">
              {siteConfig.brandLine1}
            </span>
            <span className="label-xs text-[0.55rem] text-muted-foreground md:text-[0.6rem]">
              {siteConfig.brandLine2}
            </span>
          </span>
        </button>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.id}>
                <button onClick={() => go(item.id)} className="label-xs link-underline py-1">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Cta
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => openWhatsApp()}
            aria-label="Falar no WhatsApp"
          >
            Falar no WhatsApp
          </Cta>
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <Menu strokeWidth={1.2} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        role="dialog"
        aria-modal={open}
        aria-label="Menu"
      >
        <div className="flex h-20 items-center justify-between px-5">
          <span className="font-display text-lg tracking-[0.22em]">{siteConfig.brandLine1}</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center"
          >
            <X strokeWidth={1.2} className="h-6 w-6" />
          </button>
        </div>
        <nav aria-label="Navegação mobile" className="px-5 pt-6">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.id} className="hairline-t">
                <button
                  onClick={() => go(item.id)}
                  className="font-display w-full py-6 text-left text-3xl"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <Cta className="mt-10 w-full" onClick={() => openWhatsApp()}>
            Falar com uma consultora
          </Cta>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {siteConfig.contactText}
          </p>
        </nav>
      </div>
    </header>
  );
}
