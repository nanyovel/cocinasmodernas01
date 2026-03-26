import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-obsidian-soft border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display text-3xl font-light text-gold tracking-widest mb-1">COCINAS</div>
            <div className="font-body text-xs tracking-[0.5em] text-cream/40 uppercase mb-6">Modernas RD</div>
            <p className="font-body text-sm text-cream/50 leading-relaxed max-w-xs">
              Diseñamos y fabricamos cocinas modernas con isla, gabinetes de cocina modernos y 
              muebles de cocina de lujo en República Dominicana. Cada cocina moderna es única.
            </p>
            <div className="gold-line mt-8 w-24" />
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-gold mb-6">Navegación</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/servicios', label: 'Servicios' },
                { href: '/galeria', label: 'Galería' },
                { href: '/blog', label: 'Blog' },
                { href: '/contacto', label: 'Contacto' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-sm text-cream/50 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-gold mb-6">Contacto</h4>
            <ul className="space-y-3 font-body text-sm text-cream/50">
              <li>📍 Santo Domingo, RD</li>
              <li>
                <a href="tel:+18091234567" className="hover:text-gold transition-colors">
                  📞 (809) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@cocinasmodernasrd.com" className="hover:text-gold transition-colors">
                  ✉️ info@cocinasmodernasrd.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/18091234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  💬 WhatsApp disponible
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-body text-xs text-cream/30">
          <p>© {new Date().getFullYear()} Cocinas Modernas RD. Todos los derechos reservados.</p>
          <p>Cocinas modernas · Gabinetes modernos · Islas de cocina · Muebles de cocina · Santo Domingo, RD</p>
        </div>
      </div>
    </footer>
  )
}
