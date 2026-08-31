import SimpleHeader from '../components/SimpleHeader'
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

export default function RefundPolicy() {
  return (
    <div className="relative min-h-screen bg-cream text-ink">
      <SimpleHeader />

      <main className="mx-auto max-w-[820px] px-6 py-10 md:px-10 md:py-16">
        <p className="text-xs font-extrabold uppercase tracking-[2.2px] text-orange-2">Legal</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-[#1a1a1a] md:text-5xl">Refund &amp; Cancellation Policy</h1>

        <div className="mt-10 flex flex-col gap-8">
          <Section title="Refund Policy">
            <p>All Protocol Health Club, LLC web sales are final and non-refundable.</p>
          </Section>

          <Section title="Cancellation Policy">
            <p>All web sales are final and cannot be canceled once an order is placed.</p>
          </Section>

          <Section title="Social Media Disclaimer">
            <p>
              Protocol Health Club does not offer medical or healthcare advice via social channels. All content
              shared — information, comments, links — serves educational purposes only. This material is not
              professional medical advice, diagnosis, or treatment. Users should not rely on this information during
              emergencies or for medical conditions. Those with health concerns must consult qualified healthcare
              professionals or call 911 in emergencies.
            </p>
          </Section>

          <Section title="Promotional Information and Disclaimers">
            <List
              items={[
                'Discount and promotion codes are single-use only.',
                'Cannot apply to previous purchases.',
                'These offers cannot be combined with any other sale, promotion, or discount code.',
                'Void where prohibited, taxed, or restricted.',
                'Limited to one code per order.',
                'Promotions have no cash value.',
                'The company reserves modification rights for any promotion at any time.',
                'Additional restrictions may apply.',
                'Valid only within the United States unless stated otherwise.',
              ]}
            />
          </Section>

          <Section title="Notice of Direct Payment">
            <p>
              Customers acknowledge understanding that Protocol Health Club LLC bills them directly for services,
              not insurance or third parties. No guarantees exist regarding insurance coverage or reimbursement
              eligibility. Customers agree not to submit claims to Medicare, Medicaid, or insurance programs and
              will indemnify Protocol against costs from such submissions. Payment constitutes a non-refundable
              deposit applicable toward future products or services. The acknowledgment confirms no urgent health
              situation exists at execution.
            </p>
          </Section>
        </div>

        <p className="mt-10 uppercase tracking-[1px] text-[#8a8a8a] text-sm">© Copyright Protocol Health 2026, All Rights Reserved</p>
      </main>

      <Footer />
    </div>
  )
}
