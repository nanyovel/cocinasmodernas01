import type { Metadata } from "next";
import Script from "next/script";
import CocinaPage, { type CocinaPageData } from "@/components/CocinaPage";

const PAGE_TITLE = "Cocinas Pequeñas Modernas en Santo Domingo | Cotiza Gratis";
const PAGE_DESCRIPTION =
  "Diseñamos cocinas modernas pequeñas en Santo Domingo: aprovechamiento máximo del espacio, gabinetes a medida y acabados de lujo para apartamentos. Cotiza gratis.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "https://cocinasmodernasrd.com/cocinas/pequenas",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://cocinasmodernasrd.com/cocinas/pequenas",
  },
};

const data: CocinaPageData = {
  slug: "pequenas",
  title: "Cocinas Pequeñas",
  metaDescription: PAGE_DESCRIPTION,

  heroImage: "/images/smallKitchen.jpeg",
  heroImageAlt:
    "Cocina moderna pequeña con gabinetes a medida en apartamento de Santo Domingo",
  badge: "Cocinas Pequeñas",
  h1: "Cocinas Modernas Pequeñas",
  heroDesc:
    "¿Tienes un espacio reducido y quieres una cocina moderna que no sacrifique estilo ni funcionalidad? Diseñamos cocinas pequeñas que aprovechan cada centímetro, con acabados de lujo y distribución pensada para apartamentos y espacios compactos en toda la República Dominicana.",

  introTitle: "Cocinas pequeñas, sin sacrificar diseño",
  introBody: [
    "Un espacio reducido no significa renunciar al estilo. Diseñamos cocinas pequeñas modernas priorizando la circulación, el almacenamiento inteligente y una distribución que haga sentir el área más amplia de lo que realmente es.",
    "Trabajamos con gabinetes altos hasta el techo, organizadores internos, esquineros optimizados y superficies multiuso para maximizar cada centímetro disponible — ideal para apartamentos y remodelaciones en espacios compactos.",
    "Si tu proyecto necesita además una isla compacta, una barra americana o una distribución en L, te asesoramos según las dimensiones reales de tu cocina para encontrar la solución que mejor funcione.",
  ],

  features: [
    {
      icon: "◈",
      title: "Aprovechamiento máximo",
      desc: "Diseño pensado para optimizar cada centímetro: gabinetes hasta el techo, organizadores internos y esquineros funcionales.",
    },
    {
      icon: "◉",
      title: "Diseño personalizado",
      desc: "Estilos minimalistas, blancos o en L — adaptamos materiales, colores y distribución a tu espacio y presupuesto.",
    },
    {
      icon: "◎",
      title: "Mayor organización",
      desc: "Barras, islas compactas o muebles multiuso que mejoran el flujo diario sin saturar el área.",
    },
    {
      icon: "◈",
      title: "Aumenta el valor de tu propiedad",
      desc: "Una cocina pequeña bien diseñada mejora la estética y el valor de reventa del apartamento o vivienda.",
    },
  ],

  gallery: [
    {
      src: "/images/mueblesKitchen.jpeg",
      alt: "Cocina pequeña moderna estilo walnut",
      label: "Cocina pequeña estilo walnut",
    },
    {
      src: "/images/islandKitchen3Small.jpeg",
      alt: "Cocina pequeña cerrada con gabinetes hasta el techo",
      label: "Cocina pequeña cerrada",
    },
    {
      src: "/images/smallKitchen.jpeg",
      alt: "Cocina pequeña con barra y taburetes",
      label: "Cocina con taburetes y barra",
    },
    {
      src: "/images/smallKitchen2.jpg",
      alt: "Cocina pequeña en L con desayunador moderno",
      label: "En L con desayunador",
    },
  ],

  faqs: [
    {
      q: "¿Cuál es el mejor color para una cocina pequeña?",
      a: "Recomendamos tonos claros como blanco, gris suave o beige, que ayudan a ampliar visualmente el espacio. Es tendencia combinarlos con madera o acentos oscuros para lograr un diseño elegante y equilibrado.",
    },
    {
      q: "¿Qué distribución conviene más en una cocina pequeña?",
      a: "Para espacios reducidos, la cocina en L o lineal suele ser la más eficiente: maximiza el área de trabajo sin obstruir la circulación. En apartamentos, una barra americana puede sustituir un comedor separado.",
    },
    {
      q: "¿Cómo mejorar mi cocina pequeña con poco dinero?",
      a: "Renovar frentes de gabinetes, cambiar tiradores u optimizar la iluminación son cambios de bajo costo que transforman el espacio sin necesidad de una remodelación completa.",
    },
    {
      q: "¿Se puede poner una isla en una cocina pequeña?",
      a: "Sí, con al menos 90×60 cm de espacio disponible. Para cocinas más compactas también diseñamos islas móviles o penínsulas, que ofrecen función similar sin requerir tanto espacio libre.",
    },
    {
      q: "¿Cuánto cuesta una cocina moderna pequeña en RD?",
      a: "Una cocina pequeña en melamina con gabinetes a medida parte desde RD$150,000, dependiendo de dimensiones y acabados. Te damos un presupuesto exacto sin costo.",
    },
  ],

  relatedSlugs: [
    "cocinas-modernas-pequenas-con-isla",
    "cuanto-cuesta-cocina-moderna-rd",
    "gabinetes-de-cocina-modernos-materiales",
  ],

  waMessage:
    "Hola, me interesa una cotización de cocina moderna pequeña. ¿Pueden ayudarme?",
};

export default function CocinasPequenasPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <Script
        id="faq-schema-pequenas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <CocinaPage data={data} />
    </>
  );
}
