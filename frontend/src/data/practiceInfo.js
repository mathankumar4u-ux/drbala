export const practiceInfo = {
  name: 'OralSurgeon.Care',
  tagline: 'Expert Oral Surgery Care in Melbourne',
  description: 'Moorabbin Oral Surgery has been providing top-notch oral surgery care to the Bayside community, south eastern suburbs and western suburbs for over two decades. Our experienced surgeons are dedicated to making your procedure as comfortable and stress-free as possible.',

  contact: {
    phone: '(03) 9555 5960',
    phoneLink: 'tel:+61395555960',
    fax: '(03) 9555 4833',
    email: 'admin@oralsurgeon.care',
    emailLink: 'mailto:admin@oralsurgeon.care'
  },

  address: {
    street: '510 South Road',
    suburb: 'Moorabbin',
    state: 'VIC',
    postcode: '3189',
    country: 'Australia',
    full: '510 South Road, Moorabbin VIC 3189',
    googleMapsUrl: 'https://maps.google.com/?q=510+South+Road+Moorabbin+VIC+3189'
  },

  hours: {
    weekdays: '9:00 AM - 5:00 PM',
    saturday: 'Closed',
    sunday: 'Closed',
    detailed: [
      { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Saturday', hours: 'Closed' },
      { day: 'Sunday', hours: 'Closed' }
    ]
  },

  facilities: [
    'Free parking available',
    'Wheelchair accessible',
    'Modern surgical facilities',
    'On-site X-ray equipment'
  ],

  social: {
    facebook: 'https://www.facebook.com/Moorabbin-Oral-Surgery-604029896397508'
  }
}

export const doctorInfo = {
  name: 'Dr Balanand Subramanian',
  shortName: 'Dr Bala',
  title: 'Specialist Oral Surgeon',
  qualifications: ['BDS', 'MDS'],
  experience: '10+ years',

  languages: ['English', 'Hindi', 'Tamil'],

  memberships: [
    'Fellow of the International College of Dentists (ICD)',
    'Pierre Fauchard Academy nominee'
  ],

  hospitalAffiliations: [
    {
      name: 'Sir John Monash Private Hospital',
      location: 'Clayton'
    },
    {
      name: 'Royal Dental Hospital of Melbourne',
      location: 'Carlton'
    },
    {
      name: 'Holmesglen Private Hospital',
      location: 'Moorabbin'
    }
  ],

  bio: `Dr Balanand Subramanian is a highly qualified Specialist Oral Surgeon with over a decade of experience in providing comprehensive oral surgical care. He has undergone extensive training and has worked in some of the most prestigious medical institutions in Australia and overseas.

Dr Bala has been carefully selected for his outstanding qualifications and exceptional track record. He has honed his skills in advanced surgical techniques and is committed to providing the highest quality care to his patients.

His nomination to join the prestigious Pierre Fauchard Academy Inc. and his Fellowship with the International College of Dentists are testaments to his dedication to excellence in oral surgery.

Dr Bala takes the time to listen to patient concerns, explains treatment options clearly, and works with each patient to develop a tailored treatment plan. His compassionate approach and attention to detail have earned him the trust and respect of his patients.`,

  expertise: [
    'Wisdom teeth removal',
    'Dental implant placement',
    'Tooth extractions',
    'Bone grafting for implants',
    'Exposure of impacted teeth',
    'Oral pathology assessment',
    'TMJ pain evaluation and treatment',
    'Trauma surgery',
    'Soft tissue disorders',
    'Salivary gland disorders'
  ]
}

export default { practiceInfo, doctorInfo }
