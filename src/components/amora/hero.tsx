import hero from "@/assets/hero.jpg";
import { openWhatsApp } from "@/config/site";
import { Cta, scrollToId } from "./ui";

export function Hero() {
  return (
    <section id="inicio" className="relative">
      <div className="relative h-[92svh] min-h-[560px] w-full overflow-hidden md:h-[88vh]">
        <img
          src={hero}
          alt="Body de renda preta em cabide de madeira sobre parede clara, campanha Amora Intimates"
          width={1440}
          height={1808}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-ink/35 md:bg-gradient-to-r md:from-ink/60 md:via-ink/25 md:to-transparent"
        />

        <div className="relative mx-auto flex h-full max-w-[110rem] flex-col justify-end px-5 pb-14 md:justify-center md:px-10 md:pb-0">
          <div className="animate-rise max-w-2xl">
            <span className="label-xs text-ink-foreground/75">Amora Intimates</span>
            <h1 className="mt-5 text-[clamp(2.4rem,8vw,5.5rem)] leading-[1.02] text-ink-foreground">
              Lingerie para você se sentir ainda mais você.
            </h1>
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-ink-foreground/80">
              Peças escolhidas para valorizar sua beleza, seu conforto e seu estilo.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Cta variant="light" onClick={() => openWhatsApp()}>
                Falar com uma consultora
              </Cta>
              <Cta variant="outlineLight" onClick={() => scrollToId("colecao")}>
                Conhecer a coleção
              </Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
