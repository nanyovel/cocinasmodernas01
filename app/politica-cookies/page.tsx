import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Cookies | Cocinas Modernas RD",
  description:
    "Política de cookies de Cocinas Modernas RD. Qué cookies usamos, para qué sirven y cómo gestionarlas o desactivarlas.",
  alternates: {
    canonical: "https://cocinasmodernasrd.com/politica-cookies",
  },
  robots: { index: true, follow: true },
};

const cookieTable = [
  {
    nombre: "_ga, _gid, _gat",
    tipo: "Analítica (tercero)",
    proveedor: "Google Analytics",
    finalidad:
      "Medir y analizar el tráfico del sitio: páginas vistas, tiempo de sesión, fuente de tráfico.",
    duracion: "2 años / 24 horas / 1 minuto",
  },
  {
    nombre: "__gads, __gpi",
    tipo: "Publicitaria (tercero)",
    proveedor: "Google AdSense",
    finalidad:
      "Mostrar anuncios personalizados según los intereses del usuario y medir su eficacia.",
    duracion: "1 año",
  },
  {
    nombre: "cookie_consent",
    tipo: "Técnica (propia)",
    proveedor: "Cocinas Modernas RD",
    finalidad:
      "Recordar la preferencia del usuario sobre el consentimiento de cookies.",
    duracion: "12 meses",
  },
  {
    nombre: "NID, CONSENT",
    tipo: "Publicitaria (tercero)",
    proveedor: "Google LLC",
    finalidad:
      "Personalización de anuncios y recordar preferencias del usuario en servicios de Google.",
    duracion: "6 meses / 2 años",
  },
];

