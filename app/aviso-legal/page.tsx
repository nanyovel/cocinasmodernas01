import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aviso Legal | Cocinas Modernas RD",
  description:
    "Aviso legal y términos de uso de Cocinas Modernas RD. Condiciones de uso del sitio web, propiedad intelectual y responsabilidades.",
  alternates: { canonical: "https://www.cocinasmodernasrd.com/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  const lastUpdated = "29 de marzo 2026";

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-6 bg-obsidian-soft text-center relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
          Legal
        </p>
        <h1 className="font-display text-5xl font-light text-cream mb-4">
          Aviso Legal
        </h1>
        <p className="font-body text-sm text-cream/40">
          Última actualización: {lastUpdated}
        </p>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-10 font-body text-sm text-cream/65 leading-relaxed">
          {/* 1. Titular */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              1. Identificación del Titular del Sitio
            </h2>
            <p className="mb-4">
              En cumplimiento de las normativas vigentes en la República
              Dominicana, se pone a disposición del usuario la siguiente
              información sobre el titular de este sitio web:
            </p>
            <ul className="space-y-1 text-cream/60">
              <li>
                <strong className="text-cream/80">Nombre comercial:</strong>{" "}
                Cocinas Modernas RD
              </li>
              <li>
                <strong className="text-cream/80">Actividad:</strong> Diseño,
                fabricación e instalación de cocinas modernas y mobiliario a
                medida
              </li>
              <li>
                <strong className="text-cream/80">País:</strong> República
                Dominicana
              </li>
              <li>
                <strong className="text-cream/80">Sitio web:</strong>{" "}
                www.cocinasmodernasrd.com
              </li>
              <li>
                <strong className="text-cream/80">Correo electrónico:</strong>{" "}
                info@cocinasmodernasrd.com
              </li>
              <li>
                <strong className="text-cream/80">Teléfono / WhatsApp:</strong>{" "}
                (849) 341-9890
              </li>
            </ul>
          </div>

          <hr className="border-gold/10" />

          {/* 2. Objeto */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              2. Objeto y Ámbito de Aplicación
            </h2>
            <p>
              El presente Aviso Legal regula el acceso y uso del sitio web{" "}
              <strong className="text-cream">www.cocinasmodernasrd.com</strong>,
              incluyendo todos sus contenidos, páginas, formularios y servicios
              disponibles. El acceso a este sitio implica la aceptación plena y
              sin reservas de las condiciones establecidas en este documento. Si
              no estás de acuerdo con alguna de estas condiciones, te pedimos
              que no utilices el sitio.
            </p>
          </div>

          <hr className="border-gold/10" />

          {/* 3. Propiedad intelectual */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              3. Propiedad Intelectual e Industrial
            </h2>
            <p className="mb-4">
              Todos los contenidos del sitio web —incluyendo, de manera
              enunciativa y no limitativa, textos, fotografías, gráficos,
              imágenes, logotipos, diseño, código fuente, estructura y
              disposición— son propiedad de{" "}
              <strong className="text-cream">Cocinas Modernas RD</strong> o de
              terceros que han autorizado su uso, y están protegidos por las
              leyes de propiedad intelectual e industrial vigentes en República
              Dominicana.
            </p>
            <p>
              Queda expresamente prohibida la reproducción, distribución,
              transformación, comunicación pública o cualquier otra forma de
              explotación de los contenidos de este sitio sin la autorización
              previa y por escrito de Cocinas Modernas RD. El uso no autorizado
              de estos contenidos puede constituir una infracción de las leyes
              de propiedad intelectual.
            </p>
          </div>

          <hr className="border-gold/10" />

          {/* 4. Condiciones de uso */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              4. Condiciones de Uso
            </h2>
            <p className="mb-4">
              El usuario se compromete a utilizar este sitio web de forma lícita
              y a no:
            </p>
            <ul className="list-disc list-inside space-y-2 text-cream/60">
              <li>
                Usar el sitio con fines fraudulentos, ilegales o contrarios a
                las buenas costumbres.
              </li>
              <li>Introducir virus, malware o cualquier software dañino.</li>
              <li>
                Intentar acceder sin autorización a áreas restringidas del
                sitio.
              </li>
              <li>Suplantar la identidad de otras personas o entidades.</li>
              <li>
                Usar el sitio para enviar comunicaciones comerciales no
                solicitadas (spam).
              </li>
              <li>
                Reproducir, copiar o revender contenidos del sitio con fines
                comerciales sin autorización.
              </li>
            </ul>
          </div>

          <hr className="border-gold/10" />

          {/* 5. Formularios y leads */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              5. Formularios de Contacto y Solicitudes de Cotización
            </h2>
            <p className="mb-4">
              Este sitio web contiene formularios para solicitar cotizaciones y
              ponerse en contacto con nosotros. Al completar y enviar un
              formulario, el usuario:
            </p>
            <ul className="list-disc list-inside space-y-2 text-cream/60">
              <li>
                Declara que los datos proporcionados son verídicos, actuales y
                le pertenecen.
              </li>
              <li>
                Acepta que Cocinas Modernas RD o empresas del sector contacten
                al usuario con fines comerciales relacionados con el proyecto
                indicado.
              </li>
              <li>
                Autoriza, cuando así lo indica expresamente, que sus datos
                puedan ser compartidos con empresas del sector de cocinas y
                diseño de interiores para recibir propuestas comerciales
                adicionales.
              </li>
              <li>
                Declara ser mayor de 18 años y tener capacidad legal para
                contratar.
              </li>
            </ul>
            <p className="mt-4">
              El envío de un formulario no implica ningún compromiso contractual
              ni obligación de compra por parte del usuario ni de Cocinas
              Modernas RD. Las cotizaciones son informativas y no constituyen
              oferta vinculante hasta ser confirmadas por escrito.
            </p>
          </div>

          <hr className="border-gold/10" />

          {/* 6. Responsabilidad */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              6. Limitación de Responsabilidad
            </h2>
            <p className="mb-4">Cocinas Modernas RD no se responsabiliza de:</p>
            <ul className="list-disc list-inside space-y-2 text-cream/60">
              <li>
                Errores u omisiones en los contenidos del sitio, aunque nos
                esforzamos por mantenerlos actualizados y precisos.
              </li>
              <li>
                Daños derivados del uso o imposibilidad de uso del sitio web.
              </li>
              <li>
                Interrupciones del servicio por causas técnicas, mantenimiento o
                fuerza mayor.
              </li>
              <li>
                El contenido de sitios web de terceros enlazados desde nuestro
                sitio.
              </li>
              <li>
                Variaciones de precio o disponibilidad de productos que puedan
                diferir de la información publicada en el sitio.
              </li>
            </ul>
          </div>

          <hr className="border-gold/10" />

          {/* 7. Publicidad */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              7. Publicidad de Terceros (Google AdSense)
            </h2>
            <p>
              Este sitio puede mostrar anuncios publicitarios gestionados por{" "}
              <strong className="text-cream">Google AdSense</strong>, un
              servicio de publicidad de Google LLC. Google puede usar cookies
              para mostrar anuncios basados en visitas anteriores del usuario a
              este u otros sitios web. El usuario puede desactivar el uso de
              cookies por parte de Google visitando el{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light underline"
              >
                Administrador de preferencias de anuncios de Google
              </a>
              . Cocinas Modernas RD no controla ni es responsable del contenido
              de los anuncios mostrados.
            </p>
          </div>

          <hr className="border-gold/10" />

          {/* 8. Legislación */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              8. Legislación Aplicable y Jurisdicción
            </h2>
            <p>
              Este Aviso Legal se rige por las leyes de la{" "}
              <strong className="text-cream">República Dominicana</strong>. Para
              cualquier controversia derivada del uso de este sitio web, las
              partes acuerdan someterse a los tribunales competentes de Santo
              Domingo, República Dominicana, salvo que la ley disponga otro
              fuero.
            </p>
          </div>

          <hr className="border-gold/10" />

          {/* 9. Modificaciones */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              9. Modificaciones del Aviso Legal
            </h2>
            <p>
              Cocinas Modernas RD se reserva el derecho de modificar este Aviso
              Legal en cualquier momento. Las modificaciones entrarán en vigor
              desde su publicación en el sitio. Recomendamos revisar
              periódicamente este documento. La fecha de última actualización
              aparece al inicio de esta página.
            </p>
          </div>

          <hr className="border-gold/10" />

          <div className="p-6 border border-gold/20 bg-obsidian-soft">
            <h2 className="font-display text-xl text-cream mb-3">
              ¿Tienes preguntas legales?
            </h2>
            <p className="text-cream/60 text-xs">
              Escríbenos a{" "}
              <a
                href="mailto:info@cocinasmodernasrd.com"
                className="text-gold hover:text-gold-light"
              >
                info@cocinasmodernasrd.com
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
