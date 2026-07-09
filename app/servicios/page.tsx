import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Footer from "@/components/Footer";

const PAGE_TITLE = "Servicios y Proceso | Cocinas Modernas RD";
const PAGE_DESCRIPTION =
  "Diseño 3D, fabricación e instalación de cocinas modernas en Santo Domingo y toda República Dominicana. Conoce nuestro proceso, de la consulta a la garantía.";
const PAGE_URL = "https://cocinasmodernasrd.com/servicios";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
  },
};

const categories = [
  {
    icon: "🚪",
    title: "Cocinas Modulares",
    desc: "Fabricadas en taller con precisión milimétrica, instaladas en tu hogar en días, no semanas. Ideales para presupuestos y espacios de cualquier tamaño.",
    img: "/images/moderKitchen3.jpg",
    imgAlt:
      "Cocina modular moderna en melamina con gabinetes a medida en Santo Domingo",
    href: "/cocinas/modulares",
  },
  {
    icon: "🍳",
    title: "Cocinas con Isla Central",
    desc: "El espacio de trabajo, desayuno y encuentro familiar. Diseñadas con desayunador, granito, cuarzo o mármol a tu medida.",
    img: "/images/modernKitchen.jpeg",
    imgAlt: "Cocina moderna con isla central de mármol en Santo Domingo",
    href: "/cocinas/con-isla",
  },
  {
    icon: "🪑",
    title: "Gabinetes y Muebles a Medida",
    desc: "Modelos minimalistas sin manijas, soluciones de almacenamiento inteligente y acabados en madera, melamina o PVC, para cocinas de cualquier tamaño.",
    img: "/images/gabineteKitchen.jpeg",
    imgAlt: "Gabinetes de cocina modernos en madera con repisas flotantes",
    href: "/cocinas/madera",
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
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
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

  return (
    <>
      <Script
        id="breadcrumb-schema-servicios"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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

      {/* Categories — teasers cortos, cada uno enlaza a su página de autoridad */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto space-y-24">
          {categories.map((s, i) => (
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
                  <Link href={s.href} className="btn-outline-gold">
                    Ver Detalles
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

      <Footer />
    </>
  );
}
