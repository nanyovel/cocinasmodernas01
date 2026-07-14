import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Footer from "@/components/Footer";

const PAGE_TITLE =
  "Preguntas Frecuentes sobre Cocinas Modernas y Remodelación de Cocinas en RD";
const PAGE_DESCRIPTION =
  "Resolvemos las dudas más comunes sobre diseño, instalación, precios, materiales, garantías y remodelación de cocinas modernas en República Dominicana.";
const PAGE_URL = "https://cocinasmodernasrd.com/preguntas-frecuentes";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  keywords: [
    "preguntas frecuentes cocinas",
    "cocinas modernas",
    "cocinas modulares",
    "remodelación de cocinas",
    "precio cocina moderna",
    "cocinas en santo domingo",
    "cocinas en republica dominicana",
    "diseño de cocinas",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};
const categories = [
  {
    title: "Proceso y tiempos",
    faqs: [
      {
        q: "¿Cuánto tiempo toma diseñar e instalar una cocina moderna?",
        a: "Entre 3 y 6 semanas en la mayoría de los proyectos: 1 semana de diseño 3D y aprobación, 1-3 semanas de fabricación en taller, y 1-5 días de instalación, dependiendo del tamaño y complejidad del proyecto.",
      },
      {
        q: "¿Cómo es el proceso de trabajo, paso a paso?",
        a: "Consulta inicial (presencial o virtual), diseño 3D de tu cocina, ajustes y aprobación final, fabricación en taller con control de calidad, e instalación en tu hogar. Todo el proceso lo acompañamos de principio a fin.",
      },
      {
        q: "¿Necesito hacer obra o permisos para remodelar mi cocina?",
        a: "Si solo cambias gabinetes, encimera y electrodomésticos, generalmente no se requiere permiso. Si vas a mover paredes, tuberías o instalaciones eléctricas, coordinamos con ingenieros para evaluar si es necesario un permiso según tu condominio o municipio.",
      },
      {
        q: "¿Trabajan en toda la República Dominicana o solo en Santo Domingo?",
        a: "Nuestra base de operaciones está en Santo Domingo, pero realizamos proyectos en toda la República Dominicana. Coordina con nosotros tu ubicación para confirmar tiempos de instalación.",
      },
    ],
  },

  {
    title: "Precios y presupuesto",
    faqs: [
      {
        q: "¿Cuánto cuesta una cocina moderna en RD?",
        a: "Desde RD$80,000 para cocinas económicas en melamina básica, hasta más de RD$1,000,000 para proyectos de lujo con mármol, MDF lacado y electrodomésticos integrados. El precio depende del tamaño, materiales y nivel de personalización.",
      },
      {
        q: "¿Qué incluye la cotización inicial?",
        a: "La cotización incluye una propuesta de diseño, los materiales recomendados, el estimado de costos y el tiempo aproximado de entrega. No tiene costo y no genera ningún compromiso de contratación.",
      },
      {
        q: "¿El diseño 3D tiene costo?",
        a: "No, el diseño 3D inicial y la asesoría son completamente gratuitos y sin compromiso.",
      },
      {
        q: "¿Ofrecen planes de pago o financiamiento?",
        a: "Sí, trabajamos con planes de pago por etapas del proyecto. Consulta las opciones disponibles según el monto y alcance de tu cocina.",
      },
    ],
  },

  {
    title: "Diseño y personalización",
    faqs: [
      {
        q: "¿Ofrecen diseño personalizado o solo modelos predefinidos?",
        a: "Ofrecemos diseño 100% personalizado según el espacio, la distribución de tu hogar y tus gustos. También puedes tomar como referencia nuestros modelos (modulares, con isla, en L, de lujo) y adaptarlos a tus necesidades.",
      },
      {
        q: "¿Puedo ver ejemplos de proyectos anteriores antes de decidir?",
        a: "Sí, en nuestra galería puedes ver fotos reales de cocinas modulares, con isla, en L y de otros estilos que hemos diseñado e instalado para clientes en el país.",
      },
    ],
  },

  {
    title: "Materiales",
    faqs: [
      {
        q: "¿Qué materiales utilizan para la fabricación de las cocinas?",
        a: "Trabajamos principalmente con melamina de alta densidad, MDF y madera sólida, según el presupuesto y estilo que busques. También ofrecemos opciones en encimeras de cuarzo, granito y superficies sintéticas resistentes al calor y la humedad.",
      },
      {
        q: "¿Qué material de encimera recomiendan para uso diario?",
        a: "El cuarzo es el más práctico: no poroso, resistente a manchas y golpes, sin necesidad de sellado. Para presupuestos más ajustados, el granito es una excelente alternativa.",
      },
      {
        q: "¿Qué material de gabinetes aguanta mejor la humedad?",
        a: "El PVC es la opción más resistente a la humedad del clima tropical dominicano: no se hincha ni se pudre. Es ideal para cocinas cerca del mar o en zonas muy húmedas.",
      },
    ],
  },

  {
    title: "Instalación",
    faqs: [
      {
        q: "¿Es necesario tener el espacio vacío antes de la instalación?",
        a: "No es obligatorio, pero sí recomendable. Nuestro equipo puede coordinar contigo el desmontaje de la cocina anterior (si aplica) como parte del servicio de instalación.",
      },
    ],
  },

  {
    title: "Garantía y mantenimiento",
    faqs: [
      {
        q: "¿Qué garantía tienen los proyectos?",
        a: "Todos nuestros proyectos incluyen garantía sobre materiales y mano de obra. El período específico de cobertura se detalla en el contrato según los materiales utilizados.",
      },
      {
        q: "¿Qué pasa si necesito un ajuste después de la instalación?",
        a: "Lo atendemos dentro del período de garantía sin costo. Fuera de garantía, coordinamos una visita técnica con un presupuesto claro antes de cualquier trabajo.",
      },
    ],
  },

  {
    title: "Contacto y cotización",
    faqs: [
      {
        q: "¿Cómo inicio el proceso de cotización?",
        a: "Puedes escribirnos a través del formulario de contacto o por WhatsApp. Te pediremos algunos datos básicos del espacio (medidas aproximadas, fotos si las tienes y el estilo que te interesa) para preparar una propuesta inicial.",
      },
    ],
  },
];
export default function PreguntasFrecuentesPage() {
  const allFaqs = categories.flatMap((c) => c.faqs);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },

      url: "https://cocinasmodernasrd.com/preguntas-frecuentes",
      description: PAGE_DESCRIPTION,
    })),
  };

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
      {
        "@type": "ListItem",
        position: 2,
        name: "Preguntas Frecuentes",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <>
      <Script
        id="faq-schema-general"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="breadcrumb-schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <section className="pt-36 pb-20 px-6 bg-obsidian-soft text-center relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
          Resolvemos tus dudas
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-cream mb-6">
          Preguntas Frecuentes
        </h1>
        <p className="font-body text-base text-cream/50 max-w-2xl mx-auto">
          Todo lo que necesitas saber sobre proceso, precios, materiales y
          garantía antes de remodelar tu cocina en República Dominicana.
        </p>
      </section>

      {/* Categories */}
      <section className="section-pad">
        <div className="max-w-4xl mx-auto space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="font-display text-2xl md:text-3xl font-light text-cream mb-8 border-l-2 border-gold pl-6">
                {cat.title}
              </h2>
              <div className="space-y-6">
                {cat.faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="luxury-card border border-gold/10 bg-obsidian-soft p-6"
                  >
                    <h3 className="font-display text-lg text-cream mb-3">
                      {faq.q}
                    </h3>
                    <p className="font-body text-sm text-cream/60 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center border-t border-gold/10 pt-16">
          <p className="font-body text-sm text-cream/50 mb-4">
            ¿Tu pregunta no está aquí?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/18493419890?text=Hola,%20tengo%20una%20pregunta%20sobre%20mi%20proyecto%20de%20cocina"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Pregúntanos por WhatsApp
            </a>
            <Link href="/materiales" className="btn-outline-gold">
              Ver guía de materiales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
