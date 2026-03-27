import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const galleryImages = [
  {
    src: "/images/islandKitchen.jpeg",
    alt: "Cocina moderna con isla central de mármol en Santo Domingo",
    label: "Isla Central con Mármol",
  },
  {
    src: "/images/conGabinete.jpg",
    alt: "Cocina moderna blanca con gabinetes modernos en línea",
    label: "Cocina Blanca Lineal",
  },
  {
    src: "/images/woodKitchen2.jpg",
    alt: "Cocina moderna en madera con isla",
    label: "Cocina Moderna en madera",
  },
  {
    src: "/images/openConcept.jpg",
    alt: "Cocina moderna abierta con desayunador en RD",
    label: "Cocina moderna abierta",
  },
];

const features = [
  {
    icon: "◈",
    title: "Cocinas Modernas a Medida",
    desc: "Cada cocina moderna es diseñada específicamente para tu espacio. Cocinas en L, lineales, con isla central o americanas — todas únicas.",
  },
  {
    icon: "◉",
    title: "Gabinetes y Muebles Premium",
    desc: "Gabinetes de cocina modernos melamina o madera. Muebles de cocina modernos con materiales de primera importación.",
  },
  {
    icon: "◎",
    title: "Islas y Barras de Cocina",
    desc: "Islas de cocina modernas con desayunador, barras americanas y peninsulas. Diseños funcionales con granito, cuarzo o mármol.",
  },
  {
    icon: "◈",
    title: "Garantía y Servicio Local",
    desc: "Fabricación 100% dominicana con estándares internacionales. Todos nuestros proyectos incluyen 2 años de garantía completa.",
  },
];

