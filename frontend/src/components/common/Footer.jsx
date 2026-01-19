import { Link } from 'react-router-dom'
import { practiceInfo, doctorInfo } from '../../data/practiceInfo'
import { footerNavigation } from '../../data/navigation'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1 4 2 5.5 1 1.5 2 3 2 5.5 0 1 .5 2 2 2s2-1 2-2c0-2.5 1-4 2-5.5 1-1.5 2-3 2-5.5 0-3.5-2.5-6-6-6z"/>
                  <path d="M12 6v2"/>
                </svg>
              </div>
              <span className="footer-logo-text">{practiceInfo.name}</span>
            </Link>
            <p className="footer-description">
              {doctorInfo.title} providing expert oral surgery care in Melbourne's Bayside area for over {doctorInfo.experience}.
            </p>
            <div className="footer-qualifications">
              <span>{doctorInfo.qualifications.join(', ')}</span>
              <span>|</span>
              <span>{doctorInfo.memberships[0]}</span>
            </div>
          </div>

          <div className="footer-nav">
            <div className="footer-nav-section">
              <h3 className="footer-nav-title">Services</h3>
              <ul className="footer-nav-list">
                {footerNavigation.services.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-nav-section">
              <h3 className="footer-nav-title">Quick Links</h3>
              <ul className="footer-nav-list">
                {footerNavigation.quickLinks.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-nav-section">
              <h3 className="footer-nav-title">Contact Us</h3>
              <ul className="footer-contact-list">
                <li>
                  <a href={practiceInfo.contact.phoneLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    {practiceInfo.contact.phone}
                  </a>
                </li>
                <li>
                  <a href={practiceInfo.contact.emailLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    {practiceInfo.contact.email}
                  </a>
                </li>
                <li>
                  <a href={practiceInfo.address.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {practiceInfo.address.full}
                  </a>
                </li>
              </ul>

              <div className="footer-hours">
                <h4>Hours</h4>
                <p>Monday - Friday: {practiceInfo.hours.weekdays}</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} {practiceInfo.name}. All rights reserved.
          </p>
          <ul className="footer-legal">
            {footerNavigation.legal.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
