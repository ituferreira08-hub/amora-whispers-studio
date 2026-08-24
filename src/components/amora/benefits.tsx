import { MessageCircle, Sparkles, PackageOpen, HeartHandshake } from "lucide-react";
import { Reveal } from "./ui";

const items = [
  {
    icon: HeartHandshake,
    title: "Atendimento personalizado",
    text: "Converse diretamente com uma consultora.",
  },
  {
    icon: Sparkles,
    title: "Curadoria especial",
    text: "Peças escolhidas para diferentes estilos e momentos.",
  },
  {
    icon: PackageOpen,
    title: "Embalagem discreta",
    text: "Seu pedido preparado com cuidado e privacidade.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento pelo WhatsApp",
    text: "Tire suas dúvidas antes de escolher.",
  },
];

export function Benefits() {
  return (
    <section aria-label="Diferenciais da Amora" className="mx-auto max-w-[110rem] px-5 py-20 md:px-10 md:py-28">
      <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 90} className="hairline-t pt-7">
            <item.icon strokeWidth={1} className="h-7 w-7 text-wine" aria-hidden />
            <h3 className="mt-6 text-xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
