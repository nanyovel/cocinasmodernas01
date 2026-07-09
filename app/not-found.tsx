import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <p className="font-display text-[8rem] leading-none text-gold/10 font-light select-none">404</p>
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4 -mt-4">Página no encontrada</p>
        <h1 className="font-display text-4xl font-light text-cream mb-6">
          Esta página no existe
        </h1>
        <p className="font-body text-sm text-cream/50 mb-10 max-w-sm mx-auto">
          La página que buscas no existe o fue movida. Regresa al inicio para explorar nuestros proyectos.
        </p>
        <Link href="/" className="btn-gold">
          Volver al Inicio
        </Link>
      </div>
    </div>
  )
}
