import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Footer from "@/components/Footer";

const PAGE_TITLE =
  "Materiales para Cocinas Modernas | Guía Completa | Cocinas Modernas RD";
const PAGE_DESCRIPTION =
  "Guía completa de materiales para cocinas modernas en República Dominicana: cuarzo, mármol, granito para encimeras; melamina, PVC, madera y MDF para gabinetes. Compara precio, durabilidad y mantenimiento.";
const PAGE_URL = "https://cocinasmodernasrd.com/materiales";
const PAGE_IMAGE = "/images/marmolKitchenMedium.jpg";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: PAGE_IMAGE, width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [PAGE_IMAGE],
  },
};

const encimeras = [
  {
    name: "Cuarzo",
    desc: "No poroso, no requiere sellado, resiste manchas y golpes. La opción más práctica para uso diario intenso.",
    bestFor:
      "Familias con niños, cocinas de uso diario, quien busca bajo mantenimiento.",
    postHref: "/blog/cuarzo-vs-marmol-cual-elegir",
    postLabel: "Cuarzo vs Mármol: ¿cuál elegir?",
  },
  {
    name: "Mármol",
    desc: "El material más lujoso y visual. Poroso, mancha con acidez y requiere sellado periódico.",
    bestFor:
      "Cocinas de lujo, islas decorativas, proyectos de alto presupuesto.",
    postHref: "/blog/cuarzo-vs-marmol-cual-elegir",
    postLabel: "Cuarzo vs Mármol: ¿cuál elegir?",
  },
  {
    name: "Granito",
    desc: "Muy resistente al calor y a los golpes. Cada pieza es única. Precio generalmente menor que cuarzo y mármol.",
    bestFor: "Buen balance precio-durabilidad para uso diario.",
    postHref: "/blog/cuanto-cuesta-cocina-modular-rd",
    postLabel: "¿Cuánto cuesta una cocina modular en RD?",
  },
];

const gabinetes = [
  {
    name: "Melamina",
    desc: "La opción más popular en precio medio. Buena relación precio-calidad, variedad de colores y texturas.",
    bestFor:
      "Cocinas modulares de presupuesto medio, gran variedad de acabados.",
    postHref: "/blog/gabinetes-de-cocina-modernos-materiales",
    postLabel: "Gabinetes modernos: madera, melamina o MDF",
  },
  {
    name: "PVC",
    desc: "Resistente a la humedad. No se hincha ni se pudre — ideal para el clima tropical dominicano.",
    bestFor: "Cocinas cerca del mar o en zonas de alta humedad.",
    postHref: "/blog/gabinetes-de-cocina-modernos-materiales",
    postLabel: "Gabinetes modernos: madera, melamina o MDF",
  },
  {
    name: "Madera maciza",
    desc: "Cedro, caoba, teca o roble. La opción más elegante y duradera — puede refinarse y durar décadas.",
    bestFor: "Cocinas de lujo, diseños cálidos y naturales.",
    postHref: "/cocinas/madera",
    postLabel: "Ver cocinas en madera",
  },
  {
    name: "MDF lacado",
    desc: "Acabados lisos y precisos, ideal para diseños minimalistas de líneas perfectas.",
    bestFor: "Cocinas modernas minimalistas y proyectos de lujo.",
    postHref: "/cocinas/lujo",
    postLabel: "Ver cocinas de lujo",
  },
];

const comparisonRows = [
  {
    material: "Cuarzo",
    tipo: "Encimera",
    durabilidad: "Muy alta",
    mantenimiento: "Bajo",
    humedad: "Excelente",
    precio: "Medio-alto",
  },
  {
    material: "Mármol",
    tipo: "Encimera",
    durabilidad: "Media",
    mantenimiento: "Alto",
    humedad: "Media",
    precio: "Alto",
  },
  {
    material: "Granito",
    tipo: "Encimera",
    durabilidad: "Alta",
    mantenimiento: "Medio",
    humedad: "Buena",
    precio: "Medio",
  },
  {
    material: "Melamina",
    tipo: "Gabinete",
    durabilidad: "Media-alta",
    mantenimiento: "Bajo",
    humedad: "Media",
    precio: "Bajo-medio",
  },
  {
    material: "PVC",
    tipo: "Gabinete",
    durabilidad: "Alta",
    mantenimiento: "Bajo",
    humedad: "Excelente",
    precio: "Medio",
  },
  {
    material: "Madera maciza",
    tipo: "Gabinete",
    durabilidad: "Muy alta",
    mantenimiento: "Medio",
    humedad: "Buena (tratada)",
    precio: "Alto",
  },
  {
    material: "MDF lacado",
    tipo: "Gabinete",
    durabilidad: "Alta",
    mantenimiento: "Medio",
    humedad: "Buena",
    precio: "Alto",
  },
];

