import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import SEOHead from '../components/common/SEOHead'
import { practiceInfo } from '../data/practiceInfo'
import './PatientInfoPage.css'

const beforeSurgeryInfo = {
  title: 'Before Your Surgery',
  sections: [
    {
      title: 'Before Your Appointment',
      items: [
        'Complete any paperwork or forms sent to you in advance',
        'Arrange for someone to drive you home after the procedure',
        'Wear comfortable, loose-fitting clothing',
        'Remove jewellery and avoid wearing makeup or nail polish',
        'Bring a list of your current medications',
        'Bring your Medicare card and private health insurance details'
      ]
    },
    {
      title: 'Fasting Instructions',
      items: [
        'If receiving sedation or general anaesthesia, do not eat or drink anything for 6 hours before your appointment',
        'For procedures under local anaesthesia only, you may eat a light meal beforehand',
        'Continue taking regular medications with a small sip of water unless advised otherwise'
      ]
    },
    {
      title: 'Medications',
      items: [
        'Inform us of all medications you are taking, including supplements and herbal remedies',
        'Blood thinners (Aspirin, Warfarin, etc.) may need to be stopped - discuss with your doctor',
        'Continue blood pressure and heart medications unless specifically advised otherwise',
        'If you take diabetic medication, discuss timing with us beforehand'
      ]
    }
  ]
}

const afterSurgeryInfo = {
  title: 'After Your Surgery',
  sections: [
    {
      title: 'Immediately After Surgery',
      items: [
        'Bite firmly on the gauze pad for 30-45 minutes to control bleeding',
        'Do not rinse, spit, or use a straw for 24 hours',
        'Apply ice packs to your face (20 minutes on, 20 minutes off)',
        'Rest for the remainder of the day',
        'Keep your head elevated when lying down'
      ]
    },
    {
      title: 'Managing Discomfort',
      items: [
        'Take prescribed pain medication as directed before the anaesthetic wears off',
        'Anti-inflammatory medications (like Ibuprofen) help reduce swelling',
        'Apply ice packs for the first 48 hours to minimise swelling',
        'Swelling typically peaks on day 2-3 and then gradually improves'
      ]
    },
    {
      title: 'Diet',
      items: [
        'Start with cool, soft foods like yogurt, smoothies, and pudding',
        'Gradually progress to warmer soft foods as comfort allows',
        'Avoid hot foods and drinks for 24 hours',
        'Do not eat crunchy, hard, or spicy foods until healed',
        'Stay well hydrated but avoid using straws'
      ]
    },
    {
      title: 'Oral Hygiene',
      items: [
        'Do not rinse or brush for 24 hours after surgery',
        'After 24 hours, gently rinse with warm salt water (1/2 teaspoon salt in a cup of water)',
        'Brush teeth normally but avoid the surgical area',
        'Do not use mouthwash containing alcohol until healed'
      ]
    },
    {
      title: 'Activity',
      items: [
        'Rest for 24-48 hours after surgery',
        'Avoid strenuous activity and exercise for at least 1 week',
        'Do not smoke for at least 48 hours (ideally longer) to prevent dry socket',
        'Avoid alcohol while taking pain medication'
      ]
    }
  ]
}

const faqs = [
  {
    question: 'Do I need a referral to see Dr Bala?',
    answer: 'While a referral from your dentist is helpful and provides us with important information, it is not always required. You are welcome to contact us directly to book a consultation.'
  },
  {
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring any X-rays or scans you have, a list of your current medications, your Medicare card, and private health insurance details if applicable. If you have a referral letter, please bring that too.'
  },
  {
    question: 'How long does wisdom teeth surgery take?',
    answer: 'The procedure typically takes 30-60 minutes for all four wisdom teeth. You should allow about 2 hours total for preparation and recovery time at our practice.'
  },
  {
    question: 'Will I be asleep during the procedure?',
    answer: 'We offer several anaesthesia options including local anaesthesia, IV sedation, and general anaesthesia. Dr Bala will discuss the best option for your situation during your consultation.'
  },
  {
    question: 'How long is the recovery from wisdom teeth removal?',
    answer: 'Most people can return to work or school within 3-5 days. Complete healing of the extraction sites takes several weeks, but discomfort usually subsides within the first week.'
  },
  {
    question: 'Are dental implants covered by insurance?',
    answer: 'Coverage varies between policies. We recommend checking with your private health insurer about your specific coverage. We can provide item numbers and treatment plans for you to obtain quotes.'
  },
  {
    question: 'How do I care for my mouth after surgery?',
    answer: 'Detailed post-operative instructions will be provided after your procedure. Generally, you should rest, apply ice, eat soft foods, avoid rinsing for 24 hours, and then gently rinse with salt water. Full instructions are available in our Patient Information section.'
  },
  {
    question: 'What if I have a problem after hours?',
    answer: 'For after-hours emergencies, please call our office number and follow the prompts for emergency care. If you experience severe bleeding, difficulty breathing, or swelling that affects your airway, go to your nearest hospital emergency department.'
  }
]

function PatientInfoPage() {
  const { section } = useParams()
  const [openFaq, setOpenFaq] = useState(null)

  const showBefore = !section || section === 'before-surgery'
  const showAfter = !section || section === 'after-surgery'
  const showFaqs = !section || section === 'faqs'

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <SEOHead
        title={section === 'faqs' ? 'FAQs' : section === 'after-surgery' ? 'After Surgery Care' : 'Patient Information'}
        description="Patient information for oral surgery procedures. Before and after surgery instructions, recovery tips, and frequently asked questions."
        canonicalUrl={section ? `/patient-info/${section}` : '/patient-info'}
      />

      <div className="patient-info-page">
        <section className="page-header">
          <div className="container">
            <h1>Patient Information</h1>
            <p>Everything you need to know before and after your procedure</p>
          </div>
        </section>

        <section className="info-content section">
          <div className="container">
            <nav className="info-nav">
              <Link
                to="/patient-info/before-surgery"
                className={section === 'before-surgery' || (!section && true) ? 'active' : ''}
              >
                Before Surgery
              </Link>
              <Link
                to="/patient-info/after-surgery"
                className={section === 'after-surgery' ? 'active' : ''}
              >
                After Surgery
              </Link>
              <Link
                to="/patient-info/faqs"
                className={section === 'faqs' ? 'active' : ''}
              >
                FAQs
              </Link>
            </nav>

            {showBefore && !section?.includes('after') && !section?.includes('faq') && (
              <div className="info-section">
                <h2>{beforeSurgeryInfo.title}</h2>
                {beforeSurgeryInfo.sections.map((sec, index) => (
                  <div key={index} className="info-card">
                    <h3>{sec.title}</h3>
                    <ul>
                      {sec.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {showAfter && section === 'after-surgery' && (
              <div className="info-section">
                <h2>{afterSurgeryInfo.title}</h2>
                {afterSurgeryInfo.sections.map((sec, index) => (
                  <div key={index} className="info-card">
                    <h3>{sec.title}</h3>
                    <ul>
                      {sec.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {showFaqs && section === 'faqs' && (
              <div className="info-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-list">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className={`faq-item ${openFaq === index ? 'is-open' : ''}`}
                    >
                      <button
                        className="faq-question"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={openFaq === index}
                      >
                        {faq.question}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                      </button>
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="info-cta">
              <h3>Have More Questions?</h3>
              <p>Contact us for more information or to book your consultation.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
                <a href={practiceInfo.contact.phoneLink} className="btn btn-outline">
                  Call {practiceInfo.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PatientInfoPage
