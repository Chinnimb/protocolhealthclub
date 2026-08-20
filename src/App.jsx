import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import NormalGap from './components/NormalGap'
import GuidedOptimization from './components/GuidedOptimization'
import HowItWorks from './components/HowItWorks'
import OptimizedLiving from './components/OptimizedLiving'
import Benefits from './components/Benefits'
import ExploreProtocols from './components/ExploreProtocols'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-cream text-ink">
      <Hero />
      <TrustBar />
      <NormalGap />
      <GuidedOptimization />
      <HowItWorks />
      <OptimizedLiving />
      <Benefits />
      <ExploreProtocols />
      <Testimonial />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
