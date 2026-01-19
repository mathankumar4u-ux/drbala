import nodemailer from 'nodemailer'
import config from '../config/index.js'

const createTransporter = () => {
  return nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.port === 465,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass
    }
  })
}

export const sendContactEmail = async (data) => {
  const { name, email, phone, message, requestAppointment } = data

  const transporter = createTransporter()

  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    <p><strong>Appointment Request:</strong> ${requestAppointment ? 'Yes' : 'No'}</p>
    <h3>Message:</h3>
    <p>${message.replace(/\n/g, '<br>')}</p>
    <hr>
    <p><small>This message was sent from the oralsurgeon.care website contact form.</small></p>
  `

  const mailOptions = {
    from: `"Oral Surgeon Care Website" <${config.smtp.user}>`,
    to: config.practiceEmail,
    replyTo: email,
    subject: `New Contact Form: ${name}${requestAppointment ? ' - Appointment Request' : ''}`,
    html: htmlContent
  }

  await transporter.sendMail(mailOptions)

  // Send confirmation to patient
  const confirmationHtml = `
    <h2>Thank you for contacting OralSurgeon.Care</h2>
    <p>Dear ${name},</p>
    <p>We have received your message and will get back to you as soon as possible, usually within 1-2 business days.</p>
    ${requestAppointment ? '<p>We note that you have requested an appointment. Our team will contact you to schedule a suitable time.</p>' : ''}
    <p>If your matter is urgent, please call us directly on (03) 9555 5960.</p>
    <p>Best regards,<br>OralSurgeon.Care Team</p>
    <hr>
    <p><strong>Your message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `

  const confirmationOptions = {
    from: `"OralSurgeon.Care" <${config.smtp.user}>`,
    to: email,
    subject: 'Thank you for contacting OralSurgeon.Care',
    html: confirmationHtml
  }

  await transporter.sendMail(confirmationOptions)
}

export const sendReferralEmail = async (data) => {
  const {
    referrerName,
    referrerPractice,
    referrerEmail,
    referrerPhone,
    patientName,
    patientDob,
    patientPhone,
    patientEmail,
    reason,
    urgency,
    notes
  } = data

  const transporter = createTransporter()

  const htmlContent = `
    <h2>New Patient Referral</h2>

    <h3>Referring Practitioner</h3>
    <p><strong>Name:</strong> ${referrerName}</p>
    <p><strong>Practice:</strong> ${referrerPractice}</p>
    <p><strong>Email:</strong> ${referrerEmail}</p>
    <p><strong>Phone:</strong> ${referrerPhone}</p>

    <h3>Patient Information</h3>
    <p><strong>Name:</strong> ${patientName}</p>
    <p><strong>Date of Birth:</strong> ${patientDob}</p>
    <p><strong>Phone:</strong> ${patientPhone || 'Not provided'}</p>
    <p><strong>Email:</strong> ${patientEmail || 'Not provided'}</p>

    <h3>Referral Details</h3>
    <p><strong>Reason for Referral:</strong> ${reason}</p>
    <p><strong>Urgency:</strong> ${urgency}</p>
    ${notes ? `<p><strong>Additional Notes:</strong><br>${notes.replace(/\n/g, '<br>')}</p>` : ''}

    <hr>
    <p><small>This referral was submitted via the oralsurgeon.care referral portal.</small></p>
  `

  const mailOptions = {
    from: `"Oral Surgeon Care Website" <${config.smtp.user}>`,
    to: config.practiceEmail,
    replyTo: referrerEmail,
    subject: `New Referral: ${patientName} from ${referrerPractice} [${urgency}]`,
    html: htmlContent
  }

  await transporter.sendMail(mailOptions)

  // Send confirmation to referring dentist
  const confirmationHtml = `
    <h2>Referral Confirmation</h2>
    <p>Dear ${referrerName},</p>
    <p>Thank you for your referral. We have received the following patient referral:</p>
    <p><strong>Patient:</strong> ${patientName}</p>
    <p><strong>Reason:</strong> ${reason}</p>
    <p><strong>Urgency:</strong> ${urgency}</p>
    <p>We will contact the patient to schedule an appointment and will keep you informed of their progress.</p>
    <p>If you have any questions, please call us on (03) 9555 5960.</p>
    <p>Best regards,<br>Dr Balanand Subramanian<br>OralSurgeon.Care</p>
  `

  const confirmationOptions = {
    from: `"OralSurgeon.Care" <${config.smtp.user}>`,
    to: referrerEmail,
    subject: `Referral Confirmed: ${patientName}`,
    html: confirmationHtml
  }

  await transporter.sendMail(confirmationOptions)
}

export default { sendContactEmail, sendReferralEmail }
