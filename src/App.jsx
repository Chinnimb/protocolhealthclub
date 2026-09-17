import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import AllProtocols from './pages/AllProtocols'
import CategoryProducts from './pages/CategoryProducts'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import HealthcareInformedConsent from './pages/HealthcareInformedConsent'
import CoachingConsent from './pages/CoachingConsent'
import TelehealthConsultation from './pages/TelehealthConsultation'
import HipaaAuthorization from './pages/HipaaAuthorization'

// Individual product pages are temporarily hidden while the new content
// (benefits, how-it-works, video) is being designed — send any direct link
// back to the category grid instead of rendering the product page.
function ProductDetailRedirect() {
  const { categorySlug } = useParams()
  return <Navigate to={`/products/${categorySlug}`} replace />
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/products" element={<AllProtocols />} />
        <Route path="/products/:categorySlug" element={<CategoryProducts />} />
        <Route path="/products/:categorySlug/:productSlug" element={<ProductDetailRedirect />} />
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
