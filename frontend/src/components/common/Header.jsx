import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import { practiceInfo } from '../../data/practiceInfo'
import './Header.css'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="header-contact">
              <a href={practiceInfo.contact.phoneLink} className="header-phone">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>{practiceInfo.contact.phone}</span>
              </a>
              <span className="header-hours">Mon-Fri: {practiceInfo.hours.weekdays}</span>
            </div>
            <a href={practiceInfo.contact.emailLink} className="header-email">
              {practiceInfo.contact.email}
            </a>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <div className="header-main-content">
            <Link to="/" className="header-logo" onClick={closeMobileMenu}>
              <img
                src="/logo.jpg"
                alt="Moorabbin Oral Surgery"
                style={{ height: '56px', width: 'auto', display: 'block' }}
              />
            </Link>

            <Navigation
              isOpen={isMobileMenuOpen}
              onClose={closeMobileMenu}
            />

            <div className="header-actions">
              <Link to="/contact" className="btn btn-primary header-cta">
                Book Consultation
              </Link>

              <button
                className={`mobile-menu-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="main-navigation"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <span className="menu-bar"></span>
                <span className="menu-bar"></span>
                <span className="menu-bar"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
