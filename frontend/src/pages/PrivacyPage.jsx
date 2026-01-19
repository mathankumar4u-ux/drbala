import SEOHead from '../components/common/SEOHead'
import { practiceInfo } from '../data/practiceInfo'
import './PrivacyPage.css'

function PrivacyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Privacy policy for OralSurgeon.Care. Learn how we collect, use, and protect your personal and health information."
        canonicalUrl="/privacy-policy"
        noIndex={true}
      />

      <div className="privacy-page">
        <section className="page-header">
          <div className="container">
            <h1>Privacy Policy</h1>
            <p>How we handle your personal information</p>
          </div>
        </section>

        <section className="privacy-content section">
          <div className="container">
            <div className="privacy-text">
              <p className="last-updated">Last updated: January 2024</p>

              <h2>Introduction</h2>
              <p>
                {practiceInfo.name} is committed to protecting your privacy and ensuring
                the security of your personal and health information. This Privacy Policy
                explains how we collect, use, disclose, and protect your information in
                accordance with the Privacy Act 1988 (Cth) and the Australian Privacy
                Principles (APPs).
              </p>

              <h2>Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, address, phone number,
                  email address, date of birth, Medicare number, private health insurance
                  details.
                </li>
                <li>
                  <strong>Health Information:</strong> Medical history, dental records,
                  X-rays, treatment plans, medications, allergies, and other health-related
                  information necessary for your care.
                </li>
                <li>
                  <strong>Payment Information:</strong> Credit card details, billing
                  address, and payment history.
                </li>
                <li>
                  <strong>Website Usage:</strong> If you use our website, we may collect
                  information about your visit, including IP address, browser type, and
                  pages visited.
                </li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Provide you with oral surgery and dental care services</li>
                <li>Communicate with you about appointments, treatment, and follow-up care</li>
                <li>Process payments and manage billing</li>
                <li>Communicate with your referring dentist and other healthcare providers</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and patient experience</li>
              </ul>

              <h2>Disclosure of Your Information</h2>
              <p>We may disclose your information to:</p>
              <ul>
                <li>Healthcare providers involved in your care (with your consent)</li>
                <li>Your referring dentist</li>
                <li>Health funds for insurance claims processing</li>
                <li>Government agencies when required by law</li>
                <li>Third-party service providers who assist with our operations (under strict confidentiality)</li>
              </ul>
              <p>
                We will not sell, rent, or trade your personal information to third parties
                for marketing purposes.
              </p>

              <h2>Data Security</h2>
              <p>
                We take reasonable steps to protect your personal and health information
                from misuse, interference, loss, unauthorised access, modification, or
                disclosure. This includes:
              </p>
              <ul>
                <li>Secure electronic systems with access controls</li>
                <li>Secure storage of physical records</li>
                <li>Staff training on privacy obligations</li>
                <li>Regular security reviews</li>
              </ul>

              <h2>Access and Correction</h2>
              <p>
                You have the right to access and request correction of your personal
                information held by us. To make a request, please contact our practice
                directly. We may require you to verify your identity before providing
                access.
              </p>

              <h2>Retention of Records</h2>
              <p>
                Health records are retained in accordance with legal requirements, which
                generally require us to keep records for at least 7 years from the date
                of last treatment, or in the case of minors, until they turn 25.
              </p>

              <h2>Website and Cookies</h2>
              <p>
                Our website may use cookies to improve your browsing experience. Cookies
                are small files stored on your device. You can configure your browser to
                refuse cookies, but this may affect your ability to use some features
                of our website.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not
                responsible for the privacy practices of these websites. We encourage
                you to read their privacy policies.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be
                posted on our website with a new effective date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to make a privacy
                complaint, please contact us:
              </p>
              <div className="contact-details">
                <p>
                  <strong>{practiceInfo.name}</strong><br />
                  {practiceInfo.address.full}<br />
                  Phone: {practiceInfo.contact.phone}<br />
                  Email: {practiceInfo.contact.email}
                </p>
              </div>
              <p>
                If you are not satisfied with our response to your complaint, you may
                contact the Office of the Australian Information Commissioner (OAIC) at{' '}
                <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">
                  www.oaic.gov.au
                </a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PrivacyPage
