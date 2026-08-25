import { openWhatsApp, siteConfig } from "@/config/site";
import { Cta, Reveal, SectionLabel } from "./ui";

const steps = [
  {
    n: "01",
    title: "Escolha suas peças favoritas",
    text: "Navegue pela coleção e anote os nomes das peças que chamaram sua atenção.",
  },
  {
    n: "02",
    title: "Chame no WhatsApp",
    text: "Toque em “Tenho interesse” ou fale diretamente com a gente. Sem cadastro, sem compromisso.",
  },
  {
    n: "03",
    title: "Receba orientação de uma consultora",
    text: "Ajudamos com tamanhos, cores, disponibilidade e a melhor forma de receber seu pedido.",
  },
];

export function ConsultSection() {
  return (
    <section
      id="consultora"
      aria-label="Atendimento personalizado"
      className="bg-secondary"
    >
      <div className="mx-auto max-w-[110rem] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionLabel>Atendimento personalizado</SectionLabel>
            <h2 className="mt-6 text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.05]">
              Comprar lingerie ficou simples.
            </h2>
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
              Nada de carrinho, cadastro ou pagamento online. Aqui você escolhe com calma e
              finaliza tudo em uma conversa — com atenção de verdade do outro lado.
            </p>
            <Cta variant="wine" className="mt-10" onClick={() => openWhatsApp()}>
              Falar com uma consultora
            </Cta>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              {siteConfig.contactText}
            </p>
          </Reveal>

          <ol className="lg:col-span-7">
            {steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.n}
                delay={i * 110}
                className="hairline-t grid gap-3 py-8 first:pt-0 last:pb-0 sm:grid-cols-[5rem_1fr] sm:gap-8 md:py-10"
              >
                <span aria-hidden className="font-display text-4xl text-wine/70 md:text-5xl">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-2xl">{step.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
