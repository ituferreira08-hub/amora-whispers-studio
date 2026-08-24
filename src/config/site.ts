/**
 * Configuração central da marca.
 * Substitua os valores fictícios pelas informações reais.
 */

export const WHATSAPP_NUMBER = "SEU_NUMERO_AQUI"; // ex.: "5511999999999"

export const siteConfig = {
  brandName: "Amora Intimates",
  brandLine1: "AMORA",
  brandLine2: "INTIMATES",
  whatsappNumber: WHATSAPP_NUMBER,
  instagramUrl: "https://instagram.com/amoraintimates",
  email: "contato@amoraintimates.com",
  city: "São Paulo — SP",
  contactText: "Atendimento por WhatsApp, de segunda a sábado, das 9h às 19h.",
  colors: {
    primary: { ink: "#171416", offWhite: "#F7F3EF" },
    secondary: { nude: "#D8C4B8", wine: "#6E2638", gold: "#B69A6A" },
  },
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Amora Intimates e gostaria de conhecer a coleção.";

export const productWhatsAppMessage = (productName: string) =>
  `Olá! Vim pelo site da Amora Intimates e tenho interesse no ${productName}. Gostaria de saber o valor, tamanhos e disponibilidade.`;

/* ---------------- Analytics (preparado para GA / Meta Pixel) ---------------- */

export type AnalyticsEvent =
  | "whatsapp_click_general"
  | "whatsapp_click_product"
  | "interest_click"
  | "category_click"
  | "product_view"
  | "instagram_click";

export function trackEvent(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };
  // GA4 / GTM
  w.dataLayer?.push({ event, ...payload });
  w.gtag?.("event", event, payload);
  // Meta Pixel
  w.fbq?.("trackCustom", event, payload);
  if (import.meta.env.DEV) console.debug("[analytics]", event, payload);
}

/* ---------------- WhatsApp ---------------- */

export function whatsappUrl(productName?: string, customMessage?: string) {
  const message =
    customMessage ?? (productName ? productWhatsAppMessage(productName) : DEFAULT_WHATSAPP_MESSAGE);
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(productName?: string, customMessage?: string) {
  trackEvent(productName ? "whatsapp_click_product" : "whatsapp_click_general", {
    product: productName ?? null,
  });
  if (typeof window !== "undefined") {
    window.open(whatsappUrl(productName, customMessage), "_blank", "noopener,noreferrer");
  }
}
