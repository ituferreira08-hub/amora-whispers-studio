import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-mark.png";
import { openWhatsApp, siteConfig, trackEvent } from "@/config/site";
import { scrollToId } from "./ui";

const nav = [
  { label: "Início", id: "inicio" },
  { label: "Coleção", id: "colecao" },
  { label: "Categorias", id: "categorias" },
  { label: "Sobre", id: "sobre" },
  { label: "Dúvidas", id: "duvidas" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[110rem] px-5 pb-28 pt-16 md:px-10 md:pb-16 md:pt-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="" width={44} height={44} className="h-11 w-11" loading="lazy" />
              <span className="flex flex-col leading-[0.95]">
                <span className="font-display text-xl tracking-[0.22em]">{siteConfig.brandLine1}</span>
                <span className="label-xs text-[0.55rem] text-ink-foreground/60">
                  {siteConfig.brandLine2}
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
              Lingerie com curadoria criteriosa e atendimento personalizado. Descubra a coleção
              e finalize sua escolha em uma conversa — sem cadastro, sem burocracia.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé" className="md:col-span-3">
            <span className="label-xs text-ink-foreground/50">Navegação</span>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="link-underline py-0.5 text-sm text-ink-foreground/85"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <span className="label-xs text-ink-foreground/50">Atendimento</span>
            <ul className="mt-5 space-y-4 text-sm text-ink-foreground/85">
              <li>
                <button
                  onClick={() => openWhatsApp()}
                  className="group inline-flex items-center gap-3"
                  aria-label="Conversar no WhatsApp"
                >
                  <MessageCircle strokeWidth={1.2} className="h-4.5 w-4.5 text-gold" aria-hidden />
                  <span className="link-underline">WhatsApp — resposta rápida</span>
                </button>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("instagram_click")}
                  className="group inline-flex items-center gap-3"
                  aria-label="Instagram da Amora Intimates"
                >
                  <Instagram strokeWidth={1.2} className="h-4.5 w-4.5 text-gold" aria-hidden />
                  <span className="link-underline">@amoraintimates</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center gap-3"
                >
                  <Mail strokeWidth={1.2} className="h-4.5 w-4.5 text-gold" aria-hidden />
                  <span className="link-underline">{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-ink-foreground/60">
                <MapPin strokeWidth={1.2} className="h-4.5 w-4.5 text-gold" aria-hidden />
                <span>{siteConfig.city}</span>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-ink-foreground/50">
              {siteConfig.contactText}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink-foreground/10 pt-7 text-xs text-ink-foreground/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.brandName}. Todos os direitos reservados.
          </p>
          <p>Site de catálogo — compras finalizadas pelo WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
}
