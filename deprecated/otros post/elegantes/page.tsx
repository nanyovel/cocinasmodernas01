import type { Metadata } from "next";
import CocinaPage, { type CocinaPageData } from "@/components/CocinaPage";

export const metadata: Metadata = {
  title: "Cocinas Elegantes y de Lujo en República Dominicana | Diseño Premium",
  description:
    "Cocinas elegantes y de lujo en Santo Domingo y toda la República Dominicana. Mármol, cuarzo, madera noble y accesorios europeos. Las cocinas más lujosas del país. Cotiza gratis.",
  alternates: { canonical: "https://cocinasmodernasrd.com/cocinas/elegantes" },
  openGraph: {
    title: "Cocinas Elegantes de Lujo RD | Mármol, Cuarzo y Diseño Premium",
    description:
      "Las cocinas más elegantes y lujosas de República Dominicana. Materiales premium y diseño exclusivo.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
      },
    ],
  },
};

const data: CocinaPageData = {
  slug: "elegantes",
  title: "Cocinas Elegantes",
  metaDescription:
    "Cocinas elegantes y de lujo en República Dominicana. Mármol, cuarzo y materiales premium.",

  heroImage:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=85",
  heroImageAlt:
    "Cocina elegante de lujo con mármol blanco e isla central en Santo Domingo",
  badge: "Cocinas Elegantes",
  h1: "Cocinas elegantes de lujo: donde el diseño no tiene límites",
  heroDesc:
    "Una cocina elegante no es solo estética — es una declaración de estilo de vida. Mármol Calacatta, cuarzo de veta dramática, madera noble y accesorios europeos de la más alta gama. Para quienes no admiten concesiones.",

  introTitle: "El lujo en cada centímetro de tu cocina",
  introBody: [
    "Las cocinas elegantes de lujo combinan materiales excepcionales con un diseño impecable donde cada detalle está perfectamente pensado. Desde las proporciones de los gabinetes hasta el tipo de herraje, desde la iluminación hasta la selección del piso, todo trabaja en conjunto para crear una experiencia visual y funcional sublime.",
    "En Cocinas Modernas RD ejecutamos proyectos de cocinas elegantes con acceso a mármoles importados de Italia y España, cuarzos de alta gama, maderas nobles tratadas y una colección de accesorios europeos de Blum, Hettich y Häfele que garantizan una apertura suave y silenciosa en cada movimiento.",
    "Nuestros proyectos de cocinas elegantes incluyen diseño 3D fotorrealista, asesoría en selección de materiales, coordinación con arquitectos e interioristas y seguimiento de obra hasta la entrega final.",
  ],

  features: [
    {
      icon: "💎",
      title: "Mármol importado",
      desc: "Calacatta, Carrara, Marquina y otras variedades seleccionadas directamente de cantera para tu proyecto.",
    },
    {
      icon: "◉",
      title: "Accesorios europeos",
      desc: "Herrajes Blum y Hettich con cierre suave en todos los gabinetes y cajones sin excepción.",
    },
    {
      icon: "◎",
      title: "Iluminación de diseño",
      desc: "LED integrado bajo gabinetes, iluminación de vitrina y lámparas colgantes de colecciones de diseño.",
    },
    {
      icon: "◈",
      title: "Acabados únicos",
      desc: "Lacados de alta brillo, texturas 3D, vidrio ahumado y acabados en metal satinado o cepillado.",
    },
  ],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      alt: "Cocina elegante de lujo con isla de mármol Calacatta en Santo Domingo",
      label: "Mármol Calacatta",
    },
    {
      src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
      alt: "Cocina elegante blanca lacada con detalles en oro y cuarzo",
      label: "Lacado y oro",
    },
    {
      src: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
      alt: "Cocina lujosa oscura con isla negra y electrodomésticos integrados",
      label: "Lujo en negro",
    },
    {
      src: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80",
      alt: "Cocina elegante con gabinetes hasta el techo y vitrina iluminada",
      label: "Vitrina iluminada",
    },
    {
      src: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80",
      alt: "Cocina de lujo abierta con isla central y acabados premium",
      label: "Lujo open concept",
    },
  ],

  faqs: [
    {
      q: "¿Qué hace a una cocina ser verdaderamente elegante?",
      a: "La elegancia está en la coherencia del diseño, la calidad de los materiales y la precisión de la ejecución. Proporciones correctas, materiales nobles, herrajes premium y acabados impecables son los pilares de una cocina verdaderamente elegante.",
    },
    {
      q: "¿Trabajan con arquitectos e interioristas?",
      a: "Sí, colaboramos frecuentemente con arquitectos e interioristas en proyectos residenciales de alto nivel. Podemos adaptarnos al diseño especificado o aportar nuestra propuesta dentro del concepto general del proyecto.",
    },
    {
      q: "¿Cuánto cuesta una cocina de lujo en República Dominicana?",
      a: "Los proyectos de cocinas elegantes de lujo en RD parten desde RD$450,000 para espacios medianos con materiales premium. Para proyectos con mármol importado, isla grande y electrodomésticos integrados, los presupuestos van de RD$800,000 en adelante.",
    },
    {
      q: "¿Ofrecen coordinación de obra completa?",
      a: "Sí, ofrecemos un servicio de coordinación de obra que incluye instalación de gabinetes, coordinación con plomeros y electricistas, instalación de encimeras y entrega final con limpieza del área.",
    },
  ],

  relatedSlugs: [
    "cuarzo-vs-marmol-cual-elegir",
    "tendencias-cocinas-modernas-2025",
    "cuanto-cuesta-cocina-moderna-rd",
  ],

  waMessage:
    "Hola, estoy buscando una cocina elegante de lujo. Me gustaría ver qué proyectos han realizado y cotizar el mío.",
};

export default function CocinasElegantesPage() {
  return <CocinaPage data={data} />;
}
