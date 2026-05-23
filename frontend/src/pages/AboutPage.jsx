import { useParams } from 'react-router-dom'
import SEOHead from '../components/common/SEOHead'
import { practiceInfo, doctorInfo } from '../data/practiceInfo'
import './AboutPage.css'

function AboutPage() {
  const { section } = useParams()

  const showDoctorSection = !section || section === 'dr-bala'
  const showPracticeSection = !section || section === 'practice'

  return (
    <>
      <SEOHead
        title={section === 'practice' ? 'Our Practice' : `About ${doctorInfo.shortName}`}
        description={`Learn about ${doctorInfo.name}, Specialist Oral Surgeon at ${practiceInfo.name}. ${doctorInfo.experience} experience in wisdom teeth removal, dental implants, and oral surgery.`}
        canonicalUrl={section ? `/about/${section}` : '/about'}
      />

      <div className="about-page">
        {/* Page Header */}
        <section className="page-header">
          <div className="container">
            <h1>{section === 'practice' ? 'Our Practice' : `About ${doctorInfo.shortName}`}</h1>
            <p>Providing top-notch oral surgery care to the Bayside community for over two decades</p>
          </div>
        </section>

        {/* Doctor Section */}
        {showDoctorSection && (
          <section className="doctor-section section">
            <div className="container">
              <div className="doctor-profile">
                <div className="doctor-image-container">
                  <img
                    src="/bala.jpeg"
                    alt={`${doctorInfo.name} - Specialist Oral Surgeon`}
                    className="doctor-portrait"
                  />
                </div>

                <div className="doctor-details">
                  <h2>{doctorInfo.name}</h2>
                  <p className="doctor-qualifications">
                    {doctorInfo.title} | {doctorInfo.qualifications.join(', ')}
                  </p>

                  <div className="doctor-bio">
                    {doctorInfo.bio.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="doctor-info-cards">
                    <div className="info-card">
                      <h4>Qualifications</h4>
                      <ul>
                        {doctorInfo.qualifications.map((qual, index) => (
                          <li key={index}>{qual}</li>
                        ))}
                        {doctorInfo.memberships.map((membership, index) => (
                          <li key={`m-${index}`}>{membership}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="info-card">
                      <h4>Hospital Affiliations</h4>
                      <ul>
                        {doctorInfo.hospitalAffiliations.map((hospital, index) => (
                          <li key={index}>
                            {hospital.name}
                            <span className="hospital-location">{hospital.location}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="info-card">
                      <h4>Languages Spoken</h4>
                      <ul>
                        {doctorInfo.languages.map((lang, index) => (
                          <li key={index}>{lang}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="info-card">
                      <h4>Areas of Expertise</h4>
                      <ul>
                        {doctorInfo.expertise.slice(0, 5).map((area, index) => (
                          <li key={index}>{area}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Practice Section */}
        {showPracticeSection && (
          <section className="practice-section section">
            <div className="container">
              <div className="practice-content">
                <h2>Our Practice</h2>
                <p className="practice-intro">
                  At Moorabbin Oral Surgery, we've been providing top-notch oral surgery care
                  to the Bayside community, south eastern suburbs and western suburbs for over
                  two decades. Our experienced surgeons are dedicated to making your procedure
                  as comfortable and stress-free as possible.
                </p>
                <p className="practice-intro">
                  What sets us apart? Our commitment to personalised care, state-of-the-art
                  techniques, and a focus on long-lasting results. Whether you need wisdom
                  teeth removal, dental implants, or TMJ treatment, we're here to help.
                </p>
                <p className="practice-intro">
                  Ready to take the next step? Schedule a consultation today and experience
                  the Moorabbin Oral Surgery difference.
                </p>

                <div className="practice-features">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <h4>Personalised Care</h4>
                    <p>
                      Every patient is unique. We take the time to understand your needs
                      and tailor your treatment for the best possible outcome.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                    </div>
                    <h4>State-of-the-Art Techniques</h4>
                    <p>
                      We use the latest surgical techniques and modern equipment to ensure
                      safe, comfortable, and effective treatment for every patient.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                    <h4>Long-Lasting Results</h4>
                    <p>
                      Our focus is on outcomes that stand the test of time — from wisdom
                      teeth removal to dental implants, we're committed to your long-term health.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M16 12h-4v-4"/>
                      </svg>
                    </div>
                    <h4>Stress-Free Experience</h4>
                    <p>
                      Our experienced surgeons are dedicated to making your procedure
                      as comfortable and stress-free as possible, from consultation to recovery.
                    </p>
                  </div>
                </div>

                <div className="practice-location">
                  <h3>Find Us</h3>
                  <div className="location-details">
                    <div className="address-info">
                      <p>
                        <strong>{practiceInfo.name}</strong><br />
                        {practiceInfo.address.full}
                      </p>
                      <p>
                        <strong>Phone:</strong> {practiceInfo.contact.phone}<br />
                        <strong>Email:</strong> {practiceInfo.contact.email}
                      </p>
                      <p>
                        <strong>Hours:</strong><br />
                        {practiceInfo.hours.detailed.map((item, index) => (
                          <span key={index}>
                            {item.day}: {item.hours}<br />
                          </span>
                        ))}
                      </p>
                    </div>
                    <div className="map-container">
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
            </div>
          </section>
        )}
      </div>
    </>
  )
}

export default AboutPage
