import { sendContactEmail } from '../src/services/emailService.js'

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const sanitize = (str) => {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, message, requestAppointment } = req.body

    // Validate required fields
    const errors = []

    if (!name || name.trim().length < 2) {
      errors.push('Name is required and must be at least 2 characters')
    }

    if (!email || !validateEmail(email)) {
      errors.push('A valid email address is required')
    }

    if (!message || message.trim().length < 10) {
      errors.push('Message is required and must be at least 10 characters')
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors })
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitize(name.trim()),
      email: email.trim().toLowerCase(),
      phone: sanitize(phone?.trim() || ''),
      message: sanitize(message.trim()),
      requestAppointment: Boolean(requestAppointment)
    }

    // Send email
    await sendContactEmail(sanitizedData)

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon.'
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({
      error: 'Failed to send message. Please try again or call us directly.'
    })
  }
}
