import about from "@/assets/about.jpg";
import { openWhatsApp } from "@/config/site";
import { Cta, Reveal, SectionLabel } from "./ui";

const values = [
  {
    title: "Curadoria, não prateleira",
    text: "Cada peça entra na coleção depois de ser tocada, provada e aprovada. Nada é escolhido por impulso.",
  },
  {
    title: "Conforto como regra",
    text: "Beleza que aperta, pinica ou incomoda não passa pela nossa seleção. Vestir bem começa em se sentir bem.",
  },
  {
    title: "Atendimento de verdade",
    text: "Quem responde é uma consultora que conhece cada peça — não um robô, não um script.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="mx-auto max-w-[110rem] px-5 py-24 md:px-10 md:py-32">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="img-zoom lg:col-span-5">
          <img
            src={about}
            alt="Detalhe de renda vinho da Amora Intimates em luz suave"
            width={1000}
            height={1250}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>

        <div className="lg:col-span-7 lg:pl-8">
          <Reveal>
            <SectionLabel>Sobre a Amora</SectionLabel>
            <h2 className="mt-6 max-w-xl text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.05]">
              Uma marca feita de perto, para mulheres de verdade.
            </h2>
            <p className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
              A Amora Intimates nasceu da vontade de transformar a forma de comprar lingerie:
              menos pressa, mais cuidado. Somos uma marca de catálogo com atendimento
              personalizado — você descobre as peças aqui e conversa diretamente com a gente
              para escolher a sua.
            </p>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
              Trabalhamos com uma curadoria enxuta e criteriosa: rendas, cetins e microfibras
              escolhidos um a um, em tons que valorizam todos os estilos.
            </p>
          </Reveal>

          <ul className="mt-12">
            {values.map((value, i) => (
              <Reveal as="li" key={value.title} delay={i * 100} className="hairline-t py-7">
                <h3 className="text-xl">{value.title}</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <Cta variant="outline" className="mt-10" onClick={() => openWhatsApp()}>
              Conhecer a coleção pelo WhatsApp
            </Cta>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
