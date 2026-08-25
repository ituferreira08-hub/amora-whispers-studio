import { Check } from "lucide-react";
import { Reveal, SectionLabel } from "./ui";

const reasons = [
  "Peças selecionadas uma a uma, com foco em caimento e toque",
  "Atendimento direto com consultora — sem intermediários",
  "Orientação sincera sobre tamanhos e modelagens",
  "Embalagem discreta e preparada com cuidado",
  "Novidades constantes em uma curadoria enxuta",
  "Sem cadastro, sem senha, sem burocracia",
];

export function WhyAmora() {
  return (
    <section
      aria-label="Por que escolher a Amora"
      className="bg-ink text-ink-foreground"
    >
      <div className="mx-auto max-w-[110rem] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionLabel className="text-ink-foreground/60">Por que a Amora</SectionLabel>
            <h2 className="mt-6 text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.05]">
              A experiência importa tanto quanto a peça.
            </h2>
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-ink-foreground/70">
              Da descoberta à entrega, cada detalhe foi pensado para que você se sinta segura,
              bem atendida e — principalmente — linda.
            </p>
          </Reveal>

          <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((reason, i) => (
              <Reveal as="li" key={reason} delay={i * 70} className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-gold/50"
                >
                  <Check strokeWidth={1.5} className="h-3.5 w-3.5 text-gold" />
                </span>
                <p className="text-sm leading-relaxed text-ink-foreground/85">{reason}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
