import cta from "@/assets/cta.jpg";
import { openWhatsApp } from "@/config/site";
import { Cta, Reveal } from "./ui";

export function CtaSection() {
  return (
    <section aria-label="Fale com a Amora" className="relative overflow-hidden">
      <img
        src={cta}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-ink/70" />

      <div className="relative mx-auto flex max-w-[110rem] flex-col items-center px-5 py-28 text-center md:px-10 md:py-40">
        <Reveal>
          <span className="label-xs text-ink-foreground/70">Amora Intimates</span>
          <h2 className="mx-auto mt-6 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.03] text-ink-foreground">
            Pronta para se sentir incrível?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[0.95rem] leading-relaxed text-ink-foreground/80">
            Sua peça favorita pode estar a uma conversa de distância. Chame a Amora no
            WhatsApp e receba atendimento personalizado.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Cta variant="light" size="lg" onClick={() => openWhatsApp()}>
              Chamar no WhatsApp
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
