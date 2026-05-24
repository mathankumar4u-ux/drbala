import { Link } from 'react-router-dom'
import { getFeaturedServices } from '../../data/services'
import './ServicesOverview.css'

const serviceIcons = {
  tooth: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1 4 2 5.5 1 1.5 2 3 2 5.5 0 1 .5 2 2 2s2-1 2-2c0-2.5 1-4 2-5.5 1-1.5 2-3 2-5.5 0-3.5-2.5-6-6-6z"/>
    </svg>
  ),
  implant: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="6" rx="1"/>
      <path d="M12 8v2"/>
      <path d="M9 12h6"/>
      <path d="M10 12v8"/>
      <path d="M14 12v8"/>
      <path d="M8 16h8"/>
    </svg>
  ),
  extraction: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1 4 2 5.5 1 1.5 2 3 2 5.5"/>
      <path d="M18 8c0-3.5-2.5-6-6-6"/>
      <path d="M9 3l6 6"/>
      <path d="M15 3l-6 6"/>
    </svg>
  )
}

function ServicesOverview() {
  const featuredServices = getFeaturedServices()

  return (
    <section className="services-overview section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive oral surgery services delivered with expertise and care
          </p>
        </div>

        <div className="services-grid">
          {featuredServices.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="service-card"
            >
              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-img"
                />
              )}
              <div className="service-icon">
                {serviceIcons[service.icon] || serviceIcons.tooth}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.shortDescription}</p>
              <span className="service-link">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="services-cta">
          <Link to="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
