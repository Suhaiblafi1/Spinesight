import { PageHero } from '@/components/Sections'
import SEO from '@/components/SEO'
import { LegalBody } from './Privacy'

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Use"
        description="The terms governing use of the SpineSight website and diagnostics platform, including the clinical role and limits of AI decision support."
        path="/terms"
      />
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        subtitle="Last updated: August 2026. These terms govern your use of the SpineSight website and the SpineSight diagnostics platform."
      />
      <LegalBody
        sections={[
          {
            heading: 'Acceptance of Terms',
            paragraphs: [
              'By accessing this website or using the SpineSight platform, you agree to these Terms of Use. If you use the platform on behalf of a healthcare institution, your use is additionally governed by the service agreement between SpineSight and that institution.',
            ],
          },
          {
            heading: 'Nature of the Service',
            paragraphs: [
              'SpineSight is a clinical decision-support tool. Its outputs — including measurements, gradings, draft reports, and rehabilitation suggestions — are intended to assist licensed physicians and must be reviewed and approved by a qualified physician before any clinical use.',
              'SpineSight does not provide medical diagnosis, does not replace physician judgment, and is not intended for direct use by patients. Nothing on this website constitutes medical advice.',
            ],
          },
          {
            heading: 'Platform Access and Accounts',
            paragraphs: [
              'Platform accounts are provisioned to verified healthcare professionals through their institutions. You are responsible for maintaining the confidentiality of your credentials and for all activity under your account.',
              'You agree not to share accounts, attempt to reverse-engineer the platform, or use it for any purpose other than its intended clinical decision-support function.',
            ],
          },
          {
            heading: 'Intellectual Property',
            paragraphs: [
              'The SpineSight name, logo, software, models, website content, and underlying research methodologies are the property of SpineSight and its licensors. Certain technologies are subject to pending patent applications. No rights are granted except as needed to use the service as intended.',
            ],
          },
          {
            heading: 'Acceptable Use',
            paragraphs: [
              'You may not use the website or platform in any way that violates applicable law, infringes patient privacy, interferes with the service\u2019s operation, or attempts to access data belonging to other institutions.',
            ],
          },
          {
            heading: 'Disclaimers and Limitation of Liability',
            paragraphs: [
              'The website and platform are provided "as is" without warranties of any kind, to the extent permitted by law. Clinical responsibility for diagnosis and treatment decisions rests with the treating physician and institution.',
              'To the maximum extent permitted by law, SpineSight shall not be liable for indirect or consequential damages arising from use of the website or platform.',
            ],
          },
          {
            heading: 'Governing Law',
            paragraphs: [
              'These terms are governed by the laws of the Hashemite Kingdom of Jordan, without prejudice to mandatory provisions of the jurisdiction in which a contracting institution operates.',
            ],
          },
          {
            heading: 'Changes to These Terms',
            paragraphs: [
              'We may update these terms from time to time. Continued use of the website or platform after changes are posted constitutes acceptance of the revised terms.',
            ],
          },
        ]}
      />
    </>
  )
}
