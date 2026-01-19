import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import config from './config/index.js'
import { sendContactEmail, sendReferralEmail } from './services/emailService.js'

const app = express()

// Security middleware
app.use(helmet())
app.use(cors({
  origin: config.frontendUrl,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})
app.use(limiter)

// Body parsing
app.use(express.json())

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'oralsurgeon-care-api'
  })
})

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message, requestAppointment } = req.body

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ errors: ['Name, email, and message are required'] })
    }

    await sendContactEmail({ name, email, phone, message, requestAppointment })

    res.json({
      success: true,
      message: 'Your message has been sent successfully.'
    })
  } catch (error) {
    console.error('Contact error:', error)
    res.status(500).json({ error: 'Failed to send message' })
  }
})

// Referral form endpoint
app.post('/api/referral', async (req, res) => {
  try {
    const data = req.body

    // Basic validation
    if (!data.referrerName || !data.referrerEmail || !data.patientName) {
      return res.status(400).json({ errors: ['Required fields are missing'] })
    }

    await sendReferralEmail(data)

    res.json({
      success: true,
      message: 'Referral submitted successfully.'
    })
  } catch (error) {
    console.error('Referral error:', error)
    res.status(500).json({ error: 'Failed to submit referral' })
  }
})

// Start server
const PORT = config.port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`Environment: ${config.nodeEnv}`)
})

export default app
