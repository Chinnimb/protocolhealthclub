import MotionLink from '../components/MotionLink'
import Footer from '../components/Footer'
import logoPart1 from '../assets/figma/logo-part1.svg'
import logoPart2 from '../assets/figma/logo-part2.svg'
import logoPart3 from '../assets/figma/logo-part3.svg'

const sections = [
  {
    title: '1. Services and Permissions',
    body: `You may only use our Services if you agree to form a binding contract with Protocol Health and are not a person barred from receiving services under the laws of the applicable jurisdiction. In any case, you must be at least 18 years old to use our Services. If you are agreeing to these Terms on behalf of an organization or entity, you represent and warrant that you are authorized to agree to these Terms on that organization's or entity's behalf and bind them to these Terms (in which case, the references to "you" and "your" in these Terms, except for in this sentence, refer to that organization or entity).`,
  },
  {
    title: '2. Content and Content Rights',
    body: `For purposes of these Terms: (i) "Content" means text, graphics, images, music, software, audio, video, works of authorship of any kind, and information or other materials that are posted, generated, provided or otherwise made available through the Services; and (ii) "User Content" means any Content that account holders (including you) provide to be made available through the Services. Content includes without limitation User Content.`,
  },
  {
    title: '3. Content Ownership, Responsibility and Removal',
    body: `Protocol Health does not claim any ownership rights in any User Content and nothing in these Terms will be deemed to restrict any rights that you may have to use and exploit your User Content. Subject to the foregoing, Protocol Health and its licensors exclusively own all right, title and interest in and to the Services and Content, including all associated intellectual property rights. You acknowledge that the Services and Content are protected by copyright, trademark, and other laws of the United States and foreign countries.`,
  },
  {
    title: '4. Rights in User Content Granted by You',
    body: `By making any User Content available through the Services you grant to Protocol Health a non-exclusive, transferable, worldwide, royalty-free license, with the right to sublicense, to use, copy, modify, create derivative works based upon, distribute, publicly display, and publicly perform your User Content in connection with operating and providing the Services and Content to you and to other users.`,
  },
  {
    title: '5. Rights in Content Granted by Protocol Health',
    body: `Subject to your compliance with these Terms, Protocol Health grants to you a limited, non-exclusive, non-transferable license, with no right to sublicense, to download, view, copy, display and print the Content solely in connection with your permitted use of the Services and solely for your personal and non-commercial purposes.`,
  },
  {
    title: '6. Medical Disclaimer',
    body: `The Services, including any lab testing, protocols, or recommendations, are not intended to diagnose, treat, cure, or prevent any disease and are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read or received through the Services.`,
  },
  {
    title: '7. Account Registration',
    body: `To access certain features of the Services, you may be required to register for an account. You agree to provide accurate, current and complete information during the registration process and to update such information to keep it accurate, current and complete. You are solely responsible for safeguarding your account credentials and for any activity that occurs under your account.`,
  },
  {
    title: '8. Payment and Billing',
    body: `Certain Services are offered on a subscription or one-time payment basis. By providing payment information, you authorize Protocol Health to charge the applicable fees to your chosen payment method. All fees are non-refundable except as expressly stated in our Refund Policy or as required by applicable law.`,
  },
  {
    title: '9. Prohibited Conduct',
    body: `You agree not to misuse the Services. Prohibited conduct includes, without limitation: interfering with or disrupting the Services; attempting to gain unauthorized access to any portion of the Services; using the Services for any unlawful purpose; and impersonating any person or entity.`,
  },
  {
    title: '10. Termination',
    body: `We may suspend or terminate your access to and use of the Services, including suspending access to or terminating your account, at our sole discretion, at any time and without notice to you, including for any violation of these Terms.`,
  },
  {
    title: '11. Warranty Disclaimers',
    body: `THE SERVICES AND CONTENT ARE PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, PROTOCOL HEALTH EXPLICITLY DISCLAIMS ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF ANY COURSE OF DEALING OR USAGE OF TRADE.`,
  },
  {
    title: '12. Limitation of Liability',
    body: `NEITHER PROTOCOL HEALTH NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICES WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR YOUR USE OF THE SERVICES.`,
  },
  {
    title: '13. Indemnification',
    body: `You agree to indemnify and hold harmless Protocol Health and its officers, directors, employees and agents from and against any claims, disputes, demands, liabilities, damages, losses, and costs and expenses arising out of or in any way connected with your access to or use of the Services or your violation of these Terms.`,
  },
  {
    title: '14. Governing Law and Dispute Resolution',
    body: `These Terms and any action related thereto will be governed by the laws of the applicable state without regard to its conflict of laws provisions. Any dispute arising out of or relating to these Terms or the Services will be resolved through binding arbitration, except that either party may bring an individual action in small claims court.`,
  },
  {
    title: '15. Changes to These Terms',
    body: `We may modify these Terms from time to time. If we make material changes, we will provide notice through the Services or by other means. Your continued use of the Services after the changes become effective constitutes your acceptance of the revised Terms.`,
  },
  {
    title: '16. Entire Agreement',
    body: `These Terms constitute the entire agreement between you and Protocol Health regarding the use of the Services, superseding any prior agreements between you and Protocol Health relating to your use of the Services.`,
  },
]

