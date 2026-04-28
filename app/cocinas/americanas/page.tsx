import type { Metadata } from "next";
import CocinaPage, { type CocinaPageData } from "@/components/CocinaPage";

export const metadata: Metadata = {
  title: "Cocinas Americanas en República Dominicana | Open Concept Moderno",
  description:
    "Cocinas americanas modernas en Santo Domingo y toda la República Dominicana. Diseño open concept integrado con sala y comedor. Barra americana, isla y desayunador. Cotiza gratis.",
  alternates: {
    canonical: "https://cocinasmodernasrd.com/cocinas/americanas",
  },
  openGraph: {
    title: "Cocinas Americanas RD | Open Concept Integrado con Sala",
    description:
      "Cocinas americanas modernas en República Dominicana. Open concept, barra americana e isla integrada.",
  },
};

const data: CocinaPageData = {
  slug: "americanas",
  title: "Cocinas Americanas",
  metaDescription:
    "Cocinas americanas modernas open concept en República Dominicana.",

  heroImage: "/images/walnutKitchen.jpg",
  heroImageAlt:
    "Cocina americana moderna open concept integrada con sala y comedor en República Dominicana",
  badge: "Cocinas Americanas",
  h1: "Cocinas americanas abiertas: sala, comedor y cocina como uno solo",
  heroDesc:
    "El diseño open concept integra la cocina con el resto del hogar, creando espacios más amplios, luminosos y sociales. Diseñamos cocinas americanas con barra, isla y acabados premium en toda la República Dominicana.",

  introTitle: "La cocina que conecta a tu familia",
  introBody: [
    'La cocina americana o "open concept" elimina las paredes que separan la cocina de la sala y el comedor, creando un espacio unificado que favorece la convivencia familiar. Este estilo es perfecto para el estilo de vida dominicano, donde la familia y las reuniones sociales son el centro del hogar.',
    "En Cocinas Modernas RD diseñamos cocinas americanas que fluyen naturalmente hacia el área social, con barras americanas que sirven de transición entre los espacios y doubles funciones: barra de desayuno, zona de trabajo o espacio de entretenimiento.",
    "El secreto de una buena cocina americana está en la ventilación y extracción de olores. Instalamos campanas extractoras de alto rendimiento que mantienen el área social libre de humos, sin comprometer el diseño.",
  ],

  features: [
    {
      icon: "◈",
      title: "Espacios más amplios",
      desc: "Al eliminar paredes, los espacios se perciben hasta un 40% más grandes y luminosos.",
    },
    {
      icon: "◉",
      title: "Integración social",
      desc: "Cocinas, sala y comedor conectados. Cocinas mientras convives con tu familia y tus invitados.",
    },
    {
      icon: "◎",
      title: "Barra americana",
      desc: "La barra divide los espacios elegantemente, sirve de desayunador y da dinamismo al diseño.",
    },
    {
      icon: "◈",
      title: "Extracción premium",
      desc: "Instalamos campanas extractoras de alto rendimiento para mantener el área social sin olores.",
    },
  ],

  gallery: [
    {
      src: "/images/walnutKitchen.jpg",
      alt: "Cocina americana moderna open concept con sala integrada en RD",
      label: "Open concept con sala",
    },
    {
      src: "/images/modernKitchen.jpeg",
      alt: "Cocina americana con isla y barra desayunador",
      label: "Barra americana con isla",
    },
    {
      src: "/images/islandTabureteSmall.jpeg",
      alt: "Cocina americana blanca integrada con comedor moderno",
      label: "Cocina americana blanca",
    },
    {
      src: "/images/gabineteOrange.jpeg",
      alt: "Cocina americana oscura con barra y penthouse",
      label: "Cocina americana de lujo",
    },
    {
      src: "/images/openConcept3.jpg",
      alt: "Cocina americana en madera con sala de estar integrada",
      label: "Madera y sala integrada",
    },
  ],

  faqs: [
    {
      q: "¿Cómo es una cocina tipo americana?",
      a: "Una cocina tipo americana es un diseño moderno en el que la cocina no está completamente separada, sino que se integra con otros espacios del hogar, como la sala o el comedor. Es muy común en apartamentos actuales y viviendas open concept. ",
    },
    {
      q: "¿Cuáles son las ventajas de una cocina americana?",
      a: "Las cocinas americanas crean espacios más amplios y luminosos al eliminar paredes. Favorecen la convivencia social, ya que puedes cocinar mientras interactúas con tu familia o invitados. Además, permiten diseños más dinámicos con barras y islas integradas.",
    },
    {
      q: "¿Necesito hacer obra para una cocina americana?",
      a: "Depende de la distribución actual. Si hay paredes entre la cocina y la sala, sí requiere demolición. Coordinamos con ingenieros y contratistas para determinar si la pared es estructural antes de cualquier trabajo.",
    },
    {
      q: "¿Cómo se controlan los olores en una cocina americana?",
      a: "Con una campana extractora de alto rendimiento. Trabajamos con campanas que extraen entre 600 y 1200 m³/h, suficiente para mantener el área social sin olores incluso cocinando con fritura.",
    },
    {
      q: "¿La cocina americana es buena para apartamentos pequeños?",
      a: "Es ideal para apartamentos. Al integrar los espacios, el apartamento se percibe mucho más amplio. En espacios de menos de 60m², la cocina americana puede transformar completamente la sensación de tamaño.",
    },
    {
      q: "¿Qué altura tiene la barra americana?",
      a: "Las barras americanas tienen dos alturas estándar: 90 cm (altura de trabajo, igual que los gabinetes bajos) o 105-110 cm para sillas altas tipo bar. Te recomendamos según el uso y la proporción del espacio.",
    },
  ],

  relatedSlugs: [
    "cocinas-modernas-pequenas-con-isla",
    "tendencias-cocinas-modernas-2025",
    "cuanto-cuesta-cocina-moderna-rd",
  ],

  waMessage:
    "Hola, me interesa una cocina americana moderna. ¿Pueden asesorarme sobre el diseño open concept?",
};

export default function CocinasAmericanasPage() {
  return <CocinaPage data={data} />;
}
