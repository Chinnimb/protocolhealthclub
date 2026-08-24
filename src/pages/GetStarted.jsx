import GetStartedHero from '../components/getstarted/GetStartedHero'
import WhatHappensNext from '../components/getstarted/WhatHappensNext'
import ChooseLabPanel from '../components/getstarted/ChooseLabPanel'
import QuoteWhy from '../components/getstarted/QuoteWhy'
import Footer from '../components/Footer'

export default function GetStarted() {
  return (
    <div className="relative min-h-screen bg-cream text-ink">
      <GetStartedHero />
      <WhatHappensNext />
      <ChooseLabPanel />
      <QuoteWhy />
      <Footer />
    </div>
  )
}
