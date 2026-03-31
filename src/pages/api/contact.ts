import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { env, isContactEmailConfigured } from '@/lib/utils/env';

export const prerender = false;

function redirectWithError(message: string, status = 400) {
  return new Response(null, {
    status,
    headers: {
      Location: `/contacto/?error=${encodeURIComponent(message)}`,
    },
  });
}

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();

  const company = String(formData.get('company') ?? '').trim();
  if (company) {
    return redirectWithError('Solicitud rechazada.', 303);
  }

  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const business = String(formData.get('business') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (!name || !email || !message) {
    return redirectWithError('Faltan campos obligatorios.', 303);
  }

  if (!isContactEmailConfigured()) {
    return redirectWithError('La entrega del formulario todavía no está configurada.', 303);
  }

  const resend = new Resend(env.resendApiKey);

  try {
    await resend.emails.send({
      from: env.contactFormFromEmail,
      to: env.contactFormToEmail,
      replyTo: email,
      subject: `Nuevo contacto desde Gestión en Calma: ${name}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Negocio: ${business || 'No indicado'}`,
        '',
        'Mensaje:',
        message,
      ].join('\n'),
    });

    return redirect('/gracias/', 303);
  } catch {
    return redirectWithError(
      'No se pudo enviar el mensaje. Inténtalo de nuevo en unos minutos.',
      303,
    );
  }
};
