import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import HealthcareInformedConsent from './pages/HealthcareInformedConsent'
import CoachingConsent from './pages/CoachingConsent'
import TelehealthConsultation from './pages/TelehealthConsultation'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-cancel" element={<RefundPolicy />} />
        <Route path="/healthcare-informed-consent" element={<HealthcareInformedConsent />} />
        <Route path="/coaching-consent" element={<CoachingConsent />} />
        <Route path="/telemedicine-telehealth-consultation" element={<TelehealthConsultation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
