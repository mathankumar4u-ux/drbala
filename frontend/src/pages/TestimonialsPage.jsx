import { Link } from 'react-router-dom'
import SEOHead from '../components/common/SEOHead'
import { testimonials } from '../data/testimonials'
import './TestimonialsPage.css'

function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`star ${i < rating ? 'filled' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

function TestimonialsPage() {
  return (
    <>
      <SEOHead
        title="Patient Testimonials"
        description="Read what our patients say about their experience at OralSurgeon.Care. Real reviews from wisdom teeth removal, dental implant, and oral surgery patients."
        canonicalUrl="/testimonials"
      />

      <div className="testimonials-page">
        <section className="page-header">
          <div className="container">
            <h1>Patient Testimonials</h1>
            <p>Real experiences from patients who have trusted us with their care</p>
          </div>
        </section>

        <section className="testimonials-content section">
          <div className="container">
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <StarRating rating={testimonial.rating} />
                  <blockquote className="testimonial-text">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="testimonial-footer">
                    <div className="author-info">
                      <span className="author-name">{testimonial.author}</span>
                      <span className="author-location">{testimonial.location}</span>
                    </div>
                    <span className="service-tag">{testimonial.service}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="testimonials-cta">
              <h2>Ready to Experience Our Care?</h2>
              <p>
                Join our community of satisfied patients. Book a consultation
                with Dr Bala today.
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

export default TestimonialsPage
