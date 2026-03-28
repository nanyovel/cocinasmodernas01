import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import { posts } from "@/app/blog/page";

export interface CocinaPageData {
  // SEO
  slug: string;
  title: string;
  metaDescription: string;

  // Hero
  heroImage: string;
  heroImageAlt: string;
  badge: string;
  h1: string;
  heroDesc: string;

  // Intro section
  introTitle: string;
  introBody: string[]; // paragraphs

  // Features (why choose this type)
  features: { icon: string; title: string; desc: string }[];

  // Gallery
  gallery: { src: string; alt: string; label: string }[];

  // FAQ
  faqs: { q: string; a: string }[];

  // Related blog slugs
  relatedSlugs: string[];

  // WhatsApp message
  waMessage: string;
}

const WHATSAPP = "18493419890";

export default function CocinaPage({ data }: { data: CocinaPageData }) {
  const relatedPosts = posts.filter((p) => data.relatedSlugs.includes(p.slug));

  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    data.waMessage
  )}`;

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={data.heroImage}
            alt={data.heroImageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/75 to-obsidian/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-36">
          <span className="inline-block font-body text-[10px] tracking-[0.4em] uppercase text-gold border border-gold/30 px-3 py-1.5 mb-6">
            {data.badge}
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] text-cream max-w-3xl mb-6">
            {data.h1}
          </h1>
          <p className="font-body text-base text-cream/60 leading-relaxed max-w-xl mb-10">
            {data.heroDesc}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contacto" className="btn-gold">
              Cotización Gratuita
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.112 1.532 5.836L.057 23.882a.5.5 0 00.611.611l6.046-1.475A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.373l-.36-.213-3.727.909.927-3.619-.234-.372A9.818 9.818 0 1112 21.818z" />
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── INTRO + FORM ── */}
      <section className="section-pad bg-obsidian-soft">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Sobre este estilo
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-8 leading-tight">
              {data.introTitle}
            </h2>
            <div className="space-y-4">
              {data.introBody.map((para, i) => (
                <p
                  key={i}
                  className="font-body text-sm text-cream/60 leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gold/10">
              {[
                { n: "+200", label: "Cocinas entregadas" },
                { n: "5+", label: "Años de experiencia" },
                { n: "2", label: "Años de garantía" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-3xl text-gold">{s.n}</div>
                  <div className="font-body text-[10px] text-cream/40 uppercase tracking-widest mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead form */}
          <div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Ventajas
            </p>
            <h2 className="font-display text-4xl font-light text-cream">
              ¿Por qué elegir este estilo?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.features.map((f, i) => (
              <div
                key={i}
                className="luxury-card border border-gold/10 bg-obsidian-soft p-7 hover:border-gold/30"
              >
                <div className="text-3xl mb-5">{f.icon}</div>
                <h3 className="font-display text-xl text-cream mb-3">
                  {f.title}
                </h3>
                <p className="font-body text-xs text-cream/50 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="section-pad bg-obsidian-soft">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
                Proyectos realizados
              </p>
              <h2 className="font-display text-4xl font-light text-cream">
                Galería de {data.badge.toLowerCase()}
              </h2>
            </div>
            <Link
              href="/galeria"
              className="btn-outline-gold hidden md:block text-[10px] px-5 py-3"
            >
              Ver galería completa
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {data.gallery.map((img, i) => (
              <div
                key={i}
                className={`luxury-card relative overflow-hidden group ${
                  i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-body text-xs tracking-widest uppercase text-gold">
                    {img.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-pad">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Preguntas frecuentes
            </p>
            <h2 className="font-display text-4xl font-light text-cream">
              Lo que nos preguntan
            </h2>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gold/10 bg-obsidian-soft p-7"
              >
                <h3 className="font-display text-xl text-gold mb-3">{faq.q}</h3>
                <p className="font-body text-sm text-cream/55 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Schema JSON-LD FAQ */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: data.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: { "@type": "Answer", text: faq.a },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* ── WHATSAPP CTA BAND ── */}
      <section className="py-14 px-6 bg-obsidian-soft border-y border-gold/10">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-2">
              Respuesta inmediata
            </p>
            <h3 className="font-display text-2xl text-cream">
              ¿Tienes dudas? Escríbenos ahora
            </h3>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center gap-3 whitespace-nowrap"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.112 1.532 5.836L.057 23.882a.5.5 0 00.611.611l6.046-1.475A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.373l-.36-.213-3.727.909.927-3.619-.234-.372A9.818 9.818 0 1112 21.818z" />
            </svg>
            Chatear en WhatsApp
          </a>
        </div>
      </section>

      {/* ── RELATED BLOG ── */}
      {relatedPosts.length > 0 && (
        <section className="section-pad bg-obsidian-soft">
          <div className="max-w-7xl mx-auto">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Aprende más
            </p>
            <h2 className="font-display text-3xl font-light text-cream mb-10">
              Artículos relacionados
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="luxury-card group border border-gold/10 bg-obsidian overflow-hidden"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="font-body text-[10px] tracking-widest uppercase text-gold border border-gold/30 px-2 py-0.5">
                      {p.category}
                    </span>
                    <h3 className="font-display text-xl text-cream mt-3 group-hover:text-gold transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-body text-xs text-cream/40 mt-2">
                      {p.readTime} lectura
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-obsidian" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="gold-line w-24 mx-auto mb-10" />
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-5">
            ¿Listo para empezar?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-6">
            Recibe tu diseño 3D gratis
          </h2>
          <p className="font-body text-sm text-cream/50 mb-10">
            Agenda una consulta sin compromiso. Diseñamos tu cocina en 3D y te
            entregamos un presupuesto detallado. Sin costo, sin presión.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto" className="btn-gold">
              Agendar Consulta Gratuita
            </Link>
            <a
              href={waLink}
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
          <div className="gold-line w-24 mx-auto mt-10" />
        </div>
      </section>

      <Footer />
    </>
  );
}
