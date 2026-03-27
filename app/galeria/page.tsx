import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Galería de Cocinas Modernas | Proyectos con Isla, Gabinetes y Muebles en RD",
  description:
    "Galería de cocinas modernas diseñadas y fabricadas en República Dominicana. Cocinas blancas, oscuras, con isla central, gabinetes modernos en madera, PVC y melamina. Ver diseños reales.",
  alternates: { canonical: "https://www.cocinasmodernasrd.com/galeria" },
};

const projects = [
  {
    src: "/images/gabineteKitchenSmall.jpeg",
    alt: "Cocina moderna con peninsula en L de blanco en Piantini Santo Domingo",
    title: "Peninsula en L en blanco",
    location: "Piantini, Santo Domingo",
    style: "Cocina moderna con peninsula central",
  },
  {
    src: "/images/marmolKitchenSmall.jpg",
    alt: "Cocina moderna en Marmol Calacatta lineal con gabinetes modernos futurista",
    title: "Cocina Modular en Marmol Calacatta",
    location: "Bella Vista, Santo Domingo",
    style: "Cocinas elegantes y modernas",
  },
  {
    src: "/images/moderKitchen3Small.jpg",
    alt: "Cocina moderna oscura con muebles de cocina en negro mate y granito",
    title: "Black Edition",
    location: "Santiago de los Caballeros",
    style: "Cocina moderna oscura con granito",
  },
  {
    src: "/images/openConcept2.jpg",
    alt: "Cocina moderna abierta con isla y desayunador integrado",
    title: "Open Concept Luxury",
    location: "Naco, Santo Domingo",
    style: "Cocina moderna abierta con barra",
  },
  {
    src: "/images/urbanWood.jpg",
    alt: "Cocina moderna de madera con gabinetes de madera y acero",
    title: "Urban Wood",
    location: "Los Cacicazgos",
    style: "Cocina moderna de madera y metal",
  },
  {
    src: "/images/gabineteOrange.jpeg",
    alt: "Cocina modular con tono orange",
    title: "Gabinete moderno Orange",
    location: "Punta Cana",
    style: "Cocina moderna grande y elegante",
  },
];

export default function GaleriaPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 px-6 bg-obsidian-soft text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
          Ver diseños reales
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-cream mb-6">
          Cocinas modernas: isla, gabinetes y muebles
        </h1>
        <p className="font-body text-base text-cream/50 max-w-2xl mx-auto">
          Cocinas modernas blancas, oscuras, de madera, con isla central, barras
          americanas y gabinetes modernos. Proyectos reales fabricados en
          República Dominicana con materiales de primera.
        </p>
      </section>

      {/* Grid */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="luxury-card group relative overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
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
            </div>
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
