import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { nombre, telefono, email, presupuesto, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return Response.json({ error: "Faltan campos" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Cocinas modernas <onboarding@resend.dev>",
      to: ["jperez@noarix.com"], // 👈 cámbialo por tu email real
      subject: "Nuevo lead de Cocinas Modernas",
      html: `
        <h2>Nuevo mensaje de cocinasmodernasrd.com</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Presupuesto:</strong> ${presupuesto}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error enviando email" }, { status: 500 });
  }
}
