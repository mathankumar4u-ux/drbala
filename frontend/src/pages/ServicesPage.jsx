import { Link } from 'react-router-dom'
import SEOHead from '../components/common/SEOHead'
import { services } from '../data/services'
import './ServicesPage.css'

function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Oral Surgery Services"
        description="Comprehensive oral surgery services in Moorabbin, Melbourne. Wisdom teeth removal, dental implants, bone grafting, TMJ treatment, and more. Expert care by Dr Bala."
        canonicalUrl="/services"
      />

      <div className="services-page">
        <section className="page-header">
          <div className="container">
            <h1>Our Services</h1>
            <p>Comprehensive oral surgery services delivered with expertise and care</p>
          </div>
        </section>

        <section className="services-list section">
          <div className="container">
            <div className="services-intro">
              <p>
                Dr Balanand Subramanian provides a full range of oral surgical services
                at our Moorabbin practice. Each procedure is performed with precision
                and care, using the latest techniques to ensure optimal outcomes.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="service-item"
                >
                  <div className="service-item-content">
                    <h2>{service.title}</h2>
                    <p>{service.shortDescription}</p>
                    <span className="learn-more">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="services-cta-section">
          <div className="container">
            <div className="cta-box">
              <h2>Need a Consultation?</h2>
              <p>
                Not sure which treatment is right for you? Book a consultation with
                Dr Bala to discuss your options and create a personalised treatment plan.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ServicesPage