const testimonials = [
  {
    name: "María Rodríguez",
    location: "Piantini, Santo Domingo",
    text: "La cocina superó todas mis expectativas. El equipo es sumamente profesional y el resultado es de revista.",
  },
  {
    name: "Carlos Méndez",
    location: "Santiago de los Caballeros",
    text: "Proceso impecable desde el diseño hasta la instalación. Mi esposa quedó enamorada del resultado.",
  },
  {
    name: "Ana Familia",
    location: "Bella Vista, Santo Domingo",
    text: "Calidad comparable a cocinas europeas pero con el servicio y precio adaptado a República Dominicana.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            // src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=85"
            src="/images/modernKitchen.jpeg"
            alt="Cocina moderna de lujo en República Dominicana"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-6 animate-fade-in">
              Cocinas Modernas · Santo Domingo · República Dominicana
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] text-cream mb-6">
              Tu cocina moderna,{" "}
              <span className="text-shimmer italic">obra maestra</span> de
              diseño
            </h1>
            <p className="font-body text-base text-cream/60 leading-relaxed max-w-lg mb-10">
              Diseñamos y fabricamos{" "}
              <strong className="text-cream/80"> cocinas modulares </strong>y
              variaciones de{" "}
              <strong className="text-cream/80">cocinas modernas</strong> a
              medida en Santo Domingo y todo el país. Cabinetes de cocina
              modernos, muebles modulares, cocinas modulares economicas, islas
              de cocina, cocinas modernas pequeñas, muebles de cocina, cocinas
              rusticas modernas y acabados de lujo. Cocinas modernas con isla,
              en L, lineales o americanas — todas a tu medida.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="btn-gold">
                Cotización Gratuita
              </Link>
              <Link href="/galeria" className="btn-outline-gold">
                Ver Galería
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 pt-10 border-t border-gold/15">
              {[
                { n: "+200", label: "Proyectos" },
                { n: "5+", label: "Años de experiencia" },
                { n: "100%", label: "Satisfacción" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl text-gold">{s.n}</div>
                  <div className="font-body text-xs text-cream/40 uppercase tracking-widest mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Lead form */}
          <div className="lg:ml-auto w-full max-w-md">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section-pad bg-obsidian-soft relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Por qué elegirnos
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream">
              Gabinetes, islas y muebles de cocina modernos
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="luxury-card border border-gold/10 p-8 bg-obsidian hover:border-gold/30"
              >
                <div className="text-gold text-3xl mb-6">{f.icon}</div>
                <h3 className="font-display text-xl text-cream mb-3">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-cream/50 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
                Diseños de cocinas modernas
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-cream">
                Inspiración para tu cocina ideal
              </h2>
            </div>
            <Link href="/galeria" className="btn-outline-gold hidden md:block">
              Ver Todo
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="luxury-card relative overflow-hidden aspect-[3/4] group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-body text-xs tracking-widest uppercase text-gold">
                    {img.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-pad bg-obsidian-soft">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Testimonios
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="luxury-card border border-gold/10 bg-obsidian p-8"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-gold text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="font-body text-sm text-cream/70 leading-relaxed italic mb-6">
                  &quot;{t.text}&quot;
                </p>
                <div className="gold-line mb-4" />
                <p className="font-display text-lg text-cream">{t.name}</p>
                <p className="font-body text-xs text-gold/60 tracking-wider">
                  {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1800&q=85"
            alt="Cocinas modernas República Dominicana"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-obsidian/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-6">
            Empieza hoy
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream mb-6">
            ¿Listo para tu cocina moderna ideal?
          </h2>
          <p className="font-body text-base text-cream/60 mb-4">
            Agenda una consulta gratuita y recibe el diseño preliminar de tu
            cocina moderna sin costo ni compromiso.
          </p>
          <p className="font-body text-sm text-cream/40 mb-10">
            Cocinas modernas con isla · Gabinetes modernos · Cocinas modernas
            pequeñas · Cocinas de madera modernas · Cocinas modernas blancas ·
            Cocinas modernas con barra
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto" className="btn-gold">
              Agendar Consulta Gratuita
            </Link>
            <a
              href="https://wa.me/18493419890?text=Hola,%20quiero%20información%20sobre%20cocinas%20modernas"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.112 1.532 5.836L.057 23.882a.5.5 0 00.611.611l6.046-1.475A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.373l-.36-.213-3.727.909.927-3.619-.234-.372A9.818 9.818 0 1112 21.818z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── SEO TEXT SECTION ── */}
      <section className="py-16 px-6 bg-obsidian-soft border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-display text-xl text-gold mb-4">
                Cocinas Modernas con Isla
              </h3>
              <p className="font-body text-xs text-cream/40 leading-relaxed">
                Diseñamos cocinas modernas con isla central, cocinas modernas
                con isla y desayunador, cocinas con isla pequeña, cocinas
                modernas con barra americana y cocinas modernas con península.
                Islas de cocina en granito, cuarzo o mármol a medida en Santo
                Domingo.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-gold mb-4">
                Gabinetes y Muebles de Cocina
              </h3>
              <p className="font-body text-xs text-cream/40 leading-relaxed">
                Fabricamos gabinetes de cocina modernos en madera, PVC, melamina
                y MDF. Muebles de cocina modernos blancos, grises, oscuros o de
                madera. Gabinetes modernos para cocinas pequeñas, medianas y
                grandes en toda la República Dominicana.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-gold mb-4">
                Diseños y Modelos de Cocinas
              </h3>
              <p className="font-body text-xs text-cream/40 leading-relaxed">
                Modelos de cocinas modernas en L, cocinas lineales, cocinas en
                U, cocinas americanas modernas y cocinas abiertas. Cocinas
                modernas blancas, cocinas negras modernas, cocinas de madera
                modernas y cocinas modernas de lujo en República Dominicana.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ── COCINAS MODULARES SEO ── */}
      <section className="py-20 px-6 bg-obsidian border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-cream mb-4">
              Cocinas Modulares en Santo Domingo
            </h2>
            <p className="text-cream/60 max-w-3xl mx-auto">
              Diseñamos e instalamos{" "}
              <strong>cocinas modulares en República Dominicana</strong>{" "}
              adaptadas a todos los espacios y presupuestos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-gold mb-3">Cocinas Modulares Modernas</h3>
              <p className="text-cream/50 text-sm">
                Fabricamos <strong>cocina modular moderna</strong>, cocinas
                modulares completas y cocinas en módulos ideales para
                apartamentos y casas. Diseños funcionales, elegantes y
                optimizados para el día a día.
              </p>
            </div>

            <div>
              <h3 className="text-gold mb-3">Opciones Económicas</h3>
              <p className="text-cream/50 text-sm">
                Contamos con <strong>cocinas modulares económicas</strong>,
                cocinas modulares a buen precio y muebles cocina modulares
                baratos sin sacrificar calidad. También ofrecemos cocinas
                armables y cocinas modulares en kit.
              </p>
            </div>

            <div>
              <h3 className="text-gold mb-3">Soluciones a Medida</h3>
              <p className="text-cream/50 text-sm">
                Diseños de <strong>cocina modular pequeña</strong>, cocina
                modular blanca, cocina modular en L y muebles modulares para
                cocinas pequeñas. Creamos soluciones personalizadas según tu
                espacio.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center max-w-4xl mx-auto">
            <p className="text-cream/40 text-sm leading-relaxed">
              Ofrecemos <strong>cocinas modulares en Santo Domingo</strong> con
              instalación profesional, asesoría personalizada y materiales de
              alta calidad. Si buscas comprar cocinas modulares en República
              Dominicana, te ayudamos a encontrar la mejor opción para tu hogar.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
