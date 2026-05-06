import type { Metadata } from "next";
import CocinaPage, { type CocinaPageData } from "@/components/CocinaPage";

export const metadata: Metadata = {
  title:
    "Cocinas Vintage Modernas en República Dominicana | Estilo Retro de Lujo",
  description:
    "Cocinas vintage modernas en Santo Domingo y toda la República Dominicana. Estilo retro con acabados contemporáneos, madera, hierro y azulejos de talavera. Diseño a medida. Cotiza gratis.",
  alternates: { canonical: "https://cocinasmodernasrd.com/cocinas/vintage" },
  openGraph: {
    title: "Cocinas Vintage Modernas RD | Retro con Toque Contemporáneo",
    description:
      "Cocinas vintage modernas en República Dominicana. Diseños retro con materiales contemporáneos de lujo.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&q=80",
      },
    ],
  },
};

const data: CocinaPageData = {
  slug: "vintage",
  title: "Cocinas Vintage",
  metaDescription:
    "Cocinas vintage modernas en República Dominicana. Estilo retro con acabados premium.",

  heroImage:
    "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1800&q=85",
  heroImageAlt:
    "Cocina vintage moderna con gabinetes retro y detalles en madera en República Dominicana",
  badge: "Cocinas Vintage",
  h1: "Cocinas vintage modernas: el encanto del pasado con la comodidad de hoy",
  heroDesc:
    "Las cocinas vintage combinan la nostalgia del diseño clásico con la funcionalidad y los materiales contemporáneos. El resultado es un espacio con carácter único, cálido y completamente funcional.",

  introTitle: "Estilo atemporal con confort moderno",
  introBody: [
    'El estilo vintage en cocinas no es simplemente "antiguo" — es una interpretación sofisticada de elementos del pasado con materiales y funcionalidad actuales. Tonos cálidos, madera natural, azulejos de patrón, herrajes en cobre o bronce y líneas redondeadas definen este estilo.',
    "En Cocinas Modernas RD diseñamos cocinas vintage modernas que respetan la esencia del estilo sin sacrificar comodidad ni durabilidad. Utilizamos mayólicas y azulejos de talavera, gabinetes con molduras clásicas, encimeras en mármol o granito envejecido y herrajes en acabado bronce.",
    "Este estilo es especialmente popular en casas coloniales y casas de campo en República Dominicana, donde el diseño vintage complementa perfectamente la arquitectura tradicional dominicana.",
  ],

  features: [
    {
      icon: "🕰️",
      title: "Carácter único",
      desc: "Las cocinas vintage tienen personalidad propia. Ningún proyecto es igual, cada uno cuenta una historia.",
    },
    {
      icon: "◉",
      title: "Herrajes especiales",
      desc: "Manijas, jaladores y accesorios en cobre, bronce o hierro forjado para autenticidad al detalle.",
    },
    {
      icon: "◎",
      title: "Azulejos y talavera",
      desc: "Usamos mayólicas, talavera y azulejos hidráulicos que dan identidad y carácter al diseño.",
    },
    {
      icon: "◈",
      title: "Materiales duraderos",
      desc: "Pese al estilo clásico, usamos materiales modernos de alta durabilidad bajo una apariencia vintage.",
    },
  ],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80",
      alt: "Cocina vintage moderna con gabinetes de madera y azulejos de talavera",
      label: "Vintage con talavera",
    },
    {
      src: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=800&q=80",
      alt: "Cocina vintage blanca con herrajes en bronce y mayólicas",
      label: "Vintage blanco y bronce",
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      alt: "Cocina retro moderna con mármol envejecido y madera oscura",
      label: "Retro con mármol",
    },
    {
      src: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80",
      alt: "Cocina vintage abierta con detalles en hierro forjado",
      label: "Vintage con hierro forjado",
    },
    {
      src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
      alt: "Cocina vintage farmhouse con gabinetes crema y encimera de granito",
      label: "Farmhouse vintage",
    },
  ],

  faqs: [
    {
      q: "¿Qué colores se usan en cocinas vintage modernas?",
      a: "Los tonos más populares son crema, verde salvia, azul petróleo, terracota, blanco envejecido y tonos tierra. Se combinan con maderas naturales y metales en cobre, bronce o negro mate.",
    },
    {
      q: "¿Las cocinas vintage son funcionales?",
      a: "Completamente. El estilo vintage es solo estético — la funcionalidad, los materiales y los sistemas de almacenamiento son 100% modernos. Detrás de la apariencia clásica hay tecnología y comodidad contemporáneas.",
    },
    {
      q: "¿Pueden hacer cocinas vintage para casas coloniales dominicanas?",
      a: "Sí, y es uno de nuestros proyectos favoritos. Las casas coloniales de Santo Domingo y otras ciudades del país se complementan perfectamente con cocinas vintage. Adaptamos el diseño a la arquitectura existente.",
    },
    {
      q: "¿Las mayólicas y azulejos vintage son difíciles de limpiar?",
      a: "No. Los azulejos modernos de estilo vintage tienen acabados vitrificados muy fáciles de limpiar. Son resistentes al agua, la grasa y los productos de limpieza comunes del hogar.",
    },
  ],

  relatedSlugs: [
    "tendencias-cocinas-modernas-2025",
    "cocinas-modernas-blancas-vs-oscuras",
    "gabinetes-de-cocina-modernos-materiales",
  ],

  waMessage:
    "Hola, me interesa una cocina estilo vintage moderno. ¿Pueden mostrarme ejemplos de proyectos realizados?",
};

export default function CocinasVintagePage() {
  return <CocinaPage data={data} />;
}
