import { useState } from 'react'
import SEOHead from '../components/common/SEOHead'
import { practiceInfo, doctorInfo } from '../data/practiceInfo'
import './ReferralPage.css'

const referralReasons = [
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

function ReferralPage() {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerPractice: '',
    referrerEmail: '',
    referrerPhone: '',
    patientName: '',
    patientDob: '',
    patientPhone: '',
    patientEmail: '',
    reason: '',
    urgency: 'routine',
    notes: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: data.message })
        setFormData({
          referrerName: '',
          referrerPractice: '',
          referrerEmail: '',
          referrerPhone: '',
          patientName: '',
          patientDob: '',
          patientPhone: '',
          patientEmail: '',
          reason: '',
          urgency: 'routine',
          notes: ''
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
        message: 'Failed to submit referral. Please try again or call us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEOHead
        title="Referral Portal for Dentists"
        description="Refer your patients to Dr Balanand Subramanian, Specialist Oral Surgeon. Easy online referral form for wisdom teeth, implants, and oral surgery cases."
        canonicalUrl="/for-dentists"
      />

      <div className="referral-page">
        <section className="page-header">
          <div className="container">
            <h1>Referral Portal</h1>
            <p>For referring dental practitioners</p>
          </div>
        </section>

        <section className="referral-content section">
          <div className="container">
            <div className="referral-layout">
              <div className="referral-info">
                <h2>Why Refer to Us?</h2>
                <p>
                  {doctorInfo.name} provides comprehensive oral surgical care with
                  over {doctorInfo.experience} of experience. We work closely with
                  referring dentists to ensure continuity of care.
                </p>

                <div className="referral-benefits">
                  <div className="benefit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Prompt appointment scheduling</span>
                  </div>
                  <div className="benefit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Detailed treatment reports</span>
                  </div>
                  <div className="benefit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Open communication throughout care</span>
                  </div>
                  <div className="benefit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Return of patients for ongoing dental care</span>
                  </div>
                </div>

                <div className="contact-box">
                  <h3>Questions?</h3>
                  <p>Call us directly for urgent referrals or to discuss a case.</p>
                  <a href={practiceInfo.contact.phoneLink} className="phone-link">
                    {practiceInfo.contact.phone}
                  </a>
                </div>
              </div>

              <div className="referral-form-container">
                <h2>Submit a Referral</h2>

                {status.message && (
                  <div className={`alert alert-${status.type}`} role="alert">
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="referral-form">
                  <fieldset>
                    <legend>Your Details</legend>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="referrerName">Your Name *</label>
                        <input
                          type="text"
                          id="referrerName"
                          name="referrerName"
                          value={formData.referrerName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="referrerPractice">Practice Name *</label>
                        <input
                          type="text"
                          id="referrerPractice"
                          name="referrerPractice"
                          value={formData.referrerPractice}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="referrerEmail">Email *</label>
                        <input
                          type="email"
                          id="referrerEmail"
                          name="referrerEmail"
                          value={formData.referrerEmail}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="referrerPhone">Phone *</label>
                        <input
                          type="tel"
                          id="referrerPhone"
                          name="referrerPhone"
                          value={formData.referrerPhone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend>Patient Details</legend>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="patientName">Patient Name *</label>
                        <input
                          type="text"
                          id="patientName"
                          name="patientName"
                          value={formData.patientName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="patientDob">Date of Birth *</label>
                        <input
                          type="date"
                          id="patientDob"
                          name="patientDob"
                          value={formData.patientDob}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="patientPhone">Patient Phone</label>
                        <input
                          type="tel"
                          id="patientPhone"
                          name="patientPhone"
                          value={formData.patientPhone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="patientEmail">Patient Email</label>
                        <input
                          type="email"
                          id="patientEmail"
                          name="patientEmail"
                          value={formData.patientEmail}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend>Referral Details</legend>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="reason">Reason for Referral *</label>
                        <select
                          id="reason"
                          name="reason"
                          value={formData.reason}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select reason...</option>
                          {referralReasons.map((reason) => (
                            <option key={reason} value={reason}>{reason}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="urgency">Urgency *</label>
                        <select
                          id="urgency"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          required
                        >
                          <option value="routine">Routine</option>
                          <option value="soon">Soon (within 2 weeks)</option>
                          <option value="urgent">Urgent (within 48 hours)</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="notes">Additional Notes</label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Clinical notes, X-ray findings, relevant medical history..."
                      />
                    </div>
                  </fieldset>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Referral'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ReferralPage
