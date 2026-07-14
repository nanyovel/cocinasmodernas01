import type { Metadata } from "next";
import Script from "next/script";
import CocinaPage, { type CocinaPageData } from "@/components/CocinaPage";

const PAGE_TITLE =
  "Cocinas Vintage Modernas en República Dominicana | Diseño con Estilo";
const PAGE_DESCRIPTION =
  "Cocinas vintage modernas en Santo Domingo y toda la República Dominicana. Colores cálidos, herrajes retro y acabados con carácter. Diseño 3D y cotización gratis.";
const PAGE_URL = "https://cocinasmodernasrd.com/cocinas/vintage";
const PAGE_IMAGE = "/images/gabineteOrange.jpeg";

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
  slug: "vintage",
  title: "Cocinas Vintage",
  metaDescription: PAGE_DESCRIPTION,

  heroImage: "/images/gabineteOrange.jpeg",
  heroImageAlt:
    "Cocina vintage moderna con gabinetes en tono cálido y detalles retro en Santo Domingo",
  badge: "Cocinas Vintage",
  h1: "Cocinas Vintage con Estilo y Carácter",
  heroDesc:
    "Diseñamos cocinas vintage que combinan colores cálidos, herrajes de estilo retro y líneas clásicas con la funcionalidad de una cocina moderna. Ideal para quienes buscan un espacio con personalidad, calidez y un toque nostálgico, en toda la República Dominicana.",

  introTitle: "Nostalgia con funcionalidad moderna",
  introBody: [
    "Una cocina vintage no significa renunciar a la comodidad actual — significa recuperar el carácter y la calidez de diseños clásicos, adaptados a electrodomésticos, materiales y distribución moderna.",
    "En Cocinas Modernas RD trabajamos paletas de color propias del estilo vintage — verdes olivo, mostaza, terracota, crema — combinadas con gabinetes de líneas simples, tiradores metálicos clásicos y detalles como molduras o paneles decorativos.",
    "Cada cocina vintage se fabrica con los mismos estándares de calidad que nuestros demás proyectos: materiales resistentes al clima dominicano, herrajes de cierre suave y una instalación cuidada de principio a fin.",
  ],

  features: [
    {
      icon: "◈",
      title: "Paletas de color cálidas",
      desc: "Tonos característicos del estilo vintage: verde olivo, mostaza, terracota y crema, entre otros.",
    },
    {
      icon: "◉",
      title: "Herrajes y detalles retro",
      desc: "Tiradores metálicos clásicos, molduras y acabados que evocan el estilo de otras décadas.",
    },
    {
      icon: "◎",
      title: "Funcionalidad moderna",
      desc: "Distribución pensada para electrodomésticos actuales sin perder la estética nostálgica.",
    },
    {
      icon: "◈",
      title: "Materiales duraderos",
      desc: "Madera tratada, melamina y pintura de alta resistencia adaptados al clima tropical de RD.",
    },
  ],

  gallery: [
    {
      src: "/images/gabineteOrange.jpeg",
      alt: "Cocina vintage en tono mostaza con tiradores metálicos clásicos",
      label: "Cocina en tono mostaza",
    },
    {
      src: "/images/urbanWood.jpg",
      alt: "Cocina vintage en madera cálida con detalles retro",
      label: "Vintage en madera cálida",
    },
    {
      src: "/images/moderKitchen3Small.jpg",
      alt: "Cocina vintage con gabinetes en verde olivo y encimera clásica",
      label: "Vintage en verde olivo",
    },
    {
      src: "/images/gabineteKitchen.jpeg",
      alt: "Cocina vintage con repisas abiertas y detalles decorativos",
      label: "Repisas y detalles decorativos",
    },
  ],

  faqs: [
    {
      q: "¿Qué caracteriza a una cocina vintage moderna?",
      a: "Combina colores cálidos y clásicos (verde olivo, mostaza, terracota), herrajes y tiradores de estilo retro, y detalles decorativos como molduras, con la funcionalidad y los materiales de una cocina actual.",
    },
    {
      q: "¿Puedo integrar electrodomésticos modernos en una cocina vintage?",
      a: "Sí, diseñamos la distribución para que electrodomésticos actuales (nevera, horno, campana) se integren de forma armónica con la estética vintage, sin perder funcionalidad.",
    },
    {
      q: "¿Qué materiales usan para las cocinas vintage?",
      a: "Trabajamos con madera tratada, melamina de alta densidad y pinturas de alta resistencia en las paletas de color propias del estilo, adaptados al clima húmedo de la República Dominicana.",
    },
    {
      q: "¿Cuánto tiempo toma un proyecto de cocina vintage?",
      a: "El proceso completo toma entre 3 y 5 semanas, entre fabricación de los módulos y detalles decorativos, e instalación en tu hogar.",
    },
    {
      q: "¿Las cocinas vintage incluyen garantía?",
      a: "Sí, todos nuestros proyectos de cocinas vintage incluyen 2 años de garantía completa en materiales y mano de obra.",
    },
  ],

  relatedSlugs: [
    "gabinetes-de-cocina-modernos-materiales",
    "tendencias-cocinas-modernas-2026",
    "cuanto-cuesta-cocina-modular-rd",
  ],

  waMessage:
    "Hola, me interesa una cotización de cocina vintage moderna. ¿Pueden ayudarme?",
};

export default function CocinasVintagePage() {
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
        id="faq-schema-vintage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <CocinaPage data={data} />
    </>
  );
}
