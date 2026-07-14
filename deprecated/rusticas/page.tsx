import type { Metadata } from "next";
import Script from "next/script";
import CocinaPage, { type CocinaPageData } from "@/components/CocinaPage";

const PAGE_TITLE =
  "Cocinas Rústicas Modernas en República Dominicana | Diseño Natural";
const PAGE_DESCRIPTION =
  "Cocinas rústicas modernas en Santo Domingo y toda República Dominicana. Madera natural, piedra y acabados cálidos con funcionalidad actual. Cotiza gratis.";
const PAGE_URL = "https://cocinasmodernasrd.com/cocinas/rusticas";
const PAGE_IMAGE = "/images/urbanWood.jpg";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: PAGE_IMAGE, width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [PAGE_IMAGE],
  },
};

const data: CocinaPageData = {
  slug: "rusticas",
  title: "Cocinas Rústicas",
  metaDescription: PAGE_DESCRIPTION,

  heroImage: "/images/urbanWood.jpg",
  heroImageAlt:
    "Cocina rústica moderna con gabinetes de madera natural en Santo Domingo República Dominicana",
  badge: "Cocinas Rústicas",
  h1: "Cocinas Rústicas con Calidez Natural",
  heroDesc:
    "Diseñamos cocinas rústicas que combinan madera natural, texturas cálidas y acabados artesanales con la funcionalidad de una cocina moderna. Ideal para quienes buscan un espacio acogedor, con carácter y conexión con lo natural, en toda la República Dominicana.",

  introTitle: "Lo natural, con estándares modernos",
  introBody: [
    "Una cocina rústica moderna toma lo mejor de dos mundos: la calidez y textura de materiales naturales — madera, piedra, hierro forjado — combinados con distribución eficiente, electrodomésticos actuales y acabados duraderos.",
    "En Cocinas Modernas RD trabajamos con maderas tratadas especialmente para el clima tropical, encimeras en granito o cuarzo con vetas naturales, y detalles como repisas abiertas, vigas decorativas o herrajes en hierro forjado que refuerzan el carácter rústico sin sacrificar funcionalidad.",
    "Cada proyecto se adapta a tu espacio y presupuesto, desde toques rústicos puntuales (una isla en madera, repisas abiertas) hasta una cocina completamente rústica de piso a techo.",
  ],

  features: [
    {
      icon: "◈",
      title: "Madera natural tratada",
      desc: "Maderas seleccionadas y tratadas para resistir la humedad y el calor del clima dominicano.",
    },
    {
      icon: "◉",
      title: "Texturas y detalles artesanales",
      desc: "Repisas abiertas, vigas decorativas y herrajes en hierro forjado para reforzar el carácter rústico.",
    },
    {
      icon: "◎",
      title: "Encimeras con vetas naturales",
      desc: "Granito y cuarzo con acabados que resaltan la textura natural de la piedra.",
    },
    {
      icon: "◈",
      title: "Funcionalidad moderna",
      desc: "Distribución eficiente y espacio para electrodomésticos actuales, sin perder el estilo rústico.",
    },
  ],

  gallery: [
    {
      src: "/images/urbanWood.jpg",
      alt: "Cocina rústica con gabinetes de madera y acero",
      label: "Rústica en madera y acero",
    },
    {
      src: "/images/woodKitchen3.jpeg",
      alt: "Cocina rústica en madera oscura con iluminación cálida",
      label: "Madera oscura con iluminación cálida",
    },
    {
      src: "/images/islaCentralConMadera.jpeg",
      alt: "Cocina rústica con isla central de madera maciza",
      label: "Isla central en madera maciza",
    },
    {
      src: "/images/gabineteKitchen.jpeg",
      alt: "Cocina rústica con repisas abiertas y detalles artesanales",
      label: "Repisas abiertas y detalles artesanales",
    },
  ],

  faqs: [
    {
      q: "¿Qué materiales se usan en una cocina rústica moderna?",
      a: "Principalmente madera natural tratada, encimeras en granito o cuarzo con vetas visibles, y detalles en hierro forjado. Combinamos estos materiales con distribución y electrodomésticos modernos.",
    },
    {
      q: "¿La madera rústica resiste el clima húmedo de RD?",
      a: "Sí, tratamos la madera especialmente para resistir la humedad y las variaciones de temperatura del clima tropical dominicano, prolongando su durabilidad.",
    },
    {
      q: "¿Puedo combinar el estilo rústico con una cocina moderna existente?",
      a: "Sí, es común incorporar toques rústicos puntuales — una isla en madera, repisas abiertas, herrajes en hierro forjado — sin necesidad de rehacer toda la cocina.",
    },
    {
      q: "¿Cuánto tiempo toma un proyecto de cocina rústica?",
      a: "Entre 3 y 6 semanas en la mayoría de los casos, dependiendo del nivel de detalle artesanal y si se requiere madera maciza importada o de mayor grosor.",
    },
    {
      q: "¿Las cocinas rústicas incluyen garantía?",
      a: "Sí, todos nuestros proyectos de cocinas rústicas incluyen 2 años de garantía completa en materiales y mano de obra.",
    },
  ],

  relatedSlugs: [
    "gabinetes-de-cocina-modernos-materiales",
    "tendencias-cocinas-modernas-2026",
    "cuanto-cuesta-cocina-modular-rd",
  ],

  waMessage:
    "Hola, me interesa una cotización de cocina rústica moderna. ¿Pueden ayudarme?",
};

export default function CocinasRusticasPage() {
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
        id="faq-schema-rusticas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <CocinaPage data={data} />
    </>
  );
}
