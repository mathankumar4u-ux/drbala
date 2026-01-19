export const testimonials = [
  {
    id: 1,
    text: "Dr Bala made my wisdom teeth removal completely stress-free. He explained everything clearly beforehand and the procedure was much easier than I expected. Professional and caring from start to finish.",
    author: "J.M.",
    location: "Moorabbin",
    rating: 5,
    service: "Wisdom Teeth Removal",
    featured: true
  },
  {
    id: 2,
    text: "Excellent care during my dental implant procedure. Dr Bala took the time to answer all my questions and made sure I was comfortable throughout. Highly recommend for anyone needing oral surgery.",
    author: "S.K.",
    location: "Brighton",
    rating: 5,
    service: "Dental Implants",
    featured: true
  },
  {
    id: 3,
    text: "After being nervous about having teeth removed for years, Dr Bala and his team put me completely at ease. The extraction was quick and painless, and recovery was faster than expected.",
    author: "M.T.",
    location: "Bentleigh",
    rating: 5,
    service: "Tooth Extractions",
    featured: true
  },
  {
    id: 4,
    text: "Dr Bala performed bone grafting surgery to prepare me for implants. His expertise and attention to detail gave me confidence in the treatment. The results have been excellent.",
    author: "R.P.",
    location: "Hampton",
    rating: 5,
    service: "Bone Grafting",
    featured: false
  },
  {
    id: 5,
    text: "My son needed surgery to expose an impacted canine. Dr Bala coordinated perfectly with our orthodontist and the procedure went smoothly. Very professional and gentle with young patients.",
    author: "L.H.",
    location: "Cheltenham",
    rating: 5,
    service: "Impacted Teeth",
    featured: true
  },
  {
    id: 6,
    text: "I had been suffering from TMJ pain for months. Dr Bala thoroughly assessed my condition and provided effective treatment. The improvement in my quality of life has been remarkable.",
    author: "A.C.",
    location: "Sandringham",
    rating: 5,
    service: "TMJ Treatment",
    featured: false
  },
  {
    id: 7,
    text: "Dr Bala removed all four wisdom teeth under sedation. I don't remember a thing and woke up with minimal discomfort. The follow-up care was excellent too.",
    author: "D.W.",
    location: "Highett",
    rating: 5,
    service: "Wisdom Teeth Removal",
    featured: false
  },
  {
    id: 8,
    text: "As a referring dentist, I have complete confidence in Dr Bala's surgical skills. My patients consistently report positive experiences and excellent outcomes. Highly recommended specialist.",
    author: "Dr N.S.",
    location: "Mentone",
    rating: 5,
    service: "General",
    featured: true
  }
]

export const getFeaturedTestimonials = () => testimonials.filter(t => t.featured)

export const getTestimonialsByService = (service) =>
  testimonials.filter(t => t.service === service)

export default testimonials
