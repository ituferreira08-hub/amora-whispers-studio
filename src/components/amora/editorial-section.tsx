import editorial from "@/assets/editorial.jpg";
import { Cta, Reveal, SectionLabel, scrollToId } from "./ui";

export function EditorialSection() {
  return (
    <section aria-label="Feita para você" className="mx-auto max-w-[110rem] px-5 pb-24 md:px-10 md:pb-32">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="img-zoom lg:col-span-7">
          <img
            src={editorial}
            alt="Peças em cetim e renda nude dobradas sobre linho, luz natural suave"
            width={1200}
            height={1504}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover lg:aspect-[5/6]"
          />
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5 lg:pl-6">
          <SectionLabel>A Amora</SectionLabel>
          <h2 className="mt-6 text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.05]">Feita para você.</h2>
          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
            Mais do que lingerie, peças que acompanham a forma como você escolhe se sentir.
          </p>
          <Cta variant="outline" className="mt-10" onClick={() => scrollToId("sobre")}>
            Conhecer a Amora
          </Cta>
        </Reveal>
      </div>
    </section>
  );
}
