export const mainNavigation = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'Dr Bala', path: '/about/dr-bala' },
      { label: 'Our Practice', path: '/about/practice' }
    ]
  },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Wisdom Teeth Removal', path: '/services/wisdom-teeth' },
      { label: 'Dental Implants', path: '/services/dental-implants' },
      { label: 'Tooth Extractions', path: '/services/tooth-extractions' },
      { label: 'Bone Grafting', path: '/services/bone-grafting' },
      { label: 'Impacted Teeth', path: '/services/impacted-teeth' },
      { label: 'Oral Pathology', path: '/services/oral-pathology' },
      { label: 'TMJ Treatment', path: '/services/tmj-treatment' },
      { label: 'Trauma Surgery', path: '/services/trauma-surgery' }
    ]
  },
  {
    label: 'Patient Info',
    path: '/patient-info',
    children: [
      { label: 'Before Surgery', path: '/patient-info/before-surgery' },
      { label: 'After Surgery', path: '/patient-info/after-surgery' },
      { label: 'FAQs', path: '/patient-info/faqs' }
    ]
  },
  {
    label: 'Blog',
    path: '/blog'
  },
  {
    label: 'For Dentists',
    path: '/for-dentists'
  },
  {
    label: 'Contact',
    path: '/contact'
  }
]

export const footerNavigation = {
  services: [
    { label: 'Wisdom Teeth Removal', path: '/services/wisdom-teeth' },
    { label: 'Dental Implants', path: '/services/dental-implants' },
    { label: 'Tooth Extractions', path: '/services/tooth-extractions' },
    { label: 'Bone Grafting', path: '/services/bone-grafting' },
    { label: 'View All Services', path: '/services' }
  ],
  quickLinks: [
    { label: 'About Dr Bala', path: '/about/dr-bala' },
    { label: 'Patient Information', path: '/patient-info' },
    { label: 'Referral Portal', path: '/for-dentists' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' }
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy-policy' }
  ]
}

export default { mainNavigation, footerNavigation }
