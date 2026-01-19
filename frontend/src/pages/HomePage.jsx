import SEOHead from '../components/common/SEOHead'
import Hero from '../components/home/Hero'
import ServicesOverview from '../components/home/ServicesOverview'
import DoctorIntro from '../components/home/DoctorIntro'
import TestimonialsCarousel from '../components/home/TestimonialsCarousel'
import { Link } from 'react-router-dom'
import { practiceInfo } from '../data/practiceInfo'
import './HomePage.css'

function HomePage() {
  return (
    <>
      <SEOHead
        title="Oral Surgeon Melbourne | Wisdom Teeth & Dental Implants"
        description="Specialist oral surgeon in Moorabbin, Melbourne. Dr Balanand Subramanian provides expert wisdom teeth removal, dental implants, and oral surgery. 10+ years experience. Call (03) 9555 5960."
        canonicalUrl="/"
      />

      <Hero />
      <ServicesOverview />
      <DoctorIntro />
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Schedule Your Consultation?</h2>
            <p className="cta-text">
              Contact our Moorabbin practice today. We're here to provide expert care
              and answer any questions you may have about your oral surgery needs.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book Consultation
              </Link>
              <a href={practiceInfo.contact.phoneLink} className="btn btn-outline-light btn-lg">
                Call {practiceInfo.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section section">
        <div className="container">
          <div className="location-content">
            <div className="location-info">
              <h2>Visit Our Practice</h2>
              <p className="location-address">
                <strong>{practiceInfo.name}</strong><br />
                {practiceInfo.address.street}<br />
                {practiceInfo.address.suburb} {practiceInfo.address.state} {practiceInfo.address.postcode}
              </p>
              <p className="location-hours">
                <strong>Hours:</strong><br />
                Monday - Friday: {practiceInfo.hours.weekdays}<br />
                Saturday - Sunday: Closed
              </p>
              <div className="location-features">
                {practiceInfo.facilities.map((facility, index) => (
                  <span key={index} className="feature-tag">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {facility}
                  </span>
                ))}
              </div>
              <a
                href={practiceInfo.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Get Directions
              </a>
            </div>
            <div className="location-map">
              <div className="map-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <p>Google Maps Embed</p>
                <small>Add iframe with Google Maps embed code</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
