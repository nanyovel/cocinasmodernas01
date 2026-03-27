import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Servicios | Cocinas Modernas, Gabinetes, Islas y Muebles de Cocina en RD",
  description:
    "Fabricamos cocinas modernas con isla, gabinetes de cocina modernos, muebles de cocina modernos, closets y mobiliario a medida en República Dominicana. Cocinas modernas en madera y melamina.",
  alternates: { canonical: "https://www.cocinasmodernasrd.com/servicios" },
};

const services = [
  {
    icon: "🚪",
    title: "Cocinas modulares",
    desc: "Las cocinas modulares son una solución práctica y moderna para optimizar tu espacio con estilo. Desde una cocina modular completa hasta una cocina modular pequeña o una cocina modular en L, nuestros muebles modulares para cocina se adaptan a cualquier necesidad. Ofrecemos cocinas modulares económicas y funcionales en Santo Domingo y toda República Dominicana, con opciones listas en kit y diseños actuales al mejor precio.",
    img: "/images/moderKitchen3.jpg",
    features: [
      "Gabinetes modulares para cocina",
      "Islas de cocinas",
      "Diseños modernos de cocinas",
      "Diseños 3D",
    ],
  },

  {
    icon: "🍳",
    title: "Cocinas Modernas a Medida",
    desc: "Diseñamos y fabricamos cocinas modernas con isla, cocinas en L, lineales, americanas y más. Gabinetes de cocina modernos en madera, melamina o MDF. Cocinas modernas blancas, grises, oscuras o de madera — todas a tu medida con garantía de lujo.",
    img: "/images/modernKitchen.jpeg",
    features: [
      "Cocinas modernas con isla central y desayunador",
      "Gabinetes modernos melamina o madera",
      "Cocinas en L, lineales, americanas o en U",
      "Cuarzo, granito o mármol incluido",
    ],
  },
  {
    icon: "🪑",
    title: "Gabinetes de cocina modernos",
    desc: "Tenemos gabinetes modernos de cocina y son la clave para transformar cualquier cocina en un espacio elegante y funcional. Con una amplia variedad de modelos de gabinetes de cocina modernos que van desde diseños minimalistas sin manijas hasta gabinetes para cocinas mas pequeñas con soluciones inteligentes de almacenamiento, existe una opción para cada necesidad y presupuesto. ",
    img: "/images/gabineteKitchen.jpeg",
    features: [
      "Islas y barras de cocina modernas",
      "Muebles de cocina en madera o melamina",
      "Repisas flotantes y anaqueles modernos",
      "Entrega e instalación incluida",
    ],
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
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 px-6 bg-obsidian-soft text-center relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
          Lo que fabricamos
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-cream mb-6">
          Cocinas Modulares y Más
        </h1>
        <p className="font-body text-base text-cream/50 max-w-2xl mx-auto">
          Desde cocinas modernas con isla hasta gabinetes de cocina modernos en
          madera o melamina. También fabricamos closets, muebles de cocina
          modernos y mobiliario a medida. Del diseño a la instalación, todo bajo
          un mismo techo en República Dominicana.
        </p>
      </section>

      {/* Services */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((s, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
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
                <ul className="space-y-3 mb-10">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 font-body text-sm text-cream/70"
                    >
                      <span className="w-4 h-px bg-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contacto" className="btn-gold">
                  Solicitar Cotización
                </Link>
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
