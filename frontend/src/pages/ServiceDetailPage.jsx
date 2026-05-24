import { useParams, Link, Navigate } from 'react-router-dom'
import SEOHead from '../components/common/SEOHead'
import { getServiceById, services } from '../data/services'
import { practiceInfo } from '../data/practiceInfo'
import './ServiceDetailPage.css'

function ServiceDetailPage() {
  const { serviceId } = useParams()
  const service = getServiceById(serviceId)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const otherServices = services.filter(s => s.id !== serviceId).slice(0, 3)

  return (
    <>
      <SEOHead
        title={service.seo.title}
        description={service.seo.description}
        canonicalUrl={`/services/${serviceId}`}
      />

      <div className="service-detail-page">
        <section className="page-header">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/services">Services</Link>
              <span>/</span>
              <span>{service.title}</span>
            </nav>
            <h1>{service.title}</h1>
            <p>{service.shortDescription}</p>
          </div>
        </section>

        <section className="service-content section">
          <div className="container">
            {service.image && (
              <img
                src={service.image}
                alt={service.title}
                className="service-detail-img"
              />
            )}
            <div className="content-layout">
              <div className="main-content">
                {/* Overview */}
                <div className="content-block">
                  <h2>Overview</h2>
                  {service.content.overview.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Reasons/Benefits/Conditions */}
                {service.content.reasons && (
                  <div className="content-block">
                    <h2>When Is It Needed?</h2>
                    <ul className="check-list">
                      {service.content.reasons.map((reason, i) => (
                        <li key={i}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.content.benefits && (
                  <div className="content-block">
                    <h2>Benefits</h2>
                    <ul className="check-list">
                      {service.content.benefits.map((benefit, i) => (
                        <li key={i}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.content.symptoms && (
                  <div className="content-block">
                    <h2>Symptoms</h2>
                    <ul className="check-list">
                      {service.content.symptoms.map((symptom, i) => (
                        <li key={i}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="12"/>
                            <line x1="12" y1="16" x2="12.01" y2="16"/>
                          </svg>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Procedure */}
                {service.content.procedure && (
                  <div className="content-block">
                    <h2>The Procedure</h2>
                    {service.content.procedure.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}

                {/* Recovery/Aftercare */}
                {service.content.recovery && (
                  <div className="content-block">
                    <h2>Recovery</h2>
                    <ul className="numbered-list">
                      {service.content.recovery.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.content.aftercare && (
                  <div className="content-block">
                    <h2>Aftercare</h2>
                    <ul className="numbered-list">
                      {service.content.aftercare.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="sidebar">
                <div className="sidebar-card cta-card">
                  <h3>Ready to Get Started?</h3>
                  <p>Book a consultation to discuss your treatment options.</p>
                  <Link to="/contact" className="btn btn-primary">
                    Book Consultation
                  </Link>
                  <a href={practiceInfo.contact.phoneLink} className="phone-link">
                    Or call {practiceInfo.contact.phone}
                  </a>
                </div>

                <div className="sidebar-card">
                  <h3>Other Services</h3>
                  <ul className="services-list">
                    {otherServices.map(s => (
                      <li key={s.id}>
                        <Link to={`/services/${s.id}`}>{s.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <Link to="/services" className="view-all">
                    View all services
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ServiceDetailPage
