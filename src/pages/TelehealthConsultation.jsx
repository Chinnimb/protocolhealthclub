import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import MotionLink from '../components/MotionLink'
import Footer from '../components/Footer'

function Section({ title, children }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-bold text-[#1a1a1a] md:text-xl">{title}</h2>
      <div className="flex flex-col gap-3 text-sm leading-relaxed text-[#4a4a4a] md:text-base">{children}</div>
    </div>
  )
}

export default function TelehealthConsultation() {
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
        <h1 className="mt-2 break-words text-3xl font-bold leading-tight text-[#1a1a1a] md:text-5xl">
          Authorization and Consent to Participate in Telemedicine/Telehealth Consultation
        </h1>

        <div className="mt-10 flex flex-col gap-8">
          <Section title="Nature of Telemedicine Consultation">
            <p>
              During the telemedicine consultation: Details of you and/or your medical history, examinations, and
              laboratory tests will be discussed with other health professionals through the use of interactive
              video, audio and telecommunications technology. Physical examination of you may take place. Nonmedical
              technical personnel may be present in the telemedicine studio to aid in video transmission. Video,
              audio, and/or digital photo may be recorded during the telemedicine consultation visit.
            </p>
          </Section>

          <Section title="Medical Information and Records">
            <p>
              All existing laws regarding your access to medical information and copies of your medical records
              apply to this telemedicine consultation. Additionally, dissemination of any patient-identifiable
              images or information from this telemedicine interaction to researchers or other entities shall not
              occur without your consent, unless authorized under existing confidentiality laws. By agreeing to this
              document, you agree to allow Protocol Health Club to share your results and information with your
              coaching company, if your bloodwork was paid for by the coaching company.
            </p>
          </Section>

          <Section title="Confidentiality">
            <p>
              Reasonable and appropriate efforts have been made to eliminate any confidentiality risks associated
              with the telemedicine consultation. All existing confidentiality protections under federal and state
              law apply to information disclosed during this telemedicine consultation.
            </p>
          </Section>

          <Section title="Risks and Benefits">
            <p>
              The benefits of telemedicine include having access to medical specialists and additional medical
              information and education without having to travel outside of your local health care community. A
              potential risk of telemedicine is that because of your specific medical condition, or due to technical
              problems, a face-to-face consultation still may be necessary after the telemedicine appointment.
              Additionally, in rare circumstances, security protocols could fail causing a breach of patient privacy.
              The alternative to telemedicine consultation is a face-to-face visit with a physician.
            </p>
          </Section>
        </div>

        <div className="mt-10 flex flex-col gap-4 text-sm leading-relaxed text-[#4a4a4a] md:text-base">
          <p>
            I understand that by submitting an application to book a sales call, I am providing written instructions
            authorizing PROTOCOL HEALTH CLUB, LLC and its affiliates to obtain my personal credit profile or other
            information from credit reporting agencies under the Fair Credit Reporting Act (FCRA) solely to conduct
            a credit pre-qualification. I further understand that this is a soft inquiry and will not impact my
            credit score in any way whatsoever.
          </p>
          <p className="uppercase tracking-[1px] text-[#8a8a8a]">© Copyright Protocol Health 2026, All Rights Reserved</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
