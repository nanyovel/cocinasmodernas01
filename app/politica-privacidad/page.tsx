import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | Cocinas Modernas RD",
  description:
    "Política de privacidad de Cocinas Modernas RD. Cómo recopilamos, usamos y protegemos tus datos personales conforme a la Ley 172-13 de República Dominicana.",
  alternates: {
    canonical: "https://cocinasmodernasrd.com/politica-privacidad",
  },
  robots: { index: false, follow: true },
};

export default function PoliticaPrivacidadPage() {
  const lastUpdated = "29 de marzo de 2026";

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-6 bg-obsidian-soft text-center relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
          Legal
        </p>
        <h1 className="font-display text-5xl font-light text-cream mb-4">
          Política de Privacidad
        </h1>
        <p className="font-body text-sm text-cream/40">
          Última actualización: {lastUpdated}
        </p>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-10 font-body text-sm text-cream/65 leading-relaxed">
          {/* Intro */}
          <div>
            <p>
              En <strong className="text-cream">Cocinas Modernas RD</strong> (en
              adelante, "nosotros", "el sitio" o "la empresa"), nos
              comprometemos a proteger y respetar tu privacidad conforme a lo
              establecido en la{" "}
              <strong className="text-cream">
                Ley No. 172-13 sobre Protección de Datos de Carácter Personal
              </strong>{" "}
              de la República Dominicana y demás normativas aplicables.
            </p>
            <p className="mt-4">
              Esta Política de Privacidad explica qué datos personales
              recopilamos, cómo los usamos, con quién los compartimos y cuáles
              son tus derechos como titular de esos datos. Al usar este sitio
              web o al completar nuestros formularios, aceptas los términos
              descritos en este documento.
            </p>
          </div>

          <hr className="border-gold/10" />

          {/* 1. Responsable */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              1. Responsable del Tratamiento
            </h2>
            <ul className="space-y-1 text-cream/60">
              <li>
                <strong className="text-cream/80">Nombre:</strong> Cocinas
                Modernas RD
              </li>
              <li>
                <strong className="text-cream/80">Sitio web:</strong>{" "}
                www.cocinasmodernasrd.com
              </li>
              <li>
                <strong className="text-cream/80">Correo:</strong>{" "}
                info@cocinasmodernasrd.com
              </li>
              <li>
                <strong className="text-cream/80">Teléfono / WhatsApp:</strong>{" "}
                (849) 341-9890
              </li>
              <li>
                <strong className="text-cream/80">País:</strong> República
                Dominicana
              </li>
            </ul>
          </div>

          <hr className="border-gold/10" />

          {/* 2. Datos que recopilamos */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              2. Datos Personales que Recopilamos
            </h2>
            <p className="mb-4">
              Recopilamos datos personales en las siguientes situaciones:
            </p>

            <h3 className="text-cream/80 font-semibold mb-2">
              2.1 A través de nuestros formularios de contacto y cotización
            </h3>
            <p className="mb-4">
              Cuando completas un formulario en nuestro sitio, recopilamos:
              nombre completo, número de teléfono o WhatsApp, dirección de
              correo electrónico, rango de presupuesto aproximado y descripción
              de tu proyecto.
            </p>

            <h3 className="text-cream/80 font-semibold mb-2">
              2.2 A través de cookies y tecnologías de seguimiento
            </h3>
            <p className="mb-4">
              Nuestro sitio utiliza cookies propias y de terceros (incluyendo
              Google Analytics y Google AdSense) para analizar el tráfico,
              personalizar contenido y mostrar publicidad relevante. Consulta
              nuestra{" "}
              <a
                href="/politica-cookies"
                className="text-gold hover:text-gold-light underline"
              >
                Política de Cookies
              </a>{" "}
              para más detalles.
            </p>

            <h3 className="text-cream/80 font-semibold mb-2">
              2.3 A través de comunicaciones directas
            </h3>
            <p>
              Si nos contactas por WhatsApp, correo electrónico u otro medio,
              conservamos el contenido de esa comunicación y los datos de
              contacto que nos proporcionas.
            </p>
          </div>

          <hr className="border-gold/10" />

          {/* 3. Finalidad */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              3. Finalidad del Tratamiento de Datos
            </h2>
            <p className="mb-4">
              Utilizamos tus datos personales para los siguientes fines:
            </p>
            <ul className="list-disc list-inside space-y-2 text-cream/60">
              <li>
                Responder a tu solicitud de cotización o consulta sobre nuestros
                servicios.
              </li>
              <li>
                Contactarte para hacer seguimiento a tu proyecto o consulta.
              </li>
              <li>
                Compartir tu información con empresas del sector (fabricantes,
                distribuidores o proveedores de servicios relacionados con
                diseño y fabricación de cocinas) con el propósito de ofrecerte
                una cotización o propuesta comercial, siempre que hayas dado tu
                consentimiento explícito.
              </li>
              <li>
                Enviar comunicaciones comerciales relacionadas con nuestros
                productos y servicios, si has otorgado tu consentimiento.
              </li>
              <li>
                Mejorar nuestro sitio web y analizar el comportamiento de los
                usuarios mediante herramientas de analítica.
              </li>
              <li>Cumplir con obligaciones legales aplicables.</li>
            </ul>
          </div>

          <hr className="border-gold/10" />

          {/* 4. Base legal */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              4. Base Legal del Tratamiento
            </h2>
            <p className="mb-3">El tratamiento de tus datos se basa en:</p>
            <ul className="list-disc list-inside space-y-2 text-cream/60">
              <li>
                <strong className="text-cream/80">
                  Tu consentimiento explícito:
                </strong>{" "}
                marcado en la casilla de aceptación del formulario de contacto.
              </li>
              <li>
                <strong className="text-cream/80">
                  Ejecución de una relación precontractual:
                </strong>{" "}
                para responder a tu solicitud de cotización.
              </li>
              <li>
                <strong className="text-cream/80">Interés legítimo:</strong>{" "}
                para el análisis de tráfico web y mejora del servicio.
              </li>
            </ul>
          </div>

          <hr className="border-gold/10" />

          {/* 5. Compartir datos con terceros */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              5. Compartir Datos con Terceros
            </h2>
            <p className="mb-4">
              Tus datos personales pueden ser compartidos con terceros en los
              siguientes casos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-cream/60">
              <li>
                <strong className="text-cream/80">
                  Empresas del sector de cocinas y diseño de interiores:
                </strong>{" "}
                cuando has autorizado expresamente el uso de tus datos para
                recibir propuestas comerciales de terceros. Esto incluye
                empresas fabricantes de cocinas, distribuidores de materiales o
                proveedores de servicios afines.
              </li>
              <li>
                <strong className="text-cream/80">
                  Proveedores de servicios tecnológicos:
                </strong>{" "}
                como plataformas de formularios, servicios de correo electrónico
                y herramientas de CRM, que tratan los datos en nuestro nombre
                bajo acuerdos de confidencialidad.
              </li>
              <li>
                <strong className="text-cream/80">Google LLC:</strong> a través
                de Google Analytics y Google AdSense, que pueden recopilar datos
                de navegación según sus propias políticas de privacidad.
              </li>
              <li>
                <strong className="text-cream/80">
                  Autoridades competentes:
                </strong>{" "}
                cuando sea requerido por ley o resolución judicial.
              </li>
            </ul>
            <p className="mt-4 p-4 border border-gold/20 bg-obsidian-soft text-cream/70 text-xs">
              <strong className="text-gold">Nota importante:</strong> Nunca
              venderemos tus datos a empresas no relacionadas con el sector de
              cocinas y diseño de interiores, ni los usaremos para fines
              distintos a los descritos en esta política.
            </p>
          </div>

          <hr className="border-gold/10" />

          {/* 6. Conservación */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              6. Conservación de los Datos
            </h2>
            <p>
              Conservamos tus datos personales durante el tiempo necesario para
              cumplir con los fines descritos en esta política o mientras exista
              una relación comercial activa. Si no hemos podido contactarte ni
              hemos iniciado un proyecto, eliminamos tus datos en un plazo
              máximo de <strong className="text-cream">24 meses</strong> desde
              la fecha de recepción de tu solicitud.
            </p>
          </div>

          <hr className="border-gold/10" />

          {/* 7. Derechos */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              7. Tus Derechos como Titular de los Datos
            </h2>
            <p className="mb-4">
              Conforme a la Ley 172-13 y normativas aplicables, tienes derecho
              a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-cream/60">
              <li>
                <strong className="text-cream/80">Acceso:</strong> conocer qué
                datos personales tuyos tenemos.
              </li>
              <li>
                <strong className="text-cream/80">Rectificación:</strong>{" "}
                corregir datos inexactos o incompletos.
              </li>
              <li>
                <strong className="text-cream/80">
                  Cancelación / Eliminación:
                </strong>{" "}
                solicitar la eliminación de tus datos.
              </li>
              <li>
                <strong className="text-cream/80">Oposición:</strong> oponerte
                al tratamiento de tus datos para fines comerciales.
              </li>
              <li>
                <strong className="text-cream/80">
                  Revocación del consentimiento:
                </strong>{" "}
                retirar el consentimiento otorgado en cualquier momento.
              </li>
            </ul>
            <p className="mt-4">
              Para ejercer cualquiera de estos derechos, escríbenos a{" "}
              <a
                href="mailto:info@cocinasmodernasrd.com"
                className="text-gold hover:text-gold-light"
              >
                info@cocinasmodernasrd.com
              </a>{" "}
              o por WhatsApp al (849) 341-9890. Atenderemos tu solicitud en un
              plazo máximo de 10 días hábiles.
            </p>
          </div>

          <hr className="border-gold/10" />

          {/* 8. Seguridad */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              8. Seguridad de los Datos
            </h2>
            <p>
              Implementamos medidas técnicas y organizativas razonables para
              proteger tus datos personales contra acceso no autorizado,
              pérdida, alteración o divulgación. Sin embargo, ningún sistema de
              transmisión de datos por internet es completamente seguro, por lo
              que no podemos garantizar seguridad absoluta.
            </p>
          </div>

          <hr className="border-gold/10" />

          {/* 9. Cookies */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              9. Cookies
            </h2>
            <p>
              Este sitio usa cookies propias y de terceros. Para información
              detallada sobre qué cookies usamos y cómo gestionarlas, consulta
              nuestra{" "}
              <a
                href="/politica-cookies"
                className="text-gold hover:text-gold-light underline"
              >
                Política de Cookies
              </a>
              .
            </p>
          </div>

          <hr className="border-gold/10" />

          {/* 10. Cambios */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              10. Cambios en esta Política
            </h2>
            <p>
              Podemos actualizar esta Política de Privacidad en cualquier
              momento. La fecha de última actualización aparece al inicio de
              este documento. Si los cambios son significativos, te lo
              notificaremos a través del sitio web o por correo electrónico si
              tenemos tus datos.
            </p>
          </div>

          <hr className="border-gold/10" />

          {/* Contact */}
          <div className="p-6 border border-gold/20 bg-obsidian-soft">
            <h2 className="font-display text-xl text-cream mb-3">
              ¿Preguntas sobre esta política?
            </h2>
            <p className="text-cream/60 text-xs">
              Contáctanos en{" "}
              <a
                href="mailto:info@cocinasmodernasrd.com"
                className="text-gold hover:text-gold-light"
              >
                info@cocinasmodernasrd.com
              </a>{" "}
              o por WhatsApp al{" "}
              <a
                href="https://wa.me/18493419890"
                className="text-gold hover:text-gold-light"
              >
                (849) 341-9890
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
