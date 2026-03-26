'use client'
import { useState } from 'react'

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    presupuesto: '',
    mensaje: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const presupuestos = [
    'Menos de RD$100,000',
    'RD$100,000 – RD$250,000',
    'RD$250,000 – RD$500,000',
    'Más de RD$500,000',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Aquí conectas tu backend / Formspree / Make / etc.
    // Por ahora simulamos envío exitoso
    await new Promise((r) => setTimeout(r, 1500))

    // Envío a WhatsApp como fallback
    const msg = encodeURIComponent(
      `Nuevo lead:\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nEmail: ${form.email}\nPresupuesto: ${form.presupuesto}\nMensaje: ${form.mensaje}`
    )
    window.open(`https://wa.me/18091234567?text=${msg}`, '_blank')

    setStatus('success')
    setForm({ nombre: '', telefono: '', email: '', presupuesto: '', mensaje: '' })
  }

  const inputClass =
    'w-full bg-obsidian-light border border-gold/20 text-cream placeholder-cream/30 font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors duration-300'

  return (
    <div className={compact ? '' : 'bg-obsidian-soft border border-gold/15 p-8 md:p-12'}>
      {!compact && (
        <>
          <p className="font-body text-xs tracking-widest uppercase text-gold mb-2">
            Cotización Gratuita
          </p>
          <h3 className="font-display text-3xl font-light text-cream mb-2">
            Diseña tu cocina ideal
          </h3>
          <p className="font-body text-sm text-cream/50 mb-8">
            Completa el formulario y un especialista te contactará en menos de 24 horas.
          </p>
        </>
      )}

      {status === 'success' ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 border border-gold mx-auto flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="font-display text-2xl text-gold mb-2">¡Solicitud Recibida!</h4>
          <p className="font-body text-sm text-cream/60">
            Un especialista te contactará dentro de las próximas 24 horas.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre completo"
              className={inputClass}
            />
            <input
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              required
              placeholder="Teléfono / WhatsApp"
              type="tel"
              className={inputClass}
            />
          </div>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Correo electrónico"
            type="email"
            className={inputClass}
          />
          <select
            name="presupuesto"
            value={form.presupuesto}
            onChange={handleChange}
            required
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled>Presupuesto aproximado</option>
            {presupuestos.map((p) => (
              <option key={p} value={p} className="bg-obsidian-mid">
                {p}
              </option>
            ))}
          </select>
          {!compact && (
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos sobre tu proyecto (espacio disponible, estilo deseado...)"
              rows={4}
              className={inputClass}
            />
          )}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-gold w-full flex items-center justify-center gap-3 disabled:opacity-60"
          >
            {status === 'sending' ? (
              <>
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Enviando...
              </>
            ) : (
              'Solicitar Cotización Gratuita'
            )}
          </button>
          <p className="font-body text-[11px] text-cream/30 text-center">
            Sin compromiso · Respuesta en menos de 24 horas
          </p>
        </form>
      )}
    </div>
  )
}
