import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { openWhatsApp } from "@/config/site";
import { Cta, Reveal, SectionLabel } from "./ui";

const faqs = [
  {
    q: "Como faço para comprar?",
    a: "É simples: escolha a peça na coleção, toque em “Tenho interesse” e fale com a gente no WhatsApp. Confirmamos tamanho, cor e disponibilidade na hora, sem cadastro nem pagamento online.",
  },
  {
    q: "Como sei qual é o meu tamanho?",
    a: "Nossa consultora te orienta pelo WhatsApp. Se você souber suas medidas (busto, cintura e quadril), indicamos a modelagem ideal de cada peça — elas podem variar entre os modelos.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "O pagamento é combinado diretamente no atendimento pelo WhatsApp. Trabalhamos com as opções mais práticas para você, incluindo Pix e cartão.",
  },
  {
    q: "Como funciona a entrega?",
    a: "Combinamos a melhor forma de entrega na conversa: envio pelos Correios, transportadora ou retirada, dependendo da sua região. Todas as peças seguem em embalagem discreta.",
  },
  {
    q: "Posso trocar uma peça?",
    a: "Sim. Se a peça não servir ou não for o que você esperava, fale com a gente pelo WhatsApp e resolvemos a troca com rapidez, seguindo as condições combinadas no atendimento.",
  },
  {
    q: "As peças do site estão sempre disponíveis?",
    a: "Trabalhamos com uma curadoria enxuta e alguns modelos têm estoque limitado. Por isso recomendamos chamar no WhatsApp assim que encontrar a peça ideal — reservamos para você.",
  },
];

export function FaqSection() {
  return (
    <section id="duvidas" className="mx-auto max-w-[110rem] px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-4">
          <SectionLabel>Dúvidas frequentes</SectionLabel>
          <h2 className="mt-6 text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.05]">
            Antes de chamar, talvez você queira saber.
          </h2>
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
            Não encontrou sua resposta? Fale com uma consultora — respondemos rápido.
          </p>
          <Cta variant="outline" className="mt-10" onClick={() => openWhatsApp()}>
            Tirar uma dúvida no WhatsApp
          </Cta>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-8">
          <Accordion.Root type="single" collapsible>
            {faqs.map((faq) => (
              <Accordion.Item key={faq.q} value={faq.q} className="hairline-t last:border-b">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left md:py-7">
                    <span className="font-display text-xl leading-snug md:text-2xl">{faq.q}</span>
                    <Plus
                      strokeWidth={1.2}
                      aria-hidden
                      className="h-5 w-5 shrink-0 text-wine transition-transform duration-300 group-data-[state=open]:rotate-45"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <p className="max-w-2xl pb-7 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
