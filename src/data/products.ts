import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import editorial from "@/assets/editorial.jpg";
import about from "@/assets/about.jpg";

export type Category =
  | "Conjuntos"
  | "Sutiãs"
  | "Calcinhas"
  | "Bodies"
  | "Lingeries Especiais"
  | "Novidades";

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: Category;
  description: string;
  composition: string;
  care: string;
  colors: string[];
  sizes: string[];
  price?: string;
  images: string[];
  featured?: boolean;
};

/** Edite livremente: nomes, descrições, cores, tamanhos, preços e imagens. */
export const products: Product[] = [
  {
    id: 1,
    slug: "conjunto-amora-lace",
    name: "Conjunto Amora Lace",
    category: "Conjuntos",
    description: "Renda delicada, modelagem confortável e acabamento sofisticado.",
    composition: "88% poliamida, 12% elastano. Renda francesa.",
    care: "Lavar à mão em água fria. Não usar secadora.",
    colors: ["Preto", "Vinho", "Nude"],
    sizes: ["P", "M", "G", "GG"],
    price: "R$ 189,90",
    images: [p1, about, p8],
    featured: true,
  },
  {
    id: 2,
    slug: "conjunto-bella",
    name: "Conjunto Bella",
    category: "Conjuntos",
    description: "Tons suaves e caimento leve para o dia inteiro.",
    composition: "90% poliamida, 10% elastano.",
    care: "Lavar à mão em água fria. Secar à sombra.",
    colors: ["Nude", "Off-white"],
    sizes: ["P", "M", "G"],
    price: "R$ 169,90",
    images: [p2, p5],
  },
  {
    id: 3,
    slug: "body-amora",
    name: "Body Amora",
    category: "Bodies",
    description: "Transparência elegante em renda vinho, com decote profundo.",
    composition: "Tule bordado, forro em microfibra.",
    care: "Lavar à mão separadamente.",
    colors: ["Vinho", "Preto"],
    sizes: ["P", "M", "G", "GG"],
    price: "R$ 239,90",
    images: [p3, p6],
    featured: true,
  },
  {
    id: 4,
    slug: "sutia-essence",
    name: "Sutiã Essence",
    category: "Sutiãs",
    description: "Cetim liso, sem costuras aparentes. Conforto absoluto.",
    composition: "Cetim de microfibra com elastano.",
    care: "Lavar à mão. Não torcer.",
    colors: ["Off-white", "Nude", "Preto"],
    sizes: ["P", "M", "G", "GG"],
    price: "R$ 129,90",
    images: [p4, p7],
  },
  {
    id: 5,
    slug: "conjunto-romance",
    name: "Conjunto Romance",
    category: "Lingeries Especiais",
    description: "Renda rosé com detalhes em fita de cetim aplicada à mão.",
    composition: "Renda com detalhes em cetim.",
    care: "Lavar à mão em água fria.",
    colors: ["Rosé", "Nude"],
    sizes: ["P", "M", "G"],
    price: "R$ 219,90",
    images: [p5, p2],
    featured: true,
  },
  {
    id: 6,
    slug: "body-noir",
    name: "Body Noir",
    category: "Bodies",
    description: "Preto absoluto, recorte alto e presença discreta.",
    composition: "Microfibra com aplicação de renda.",
    care: "Lavar à mão. Secar à sombra.",
    colors: ["Preto"],
    sizes: ["P", "M", "G", "GG"],
    price: "R$ 249,90",
    images: [p6, p3],
  },
  {
    id: 7,
    slug: "calcinha-amora",
    name: "Calcinha Amora",
    category: "Calcinhas",
    description: "Cintura média, laterais em renda e toque de segunda pele.",
    composition: "Microfibra e renda elástica.",
    care: "Lavar à mão em água fria.",
    colors: ["Nude", "Preto", "Off-white"],
    sizes: ["P", "M", "G", "GG"],
    price: "R$ 69,90",
    images: [p7, p4],
  },
  {
    id: 8,
    slug: "conjunto-intense",
    name: "Conjunto Intense",
    category: "Novidades",
    description: "Renda preta com detalhes dourados e alças ajustáveis.",
    composition: "Renda com apliques metálicos dourados.",
    care: "Lavar à mão separadamente.",
    colors: ["Preto", "Dourado"],
    sizes: ["P", "M", "G"],
    price: "R$ 259,90",
    images: [p8, editorial],
    featured: true,
  },
];

export const categories: { name: Category; caption: string; image: string; span?: boolean }[] = [
  { name: "Conjuntos", caption: "Peças que combinam por inteiro", image: p1, span: true },
  { name: "Sutiãs", caption: "Conforto que não aparece", image: p4 },
  { name: "Calcinhas", caption: "Segunda pele, todos os dias", image: p7 },
  { name: "Bodies", caption: "Presença e sofisticação", image: p3, span: true },
  { name: "Lingeries Especiais", caption: "Para ocasiões que pedem mais", image: p5 },
  { name: "Novidades", caption: "Chegou agora na Amora", image: p8 },
];
