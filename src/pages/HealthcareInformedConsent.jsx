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

function List({ items }) {
  return (
    <ul className="flex flex-col gap-2 pl-5">
      {items.map((item, i) => (
        <li key={i} className="list-disc">{item}</li>
      ))}
    </ul>
  )
}

export default function HealthcareInformedConsent() {
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
        <h1 className="mt-2 text-3xl font-bold leading-tight text-[#1a1a1a] md:text-5xl">Healthcare Informed Consent</h1>

        <div className="mt-10 flex flex-col gap-8">
          <Section title="User's Acknowledgment and Acceptance of Terms">
            <p>
              I understand by signing this Health Care Informed Consent ("Consent"), I give my consent to receive
              professional health care services from Protocol Health Club rendered by a health care provider that
              treats me through a telehealth platform. Professional care may include, but not limited to, review of
              information I have provided or questions answered prior to a telehealth examination, a telehealth
              examination or consultation, prescription of medication, and provision of any follow-up care, as
              needed. I understand Protocol Health Club is a telehealth medical practice; and I may receive
              treatment from multiple providers, my protected health information may be shared among the providers
              in connection with my treatment and pursuant to the Practice's privacy policies.
            </p>
            <p>
              I allow Protocol Health Club, from which I receive services, to obtain access to my medication history
              for treatment purposes, through integrative electronic prescribing platforms and/or computer networks
              operated by providers of electronic prescribing services. I understand that I may withhold or withdraw
              my consent regarding access to my medication history through the electronic prescribing platforms
              and/or computer networks per the process described below, which will not affect my ability to receive
              medical care.
            </p>
            <p>
              I understand that the practice of medicine is not an exact science and that diagnosis and treatment
              may involve risk of injury and/or a serious adverse event. I understand that there are risks and
              benefits when receiving any health care services and that the risks and benefits of such care will be
              explained to me and I will have the opportunity to ask my health care providers questions about such
              risks and benefits. Services rendered by Protocol Health Club Providers are not intended to replace
              your primary care medical services.
            </p>
            <p>
              I acknowledge that no guarantees have been made to me regarding the result of a diagnosis or treatment
              provided to me by my Protocol Health Club Provider. As with any other medical services, some patients
              do not respond to prescribed treatment.
            </p>
            <p>
              I have disclosed all my known health conditions, allergies, and medications/supplements I am taking. I
              understand that certain treatment options that I may receive from or medications prescribed to me by
              my Protocol Health Club Practice Provider can be dangerous and may result in medical care that is
              unnecessary if I have misrepresented my current health care condition and status. I have truthfully
              supplied information about my health care condition and status in response to any health related
              questions prior to, during any in-person examination with my Protocol Health Club Provider, and after
              an exam.
            </p>
            <p>
              I understand that the terms herein are contractual and not a mere recital and that I sign to agree
              with this document as my own free act and not of any coercion. The permissions granted herein shall
              begin on the date I agreed to this document and shall remain effective until terminated by me. I
              understand I have the right to withhold/withdraw my consent at any time by submitting a request via
              email to{' '}
              <a href="mailto:support@protocolhealthclub.com" className="text-orange-2 underline">support@protocolhealthclub.com</a>
            </p>
            <p>
              I verify I have read all of the information contained in this Consent. I understand I will have the
              opportunity to ask my Protocol Health Club Provider about anything I have not understood up to this
              point.
            </p>
          </Section>

          <Section title="Terms and Conditions of Payment">
            <p>
              Receipt of health care services from Protocol Health Club and a Protocol Health Club Provider and your
              use of the Protocol Health Club, LLC Internet Platform (the "Platform") in connection with such health
              care services, constitutes an ongoing agreement to these Terms and Conditions of Payment (the "Terms
              and Conditions"). Capitalized terms used herein but not otherwise defined shall have the meaning given
              to such terms in the above Health Care Services Consent.
            </p>
          </Section>

          <Section title="Insurance not Accepted; Your Responsibility For Payment">
            <p>
              Patients residing in New York and New Jersey have the right under their respective state patient
              billing laws to request an itemized price list from Protocol Health Club for their laboratory tests.
            </p>
            <p className="font-semibold text-[#233038]">
              PLEASE NOTE THE ARBITRATION REQUIREMENT AND CLASS ACTION WAIVER SET FORTH BELOW, WHICH REQUIRES YOU TO
              ARBITRATE ANY CLAIMS YOU MAY HAVE AGAINST US ON AN INDIVIDUAL BASIS, SUBJECT TO SOME LIMITED
              EXCEPTIONS. ARBITRATION ON AN INDIVIDUAL BASIS MEANS THAT YOU WILL NOT HAVE, AND YOU WAIVE, THE RIGHT
              FOR A JUDGE OR JURY TO DECIDE YOUR CLAIMS, AND THAT YOU MAY NOT PROCEED IN A CLASS, CONSOLIDATED, OR
              REPRESENTATIVE CAPACITY. PLEASE CAREFULLY REVIEW THE SECTION ON "DISPUTE RESOLUTION AND AGREEMENT TO
              ARBITRATE" FOR MORE INFORMATION.
            </p>
            <p>
              Certain areas, features, or functionality of the Services may be subject to different or additional
              terms, rules, guidelines or policies ("Additional Rules"), and we may provide such Additional Rules to
              you via postings, pop-up notices, links, or any other means at the time that you access or use the
              relevant area, feature or functionality. From time to time, such Additional Rules may conflict with
              these Terms. In the event of such a conflict, the Additional Rules will control. Any reference to the
              "Terms" in this agreement includes the Additional Rules.
            </p>
            <p>
              These Terms of Use are effective as of August 1, 2024. We reserve the right to change these Terms of
              Use from time to time without notice to you. You acknowledge and agree that it is your responsibility
              to review these Terms of Use periodically and to be aware of any modifications. Your continued use of
              the Services after such modifications will constitute your acknowledgment of the modified Terms of Use
              and agreement to abide and be bound by the modified Terms of Use.
            </p>
            <p>
              As used in these Terms of Use, references to our "Affiliates" include our owners, subsidiaries,
              affiliated companies, officers, directors, suppliers, partners, sponsors, and advertisers, and includes
              (without limitation) all parties involved in creating, producing, and/or delivering the Services
              and/or any services provided by us.
            </p>
          </Section>

          <Section title="Miscellaneous">
            <p>
              Any and all controversies, claims, or disputes arising out of, relating to, or resulting from these
              Terms and Conditions of Payment shall be subject to the arbitration provisions as set forth in the
              Terms &amp; Conditions at www.protocolhealthclub.com. The provisions of these Terms and Conditions of
              Payment shall be severable, and if any provisions shall be prohibited by law, invalid, or unenforceable
              in whole or in part for any reason, the remaining provisions shall remain in full force and effect.
              The virtual consultation will be recorded by the provider to ensure protection and accuracy with HIPAA
              compliance and company policies.
            </p>
          </Section>

          <Section title="Hormone Therapy Information">
            <p>
              The following information is provided to assist you with making an informed decision regarding the
              use of testosterone or other hormone therapies (which include but are not limited to testosterone
              cypionate, human chorionic gonadotropin (hCG), and anastrozole) which may be prescribed to you by a
              Protocol Health Club practitioner during the course of your treatments.
            </p>

            <h3 className="mt-1 text-base font-semibold text-[#233038]">
              1. Testosterone is a controlled medication with risks and benefits. Some potential benefits of
              testosterone and other hormone therapies include:
            </h3>
            <List
              items={[
                'Improvement in energy',
                'Improvement in sexual desire',
                'Decrease in fatigue',
                'Improvement in depressive symptoms',
                'Increase in muscle mass',
                'Increase in bone density',
              ]}
            />

            <h3 className="mt-2 text-base font-semibold text-[#233038]">
              2. Some known or potential risks of testosterone therapy and other hormone therapies, include (but are
              not limited to):
            </h3>
            <List
              items={[
                'Worsening of cholesterol (in particular, "good" HDL)',
                'Increases in hematocrit (blood thickness)',
                'Breast tissue growth, swelling, or tenderness (gynecomastia)',
                'Elevated blood pressure',
                'Water retention or swelling of arms or legs (edema)',
                'Blood clots in the legs, lungs, or brain',
                'Increased risk of cardiovascular or cerebrovascular events',
                'Lowering of sperm counts, possibly to the point of infertility',
                'Acne and male pattern baldness',
                'Reduced testicular size',
                'Skin-to-skin transference to a partner or child (topical therapy)',
                'Skin irritation (topical therapy)',
                'Prostate cancer progression',
                'Breast cancer progression',
                'Liver dysfunction (oral therapy)',
                'Potential for abuse and dependence',
              ]}
            />

            <p>
              I understand that during the course of treatment I may or may not feel or develop any of these
              benefits and/or risks and that I will have the opportunity to further discuss these potential benefits
              and risks with my provider. Hormone therapy requires close monitoring and regular examinations during
              the course of my treatment. I therefore agree to have the appropriate laboratory testing and
              examinations as recommended.
            </p>
            <p>
              There is some risk of enhancing an existing current prostate cancer to grow more rapidly. For this
              reason, a prostate specific antigen blood test is to be done before starting testosterone therapy and
              will be conducted at a minimum each year thereafter. If there is any question about possible prostate
              cancer, a follow-up with an ultrasound of the prostate gland may be required as well as a referral to
              a qualified specialist. While urinary symptoms typically improve with testosterone, rarely they may
              worsen, or worsen before improving.
            </p>
            <p>
              Testosterone therapy may increase one's hemoglobin and hematocrit or thicken one's blood. This problem
              can be diagnosed with a blood test. Thus, a complete blood count (Hemoglobin and Hematocrit) should be
              done at least annually.
            </p>
            <p>
              Hormone therapy may require having a therapeutic phlebotomy performed if hematocrit levels become too
              high, and I agree to follow these requirements if needed. I also understand that I will only be
              eligible to continue receiving the medication(s) if I am up to date with my examinations, laboratory
              work, and any necessary therapeutic phlebotomies.
            </p>
            <p>
              I agree to proceed with treatment understanding that testosterone may cause an increase in prostate
              size and increase in PSA levels. Patients are required to undergo PSA blood testing and digital rectal
              exam (when clinically appropriate) on a routine basis as recommended by your provider. Testosterone
              restoration is contraindicated in patients undergoing active prostate cancer treatment or known
              prostate cancer (with some exceptions as agreed upon by patient and provider).
            </p>
          </Section>

          <Section title="Additional Therapies">
            <p>
              <span className="font-semibold text-[#233038]">Aromatase Inhibitors (Anastrozole) utilization:</span>{' '}
              Although the prime indication for these types of medications is in the treatment of breast cancer in
              women, there is increasing utilization of this medication in men. Aging men, men who are overweight,
              and those who are genetically predisposed can have "estrogen excess" due to converting (aromatization)
              too much of their testosterone to estrogen. Our fat cells contain the enzyme "aromatase" which
              promotes this conversion. This estrogen conversion can lower a man's testosterone levels but also
              cause estrogen to spike to higher levels causing negative consequences and side effects. Estrogen
              excess can cause gynecomastia (breast enlargement), hot flashes and night sweats, infertility,
              impotence, mood changes, prostate enlargement and increased risk for prostate cancer.
            </p>
            <p>
              Peptides are small chains of amino acids that can have biological activity. They are mostly naturally
              occurring. Some peptides are FDA approved for the treatment of certain diseases. Other peptides used
              clinically are prepared by duly registered compounding pharmacies complying with all state and federal
              laws. Peptides can be administered in various presentations, including but not limited to oral,
              intravenous, subcutaneous, intramuscular and intranasal routes. As with any other drug, peptide
              therapies can have side effects, including but not limited to: nausea, vomiting, fever, injection site
              reactions (pain, rash, bleeding), allergies, including life threatening allergies, and any additional
              side effects not listed.
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
