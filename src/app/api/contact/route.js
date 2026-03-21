import { NextResponse } from 'next/server'

const RESEND_API_URL = 'https://api.resend.com/emails'

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export async function POST(request) {
  const resendApiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL

  if (!resendApiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      { error: "La configuration email du serveur est incomplète." },
      { status: 500 }
    )
  }

  try {
    const body = await request.json()
    const name = body?.name?.trim()
    const email = body?.email?.trim()
    const phone = body?.phone?.trim() || 'Non renseigné'
    const service = body?.service?.trim() || 'Non renseigné'
    const subject = body?.subject?.trim()
    const message = body?.message?.trim()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Merci de remplir tous les champs obligatoires.' },
        { status: 400 }
      )
    }

    const emailResponse = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `[Contact site] ${subject}`,
        text: [
          'Nouveau message depuis le site DynaMaison',
          '',
          `Nom : ${name}`,
          `Email : ${email}`,
          `Téléphone : ${phone}`,
          `Service : ${service}`,
          `Sujet : ${subject}`,
          '',
          'Message :',
          message,
        ].join('\n'),
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
            <h2 style="margin-bottom: 16px;">Nouveau message depuis le site DynaMaison</h2>
            <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
            <p><strong>Email :</strong> ${escapeHtml(email)}</p>
            <p><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>
            <p><strong>Service :</strong> ${escapeHtml(service)}</p>
            <p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>
            <p><strong>Message :</strong></p>
            <div style="padding: 16px; border-radius: 12px; background: #f8fafc; white-space: pre-wrap;">${escapeHtml(message)}</div>
          </div>
        `,
      }),
      cache: 'no-store',
    })

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      return NextResponse.json(
        { error: "L'envoi de l'email a échoué.", details: errorText },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: "Une erreur est survenue pendant l'envoi du message." },
      { status: 500 }
    )
  }
}
