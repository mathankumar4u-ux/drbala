import { sendReferralEmail } from '../src/services/emailService.js'

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

const VALID_REASONS = [
  'Wisdom teeth removal',
  'Dental implants',
  'Tooth extraction',
  'Bone grafting',
  'Impacted teeth exposure',
  'Oral pathology assessment',
  'TMJ evaluation',
  'Trauma',
  'Other'
]

const VALID_URGENCY = ['routine', 'soon', 'urgent']

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
    } = req.body

    // Validate required fields
    const errors = []

    if (!referrerName || referrerName.trim().length < 2) {
      errors.push('Referring practitioner name is required')
    }

    if (!referrerPractice || referrerPractice.trim().length < 2) {
      errors.push('Practice name is required')
    }

    if (!referrerEmail || !validateEmail(referrerEmail)) {
      errors.push('A valid referrer email is required')
    }

    if (!referrerPhone || referrerPhone.trim().length < 8) {
      errors.push('Referrer phone number is required')
    }

    if (!patientName || patientName.trim().length < 2) {
      errors.push('Patient name is required')
    }

    if (!patientDob) {
      errors.push('Patient date of birth is required')
    }

    if (!reason || !VALID_REASONS.includes(reason)) {
      errors.push('Please select a valid reason for referral')
    }

    if (!urgency || !VALID_URGENCY.includes(urgency)) {
      errors.push('Please select urgency level')
    }

    if (patientEmail && !validateEmail(patientEmail)) {
      errors.push('Patient email is invalid')
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors })
    }

    // Sanitize inputs
    const sanitizedData = {
      referrerName: sanitize(referrerName.trim()),
      referrerPractice: sanitize(referrerPractice.trim()),
      referrerEmail: referrerEmail.trim().toLowerCase(),
      referrerPhone: sanitize(referrerPhone.trim()),
      patientName: sanitize(patientName.trim()),
      patientDob: patientDob,
      patientPhone: sanitize(patientPhone?.trim() || ''),
      patientEmail: patientEmail?.trim().toLowerCase() || '',
      reason: reason,
      urgency: urgency,
      notes: sanitize(notes?.trim() || '')
    }

    // Send email
    await sendReferralEmail(sanitizedData)

    return res.status(200).json({
      success: true,
      message: 'Referral submitted successfully. A confirmation has been sent to your email.'
    })
  } catch (error) {
    console.error('Referral form error:', error)
    return res.status(500).json({
      error: 'Failed to submit referral. Please try again or call us directly.'
    })
  }
}
