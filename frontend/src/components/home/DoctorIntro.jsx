import { Link } from 'react-router-dom'
import { doctorInfo } from '../../data/practiceInfo'
import './DoctorIntro.css'

function DoctorIntro() {
  return (
    <section className="doctor-intro section">
      <div className="container">
        <div className="doctor-intro-content">
          <div className="doctor-image">
            <img
              src="/bala.jpeg"
              alt={`${doctorInfo.name} - Specialist Oral Surgeon`}
              className="doctor-img"
            />
          </div>

          <div className="doctor-info">
            <span className="doctor-label">Meet Your Surgeon</span>
            <h2 className="doctor-name">{doctorInfo.name}</h2>
            <p className="doctor-title">
              {doctorInfo.title} • {doctorInfo.qualifications.join(', ')}
            </p>

            <p className="doctor-bio">
              {doctorInfo.bio.split('\n\n')[0]}
            </p>

            <div className="doctor-credentials">
              <div className="credential">
                <div className="credential-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"/>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                  </svg>
                </div>
                <div className="credential-text">
                  <strong>Fellowship</strong>
                  <span>International College of Dentists</span>
                </div>
              </div>

              <div className="credential">
                <div className="credential-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div className="credential-text">
                  <strong>Experience</strong>
                  <span>{doctorInfo.experience} in oral surgery</span>
                </div>
              </div>

              <div className="credential">
                <div className="credential-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <div className="credential-text">
                  <strong>Languages</strong>
                  <span>{doctorInfo.languages.join(', ')}</span>
                </div>
              </div>
            </div>

            <Link to="/about/dr-bala" className="btn btn-primary">
              Learn More About Dr Bala
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorIntro
