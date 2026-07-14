import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Footer from "@/components/Footer";

const PAGE_TITLE = "Servicios y Proceso | Cocinas Modernas RD";
const PAGE_DESCRIPTION =
  "Diseño 3D, fabricación e instalación de cocinas modernas en Santo Domingo y toda República Dominicana. Conoce nuestro proceso, de la consulta a la garantía.";
const PAGE_URL = "https://cocinasmodernasrd.com/servicios";
const PAGE_IMAGE = "https://cocinasmodernasrd.com/images/modernKitchen.jpeg";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "es_DO",
    images: [{ url: PAGE_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [PAGE_IMAGE],
  },
};

// Servicios generales del negocio (no tipos de cocina — eso vive en /tipos-de-cocinas)
const services = [
  {
    icon: "🎨",
    title: "Diseño 3D Gratuito",
    desc: "Visualiza tu cocina completa antes de fabricar. Ajustamos distribución, colores y materiales contigo hasta que el diseño sea exactamente el que quieres.",
    img: "/images/modernKitchen.jpeg",
    imgAlt: "Diseño 3D de cocina moderna previo a fabricación en Santo Domingo",
  },
  {
    icon: "🔨",
    title: "Remodelación de Cocinas",
    desc: "Renovamos tu cocina actual sin necesidad de empezar de cero: cambio de frentes, encimeras, herrajes o distribución completa. Evaluamos qué conservar y qué renovar según tu presupuesto.",
    img: "/images/cocina-en-l-oscura.jpg",
    imgAlt:
      "Remodelación de cocina moderna con nuevos gabinetes en Santo Domingo",
  },
  {
    icon: "🏭",
    title: "Fabricación en Taller Propio",
    desc: "Producimos cada módulo con precisión milimétrica en nuestro taller, con control de calidad en cada etapa, antes de que la cocina llegue a tu hogar.",
    img: "/images/gabineteKitchen.jpeg",
    imgAlt:
      "Fabricación de gabinetes de cocina modernos en taller en República Dominicana",
  },
  {
    icon: "🔧",
    title: "Instalación Profesional",
    desc: "Nuestro equipo instala todo en tu hogar con orden y precisión, cumpliendo los tiempos acordados, sin dejar tu casa hecha un desastre en el proceso.",
    img: "/images/islandKitchen.jpeg",
    imgAlt: "Instalación de cocina moderna con isla central en Santo Domingo",
  },
  {
    icon: "🛡️",
    title: "Garantía y Soporte Postventa",
    desc: "2 años de garantía completa en materiales y mano de obra. Cualquier ajuste posterior lo resolvemos sin costo adicional para ti.",
    img: "/images/marmolKitchenMedium.jpg",
    imgAlt:
      "Cocina moderna terminada con garantía completa en República Dominicana",
  },
];

const process = [
  {
    n: "01",
    title: "Consulta",
    desc: "Nos reunimos (presencial o virtual) para entender tu visión, espacio y presupuesto.",
  },
  {
    n: "02",
    title: "Diseño 3D",
    desc: "Nuestro equipo crea un modelo 3D realista para que veas tu cocina antes de fabricarla.",
  },
  {
    n: "03",
    title: "Aprobación",
    desc: "Revisas, ajustas y apruebas el diseño final con total libertad de modificaciones.",
  },
  {
    n: "04",
    title: "Fabricación",
    desc: "Producción en nuestro taller con control de calidad en cada etapa del proceso.",
  },
  {
    n: "05",
    title: "Instalación",
    desc: "Nuestro equipo instala todo en tu hogar con precisión milimétrica y orden total.",
  },
  {
    n: "06",
    title: "Garantía",
    desc: "2 años de garantía completa. Cualquier ajuste posterior lo atendemos sin costo.",
  },
];

export default function ServiciosPage() {
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://cocinasmodernasrd.com",
      },
      { "@type": "ListItem", position: 2, name: "Servicios", item: PAGE_URL },
    ],
  };

  // Service schema — ahora refleja los servicios reales (no tipos de cocina)
  const serviceSchema = {
    "@type": "Service",
    serviceType: "Diseño, fabricación e instalación de cocinas modernas",
    provider: {
      "@type": "LocalBusiness",
      name: "Cocinas Modernas RD",
      url: "https://cocinasmodernasrd.com",
    },
    areaServed: "República Dominicana",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios ofrecidos",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.desc,
        },
      })),
    },
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, serviceSchema],
  };

  return (
    <>
      <Script
        id="page-schema-servicios"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />

      {/* Header */}
      <section className="pt-36 pb-20 px-6 bg-obsidian-soft text-center relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
          Cómo trabajamos
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-cream mb-6">
          Del Diseño a la Instalación
        </h1>
        <p className="font-body text-base text-cream/50 max-w-2xl mx-auto">
          Diseño 3D, fabricación en taller propio e instalación con garantía de
          2 años. Todo bajo un mismo techo en República Dominicana.
        </p>
      </section>

      {/* Servicios */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((s, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-16 items-center">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.imgAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 border border-gold/20" />
                </div>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="text-4xl mb-4">{s.icon}</div>
                <p className="font-body text-xs tracking-widest uppercase text-gold mb-3">
                  Servicio
                </p>
                <h2 className="font-display text-4xl font-light text-cream mb-6">
                  {s.title}
                </h2>
                <p className="font-body text-sm text-cream/60 leading-relaxed mb-8">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/tipos-de-cocinas" className="btn-outline-gold">
                    Ver Tipos de Cocina
                  </Link>
                  <Link href="/contacto" className="btn-gold">
                    Solicitar Cotización
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-obsidian-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Cómo trabajamos
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream">
              Nuestro proceso
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((p) => (
              <div
                key={p.n}
                className="luxury-card border border-gold/10 bg-obsidian p-8"
              >
                <div className="font-display text-5xl text-gold/20 mb-4">
                  {p.n}
                </div>
                <h3 className="font-display text-2xl text-cream mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-cream/50 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link al blog de precios */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center border-t border-gold/10 pt-16">
          <p className="font-body text-sm text-cream/50 mb-4">
            ¿Quieres saber cuánto cuesta tu proyecto antes de agendar una
            consulta?
          </p>
          <Link
            href="/blog/cuanto-cuesta-cocina-modular-rd"
            className="font-body text-xs tracking-widest uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
          >
            Ver rangos de precios en RD →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
