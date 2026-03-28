import type { Metadata } from "next";
import CocinaPage, { type CocinaPageData } from "@/components/CocinaPage";

export const metadata: Metadata = {
  title: "Cocinas Modulares en Santo Domingo | Cocinas Modernas",
  description:
    "Cocinas modulares modernas en Santo Domingo y toda la República Dominicana. Desde muebles modulares para cocinas pequeñas y gabinetes modulares para cocina hasta módulos a medida en madera, PVC y melamina. Instalación rápida, garantía 2 años. Cotiza gratis.",
  alternates: {
    canonical: "https://www.cocinasmodernasrd.com/cocinas/modulares",
  },
  openGraph: {
    title: "Cocinas Modulares RD | Diseño Moderno a Medida",
    description:
      "Cocinas modulares modernas diseñadas y fabricadas en República Dominicana. Solicita tu cotización gratuita.",
    images: [{ url: "/images/marmolKitchen.jpeg" }],
  },
};

const data: CocinaPageData = {
  slug: "modulares",
  title: "Cocinas Modulares",
  metaDescription:
    "Cocinas modulares modernas en República Dominicana. Módulos a medida, instalación profesional.",

  heroImage: "/images/marmolKitchen.jpeg",
  heroImageAlt:
    "Cocina modular moderna con gabinetes a medida en Santo Domingo República Dominicana",
  badge: "Cocinas Modulares",
  h1: "Cocinas modulares",
  heroDesc:
    "Diseñamos y fabricamos cocinas modulares con la flexibilidad de adaptarse a cualquier espacio. Módulos en madera, PVC o melamina con acabados de lujo en toda la República Dominicana.",

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
      src: "/images/islandKitchen.jpeg",
      // src: "/images/gabineteKitchen.jpeg",
      alt: "Cocina modular blanca con isla en Santo Domingo",
      label: "Módulos con isla",
    },
    {
      src: "/images/gabineteOrange.jpeg",
      alt: "Cocina modular lineal moderna en melamina blanca",
      label: "Lineal en melamina",
    },
    {
      src: "/images/openKitchen.jpg",
      // src: "/images/gabineteKitchen.jpeg",
      alt: "Cocina modular oscura en PVC con gabinetes hasta el techo",
      label: "Módulos hasta el techo",
    },
    {
      src: "/images/gabineteKitchen.jpeg",
      alt: "Cocina modular en L con desayunador moderno",
      label: "En L con desayunador",
    },
    {
      src: "/images/woodKitchen.jpeg",
      alt: "Cocina modular de madera con detalles en oro",
      label: "Módulos en madera con isla central y desayunador",
    },
    {
      src: "/images/modernKitchen.jpeg",
      alt: "Mocinas modulares en kit",
      label: "Cocinas modulares en kit",
    },

    {
      src: "/images/mueblesKitchen.jpeg",
      alt: "Muebles cocina modulares economicos",
      label: "Muebles cocina modulares economicos",
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
      q: "¿Ofrecen muebles modulares para cocina y cocinas armables?",
      a: "Ofrecemos muebles modulares para cocina y cocinas armables diseñadas a la medida de tu espacio. Puedes elegir entre diferentes estilos, colores y configuraciones, con la ventaja de que son fáciles de instalar, ampliar o reorganizar según tus necesidades.",
    },
    {
      q: "¿Tienen catalogo disponible de cocinas modulares?",
      a: "Contamos con un catálogo de cocinas modulares con múltiples diseños modernos y funcionales. Puedes ver opciones de distribución, acabados y materiales, y también solicitar una propuesta personalizada adaptada a tu espacio y presupuesto.",
    },
    {
      q: "¿Tienen cocinas modulares economicas?",
      a: "Disponemos de cocinas modulares económicas sin sacrificar calidad. Trabajamos con materiales duraderos y soluciones inteligentes para ajustarnos a diferentes presupuestos, ofreciendo una excelente relación calidad-precio.",
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
  return <CocinaPage data={data} />;
}