export default function PoliticaCookiesPage() {
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
          Política de Cookies
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
              Este sitio web,{" "}
              <strong className="text-cream">www.cocinasmodernasrd.com</strong>,
              utiliza cookies y tecnologías similares para mejorar tu
              experiencia de navegación, analizar el tráfico y mostrar
              publicidad relevante. Esta Política de Cookies explica qué son las
              cookies, cuáles utilizamos y cómo puedes gestionarlas.
            </p>
          </div>

          <hr className="border-gold/10" />

          {/* ¿Qué son? */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              1. ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que un sitio web
              almacena en tu dispositivo (ordenador, teléfono o tablet) cuando
              lo visitas. Sirven para que el sitio recuerde tu visita, tus
              preferencias y tu comportamiento de navegación. Las cookies no
              contienen virus ni pueden acceder a otros archivos de tu
              dispositivo.
            </p>
          </div>

          <hr className="border-gold/10" />

          {/* Tipos */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              2. Tipos de cookies que usamos
            </h2>

            <div className="space-y-6">
              <div className="border border-gold/10 bg-obsidian-soft p-6">
                <h3 className="text-cream font-semibold mb-2">
                  🔧 Cookies técnicas (necesarias)
                </h3>
                <p className="text-cream/60 text-xs leading-relaxed">
                  Son imprescindibles para el funcionamiento básico del sitio.
                  Permiten la navegación y el uso de funciones esenciales como
                  el formulario de contacto. No requieren tu consentimiento,
                  pero te informamos sobre su existencia.
                </p>
              </div>

              <div className="border border-gold/10 bg-obsidian-soft p-6">
                <h3 className="text-cream font-semibold mb-2">
                  📊 Cookies analíticas (Google Analytics)
                </h3>
                <p className="text-cream/60 text-xs leading-relaxed">
                  Nos permiten conocer cómo los usuarios interactúan con el
                  sitio: qué páginas visitan más, desde dónde llegan y cuánto
                  tiempo permanecen. Esta información nos ayuda a mejorar el
                  contenido y la usabilidad. Los datos son anónimos y agregados.
                </p>
              </div>

              <div className="border border-gold/10 bg-obsidian-soft p-6">
                <h3 className="text-cream font-semibold mb-2">
                  📢 Cookies publicitarias (Google AdSense)
                </h3>
                <p className="text-cream/60 text-xs leading-relaxed">
                  Google AdSense utiliza cookies para mostrar anuncios
                  relevantes basados en tus visitas anteriores a este u otros
                  sitios web. Estas cookies son gestionadas por Google LLC y su
                  uso está sujeto a la{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light underline"
                  >
                    Política de Privacidad de Google
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <hr className="border-gold/10" />

          {/* Tabla */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-6">
              3. Detalle de las cookies utilizadas
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-gold/20">
                    <th className="text-left text-gold font-body tracking-wider py-3 pr-4">
                      Cookie
                    </th>
                    <th className="text-left text-gold font-body tracking-wider py-3 pr-4">
                      Tipo
                    </th>
                    <th className="text-left text-gold font-body tracking-wider py-3 pr-4">
                      Proveedor
                    </th>
                    <th className="text-left text-gold font-body tracking-wider py-3 pr-4">
                      Finalidad
                    </th>
                    <th className="text-left text-gold font-body tracking-wider py-3">
                      Duración
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((c, i) => (
                    <tr
                      key={i}
                      className="border-b border-gold/5 hover:bg-obsidian-soft transition-colors"
                    >
                      <td className="py-3 pr-4 text-cream/70 font-mono">
                        {c.nombre}
                      </td>
                      <td className="py-3 pr-4 text-cream/60">{c.tipo}</td>
                      <td className="py-3 pr-4 text-cream/60">{c.proveedor}</td>
                      <td className="py-3 pr-4 text-cream/50">{c.finalidad}</td>
                      <td className="py-3 text-cream/50 whitespace-nowrap">
                        {c.duracion}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <hr className="border-gold/10" />

          {/* Gestión */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              4. Cómo gestionar y desactivar las cookies
            </h2>
            <p className="mb-6">
              Puedes aceptar, rechazar o gestionar las cookies en cualquier
              momento. A continuación te indicamos cómo hacerlo en los
              navegadores más comunes:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  nav: "Google Chrome",
                  url: "https://support.google.com/chrome/answer/95647",
                },
                {
                  nav: "Mozilla Firefox",
                  url: "https://www.firefox.com/es-ES/privacy/websites/cookie-settings/",
                },
                {
                  nav: "Safari (Mac/iOS)",
                  url: "https://support.apple.com/es-es/guide/safari/sfri11471/mac",
                },
                {
                  nav: "Microsoft Edge",
                  url: "https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
                },
              ].map((b) => (
                <a
                  key={b.nav}
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-gold/10 bg-obsidian-soft p-4 hover:border-gold/30 transition-colors group"
                >
                  <span className="text-gold">→</span>
                  <span className="font-body text-xs text-cream/60 group-hover:text-gold transition-colors">
                    Gestionar cookies en {b.nav}
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-6 text-cream/50 text-xs">
              También puedes desactivar las cookies publicitarias personalizadas
              de Google en:{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light underline"
              >
                www.google.com/settings/ads
              </a>
            </p>

            <div className="mt-6 p-4 border border-gold/20 bg-obsidian-soft text-cream/60 text-xs">
              <strong className="text-gold">Nota:</strong> Desactivar las
              cookies puede afectar el funcionamiento de algunas partes del
              sitio. Las cookies técnicas necesarias no pueden desactivarse sin
              afectar la funcionalidad básica.
            </div>
          </div>

          <hr className="border-gold/10" />

          {/* Consentimiento */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              5. Tu consentimiento
            </h2>
            <p>
              Al continuar navegando por este sitio sin modificar la
              configuración de cookies, entendemos que consientes su uso
              conforme a esta Política. Puedes retirar tu consentimiento en
              cualquier momento siguiendo las instrucciones de gestión de
              cookies indicadas en la sección anterior.
            </p>
          </div>

          <hr className="border-gold/10" />

          {/* Actualizaciones */}
          <div>
            <h2 className="font-display text-2xl text-cream mb-4">
              6. Actualizaciones de esta Política
            </h2>
            <p>
              Podemos actualizar esta Política de Cookies cuando sea necesario,
              por ejemplo al incorporar nuevas herramientas o servicios. La
              fecha de última actualización aparece al inicio de este documento.
            </p>
          </div>

          <hr className="border-gold/10" />

          <div className="p-6 border border-gold/20 bg-obsidian-soft">
            <h2 className="font-display text-xl text-cream mb-3">
              ¿Preguntas sobre cookies?
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
