import { Link } from 'react-router-dom'
import { practiceInfo, doctorInfo } from '../../data/practiceInfo'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to Moorabbin Oral Surgery
            </h1>
            <p className="hero-subtitle">
              At Moorabbin Oral Surgery, we've been providing top-notch oral surgery care
              to the Bayside community, south eastern suburbs and western suburbs for over
              two decades. Our experienced surgeons are dedicated to making your procedure
              as comfortable and stress-free as possible.
            </p>
            <div className="hero-features">
              <div className="hero-feature">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Personalised Care</span>
              </div>
              <div className="hero-feature">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>State-of-the-Art Techniques</span>
              </div>
              <div className="hero-feature">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Long-Lasting Results</span>
              </div>
            </div>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book Consultation
              </Link>
              <a href={practiceInfo.contact.phoneLink} className="btn btn-outline btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {practiceInfo.contact.phone}
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=500&fit=crop"
              alt="Modern dental clinic with state-of-the-art equipment"
              className="hero-img"
            />
            <div className="hero-badge">
              <span className="badge-number">{doctorInfo.experience}</span>
              <span className="badge-text">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