export default function TermsOfService() {
  return (
    <div className="relative min-h-screen bg-cream text-ink">
      <header className="flex w-full items-center justify-between px-6 py-6 md:px-10">
        <MotionLink to="/" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="relative h-[23px] w-[128px]">
          <img src={logoPart1} alt="" className="absolute left-0 top-0 h-[23px]" />
          <img src={logoPart2} alt="protocol" className="absolute left-[33px] top-0 h-[23px]" />
          <img src={logoPart3} alt="" className="absolute left-[72px] top-0 h-[18px]" />
        </MotionLink>

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
        <h1 className="mt-2 text-3xl font-bold leading-tight text-[#1a1a1a] md:text-5xl">Terms of Use</h1>

        <div className="mt-8 flex flex-col gap-4 text-sm leading-relaxed text-[#4a4a4a] md:text-base">
          <p>
            Welcome to Protocol Health Club. These Terms of Use ("Terms") govern your access to and use of the
            Protocol Health website, applications, and services (collectively, the "Services"). Please read these
            Terms carefully before using the Services.
          </p>

          <h2 className="mt-4 text-lg font-bold text-[#1a1a1a] md:text-xl">User's Acknowledgment and Acceptance of Terms</h2>
          <p>
            By accessing or using the Services, you acknowledge that you have read, understood, and agree to be
            bound by these Terms, along with our Privacy Policy and Refund Policy, each of which is incorporated
            herein by reference. If you do not agree to these Terms, you may not access or use the Services.
          </p>

          <h2 className="mt-4 text-lg font-bold text-[#1a1a1a] md:text-xl">Content Disclaimer</h2>
          <p>
            The Content available through the Services is provided for general informational purposes only. While
            we strive to keep information accurate and up to date, we make no representations or warranties of any
            kind regarding the completeness, accuracy, reliability, or availability of any Content.
          </p>

          <h2 className="mt-4 text-lg font-bold text-[#1a1a1a] md:text-xl">Important Notice</h2>
          <p>
            Protocol Health is not a licensed medical provider. Lab testing, protocols, and any related guidance
            offered through the Services are intended to support your wellness journey and do not replace advice
            from a licensed physician or healthcare professional.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-[#1a1a1a] md:text-xl">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#4a4a4a] md:text-base">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 text-sm leading-relaxed text-[#4a4a4a] md:text-base">
          <p>
            By providing your information to Protocol Health, you authorize us and our partners to perform a credit
            check or use alternative verification methods where applicable to certain payment or financing options
            offered as part of the Services. This authorization applies only where such financing options are
            selected by you.
          </p>
          <p className="uppercase tracking-[1px] text-[#8a8a8a]">© Copyright Protocol Health 2026, All Rights Reserved</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
