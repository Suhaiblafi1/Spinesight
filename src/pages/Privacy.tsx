import { PageHero } from '@/components/Sections'
import SEO from '@/components/SEO'
import { CONTACT_EMAIL } from '@/data/site'

export type LegalSection = { heading: string; paragraphs: string[] }

export function LegalBody({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="bg-white py-20">
      <div className="container-site max-w-3xl">
        {sections.map((s, i) => (
          <div key={i} className="mb-10">
            <h2 className="mb-3 text-xl font-bold text-brand-navy">
              {i + 1}. {s.heading}
            </h2>
            {s.paragraphs.map((p, j) => (
              <p key={j} className="mb-3 leading-relaxed text-slate-600">
                {p}
              </p>
            ))}
          </div>
        ))}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-brand-mist/50 p-6">
          <h2 className="text-xl font-bold text-brand-navy">Contact</h2>
          <p className="mt-2 leading-relaxed text-slate-600">
            For any questions regarding this page, contact us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-brand-blue hover:underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="How SpineSight collects, uses, and protects personal and medical imaging data across its website and diagnostics platform."
        path="/privacy"
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: August 2026. This policy explains how SpineSight handles information on this website and within the SpineSight diagnostics platform."
      />
      <LegalBody
        sections={[
          {
            heading: 'Overview',
            paragraphs: [
              'SpineSight ("we", "our", "us") provides AI-powered clinical decision support for spine imaging. We are committed to protecting the privacy of website visitors, healthcare professionals, and patients whose imaging studies are processed through our platform.',
              'This policy covers two distinct contexts: information collected through this public website, and medical data processed within the SpineSight platform under agreements with healthcare institutions.',
            ],
          },
          {
            heading: 'Information We Collect via This Website',
            paragraphs: [
              'When you submit a contact or demo request form, we collect the details you provide: your name, work email, organization, and message content. We use this information solely to respond to your inquiry and prepare proposals you have requested.',
              'We may also collect standard technical data (browser type, pages visited, approximate region) to understand how the website is used and to improve it.',
            ],
          },
          {
            heading: 'Medical Imaging Data on the Platform',
            paragraphs: [
              'Imaging studies uploaded to the SpineSight platform are de-identified before analysis. Patient-identifying metadata is removed or pseudonymized in accordance with the agreement in place with the treating institution.',
              'The healthcare institution remains the data controller for patient data. SpineSight acts as a data processor, handling studies exclusively to provide the contracted analysis services.',
            ],
          },
          {
            heading: 'How We Use Information',
            paragraphs: [
              'We use collected information to: deliver and improve our services, respond to inquiries, meet regulatory and quality obligations, and — only in de-identified and aggregated form — support research and model validation activities described in our clinical study protocols.',
              'We do not sell personal information, and we do not use patient imaging data for advertising.',
            ],
          },
          {
            heading: 'Data Security',
            paragraphs: [
              'We apply administrative, technical, and physical safeguards appropriate for medical software, including encrypted data transfer, access controls, and role-based permissions within the platform.',
              'No method of transmission or storage is perfectly secure; we continuously review and improve our safeguards and will notify affected parties of any incident as required by applicable law.',
            ],
          },
          {
            heading: 'Data Retention',
            paragraphs: [
              'Website inquiry data is retained only as long as needed to handle your request and any follow-up relationship. Platform data retention follows the contract with each institution and applicable health-record regulations.',
            ],
          },
          {
            heading: 'Your Rights',
            paragraphs: [
              'Depending on your jurisdiction, you may have rights to access, correct, or request deletion of your personal information. Patients should direct requests concerning their medical data to their treating institution, which controls the record.',
            ],
          },
          {
            heading: 'Changes to This Policy',
            paragraphs: [
              'We may update this policy as our services and regulatory obligations evolve. Material changes will be posted on this page with an updated revision date.',
            ],
          },
        ]}
      />
    </>
  )
}
