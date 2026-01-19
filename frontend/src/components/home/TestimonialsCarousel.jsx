import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedTestimonials } from '../../data/testimonials'
import './TestimonialsCarousel.css'

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
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

function TestimonialsCarousel() {
  const testimonials = getFeaturedTestimonials()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index) => {
    setActiveIndex(index)
  }

  const goToPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  const goToNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    )
  }

  return (
    <section className="testimonials-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Real experiences from patients who have trusted us with their care
          </p>
        </div>

        <div className="testimonials-carousel">
          <button
            className="carousel-btn prev"
            onClick={goToPrev}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className="carousel-track">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-slide ${index === activeIndex ? 'active' : ''}`}
                aria-hidden={index !== activeIndex}
              >
                <div className="testimonial-content">
                  <StarRating rating={testimonial.rating} />
                  <blockquote className="testimonial-text">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="testimonial-author">
                    <span className="author-name">{testimonial.author}</span>
                    <span className="author-location">{testimonial.location}</span>
                  </div>
                  <span className="testimonial-service">{testimonial.service}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn next"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>

        <div className="testimonials-cta">
          <Link to="/testimonials" className="btn btn-outline">
            Read More Testimonials
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel
