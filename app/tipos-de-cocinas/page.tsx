import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Footer from "@/components/Footer";
import { COCINAS, SeccionesLink } from "@/lib/data";

const PAGE_TITLE = "Tipos de cocinas disponibles | Cocinas Modernas RD";
const PAGE_DESCRIPTION =
  "Nuestra variedad de tipos de cocinas modernas, inspirate con nuestra galeria.";
const PAGE_URL = "https://cocinasmodernasrd.com/tipos-de-cocinas";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    images: [
      {
        url: "https://cocinasmodernasrd.com/images/gabineteKitchenSmall.jpeg",
        width: 1200,
        height: 630,
        alt: "Tipos de cocinas - Cocinas Modernas RD",
      },
    ],
  },
};

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
    name: "Tipos de cocinas - Cocinas Modernas RD",
    url: PAGE_URL,
    image: COCINAS.map((p) => ({
      "@type": "ImageObject",
      contentUrl: `https://cocinasmodernasrd.com${p.pageImage}`,
      name: p.label,
      description: p.pageDescription,
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

        {/* Breadcrumb visual */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center justify-center gap-2 text-xs font-body text-cream/40">
            <li>
              <Link href="/" className="hover:text-gold transition-colors">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gold">Galería</li>
          </ol>
        </nav>

        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
          Ver diseños reales
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-cream mb-6">
          Nuestros tipos de cocinas
        </h1>
        <p className="font-body text-base text-cream/50 max-w-2xl mx-auto">
          Descubre los tipos de cocinas que ofrecemos y encuentra inspiración
          para tu próxima cocina.
        </p>
      </section>

      {/* Bloque de contenido SEO */}
      <section className="px-6 pt-16 pb-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-cream mb-6">
            Explora los tipos de cocinas modernas más solicitados en RD
          </h2>
          <p className="font-body text-sm text-cream/50 leading-relaxed">
            En Cocinas Modernas RD diseñamos e instalamos cocinas modernas
            adaptadas a cada estilo de vida: desde cocinas en madera con
            acabados cálidos, hasta cocinas americanas abiertas ideales para
            espacios integrados, cocinas en L que optimizan el espacio, cocinas
            modulares con líneas limpias y minimalistas, y proyectos de cocina
            rústica que combinan la calidez de los materiales naturales con un
            diseño funcional y contemporáneo. También desarrollamos proyectos
            inspirados en cocinas vintage para quienes buscan un estilo clásico
            con las comodidades actuales, y realizamos remodelaciones de cocinas
            antiguas, transformándolas en espacios modernos, funcionales y
            personalizados. Cada proyecto refleja la calidad de los materiales y
            el diseño a medida que ofrecemos. Haz clic en cualquier diseño para
            ver más ejemplos de ese estilo y encontrar la inspiración perfecta
            para tu próxima cocina.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad">
        <div className="max-w-5xl mx-auto flex flex-col gap-5">
          {COCINAS.map((p) => (
            <Link
              key={p.slug}
              href={`${SeccionesLink.cocinas}/${p.slug}`}
              className="luxury-card group relative overflow-hidden flex flex-col sm:flex-row"
              aria-label={`Ver ${p.label}`}
            >
              <div className="relative w-full sm:w-64 aspect-[4/3] sm:aspect-auto flex-shrink-0 overflow-hidden">
                <Image
                  src={p.pageImage}
                  alt={p.pageImageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 256px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center flex-1 p-6 sm:p-8 border-t sm:border-t-0 sm:border-l border-gold/10">
                <h3 className="font-display text-2xl md:text-3xl text-cream mb-2">
                  {p.label}
                </h3>
                <p className="font-body text-sm text-cream/50 leading-relaxed mb-5 max-w-xl">
                  {p.pageDescription}
                </p>
                <span className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-gold group-hover:gap-3 transition-all duration-300 w-fit">
                  Ver detalles
                  <span aria-hidden="true">→</span>
                </span>
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
