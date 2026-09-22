import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import HealthcareInformedConsent from './pages/HealthcareInformedConsent'
import CoachingConsent from './pages/CoachingConsent'
import TelehealthConsultation from './pages/TelehealthConsultation'
import HipaaAuthorization from './pages/HipaaAuthorization'

// The whole Protocols/products section is temporarily taken down at the
// client's request (Sam Beckmann, 2026-09-22) — send any link into it back
// to the homepage instead of rendering the products pages.
function ProductsRedirect() {
  return <Navigate to="/" replace />
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/products" element={<ProductsRedirect />} />
        <Route path="/products/:categorySlug" element={<ProductsRedirect />} />
        <Route path="/products/:categorySlug/:productSlug" element={<ProductsRedirect />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-cancel" element={<RefundPolicy />} />
        <Route path="/healthcare-informed-consent" element={<HealthcareInformedConsent />} />
        <Route path="/coaching-consent" element={<CoachingConsent />} />
        <Route path="/telemedicine-telehealth-consultation" element={<TelehealthConsultation />} />
        <Route path="/hipaa-authorization" element={<HipaaAuthorization />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
