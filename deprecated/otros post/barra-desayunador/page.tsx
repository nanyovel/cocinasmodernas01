import type { Metadata } from "next";
import CocinaPage, { type CocinaPageData } from "@/components/CocinaPage";

export const metadata: Metadata = {
  title:
    "Cocinas con Barra Desayunador en República Dominicana | Diseño Moderno",
  description:
    "Cocinas modernas con barra desayunador en Santo Domingo y toda la República Dominicana. Barras en granito, cuarzo y mármol integradas a la cocina. Diseño a medida. Cotiza gratis.",
  alternates: {
    canonical: "https://cocinasmodernasrd.com/cocinas/barra-desayunador",
  },
  openGraph: {
    title: "Cocinas con Barra Desayunador RD | Granito, Cuarzo y Mármol",
    description:
      "Cocinas con barra desayunador en República Dominicana. Barras a medida en granito, cuarzo y mármol.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1200&q=80",
      },
    ],
  },
};

const data: CocinaPageData = {
  slug: "barra-desayunador",
  title: "Cocinas con Barra Desayunador",
  metaDescription:
    "Cocinas con barra desayunador en República Dominicana. Barras a medida en granito, cuarzo y mármol.",

  heroImage:
    "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1800&q=85",
  heroImageAlt:
    "Cocina moderna con barra desayunador integrada en granito en Santo Domingo República Dominicana",
  badge: "Cocinas con Barra",
  h1: "Cocinas con barra desayunador: funcionalidad y estilo en cada mañana",
  heroDesc:
    "La barra desayunador transforma la cocina en un punto de encuentro familiar. Desayuna, trabaja, toma café o comparte una copa — todo desde la comodidad de tu cocina moderna. Diseñamos barras a medida en granito, cuarzo, mármol y madera en toda la República Dominicana.",

  introTitle: "La barra que hace tu cocina más viva",
  introBody: [
    "Una cocina con barra desayunador resuelve dos necesidades al mismo tiempo: amplía la superficie de trabajo y crea una zona informal de comer y socializar sin necesitar un comedor separado. Es perfecta para apartamentos, cocinas abiertas y cualquier espacio donde se quiera maximizar la funcionalidad.",
    "En Cocinas Modernas RD diseñamos barras desayunador completamente integradas al diseño de la cocina. Pueden ser una extensión de la encimera, una isla con volado, una peninsula adosada a la pared o una barra americana separada. Cada solución se adapta al espacio y la dinámica de vida del cliente.",
    "Los materiales más solicitados para barras en RD son el granito (por su durabilidad y variedad de diseños), el cuarzo (por su resistencia y fácil mantenimiento) y la madera (por su calidez visual). También trabajamos con cemento pulido para proyectos de estilo industrial o minimalista.",
  ],

  features: [
    {
      icon: "☕",
      title: "Zona de desayuno",
      desc: "Un espacio cómodo para desayunar sin ocupar el comedor. Ideal para el ritmo de vida diario dominicano.",
    },
    {
      icon: "◉",
      title: "Superficie extra",
      desc: "La barra duplica el espacio de trabajo disponible, muy útil al cocinar para eventos o reuniones.",
    },
    {
      icon: "◎",
      title: "División elegante",
      desc: "En cocinas abiertas, la barra divide cocina y sala de forma elegante sin necesitar paredes.",
    },
    {
      icon: "◈",
      title: "Materiales premium",
      desc: "Granito, cuarzo, mármol, madera o cemento pulido. La barra que dura y que siempre se ve bien.",
    },
  ],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80",
      alt: "Cocina moderna con barra desayunador en granito y sillas altas",
      label: "Barra con sillas altas",
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      alt: "Cocina con isla y barra desayunador integrados en mármol",
      label: "Isla con barra integrada",
    },
    {
      src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
      alt: "Cocina blanca con barra americana en cuarzo blanco",
      label: "Barra americana blanca",
    },
    {
      src: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
      alt: "Cocina oscura con barra desayunador en cemento pulido",
      label: "Barra en cemento pulido",
    },
    {
      src: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=800&q=80",
      alt: "Cocina en madera con barra desayunador de madera y cuarzo",
      label: "Barra en madera y cuarzo",
    },
  ],

  faqs: [
    {
      q: "¿Cuánto volado necesita una barra desayunador?",
      a: "Para sillas normales se recomienda entre 25 y 30 cm de volado. Para sillas altas tipo bar, entre 35 y 45 cm es lo ideal para tener suficiente espacio para las piernas con comodidad.",
    },
    {
      q: "¿Qué altura debe tener la barra desayunador?",
      a: "Hay dos alturas estándar: 90 cm para sillas regulares (misma altura que los gabinetes) y 105-110 cm para sillas altas. La elección depende del tipo de sillas que prefieras y la proporción visual del espacio.",
    },
    {
      q: "¿La barra puede estar integrada en la misma encimera de la cocina?",
      a: "Sí, es la opción más común. La encimera de la cocina se extiende con un volado que forma la barra. Esto reduce costos al usar el mismo material y crea una continuidad visual muy limpia.",
    },
    {
      q: "¿Qué material es mejor para la barra desayunador?",
      a: "Para uso diario intenso, el cuarzo es el más recomendado: no se mancha, no requiere sellado y es muy resistente a golpes. El granito es excelente y más económico. La madera da calidez pero requiere más cuidado con líquidos.",
    },
    {
      q: "¿Pueden hacer una barra en una cocina ya existente?",
      a: "Sí, podemos añadir una barra desayunador a una cocina existente. El proceso depende de la configuración actual, pero en la mayoría de los casos es posible sin una remodelación completa.",
    },
  ],

  relatedSlugs: [
    "cocinas-modernas-pequenas-con-isla",
    "cuarzo-vs-marmol-cual-elegir",
    "cuanto-cuesta-cocina-moderna-rd",
  ],

  waMessage:
    "Hola, me interesa una cocina con barra desayunador. ¿Pueden asesorarme sobre diseño y materiales?",
};

export default function CocinasBarraDesayunadorPage() {
  return <CocinaPage data={data} />;
}
