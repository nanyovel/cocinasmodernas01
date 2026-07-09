import type { Metadata } from "next";
import Script from "next/script";
import CocinaPage, { type CocinaPageData } from "@/components/CocinaPage";

const PAGE_TITLE =
  "Cocinas Modulares Modernas en Santo Domingo | Cotiza Gratis";
const PAGE_DESCRIPTION =
  "Diseñamos cocinas modulares modernas en Santo Domingo: módulos en melamina, PVC y madera, instalación en días y 2 años de garantía. Cotiza gratis.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "https://cocinasmodernasrd.com/cocinas/modulares",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://cocinasmodernasrd.com/cocinas/modulares",
  },
};

const data: CocinaPageData = {
  slug: "modulares",
  title: "Cocinas Modulares",
  metaDescription: PAGE_DESCRIPTION,

  heroImage: "/images/marmolKitchen.jpeg",
  heroImageAlt:
    "Cocina modular moderna con gabinetes a medida en Santo Domingo República Dominicana",
  badge: "Cocinas Modulares",
  h1: "Cocinas Modulares Modernas",
  heroDesc:
    "Diseñamos y fabricamos cocinas modulares adaptadas a cualquier espacio. Elaboramos módulos en madera, PVC y melamina, con elegantes terminaciones en mármol, granito, cuarzo, vidrio, herrajes de alta calidad y otros materiales premium, para crear cocinas modernas, funcionales y personalizadas en toda la República Dominicana.",

  introTitle: "La solución más versátil para tu hogar",
  introBody: [
    "Las cocinas modulares son la opción más inteligente para quienes quieren un diseño profesional con la flexibilidad de personalizar cada módulo. A diferencia de las cocinas hechas en obra, los módulos se fabrican con precisión en taller y se instalan en tu hogar en tiempo récord.",
    "En Cocinas Modernas RD diseñamos cada módulo pensando en tu espacio, tu forma de cocinar y tu estilo de vida. Gabinetes altos, módulos bajos, cajones internos, esquineros optimizados y módulos colgantes — todo configurado según tus necesidades.",
    "Utilizamos materiales de primera: melamina de alta densidad, PVC resistente a la humedad del clima tropical dominicano, y madera tratada para larga durabilidad. Cada cocina modular lleva herrajes europeos de cierre suave.",
  ],

  features: [
    {
      icon: "◈",
      title: "Instalación rápida",
      desc: "Al fabricarse en taller con medidas exactas, la instalación en tu hogar toma días, no semanas.",
    },
    {
      icon: "◉",
      title: "Totalmente personalizable",
      desc: "Cada módulo se configura a tu gusto: tamaño, material, color, tipo de apertura y herrajes.",
    },
    {
      icon: "◎",
      title: "Materiales resistentes",
      desc: "PVC, melamina o madera tratada. Resistentes a la humedad y al calor del clima de RD.",
    },
    {
      icon: "◈",
      title: "Mejor precio-calidad",
      desc: "La producción modular en taller optimiza costos sin sacrificar calidad ni acabado final.",
    },
  ],

  gallery: [
    {
      src: "/images/gabineteOrange.jpeg",
      alt: "Cocina modular lineal moderna en melamina blanca",
      label: "Cocina lineal moderna",
    },
    {
      src: "/images/islandKitchen.jpeg",
      alt: "Cocina modular blanca con isla en Santo Domingo",
      label: "Cocinas con isla",
    },
    {
      src: "/images/openKitchen.jpg",
      alt: "Cocina modular oscura en PVC con gabinetes hasta el techo",
      label: "Módulos hasta el techo",
    },
    {
      src: "/images/gabineteKitchen.jpeg",
      alt: "Cocina modular en U",
      label: "Cocina modular en U",
    },
    {
      src: "/images/modernKitchen.jpeg",
      alt: "Cocinas modulares en kit",
      label: "Cocinas modulares en kit",
    },
    {
      src: "/images/mueblesKitchen.jpeg",
      alt: "Muebles cocina modulares económicos",
      label: "Muebles cocina modulares económicos",
    },
  ],

  faqs: [
    {
      q: "¿Cuánto tiempo se tarda en instalar una cocina modular?",
      a: "El proceso completo toma entre 2 y 4 semanas: 1-2 semanas de fabricación en taller y 1-3 días de instalación en tu hogar, dependiendo del tamaño del proyecto.",
    },
    {
      q: "¿Qué materiales se utilizan en las cocinas modulares?",
      a: "Trabajamos con melamina de alta densidad, PVC (ideal para zonas húmedas o cerca del mar), MDF lacado y madera maciza. Te asesoramos según tu presupuesto y zona geográfica.",
    },
    {
      q: "¿Puedo agregar módulos a mi cocina en el futuro?",
      a: "Sí, esa es una de las ventajas de las cocinas modulares. Puedes añadir módulos adicionales o reemplazar piezas específicas sin tener que renovar toda la cocina.",
    },
    {
      q: "¿Las cocinas modulares incluyen garantía?",
      a: "Todos nuestros proyectos de cocinas modulares incluyen 2 años de garantía completa en materiales y mano de obra. Cualquier ajuste o defecto lo resolvemos sin costo adicional.",
    },
    {
      q: "¿Hacen cocinas modulares para apartamentos pequeños?",
      a: "Sí, diseñamos cocinas modulares para todo tipo de espacios, incluyendo apartamentos pequeños. Los módulos se adaptan perfectamente a espacios reducidos maximizando el almacenamiento y la funcionalidad.",
    },
    {
      q: "¿Tienen catálogo y opciones de cocinas modulares económicas?",
      a: "Sí. Contamos con un catálogo de diseños modernos y funcionales, además de opciones económicas sin sacrificar calidad. Te mostramos distribución, acabados y materiales, y armamos una propuesta a la medida de tu presupuesto.",
    },
  ],

  relatedSlugs: [
    "cuanto-cuesta-cocina-moderna-rd",
    "gabinetes-de-cocina-modernos-materiales",
    "tendencias-cocinas-modernas-2026",
  ],

  waMessage:
    "Hola, me interesa una cotización de cocinas modulares. ¿Pueden ayudarme?",
};

export default function CocinasModularesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-schema-modulares"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <CocinaPage data={data} />
    </>
  );
}
