import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Botão flutuante de WhatsApp (desktop) + barra fixa inferior (mobile).
 * Aparece após o usuário rolar um pouco a página.
 */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop: botão circular flutuante */}
      <button
        onClick={() => openWhatsApp()}
        aria-label="Falar com a Amora no WhatsApp"
        className={cn(
          "group fixed bottom-8 right-8 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-ink text-ink-foreground shadow-[0_12px_32px_-10px_oklch(0.198_0.008_340/60%)] transition-all duration-500 hover:bg-wine md:inline-flex",
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
        )}
      >
        <span
          aria-hidden
          className="pulse-ring absolute inset-0 rounded-full border border-ink"
        />
        <MessageCircle strokeWidth={1.4} className="h-6 w-6" aria-hidden />
      </button>

      {/* Mobile: barra fixa inferior */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 bg-background/95 px-5 pb-[max(0.9rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-1px_20px_-12px_oklch(0.198_0.008_340/35%)] backdrop-blur transition-transform duration-500 md:hidden",
          visible ? "translate-y-0" : "translate-y-full",
        )}
      >
        <button
          onClick={() => openWhatsApp()}
          aria-label="Falar com uma consultora no WhatsApp"
          className="label-xs flex min-h-11 w-full items-center justify-center gap-2.5 bg-ink px-7 py-3.5 text-ink-foreground transition-colors duration-300 active:bg-wine"
        >
          <MessageCircle strokeWidth={1.4} className="h-4.5 w-4.5" aria-hidden />
          Falar com uma consultora
        </button>
      </div>
    </>
  );
}
