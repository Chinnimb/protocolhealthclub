import Header from '../components/Header'
import Footer from '../components/Footer'

const points = [
  'Pursuant to HIPAA, I authorize and direct Junction to give, disclose, and release, without restriction, my medical records, lab order, and/or lab testing results to Protocol Health Club.',
  'The purpose of the uses and disclosures is for care coordination.',
  'I understand that, with certain exceptions, I have the right to revoke this Authorization at any time. If I want to revoke this Authorization, I must do so in writing. I may revoke this Authorization by sending an email to support@tryJunction.io stating my desire to revoke my HIPAA Authorization. I understand that it may take Junction a few business days to process my revocation.',
  'I understand that I may refuse to sign this Authorization, but that will prevent me from participating in Junction’s services. I also understand that my health care provider cannot deny or refuse to provide treatment, payment, enrollment in a health plan, or eligibility of benefits if I refuse to sign this Authorization.',
  'I understand that, once information is disclosed pursuant to this Authorization, it is possible that it will no longer be protected by applicable federal medical privacy law and could be re-disclosed by the person or agency that receives it.',
  'The authority above shall supersede any prior agreement that I may have made with my health care providers to restrict access to or disclosure of my individually identifiable health information. The authority given has no expiration date and shall expire only in the event that the enterprise contract between Junction and Junction Customer terminates or I revoke the authority in writing as specified above.',
]

export default function HipaaAuthorization() {
  return (
    <div className="relative min-h-screen bg-cream text-ink">
      <Header />

      <main className="mx-auto max-w-[820px] px-6 pb-10 pt-24 md:px-10 md:pb-16 md:pt-28">
        <p className="text-xs font-extrabold uppercase tracking-[2.2px] text-orange-2">Legal</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-[#1a1a1a] md:text-5xl">HIPAA Authorization</h1>

        <div className="mt-8 flex flex-col gap-4 text-sm leading-relaxed text-[#4a4a4a] md:text-base">
          <p>
            Adept Labs, Inc. d/b/a Junction ("Junction") provides API solutions for at-home health care. Junction
            contracts with enterprise customers to grant access to Junction's services to the customers' patients
            like you. As part of its service, Junction works with health care providers and lab testing facilities
            to facilitate sharing your protected health information as governed by the Health Insurance Portability
            and Accountability Act of 1996 ("HIPAA"), 42 U.S.C. § 1320d and 45 C.F.R. § 160–164.
          </p>
          <p>
            This HIPAA Authorization is to authorize the disclosure of your information from Junction to the
            following enterprise customer: Protocol Health Club. By signing below, you agree as follows:
          </p>
        </div>

        <ol className="mt-8 flex flex-col gap-5 text-sm leading-relaxed text-[#4a4a4a] md:text-base">
          {points.map((text, i) => (
            <li key={i} className="flex gap-3">
              <span className="font-semibold text-[#233038]">{i + 1}.</span>
              <span>{text}</span>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-4 text-sm leading-relaxed text-[#4a4a4a] md:text-base">
          <p>I understand that I have a right to a copy of this Authorization.</p>
          <p className="uppercase tracking-[1px] text-[#8a8a8a]">© Copyright Protocol Health 2026, All Rights Reserved</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
