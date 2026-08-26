import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import MotionLink from '../components/MotionLink'
import Footer from '../components/Footer'

const sections = [
  {
    title: '1. Purpose of This Authorization',
    body: 'If your bloodwork was arranged for and paid for by a third-party coaching company as part of its coaching offer, that company may need certain of your health information to coordinate your coaching program with the care you receive from Protocol Health Club.',
  },
  {
    title: '2. Coaching Company Receiving the Information',
    body: 'Protocol Health Club will share the information described below with the coaching company that arranged for and paid for the patient’s bloodwork as part of its coaching offer.',
  },
  {
    title: '3. Information to Be Disclosed',
    body: null,
  },
  {
    title: '4. Purpose of the Disclosure',
    body: 'To allow the coaching company to coordinate and support the coaching services it provides to you in connection with the bloodwork or program it has arranged or paid for.',
  },
  {
    title: '5. Expiration',
    body: 'This Authorization will remain in effect for the duration of your active coaching program with the coaching company that arranged and paid for the patient’s bloodwork, or for one (1) year from the effective date of this Authorization, whichever occurs first, unless revoked sooner in writing.',
  },
  {
    title: '6. Your Right to Revoke',
    body: 'You may revoke this Authorization at any time by submitting a written request to Protocol Health Club’s Privacy Officer.',
  },
  {
    title: '7. Redisclosure Notice',
    body: 'Once your health information is disclosed to the coaching company under this Authorization, federal privacy law (HIPAA) may no longer protect it, and the coaching company may not be required by HIPAA to safeguard it in the same manner as Protocol Health Club.',
  },
  {
    title: '8. Voluntary Authorization',
    body: 'Your decision to sign this Authorization is voluntary. Protocol Health Club will not condition your treatment, payment, enrollment, or eligibility for benefits on whether you sign this Authorization, except to the extent your bloodwork or program was specifically arranged for and paid for by the coaching company that arranged and paid for the bloodwork, and sharing this information is necessary for the coaching company to continue that arrangement.',
  },
]

export default function CoachingConsent() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen bg-cream text-ink">
      <header className="flex w-full items-center justify-between px-6 py-6 md:px-10">
        <motion.button
          type="button"
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-orange-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </motion.button>

        <MotionLink
          to="/get-started"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-orange rounded-[20px] px-4 py-2 text-sm font-medium text-white"
        >
          Get Started
        </MotionLink>
      </header>

      <main className="mx-auto max-w-[820px] px-6 py-10 md:px-10 md:py-16">
        <p className="text-xs font-extrabold uppercase tracking-[2.2px] text-orange-2">Legal</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-[#1a1a1a] md:text-5xl">
          Authorization to Disclose Protected Health Information to Coaching Company
        </h1>

        <div className="mt-8 flex flex-col gap-4 text-sm leading-relaxed text-[#4a4a4a] md:text-base">
          <p>
            This Authorization is separate from, and in addition to, the general consents you have signed to
            receive care from Protocol Health Club.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h2 className="text-lg font-bold text-[#1a1a1a] md:text-xl">{section.title}</h2>
              <div className="flex flex-col gap-3 text-sm leading-relaxed text-[#4a4a4a] md:text-base">
                {section.title.startsWith('3.') ? (
                  <>
                    <p>Protocol Health Club may share:</p>
                    <ul className="flex flex-col gap-2 pl-5">
                      <li className="list-disc">Bloodwork information.</li>
                      <li className="list-disc">Details about supplements, peptides, or therapies the patient will undergo.</li>
                      <li className="list-disc">Information relevant for coaching support.</li>
                    </ul>
                    <p>
                      No other information will be shared. This Authorization does NOT extend to psychotherapy notes
                      or to any information beyond what is specifically identified above, unless separately
                      authorized in writing.
                    </p>
                  </>
                ) : (
                  <p>{section.body}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 uppercase tracking-[1px] text-[#8a8a8a] text-sm">© Copyright Protocol Health 2026, All Rights Reserved</p>
      </main>

      <Footer />
    </div>
  )
}