export default function MaterialesPage() {
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
      { "@type": "ListItem", position: 2, name: "Materiales", item: PAGE_URL },
    ],
  };

  return (
    <>
      <Script
        id="breadcrumb-schema-materiales"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <section className="pt-36 pb-20 px-6 bg-obsidian-soft text-center relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
          Guía de materiales
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-cream mb-6">
          Materiales para Cocinas Modernas
        </h1>
        <p className="font-body text-base text-cream/50 max-w-2xl mx-auto">
          Cuarzo, mármol, granito, melamina, PVC, madera y MDF: comparamos
          durabilidad, mantenimiento y precio para que elijas el material
          correcto para tu cocina en República Dominicana.
        </p>
      </section>

      {/* Encimeras */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-light text-cream mb-4">
            Materiales para encimeras
          </h2>
          <p className="font-body text-sm text-cream/50 mb-12 max-w-2xl">
            La encimera define el estilo y el uso diario de tu cocina.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {encimeras.map((m) => (
              <div
                key={m.name}
                className="luxury-card border border-gold/10 bg-obsidian-soft p-8"
              >
                <h3 className="font-display text-2xl text-cream mb-3">
                  {m.name}
                </h3>
                <p className="font-body text-sm text-cream/60 leading-relaxed mb-4">
                  {m.desc}
                </p>
                <p className="font-body text-xs text-gold/70 uppercase tracking-wider mb-6">
                  Ideal para: {m.bestFor}
                </p>
                <Link
                  href={m.postHref}
                  className="font-body text-xs tracking-widest uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
                >
                  {m.postLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gabinetes */}
      <section className="section-pad bg-obsidian-soft">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-light text-cream mb-4">
            Materiales para gabinetes
          </h2>
          <p className="font-body text-sm text-cream/50 mb-12 max-w-2xl">
            El material del gabinete determina precio, durabilidad y resistencia
            a la humedad del clima dominicano.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gabinetes.map((m) => (
              <div
                key={m.name}
                className="luxury-card border border-gold/10 bg-obsidian p-6"
              >
                <h3 className="font-display text-xl text-cream mb-3">
                  {m.name}
                </h3>
                <p className="font-body text-xs text-cream/60 leading-relaxed mb-4">
                  {m.desc}
                </p>
                <p className="font-body text-xs text-gold/70 uppercase tracking-wider mb-6">
                  Ideal para: {m.bestFor}
                </p>
                <Link
                  href={m.postHref}
                  className="font-body text-xs tracking-widest uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
                >
                  {m.postLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-light text-cream mb-10 text-center">
            Comparativa rápida
          </h2>
          <div className="overflow-x-auto border border-gold/10">
            <table className="w-full font-body text-sm text-cream/70">
              <thead>
                <tr className="bg-obsidian-soft text-gold text-xs uppercase tracking-wider">
                  <th className="p-4 text-left">Material</th>
                  <th className="p-4 text-left">Tipo</th>
                  <th className="p-4 text-left">Durabilidad</th>
                  <th className="p-4 text-left">Mantenimiento</th>
                  <th className="p-4 text-left">Resist. Humedad</th>
                  <th className="p-4 text-left">Precio</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r) => (
                  <tr key={r.material} className="border-t border-gold/10">
                    <td className="p-4 text-cream">{r.material}</td>
                    <td className="p-4">{r.tipo}</td>
                    <td className="p-4">{r.durabilidad}</td>
                    <td className="p-4">{r.mantenimiento}</td>
                    <td className="p-4">{r.humedad}</td>
                    <td className="p-4">{r.precio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-body text-xs text-cream/30 mt-6 text-center">
            Valores orientativos según proyectos realizados en República
            Dominicana. Tu presupuesto exacto puede variar según diseño y
            proveedor.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center border-t border-gold/10 pt-16">
          <p className="font-body text-sm text-cream/50 mb-4">
            ¿No sabes qué material te conviene para tu proyecto?
          </p>
          <a
            href="https://wa.me/18493419890?text=Hola,%20quiero%20asesor%C3%ADa%20sobre%20materiales%20para%20mi%20cocina"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block"
          >
            Pide asesoría gratuita por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
