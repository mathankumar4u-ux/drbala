import { Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import LiveChat from './components/common/LiveChat'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import TestimonialsPage from './pages/TestimonialsPage'
import ReferralPage from './pages/ReferralPage'
import PatientInfoPage from './pages/PatientInfoPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'

function App() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/:section" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/blog/category/:category" element={<BlogPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/for-dentists" element={<ReferralPage />} />
          <Route path="/patient-info" element={<PatientInfoPage />} />
          <Route path="/patient-info/:section" element={<PatientInfoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
      <LiveChat />
    </div>
  )
}

export default App
