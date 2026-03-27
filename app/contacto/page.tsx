import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Contacto | Cotización Gratis de Cocinas Modernas con Isla, Gabinetes y Muebles en RD",
  description:
    "Solicita cotización gratuita de cocinas modernas en República Dominicana. Cocinas modernas con isla, gabinetes modernos, muebles de cocina. Respondemos en menos de 24 horas en Santo Domingo.",
  alternates: { canonical: "https://www.cocinasmodernasrd.com/contacto" },
};

const contactInfo = [
  {
    icon: "📍",
    label: "Ubicación",
    value:
      "Av. Sarasota esquina Av. Enrique Jimenez Moya, Plaza Universitaria, ala Oeste, Segundo Nivel, Santo Domingo, RD",
    sub: "Atendemos en todo el país",
  },
  {
    icon: "📞",
    label: "Teléfono",
    value: "(849)-341-9890",
    sub: "Lun – Sáb, 8am – 6pm",
    href: "tel:+18493419890",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "(849) 341-9890",
    sub: "Respuesta rápida garantizada",
    href: "https://wa.me/18493419890",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "info@cocinasmodernasrd.com",
    sub: "Respondemos en 24 horas",
    href: "mailto:info@cocinasmodernasrd.com",
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 px-6 bg-obsidian-soft text-center relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
          Hablemos
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-cream mb-6">
          Cotiza tu cocina moderna
        </h1>
        <p className="font-body text-base text-cream/50 max-w-2xl mx-auto">
          Cocinas modular con isla, gabinetes de cocina modernos, muebles de
          cocina y más. Sin compromiso, sin costo. Cuéntanos tu proyecto y te
          respondemos en menos de 24 horas con un presupuesto personalizado.
        </p>
      </section>

      {/* Main section */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <LeadForm />
          </div>

          {/* Contact info */}
          <div className="space-y-8 lg:pt-4">
            <div>
              <h2 className="font-display text-3xl text-cream mb-2">
                Otras formas de contactarnos
              </h2>
              <div className="gold-line w-24 mt-4 mb-8" />
            </div>

            {contactInfo.map((c, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-12 h-12 border border-gold/20 flex items-center justify-center text-xl flex-shrink-0 group-hover:border-gold/60 transition-colors">
                  {c.icon}
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-gold mb-1">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="font-display text-xl text-cream hover:text-gold transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-display text-xl text-cream">{c.value}</p>
                  )}
                  <p className="font-body text-xs text-cream/40 mt-1">
                    {c.sub}
                  </p>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <div className="mt-10 p-8 border border-gold/20 bg-obsidian-soft">
              <p className="font-body text-xs tracking-widest uppercase text-gold mb-3">
                Respuesta Inmediata
              </p>
              <h3 className="font-display text-2xl text-cream mb-4">
                ¿Prefieres hablar ahora?
              </h3>
              <a
                href="https://wa.me/18493419890?text=Hola,%20me%20interesa%20una%20cotización%20de%20cocina%20moderna"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center justify-center gap-3 w-full"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.112 1.532 5.836L.057 23.882a.5.5 0 00.611.611l6.046-1.475A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.373l-.36-.213-3.727.909.927-3.619-.234-.372A9.818 9.818 0 1112 21.818z" />
                </svg>
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
