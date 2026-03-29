"use client";
import Link from "next/link";
import { useState } from "react";
// import { addDoc, collection, doc, writeBatch } from "firebase/firestore";
// import db from "../firebase/firebaseConfig";

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    presupuesto: "",
    mensaje: "",
  });
  const [acepta, setAcepta] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const presupuestos = [
    "Menos de RD$100,000",
    "RD$100,000 – RD$250,000",
    "RD$250,000 – RD$500,000",
    "Más de RD$500,000",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acepta) return;
    const { nombre, telefono, email, presupuesto, mensaje } = form;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          telefono,
          email,
          presupuesto,
          mensaje,
        }),
      });

      const data = await res.json();

      console.log("STATUS:", res.status);
      console.log("DATA:", data);

      // ✅ SI FALLA → enviar a WhatsApp
      if (!res.ok || data.error) {
        const msg = encodeURIComponent(
          `Nuevo lead:\nNombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nPresupuesto: ${presupuesto}\nMensaje: ${mensaje}`
        );

        window.open(`https://wa.me/18493419890?text=${msg}`, "_blank");
        setStatus("error");
        return;
      }

      // ✅ SI TODO SALE BIEN
      setStatus("success");
      setForm({
        nombre: "",
        telefono: "",
        email: "",
        presupuesto: "",
        mensaje: "",
      });
    } catch (error) {
      // 🚨 Error de red (muy importante cubrir esto)
      console.error("Error de red:", error);

      const msg = encodeURIComponent(
        `Nuevo lead:\nNombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nPresupuesto: ${presupuesto}\nMensaje: ${mensaje}`
      );

      window.open(`https://wa.me/18493419890?text=${msg}`, "_blank");
      setStatus("error");
    }
  };
  const inputClass =
    "w-full bg-obsidian-light border border-gold/20 text-cream placeholder-cream/30 font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors duration-300";

  return (
    <div
      className={
        compact ? "" : "bg-obsidian-soft border border-gold/15 p-8 md:p-12"
      }
    >
      {!compact && (
        <>
          <p className="font-body text-xs tracking-widest uppercase text-gold mb-2">
            Cotización Gratuita
          </p>
          <h3 className="font-display text-3xl font-light text-cream mb-2">
            Diseña tu cocina ideal
          </h3>
          <p className="font-body text-sm text-cream/50 mb-8">
            Completa el formulario y un especialista te contactará en menos de
            24 horas.
          </p>
        </>
      )}

      {status === "success" ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 border border-gold mx-auto flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h4 className="font-display text-2xl text-gold mb-2">
            ¡Solicitud Recibida!
          </h4>
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
            <option value="" disabled>
              Presupuesto aproximado
            </option>
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
          {/* ── CHECKBOX DE CONSENTIMIENTO ── */}
          <div
            className={`flex items-start gap-3 p-4 border transition-colors duration-200 ${
              acepta
                ? "border-gold/40 bg-obsidian-light"
                : "border-gold/10 bg-obsidian-light/50"
            }`}
          >
            <button
              type="button"
              onClick={() => setAcepta(!acepta)}
              className={`flex-shrink-0 w-5 h-5 border mt-0.5 flex items-center justify-center transition-all duration-200 ${
                acepta
                  ? "bg-gold border-gold"
                  : "bg-transparent border-gold/40 hover:border-gold/70"
              }`}
              aria-label="Aceptar términos y condiciones"
            >
              {acepta && (
                <svg
                  className="w-3 h-3 text-obsidian"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
            <p className="font-body text-[11px] text-cream/50 leading-relaxed">
              He leído y acepto la Política de Privacidad y el Aviso Legal.
            </p>
            {/* <p className="font-body text-[11px] text-cream/50 leading-relaxed">
              Acepto la{" "}
              <Link
                href="/politica-privacidad"
                target="_blank"
                className="text-gold hover:text-gold-light underline"
              >
                Política de Privacidad
              </Link>{" "}
              y autorizo el uso de mis datos para recibir información comercial
              y propuestas de cotización de Cocinas Modernas RD y{" "}
              <strong className="text-cream/70">
                empresas del sector de cocinas y diseño de interiores
              </strong>
              . Entiendo que mis datos podrán ser compartidos con terceros
              relacionados con el sector para este fin. Ver{" "}
              <Link
                href="/aviso-legal"
                target="_blank"
                className="text-gold hover:text-gold-light underline"
              >
                Aviso Legal
              </Link>
              .
            </p> */}
          </div>

          {!acepta && status === "idle" && (
            <p className="font-body text-[10px] text-gold/50 text-center">
              Debes aceptar los términos para enviar tu solicitud
            </p>
          )}
          <button
            type="submit"
            disabled={status === "sending" || !acepta}
            className="btn-gold w-full flex items-center justify-center gap-3 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              <>
                <svg
                  className="animate-spin w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Enviando...
              </>
            ) : (
              "Solicitar Cotización Gratuita"
            )}
          </button>
          <p className="font-body text-[11px] text-cream/30 text-center">
            Sin compromiso · Respuesta en menos de 24 horas
          </p>
        </form>
      )}
    </div>
  );
}
