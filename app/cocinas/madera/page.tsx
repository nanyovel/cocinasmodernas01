import type { Metadata } from "next";
import CocinaPage, { type CocinaPageData } from "@/components/CocinaPage";

export const metadata: Metadata = {
  title: "Cocinas de Madera Modernas en República Dominicana | Diseño de Lujo",
  description:
    "Cocinas de madera modernas en Santo Domingo y toda la República Dominicana. Cedro, caoba, teca y roble con acabados de lujo. Muebles de cocina en madera a medida. Cotiza gratis.",
  alternates: { canonical: "https://cocinasmodernasrd.com/cocinas/madera" },
  openGraph: {
    title: "Cocinas de Madera Modernas RD | Diseño Natural y Lujoso",
    description:
      "Fabricamos cocinas de madera modernas a medida en República Dominicana. Cedro, caoba, teca y más.",
  },
};

const data: CocinaPageData = {
  slug: "madera",
  title: "Cocinas en Madera",
  metaDescription:
    "Cocinas de madera modernas a medida en República Dominicana.",

  heroImage: "/images/woodKitchen.jpeg",
  heroImageAlt:
    "Cocina de madera moderna con gabinetes de cedro en República Dominicana",
  badge: "Cocinas en Madera",
  h1: "Cocinas de madera modernas, calidez natural y lujo",
  heroDesc:
    "La madera transforma una cocina en un espacio vivo. Fabricamos cocinas modernas en cedro, caoba, teca y roble con acabados contemporáneos que combinan lo mejor de la naturaleza con el diseño actual.",

  introTitle: "El material más noble para tu cocina",
  introBody: [
    "Una cocina de madera moderna no es solo estética — es una inversión que dura generaciones. La madera maciza, bien tratada, supera en durabilidad a cualquier otro material. En Cocinas Modernas RD trabajamos con maderas seleccionadas, tratadas especialmente para el clima tropical húmedo de República Dominicana.",
    "Nuestras cocinas de madera modernas combinan la calidez natural de la madera con diseños limpios y contemporáneos. Gabinetes de cocina en madera con acabados en aceite nórdico, lacado mate o barniz de alto tráfico, según el estilo que prefieras.",
    "Trabajamos con cedro dominicano, caoba, teca importada y roble europeo. Cada pieza es seleccionada a mano para garantizar veta uniforme, ausencia de nudos no deseados y máxima resistencia.",
  ],

  features: [
    {
      icon: "◈",
      title: "Madera seleccionada",
      desc: "Cedro, caoba, teca y roble. Cada tabla es seleccionada a mano para garantizar calidad y uniformidad.",
    },
    {
      icon: "◉",
      title: "Tratamiento tropical",
      desc: "Tratamiento especial contra humedad e insectos, diseñado para el clima de República Dominicana.",
    },
    {
      icon: "◎",
      title: "Diseños contemporáneos",
      desc: "La madera no tiene que verse rústica. Nuestros diseños son modernos, limpios y sofisticados.",
    },
    {
      icon: "◈",
      title: "Durabilidad generacional",
      desc: "Una cocina de madera bien fabricada dura décadas y puede restaurarse múltiples veces.",
    },
  ],

  gallery: [
    {
      src: "/images/woodKitchen.jpeg",
      alt: "Cocina modular de madera natural",
      label: "Módulos en madera con isla central y desayunador",
    },
    {
      src: "/images/islaCentralConMadera.jpeg",
      alt: "Cocina de madera moderna con acabado natural en RD",
      label: "Cocina de madera moderna pequeña con isla",
    },
    {
      src: "/images/mueblesKitchen.jpeg",
      alt: "Cocina con sala de estar pequeña",
      label: "Cocina con sala de estar pequeña",
    },
    {
      src: "/images/walnutKitchen.jpg",
      alt: "Cocina de madera oscura con gabinetes tipo Walnut",
      label: "Cocina de madera oscura con gabinetes tipo Walnut",
    },
    {
      src: "/images/woodKitchen3.jpeg",
      alt: "Cocina de madera oscura con iluminacion",
      label: "Cocina de madera oscura con iluminacion",
    },
  ],

  faqs: [
    {
      q: "¿La madera resiste la humedad del clima dominicano?",
      a: "Sí, siempre que esté correctamente tratada. Aplicamos selladores, aceites penetrantes o barnices de alto tráfico según el tipo de madera y la zona de la cocina. Para áreas con agua directa, recomendamos PVC o cuarzo en la encimera.",
    },
    {
      q: "¿Qué tipos de madera ofrecen para cocinas?",
      a: "Trabajamos con cedro dominicano, caoba nacional, teca importada, roble europeo y pino tratado. Cada una tiene características distintas de color, veta y dureza. Te asesoramos según tu presupuesto y estilo deseado.",
    },
    {
      q: "¿Las cocinas de madera se pueden pintar o cambiar de color?",
      a: "Sí, una de las ventajas de la madera es que puede lijarse y refinarse. Años después puedes cambiar el acabado, pintura o tono sin necesidad de reemplazar los gabinetes completos.",
    },
    {
      q: "¿Cuánto cuesta una cocina de madera moderna en RD?",
      a: "El precio depende del tipo de madera y el tamaño del proyecto. Cocinas de madera en cedro o pino parten desde RD$180,000. En caoba o teca, los proyectos inician desde RD$280,000. Te damos un presupuesto exacto gratis.",
    },
  ],

  relatedSlugs: [
    "gabinetes-de-cocina-modernos-materiales",
    "cuanto-cuesta-cocina-moderna-rd",
    "tendencias-cocinas-modernas-2025",
  ],

  waMessage:
    "Hola, me interesa una cotización de cocina de madera moderna. ¿Qué tipos de madera manejan?",
};

export default function CocinasEnMaderaPage() {
  return <CocinaPage data={data} />;
}
