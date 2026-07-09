import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Footer from "@/components/Footer";

const PAGE_TITLE = "Galería de Proyectos | Cocinas Modernas RD";
const PAGE_DESCRIPTION =
  "Proyectos reales de cocinas modernas fabricadas en República Dominicana: blancas, oscuras, en madera y con isla central. Ver diseños y ubicaciones.";
const PAGE_URL = "https://cocinasmodernasrd.com/galeria";

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

const projects = [
  {
    src: "/images/gabineteKitchenSmall.jpeg",
    alt: "Cocina moderna con peninsula en L de blanco en Piantini Santo Domingo",
    title: "Peninsula en L en blanco",
    location: "Piantini, Santo Domingo",
    style: "Cocina moderna con península central",
    categoryHref: "/cocinas/con-isla",
    categoryLabel: "Ver cocinas con isla y península",
  },
  {
    src: "/images/marmolKitchenSmall.jpg",
    alt: "Cocina moderna en mármol Calacatta lineal con gabinetes modernos",
    title: "Cocina Modular en Mármol Calacatta",
    location: "Bella Vista, Santo Domingo",
    style: "Cocina modular elegante",
    categoryHref: "/cocinas/modulares",
    categoryLabel: "Ver cocinas modulares",
  },
  {
    src: "/images/moderKitchen3Small.jpg",
    alt: "Cocina moderna oscura con muebles de cocina en negro mate y granito",
    title: "Black Edition",
    location: "Santiago de los Caballeros",
    style: "Cocina moderna oscura con granito",
    categoryHref: "/cocinas/modulares",
    categoryLabel: "Ver cocinas modulares",
  },
  {
    src: "/images/openConcept2.jpg",
    alt: "Cocina moderna abierta con isla y desayunador integrado",
    title: "Open Concept Luxury",
    location: "Naco, Santo Domingo",
    style: "Cocina americana abierta con barra",
    categoryHref: "/cocinas/americanas",
    categoryLabel: "Ver cocinas americanas",
  },
  {
    src: "/images/urbanWood.jpg",
    alt: "Cocina moderna de madera con gabinetes de madera y acero",
    title: "Urban Wood",
    location: "Los Cacicazgos",
    style: "Cocina moderna en madera y metal",
    categoryHref: "/cocinas/madera",
    categoryLabel: "Ver cocinas en madera",
  },
  {
    src: "/images/gabineteOrange.jpeg",
    alt: "Cocina modular con tono naranja en gabinetes modernos",
    title: "Gabinete moderno en tono cálido",
    location: "Punta Cana",
    style: "Cocina modular grande y elegante",
    categoryHref: "/cocinas/modulares",
    categoryLabel: "Ver cocinas modulares",
  },
];

export default function GaleriaPage() {
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
      { "@type": "ListItem", position: 2, name: "Galería", item: PAGE_URL },
    ],
  };

  const imageGalleryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Galería de proyectos - Cocinas Modernas RD",
    url: PAGE_URL,
    image: projects.map((p) => ({
      "@type": "ImageObject",
      contentUrl: `https://cocinasmodernasrd.com${p.src}`,
      name: p.title,
      description: p.alt,
      contentLocation: p.location,
    })),
  };

  return (
    <>
      <Script
        id="breadcrumb-schema-galeria"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="imagegallery-schema-galeria"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGalleryJsonLd) }}
      />

      {/* Header */}
      <section className="pt-36 pb-20 px-6 bg-obsidian-soft text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
          Ver diseños reales
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-cream mb-6">
          Galería de Proyectos
        </h1>
        <p className="font-body text-base text-cream/50 max-w-2xl mx-auto">
          Proyectos reales fabricados en República Dominicana con materiales de
          primera: cocinas blancas, oscuras, en madera y con isla central.
        </p>
      </section>

      {/* Grid */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Link
              key={i}
              href={p.categoryHref}
              className="luxury-card group relative overflow-hidden block"
              aria-label={p.categoryLabel}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-70" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-body text-xs tracking-widest uppercase text-gold mb-1">
                  {p.style}
                </p>
                <h3 className="font-display text-2xl text-cream mb-1">
                  {p.title}
                </h3>
                <p className="font-body text-xs text-cream/50">
                  📍 {p.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-obsidian-soft border-t border-gold/10">
        <h2 className="font-display text-4xl text-cream mb-4">
          ¿Quieres una cocina así?
        </h2>
        <p className="font-body text-sm text-cream/50 mb-8">
          Solicita tu cotización gratuita hoy mismo.
        </p>
        <Link href="/contacto" className="btn-gold">
          Cotizar Mi Cocina
        </Link>
      </section>

      <Footer />
    </>
  );
}
