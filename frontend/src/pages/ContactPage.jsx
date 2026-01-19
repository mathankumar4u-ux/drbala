import { useState } from 'react'
import SEOHead from '../components/common/SEOHead'
import { practiceInfo } from '../data/practiceInfo'
import './ContactPage.css'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    requestAppointment: false
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: data.message })
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          requestAppointment: false
        })
      } else {
        setStatus({
          type: 'error',
          message: data.errors?.join('. ') || data.error || 'Something went wrong'
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or call us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEOHead
        title="Contact Us"
        description={`Contact ${practiceInfo.name} in Moorabbin, Melbourne. Call ${practiceInfo.contact.phone} or send us a message to book your oral surgery consultation.`}
        canonicalUrl="/contact"
      />

      <div className="contact-page">
        <section className="page-header">
          <div className="container">
            <h1>Contact Us</h1>
            <p>Get in touch to book a consultation or ask a question</p>
          </div>
        </section>

        <section className="contact-content section">
          <div className="container">
            <div className="contact-layout">
              <div className="contact-form-container">
                <h2>Send Us a Message</h2>
                <p>
                  Fill out the form below and we'll get back to you as soon as possible,
                  usually within 1-2 business days.
                </p>

                {status.message && (
                  <div className={`alert alert-${status.type}`} role="alert">
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      minLength={2}
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="04XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      minLength={10}
                      rows={5}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="requestAppointment"
                        checked={formData.requestAppointment}
                        onChange={handleChange}
                      />
                      <span className="checkbox-text">
                        I would like to request an appointment
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              <div className="contact-info-container">
                <div className="contact-card">
                  <h3>Contact Information</h3>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div className="contact-details">
                      <strong>Phone</strong>
                      <a href={practiceInfo.contact.phoneLink}>
                        {practiceInfo.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div className="contact-details">
                      <strong>Email</strong>
                      <a href={practiceInfo.contact.emailLink}>
                        {practiceInfo.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div className="contact-details">
                      <strong>Address</strong>
                      <a
                        href={practiceInfo.address.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {practiceInfo.address.full}
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div className="contact-details">
                      <strong>Hours</strong>
                      <span>Monday - Friday: {practiceInfo.hours.weekdays}</span>
                      <span>Saturday - Sunday: Closed</span>
                    </div>
                  </div>
                </div>

                <div className="map-card">
                  <div className="map-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <p>Google Maps Embed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactPage
