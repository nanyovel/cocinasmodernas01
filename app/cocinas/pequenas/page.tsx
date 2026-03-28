import type { Metadata } from "next";
import CocinaPage, { type CocinaPageData } from "@/components/CocinaPage";

export const metadata: Metadata = {
  title: "Cocinas Pequeñas | Cocinas Modernas",
  description:
    "Cocinas modernas pequeñas en Santo Domingo y toda la República Dominicana. Desde muebles modulares para cocinas pequeñas y gabinetes modulares para cocina hasta módulos a medida en madera, PVC y melamina. Instalación rápida, garantía 2 años. Cotiza gratis.",
  alternates: {
    canonical: "https://www.cocinasmodernasrd.com/cocinas/modulares",
  },
  openGraph: {
    title: "Cocinas Pequeñas RD | Diseño Moderno a Medida",
    description:
      "Cocinas Pequeñas modernas diseñadas y fabricadas en República Dominicana. Solicita tu cotización gratuita.",
    images: [{ url: "/images/marmolKitchen.jpeg" }],
  },
};

const data: CocinaPageData = {
  slug: "modulares",
  title: "Cocinas Pequeñas",
  metaDescription:
    "Cocinas Pequeñas modernas en República Dominicana. Módulos a medida, instalación profesional.",

  heroImage: "/images/marmolKitchen.jpeg",
  heroImageAlt:
    "Cocina modular moderna con gabinetes a medida en Santo Domingo República Dominicana",
  badge: "Cocinas Pequeñas",
  h1: "Cocinas Modernas Pequeñas",
  heroDesc:
    "¿Tienes un espacio reducido y quieres una cocina moderna que no sacrifique estilo ni funcionalidad? Nuestras cocinas modulares están diseñadas precisamente para eso. Fabricamos e instalamos cocinas modulares a medida en toda la República Dominicana, utilizando módulos en madera, PVC o melamina con acabados de lujo. Cada diseño se adapta inteligentemente a tu espacio, sin importar el tamaño.",

  introTitle: "Cocinas pequeñas pero bonitas",
  introBody: [
    "Las cocinas modulares pequeñas son la solución ideal para optimizar espacios sin renunciar al diseño. En nuestra empresa, especializada en cocinas pequeñas modernas en Santo Domingo y toda la República Dominicana, creamos espacios funcionales, elegantes y personalizados.",
    "Trabajamos con los mejores diseños de cocinas modernas pequeñas, integrando gabinetes de cocina pequeña modernos, muebles de cocina modernos pequeños y soluciones inteligentes como cocinas modernas pequeñas con barra o islas para cocinas pequeñas modernas, perfectas para apartamentos y casas con espacios reducidos.",
    "Si buscas una cocina moderna pequeña con isla, una cocina americana moderna pequeña o una solución completa como una cocina completa moderna, te acompañamos desde el diseño hasta la fabricación e instalación, garantizando resultados de alta calidad en toda la República Dominicana.",
  ],

  features: [
    {
      icon: "◈",
      title: "Aprovechamiento máximo del espacio",
      desc: "Las cocinas modulares pequeñas están diseñadas para optimizar cada centímetro, ideales para cocinas modernas en espacios pequeños y apartamentos. Permiten integrar gabinetes para cocinas pequeñas modernas y soluciones inteligentes que aumentan el almacenamiento sin saturar el área.",
    },
    {
      icon: "◉",
      title: "Diseño moderno y personalizado",
      desc: "Puedes elegir entre múltiples estilos como cocinas minimalistas modernas pequeñas, cocinas blancas modernas pequeñas o cocinas en L modernas pequeñas, adaptando materiales, colores y distribución según tus necesidades y gustos.",
    },
    {
      icon: "◎",
      title: "Mayor funcionalidad y organización",
      desc: "Gracias a elementos como cocinas pequeñas con barra modernas, islas de cocina pequeñas modernas o muebles para cocina pequeña modernos, se logra una mejor distribución que facilita el uso diario y mejora la experiencia en la cocina.",
    },
    {
      icon: "◈",
      title: "Incremento del valor de la propiedad",
      desc: "Una cocina moderna pequeña bien diseñada no solo mejora la estética del hogar, sino que también aumenta su valor en el mercado, especialmente en proyectos de remodelación de cocinas pequeñas modernas.",
    },
  ],

  gallery: [
    {
      src: "/images/mueblesKitchen.jpeg",
      alt: "Cocina walnut style",
      label: "Cocina walnut style",
    },
    {
      src: "/images/islandKitchen3Small.jpeg",
      alt: "Cocina pequeña cerrada",
      label: "Cocina pequeña cerrada",
    },
    {
      src: "/images/smallKitchen.jpeg",
      alt: "Cocina con taburetes y barra",
      label: "Cocina con taburetes y barra",
    },
    {
      src: "/images/smallKitchen2.jpg",
      alt: "Cocina modular en L con desayunador moderno",
      label: "En L con desayunador",
    },
  ],

  faqs: [
    {
      q: "¿Cuál es el mejor color para una cocina pequeña?",
      a: "El mejor color para una cocina pequeña es aquel que aporte amplitud, luz y armonía. En Cocinas Modernas RD recomendamos tonos claros como blanco, gris suave o beige, ya que ayudan a ampliar visualmente el espacio. También es tendencia combinar estos colores con madera o acentos oscuros para lograr cocinas pequeñas modernas elegantes y bien equilibradas.",
    },
    {
      q: "¿Cuáles son los colores de moda para las cocinas en 2026?",
      a: "En Cocinas Modernas RD trabajamos con las últimas tendencias, donde destacan los tonos naturales y sofisticados. Colores como verde oliva, azul profundo, gris cálido y acabados tipo madera están marcando el estilo en cocinas modernas pequeñas. Además, el blanco sigue siendo un clásico, especialmente en cocinas blancas modernas pequeñas por su versatilidad y luminosidad.",
    },
    {
      q: "¿Cómo mejorar mi cocina con poco dinero?",
      a: "Mejorar tu cocina sin una gran inversión es posible con pequeños cambios estratégicos. En Cocinas Modernas RD recomendamos renovar frentes de gabinetes, cambiar tiradores, optimizar la iluminación o incorporar muebles para cocina pequeña modernos. Estas mejoras pueden transformar completamente el espacio y darle un estilo más actual sin necesidad de una remodelación completa.",
    },
    {
      q: "¿Cuál es la última tendencia en cocinas?",
      a: "La tendencia actual se centra en cocinas funcionales, minimalistas y personalizadas. En Cocinas Modernas RD diseñamos cocinas modernas en espacios pequeños con líneas limpias, almacenamiento inteligente y elementos como barras o islas compactas. También destacan las cocinas integradas al área social, ideales para apartamentos modernos.",
    },
    {
      q: "¿Hacen cocinas modulares para apartamentos pequeños?",
      a: "Sí, en Cocinas Modernas RD somos especialistas en cocinas modulares pequeñas para apartamentos. Diseñamos soluciones a medida que optimizan cada espacio, logrando cocinas modernas para apartamentos pequeños prácticas, estéticas y totalmente funcionales.",
    },
    {
      q: "¿Ofrecen muebles modulares para cocina y cocinas armables?",
      a: "Sí, ofrecemos muebles modulares para cocina y sistemas armables que se adaptan a diferentes espacios y necesidades. En Cocinas Modernas RD fabricamos gabinetes para cocinas pequeñas modernas con materiales de alta calidad, garantizando durabilidad y diseño.",
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
