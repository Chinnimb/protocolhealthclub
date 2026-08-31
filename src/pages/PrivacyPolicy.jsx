import SimpleHeader from '../components/SimpleHeader'
import Footer from '../components/Footer'

const infoTable = [
  ['A. Identifiers', 'A real name, alias, postal address, unique personal identifier, online identifier, internet protocol address, email address, account name or other similar identifiers.', 'Yes'],
  ['B. Personal Information categories', 'A name, signature, physical characteristics or description, address, telephone number, driver’s license or state identification card number, employment, employment history, bank account number, credit card number, debit card number, or any other financial information. Some personal information included in this category may overlap with other categories.', 'Yes'],
  ['C. Protected classification characteristics under State or federal law.', 'Age (40 years or older), race, color, ancestry, national origin, religion or creed, marital status, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or military status, genetic information (including familial genetic information).', 'Yes'],
  ['D. Commercial information.', 'Records of personal property, products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.', 'No'],
  ['E. Biometric information.', 'Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to extract a template or other identifier or identifying information, such as fingerprints, faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and sleep, health, or exercise data.', 'No'],
  ['F. Internet or other similar network activity.', 'Browsing history, search history, information on a consumer’s interaction with a website, application, or advertisement.', 'Yes'],
  ['G. Geolocation data.', 'Physical location or movements.', 'No'],
  ['H. Sensory data.', 'Audio, electronic, visual, thermal, olfactory, or similar information.', 'No'],
  ['I. Professional or employment-related information.', 'Current or past job history or performance evaluations.', 'No'],
  ['J. Non-public education information', 'Education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records.', 'No'],
  ['K. Inferences drawn from other Personal Information.', 'Profile reflecting a person’s preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.', 'No'],
]

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
        <li key={i} className="list-disc">
          {typeof item === 'string' ? item : (
            <>
              <span className="font-semibold text-[#233038]">{item.label}. </span>
              {item.text}
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-cream text-ink">
      <SimpleHeader />

      <main className="mx-auto max-w-[820px] px-6 py-10 md:px-10 md:py-16">
        <p className="text-xs font-extrabold uppercase tracking-[2.2px] text-orange-2">Legal</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-[#1a1a1a] md:text-5xl">Privacy Policy</h1>

        <div className="mt-8 flex flex-col gap-4 text-sm leading-relaxed text-[#4a4a4a] md:text-base">
          <p>
            This Privacy Policy discloses the privacy practices for PROTOCOL HEALTH CLUB, LLC ("Protocol",
            protocolhealthclub.com, any available application and various related services (together referred to as
            the "Site"). Protocol, the provider of the services (referred to as "us" or "we"), is committed to
            protecting your privacy online. Please read the information below to learn the following regarding your
            use of our Site and services. You acknowledge that this Privacy Policy is part of our Terms of Use, and
            by accessing or using our Site and services, you agree to be bound by all of its terms and conditions.
            If you do not agree to these terms, please do not access or use our Site or services. You shall be
            referred to as "you" or "user."
          </p>

          <h2 className="mt-2 text-lg font-bold text-[#1a1a1a] md:text-xl">Scope of this Web and Mobile Privacy Policy</h2>
          <p>
            This Privacy Policy describes the types of Personal Information we collect from visitors of our public
            Site and our practices for using, maintaining, sharing, and protecting it. It also describes the rights
            and choices you may have with respect to your Personal Information and how you may contact us.
          </p>
          <p>
            This Privacy Policy <span className="font-semibold text-[#233038]">does not apply to</span> information
            collected from visitors who register and log-in ("Members") to any password-protected and secure
            portions of our Site, including login pages and registration pages ("Secure Platforms"). Additionally,
            we may use a third party site for the creation of your account and logging in to the Secure Platforms.
            All such use shall be subject to those third party site's terms of service and privacy policies. The
            Secure Platforms allow eligible members to use the Site. All information collected and stored by
            Protocol or added by our members into such Secure Platforms is considered Protected Health Information
            ("PHI") and/or medical information and is governed by laws that apply to that information, for example
            the Health Insurance Portability and Accountability Act (HIPAA). How Protocol uses and discloses such
            PHI is in accordance with the Protocol Health Notice of Privacy Practices. To understand how we use and
            disclose PHI, you should review our Notice of Privacy Practices. The Notice of Privacy Practices (and
            not this Privacy Policy) also applies to Personal Information collected on our Websites if specific
            symptoms or health conditions is also collected, as such information may be considered PHI under HIPAA.
          </p>
          <p>
            Residents of states with heightened privacy laws should read the information available in the Regional
            Privacy Statement below about the categories of Personal Information to be collected from them and the
            purposes for which the Personal Information will be used.
          </p>
          <p className="font-semibold text-[#233038]">
            This Privacy Policy is not a contract and does not create any contractual rights or obligations.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          <Section title="I. Types of Collected Information">
            <p>
              We, or our advertising partners, may receive, collect and store information about you automatically
              through the use of cookies (see below) and other tracking technologies. Information we collect may be
              from information you enter on our Site or provide us in any other way. In addition, we may collect the
              internet protocol (IP) address used to connect your computer or other electronic device to the
              internet; login; e-mail address; password; computer and connection information, purchase history. If
              you retain us for our services, we will also be collecting PHI for the provision of those services.
              Use of PHI is governed by the Protocol Health Notice of Privacy Practices.
            </p>
            <p>
              You acknowledge our minimum age requirements and certify you are at least eighteen (18) years of age.
              We may use software tools to measure and collect session information, including page response times,
              length of visits to certain pages, page interaction information, and methods used to browse away from
              the page or the Site. We may also collect personally identifiable information (including name, email,
              password, communications); payment details (including credit card information), protected health
              information (including medical files containing diagnoses), comments, feedback, recommendations, and
              personal profile.
            </p>
          </Section>

          <Section title="II. Methods of Collection">
            <p>We may collect Personal Information using the following methods:</p>
            <List
              items={[
                'Directly from you when you provide it to us (such as information you enter into web forms, inquiries, responses, activity on the Site, and during registration to use a Secure Platform).',
                'From third parties, such as analytics and email marketing service providers.',
                'Automatically through tracking technologies such as cookies, web beacons (also known as pixels) and log files, including over time and across our own and third-party websites or other online services.',
              ]}
            />
            <p>
              "Cookies" are small files that a website stores on a user's computer or device. The Site may use
              cookies for various purposes, including to keep the information you enter on multiple pages together.
              Some of the cookies we may use are "session" cookies, meaning that they are automatically deleted from
              your hard drive after you close your browser at the end of your session. Session cookies may be used
              to optimize performance of the Site and to limit the amount of redundant data that is downloaded
              during a single session. We also may use "persistent" cookies, which remain on your computer or device
              unless deleted by you (or by your browser settings). We may use persistent cookies for various
              purposes, such as statistical analysis of performance to ensure the ongoing quality of our services.
              We and third parties may use session and persistent cookies for analytics and advertising purposes, as
              described herein. Most web browsers automatically accept cookies, but you may set your browser to
              block certain cookies (see below).
            </p>
            <p>
              Our Site may use Google Analytics, a vendor's service that uses cookies, web beacons, web pixels
              and/or similar technology to collect and store information about you. You can learn more about Google
              Analytics' privacy policy and ways to opt out from Google Analytics tracking by visiting Google
              Analytics' website.
            </p>
            <p>
              Our Site may use Adobe's analytics and on-site personalization services, which use cookies, web
              beacons, web pixels and/or similar technology to collect and store information about you or your
              device or browser. You can learn more about how Adobe may handle information collected through our
              use of its services, and your options for controlling this activity, by visiting Adobe's website.
            </p>
          </Section>

          <Section title="III. Reason for Collection of Information">
            <p>We collect such non-personal and Personal Information (defined below) for the following purposes:</p>
            <List
              items={[
                'To provide and operate the Site and services;',
                'To provide you with ongoing customer assistance and technical support;',
                'To be able to contact you with general or personalized service-related notices and promotional messages;',
                'To create aggregated statistical data and other aggregated and/or inferred non-personal information, which we or our business partners may use to provide and improve our respective Site and services;',
                'To comply with any applicable laws and regulations.',
              ]}
            />
          </Section>

          <Section title="IV. How We Use Your Information">
            <p>We may use your Personal Information for the following purposes:</p>
            <List
              items={[
                'Operate, maintain, supervise, administer, and enhance the Site, including monitoring and analyzing the effectiveness of content on the Site, aggregate Site usage data, and other usage of the Site such as checking your eligibility and assisting you in completing the registration process.',
                'Provide you with a tailored and user-friendly experience as you navigate our Site.',
                'Promote and market our Site to you.',
                'To complete the activity you specifically asked for, e.g., register on a Secure Platform, obtain more information or request an appointment.',
                'Conduct research on users’ demographics, interests, and behavior based upon information provided during use of our Site.',
                'Aggregate information for analytics and reporting.',
                'Respond to law enforcement requests and court orders and legal process and carry out our legal and contractual obligations and enforce our rights.',
                'Authenticate use, detect potential fraudulent use, and otherwise maintain the security of the Site and safety of users.',
                'Develop, test, improve, and demonstrate the Site.',
                'Any other purpose with your consent.',
              ]}
            />
          </Section>

          <Section title="V. How We Share Your Information">
            <p>
              We may share Personal Information with third parties, including service providers, in certain
              circumstances or for certain purposes as described below.
            </p>
            <p>
              No mobile information will be shared with third parties or affiliates for marketing or promotional
              purposes. Information sharing to subcontractors in support services, such as customer service, is
              permitted. All other use case categories exclude text messaging originator opt-in data and consent;
              this information will not be shared with any third parties.
            </p>
            <List
              items={[
                { label: 'For business purposes', text: 'We may share your Personal Information with vendors and service providers, such as data hosting, analytics, technology services, and customer support providers, as necessary to operate our services. This does not include SMS opt-in data or consent.' },
                { label: 'With your direction or consent', text: 'We may share your Personal Information with third parties if you request or direct us to do so. This does not include SMS opt-in data or consent.' },
                { label: 'With affiliates', text: 'We may share your Personal Information with affiliated entities within our corporate group for operational purposes. This does not include SMS opt-in data or consent.' },
                { label: 'Compliance with law', text: 'We may disclose your Personal Information where required to do so by law or in response to valid legal requests.' },
                { label: 'Business transfers', text: 'We may share your Personal Information in connection with a merger, sale, or transfer of assets.' },
                { label: 'For advertising and analytics', text: 'We may use cookies, pixels, and similar technologies to collect information about your activity on our Site and share that information with advertising or analytics partners to improve our marketing and services. These activities do not involve the use or sharing of mobile phone numbers, SMS data, or text messaging originator opt-in data or consent.' },
                { label: 'Influencer or referral tracking', text: 'If you sign up through a referral or influencer link, we may share limited de-identified information for tracking purposes only. No SMS opt-in data or consent is shared in this context.' },
              ]}
            />
            <p className="font-semibold text-[#233038]">
              Except as otherwise stated, any sharing of Personal Information described in this section does not
              include SMS opt-in data or consent. Text messaging originator opt-in data and consent will not be
              shared with any third parties, except for aggregators and providers of the text messaging services.
            </p>
          </Section>

          <Section title="VI. How Long Do We Keep Your Information">
            <p>
              We keep your information as long as we need it to provide our Site and services, comply with legal
              obligations or protect our or other's interests. We decide how long we need information on a
              case-by-case basis.
            </p>
          </Section>

          <Section title="VII. How Do We Safeguard Your Information">
            <p>
              We rely on many mechanisms for data transfers, including but not limited to, contractual clauses and
              use of software with industry standard security. Your PHI will be stored using a HIPAA compliant
              software.
            </p>
          </Section>

          <Section title="VIII. Third Party Website and Links">
            <p>
              Our Site may contain links to other online platforms operated by third parties. We do not control such
              other online platforms and are not responsible for their content, their privacy policies, or their use
              of your information. Information you provide on public or semi-public venues, including information
              you share on third-party social networking platforms (such as Facebook, Instagram, LinkedIn or
              Twitter) may also be viewable by other users of the Site and/or users of those third-party online
              platforms without limitation as to its use by us or by a third party. Our inclusion of such links does
              not, by itself, imply any endorsement of the content on such platforms or of their owners or operators
              except as disclosed on the Site. WE EXPRESSLY DISCLAIM ANY AND ALL LIABILITY FOR THE ACTIONS OF THIRD
              PARTIES, INCLUDING BUT WITHOUT LIMITATION, TO ACTIONS RELATING TO THE USE AND/OR DISCLOSURE OF PERSONAL
              INFORMATION BY THIRD PARTIES. ANY INFORMATION SUBMITTED BY YOU DIRECTLY TO THESE THIRD PARTIES IS
              SUBJECT TO THAT THIRD PARTY'S PRIVACY POLICY.
            </p>
          </Section>

          <Section title="IX. Communication with Site Users">
            <p>
              Users may opt in to receive SMS messages from PROTOCOL HEALTH CLUB LLC by submitting their phone
              number through website forms or appointment booking pages and selecting consent checkboxes. Messages
              may include appointment reminders, scheduling updates, account notifications, and occasional marketing
              and promotional messages. Message frequency varies. Message and data rates may apply. Users can opt
              out at any time by replying STOP or request assistance by replying HELP.
            </p>
          </Section>

          <Section title="X. Cookies and Information Used for Advertising">
            <h3 className="mt-1 text-base font-semibold text-[#233038]">Usage of Cookies and Similar Tracking Tools</h3>
            <p>
              As discussed above, on our Site we may collect and disclose Personal Information about your online
              activities for use in providing you with advertising about products and services tailored to your
              individual interests. This section of our Privacy Policy provides details and explains how to
              exercise your choices. You may see certain ads on other websites because we participate in
              advertising networks. Ad networks allow us to target our messaging to users through demographic,
              interest-based and contextual means. These networks track your online activities over time by
              collecting information through automated means, including through the use of cookies, web server
              logs, and web beacons (also known as pixels). The networks use this information to show you
              advertisements that may be tailored to your individual interests. The information our ad networks may
              collect includes information about your visits to websites that participate in the relevant
              advertising networks, such as the webpages or advertisements you view and the actions you take on the
              websites. This data collection takes place both on our Site and on third-party websites that
              participate in the ad networks. This process also helps us track the effectiveness of our marketing
              efforts.
            </p>
            <p>
              You may disable or delete browser cookies through your browser settings. Cookies generally are easy to
              disable or delete, but the method varies between browsers. If you disable or delete cookies, or if you
              are running third-party software that intercepts or deletes cookies, please note that some parts or
              functionality of our Site may not work properly.
            </p>
            <p>
              To ascertain how to disable cookies on your web browser, go to your web browser and search for how to
              disable cookies for that specific browser.
            </p>
            <p>
              If you have additional questions about the specific information about you that we process or retain,
              as well as your choices regarding our collection and use practices, please contact us using the
              information listed below.
            </p>

            <h3 className="mt-2 text-base font-semibold text-[#233038]">Why We Use Cookies</h3>
            <p>We may use cookies for the following reasons:</p>
            <List
              items={[
                { label: 'Authentication', text: 'Cookies help us verify your account and determine when you are logged in so that it makes it easier to access our Site and services.' },
                { label: 'Security', text: 'We may use cookies to help us keep your account, data and Site and services safe and secure. We may also use cookies to combat activity that violates our policies or otherwise degrades our ability to provide the Site and services.' },
                { label: 'Advertising', text: 'We may use cookies to help us show ads and to make recommendations of other businesses or organizations for which you may be interested in their products, services or causes they promote. We also use cookies to track and measure the efficacy of ad campaigns.' },
                { label: 'Features', text: 'We may use cookies to enable the functionality for the provision of the Site and services.' },
                { label: 'Experience', text: 'We may use cookies to provide you with the best experience possible.' },
                { label: 'Analytics and Research', text: 'We may use cookies to help us understand how you are using the Site and services so we can improve them.' },
              ]}
            />

            <h3 className="mt-2 text-base font-semibold text-[#233038]">Withdrawal of Consent</h3>
            <p>
              If you no longer wish for us to process your data, please contact us at{' '}
              <a href="mailto:support@protocolhealthclub.com" className="text-orange-2 underline">support@protocolhealthclub.com</a>
            </p>

            <h3 className="mt-2 text-base font-semibold text-[#233038]">Privacy Policy Updates</h3>
            <p>
              We reserve the right to modify this Privacy Policy at any time for any reason. It is your sole
              responsibility to check our policies so please review them frequently. Changes and clarifications will
              take effect immediately upon their posting on the Site. Should we make material changes to this
              policy, we will notify you here that it has been updated so that you are aware of what information we
              collect and how it is used.
            </p>
          </Section>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          <h1 className="text-2xl font-bold leading-tight text-[#1a1a1a] md:text-3xl">
            United States Regional Privacy Statement
          </h1>
          <p className="text-sm leading-relaxed text-[#4a4a4a] md:text-base">
            This Privacy Statement is for residents that reside in the States of California, Utah, Virginia, Texas,
            Connecticut, and Colorado ("consumers" or "you"). We adopt this Statement to comply with the various laws
            applicable to those states.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-8">
          <Section title="I. Information We Collect">
            <p>
              We collect information that identifies, relates to, describes, references, is capable of being
              associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or
              device ("Personal Information"). In particular, we have collected the following categories of
              Personal Information from consumers within the last twelve (12) months:
            </p>

            <div className="-mx-1 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-[#e5e1db] text-[#233038]">
                    <th className="px-2 py-2 font-semibold">Category</th>
                    <th className="px-2 py-2 font-semibold">Examples</th>
                    <th className="px-2 py-2 font-semibold">Collected</th>
                  </tr>
                </thead>
                <tbody>
                  {infoTable.map(([category, examples, collected]) => (
                    <tr key={category} className="border-b border-[#e5e1db]/70 align-top">
                      <td className="px-2 py-3 font-medium text-[#233038]">{category}</td>
                      <td className="px-2 py-3">{examples}</td>
                      <td className="px-2 py-3">{collected}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>Personal Information does not include the following:</p>
            <List
              items={[
                'Publicly available information from government records.',
                'De-identified or aggregated consumer information.',
              ]}
            />
            <p>Information excluded from the applicable law's scope, like:</p>
            <List
              items={[
                'Health or medical information covered by the Health Insurance Portability and Accountability Act of 1996 (HIPAA), a state equivalent or clinical trial data;',
                'Personal Information covered by certain sector-specific privacy laws, including the Fair Credit Reporting Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or applicable state law, and the Driver’s Privacy Protection Act of 1994.',
              ]}
            />

            <p>We obtain the categories of Personal Information listed above from the following categories of sources:</p>
            <List
              items={[
                'Directly from you or our service providers.',
                'Third party partners such as analytics and marketing partners.',
                'Directly and indirectly from activity within our Site, such as tracking technologies.',
              ]}
            />
          </Section>

          <Section title="II. Use of Personal Information">
            <p>We may use or disclose the Personal Information we collect for one or more of the following business purposes:</p>
            <List
              items={[
                'To fulfill or meet the reason for which the information is provided.',
                'To provide you with information, products or Site and services that you request from us, or otherwise communicate with you.',
                'To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collections.',
                'To improve our Site and present its contents to you.',
                'To promote safety, security and integrity.',
                'For analytics, testing, research, analysis and product or Service development.',
                'As necessary or appropriate to protect the rights, property or safety of us, you, our Service Providers or others.',
                'To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.',
                'As described to you when collecting your Personal Information or as otherwise set forth in the applicable law.',
              ]}
            />
            <p>
              We will not collect additional categories of Personal Information or use the Personal Information we
              collected for materially different, unrelated, or incompatible purposes without providing you notice.
            </p>
          </Section>

          <Section title="III. Sharing Personal Information">
            <p>
              We may disclose your Personal Information to a third party for a business purpose. When we disclose
              Personal Information for a business purpose, we enter a contract that describes the purpose and
              requires the recipient to both keep that Personal Information confidential and not use it for any
              purpose except performing the contract. In the preceding twelve (12) months, we have disclosed the
              following categories of Personal Information for a business purpose:
            </p>
            <List
              items={[
                'Category A: Identifiers.',
                'Category B: Customer Records personal information categories.',
                'Category D: Commercial information',
              ]}
            />
            <p>We disclose your Personal Information for a business purpose to the following categories of third parties:</p>
            <List
              items={[
                'Contractual service providers.',
                'Affiliated advertising networks, internet service providers and data analytics providers',
                'Third parties to whom you or your agents authorize us to disclose your Personal Information in connection with products or services we provide to you.',
              ]}
            />
            <p>You may have the following rights regarding your Personal Information maintained by Protocol:</p>
            <List
              items={[
                'Request to know and access the Personal Information we collect, use, and disclose;',
                'Request deletion of Personal Information;',
                'Request to opt-out of the sale or sharing of Personal Information;',
                'Right to limit use and disclosure of sensitive Personal Information and',
                'Not receive discriminatory treatment by Protocol for exercising these rights.',
              ]}
            />
            <p>
              The rights described below are limited to those provided under the applicable law to the applicable
              residents of those states. The specific rights may vary based on whether the applicable law applies.
            </p>
          </Section>

          <Section title="IV. Requests to Know and Access">
            <p>You may have the right to request that we disclose to you the following information:</p>
            <List
              items={[
                'Categories of Personal Information that Protocol has collected about you, disclosed about you for a business purpose, or sold or shared;',
                'Categories of sources from which the Personal Information is collected;',
                'Categories of third parties with whom Protocol shares or to whom Protocol sells Personal Information;',
                'The business or commercial purpose for collecting and selling Personal Information; and',
                'Specific pieces of Personal Information that Protocol has collected about you.',
              ]}
            />
            <p>Instructions for submitting a verifiable request are provided below.</p>
            <p>You may only make a request for access twice within a 12-month period.</p>
          </Section>

          <Section title="V. Requests to Delete">
            <p>
              You may have the right to request that we delete Personal Information associated with you, subject to
              applicable law and certain exceptions.
            </p>
            <p>Instructions for submitting a verifiable request are provided below.</p>
          </Section>

          <Section title="VI. Request to Correct Inaccurate Personal Information">
            <p>
              You may have the right to request that Protocol corrects Personal Information that is inaccurate.
              Instructions for submitting a verifiable request are provided below.
            </p>
          </Section>

          <Section title="VII. Requests to Opt-Out of the Sale or Sharing of your Personal Information">
            <p>
              You may have the right to submit a request to opt out of any sale or sharing of your Personal
              Information or the processing of your Personal Information for purposes of targeted advertising.
              However, Protocol does not sell your Personal Information and does not use or share Personal
              Information collected from users of our public websites to engage in targeted advertising unless you
              have opted-in to such use. And, in the last 12 months, Protocol has not sold or shared Personal
              Information (as those terms are defined under the applicable law).
            </p>
            <p>Instructions for submitting a verifiable request are provided below.</p>
          </Section>

          <Section title="VIII. How to Exercise Your Rights">
            <p>
              To submit a request to exercise any of your rights, please email us at{' '}
              <a href="mailto:support@protocolhealthclub.com" className="text-orange-2 underline">support@protocolhealthclub.com</a>
            </p>
            <p>
              As required under applicable law, we must take steps to verify your request before we can provide
              Personal Information to you, delete Personal Information, or otherwise process your request. To verify
              your request, we may require you to provide your name, physical address, email address, contact
              information, and information about your account or previous transactions with us. If you have only
              visited our public Site and did not provide any Personal Information to us via a web form or through
              the registration process, we will need you to provide us with your IP address or device ID in order
              for us to determine if we have that information. We will not be able to determine if we have your IP
              address or device ID from your name, physical address, email address, contact information, or account
              information.
            </p>
            <p>
              We will further verify and respond to your request consistent with applicable law, taking into account
              the type and sensitivity of the Personal Information subject to the request. We may need to request
              additional Personal Information from you, such as your date of birth or government identifier, in
              order to protect against fraudulent requests.
            </p>
            <p>
              We will deliver Personal Information that we are required by law to disclose to you in the manner
              required by law within forty-five (45) days after receipt of a verifiable request, unless we notify
              you that we require additional time to respond, in which case we will respond within such additional
              period of time required by law. We may deliver the Personal Information to you electronically or by
              mail at your option. If electronically, then we will deliver the information in a portable and, to the
              extent technically feasible, in a readily useable format that allows you to transmit the information
              from one entity to another without hindrance.
            </p>
            <p>
              Only you, or someone legally authorized to act on your behalf, may make a verifiable consumer request
              related to your Personal Information. You may designate an authorized agent to request any of the
              above rights on your behalf. You may make such a designation by providing the agent with written
              permission, signed and notarized by you, to act on your behalf. Your agent may contact us by the
              information provided in the "How to Contact Us" section below to make a request on your behalf. Even
              if you choose to use an agent, we may, as permitted by law, require verification of the agent's
              authorization to act on your behalf, require you to confirm you have authorized the agent to act on
              your behalf, or require you to verify your own identity.
            </p>
          </Section>

          <Section title="X. Updating This Privacy Statement">
            <p>
              This Privacy Statement may be updated periodically to reflect changes in our privacy practices. It is
              your responsibility to review the Privacy Policy from time to time to view any such changes.
            </p>
          </Section>

          <Section title="XI. How to Contact Us">
            <p>
              If you have any questions about our privacy practices or this Privacy Policy or Privacy Statement,
              please email us at{' '}
              <a href="mailto:support@protocolhealthclub.com" className="text-orange-2 underline">support@protocolhealthclub.com</a>{' '}
              or call/text us at{' '}
              <a href="tel:+17542168304" className="text-orange-2 underline">754-216-8304</a>.
            </p>
          </Section>
        </div>

        <p className="mt-10 uppercase tracking-[1px] text-[#8a8a8a] text-sm">© Copyright Protocol Health 2026, All Rights Reserved</p>
      </main>

      <Footer />
    </div>
  )
}
