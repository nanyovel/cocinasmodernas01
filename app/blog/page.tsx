import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Blog | Cocinas Modernas: Diseños, Precios, Materiales y Tendencias en RD",
  description:
    "Guías sobre cocinas modernas pequeñas, cocinas con isla, gabinetes de cocina modernos, muebles de cocina, colores de moda y precios en República Dominicana.",
  alternates: { canonical: "https://www.cocinasmodernasrd.com/blog" },
};

export const posts = [
  {
    slug: "tendencias-cocinas-modernas-2026",
    title:
      "Tendencias en cocinas modernas para 2026: colores, materiales e islas",
    excerpt:
      "Las cocinas modernas de 2026 combinan materiales naturales, gabinetes de cocina modernos en tonos neutros e islas de cocina modernas con desayunador. Descubre qué está marcando la pauta.",
    img: "/images/gabineteKitchen.jpeg",
    date: "Marzo 2026",
    readTime: "5 min",
    category: "Tendencias",
  },
  {
    slug: "cuarzo-vs-marmol-cual-elegir",
    title: "Cuarzo vs Mármol para cocinas modernas: ¿cuál elegir?",
    excerpt:
      "En cocinas modernas con isla o con barra, la encimera define el estilo. Comparamos cuarzo y mármol en durabilidad, precio y estética para que elijas bien.",
    img: "/images/islandKitchen.jpeg",
    date: "Febrero 2026",
    readTime: "7 min",
    category: "Materiales",
  },
  {
    slug: "cocinas-modernas-pequenas-con-isla",
    title: "Cocinas modernas pequeñas con isla: 10 diseños que funcionan",
    excerpt:
      "Una cocina moderna pequeña también puede tener isla. Te mostramos modelos de cocinas modernas pequeñas con isla central, barra o peninsula que maximizan el espacio.",
    img: "/images/modernKitchen.jpeg",
    date: "Enero 2026",
    readTime: "6 min",
    category: "Diseño",
  },
  {
    slug: "gabinetes-de-cocina-modernos-materiales",
    title: "Gabinetes de cocina modernos: madera, melamina o MDF",
    excerpt:
      "Gabinetes modernos en madera, gabinetes de cocina modernos en melamina o MDF. Comparamos materiales, precios y cuál es mejor para el clima de República Dominicana.",
    img: "/images/gabineteOrange.jpeg",
    date: "Diciembre 2024",
    readTime: "8 min",
    category: "Materiales",
  },
  {
    slug: "cocinas-modernas-blancas-vs-oscuras",
    title: "Cocinas modernas blancas vs cocinas oscuras: ventajas de cada una",
    excerpt:
      "Cocinas modernas blancas y elegantes o cocinas negras modernas con madera: ¿cuál te conviene? Analizamos estética, mantenimiento y cuál se adapta mejor al hogar dominicano.",
    img: "/images/marmolKitchenMedium.jpg",
    date: "Noviembre 2024",
    readTime: "5 min",
    category: "Diseño",
  },
  {
    slug: "cuanto-cuesta-cocina-modular-rd",
    title: "¿Cuánto cuesta una cocina modular en República Dominicana en 2026?",
    excerpt:
      "Precios reales de cocinas modernas en RD: desde muebles de cocina modernos económicos hasta cocinas de lujo con isla y granito. Presupuesto, materiales y factores que influyen.",
    img: "/images/moderKitchen3.jpg",
    date: "Octubre 2024",
    readTime: "8 min",
    category: "Guías",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 px-6 bg-obsidian-soft text-center relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
          Guías y tendencias
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-cream mb-6">
          Blog de Cocinas Modernas
        </h1>
        <p className="font-body text-base text-cream/50 max-w-2xl mx-auto">
          Diseños de cocinas modernas pequeñas, gabinetes modernos, islas de
          cocina, precios, materiales y colores de moda. Todo lo que necesitas
          saber para tu proyecto en RD.
        </p>
      </section>

      {/* Featured post */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-0 luxury-card overflow-hidden border border-gold/10"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={featured.img}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="bg-obsidian-soft p-10 md:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-body text-xs tracking-widest uppercase text-gold border border-gold/30 px-3 py-1">
                  {featured.category}
                </span>
                <span className="font-body text-xs text-cream/30">
                  {featured.date} · {featured.readTime}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-cream mb-4 group-hover:text-gold transition-colors">
                {featured.title}
              </h2>
              <p className="font-body text-sm text-cream/60 leading-relaxed mb-8">
                {featured.excerpt}
              </p>
              <span className="font-body text-xs tracking-widest uppercase text-gold flex items-center gap-2">
                Leer artículo{" "}
                <span className="group-hover:translate-x-2 transition-transform inline-block">
                  →
                </span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="luxury-card group border border-gold/10 bg-obsidian-soft overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-body text-xs tracking-widest uppercase text-gold border border-gold/30 px-2 py-0.5">
                    {post.category}
                  </span>
                  <span className="font-body text-xs text-cream/30">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-cream mb-3 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-cream/50 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="gold-line mt-6 mb-4" />
                <span className="font-body text-xs tracking-widest uppercase text-gold/60">
                  {post.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
