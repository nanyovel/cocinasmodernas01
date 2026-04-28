import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const correoGmail = "jperezjimenez06@gmail.com";
  const correoLimpidos = "jperez@limpidos.com";
  try {
    const body = await req.json();

    const { nombre, telefono, email, presupuesto, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return Response.json({ error: "Faltan campos" }, { status: 400 });
    }

    await resend.emails.send({
      from: "José Pérez - Limpidos <jperez@limpidos.com>",
      to: [correoGmail, correoLimpidos],
      replyTo: email,
      subject: "Limpidos - Nuevo cliente interesado",
      html: `
      <h2>Nuevo cliente interesado</h2>

      <p>Hola José,</p>

      <p>Has recibido un nuevo contacto desde tu página web:</p>

      <ul>
        <li><strong>Nombre:</strong> ${nombre}</li>
        <li><strong>Teléfono:</strong> ${telefono}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Presupuesto:</strong> ${presupuesto}</li>
      </ul>

      <p><strong>Mensaje:</strong></p>
      <p>${mensaje}</p>

      <hr>

      <p>Este mensaje fue enviado desde limpidos.com</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error enviando email" }, { status: 500 });
  }
}
