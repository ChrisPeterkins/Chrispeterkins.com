import Image from 'next/image'
import { Tooltip } from './Tooltip'

interface Certification {
  name: string
  image: string
  url: string
  altText: string
}

const certifications: Certification[] = [
  {
    name: 'DocuSign CLM Workflow Developer',
    image: '/images/CertifiedCLMWorkflowDeveloper.png',
    url: 'https://www.credly.com/earner/earned/badge/e4008036-cb52-4fa9-b990-beb67fb522ee',
    altText: 'Certified DocuSign CLM Workflow Developer Badge'
  },
  {
    name: 'DocuSign CLM Administrator',
    image: '/images/CertifiedDocusignCLMAdministrator.png',
    url: 'https://www.credly.com/earner/earned/badge/c399981b-b94d-4c12-ab2d-2005218a18cf',
    altText: 'Certified DocuSign CLM Administrator Badge'
  },
  {
    name: 'DocuSign CLM Implementation Consultant',
    image: '/images/CertifiedDocusignCLMImplementationConsultant.png',
    url: 'https://www.credly.com/earner/earned/badge/c367f95f-57f4-46e1-b155-7ac9d919426b',
    altText: 'Certified DocuSign CLM Implementation Consultant Badge'
  },
  {
    name: 'DocuSign CLM Technical Consultant',
    image: '/images/CertifiedDocusignCLMTechnicalConsultant.png',
    url: 'https://www.credly.com/earner/earned/badge/6179cf35-c336-46af-b847-accca8915bfe',
    altText: 'Certified DocuSign CLM Technical Consultant Badge'
  },
  {
    name: 'DocuSign eSignature Implementation Consultant',
    image: '/images/CertifiedDocusigneSignatureImplementationConsultant.png',
    url: 'https://www.credly.com/earner/earned/badge/d7b10dc6-4827-448f-8769-a02039f601f2',
    altText: 'Certified DocuSign eSignature Implementation Consultant Badge'
  },
]

export function Certifications() {
  return (
    <section 
      id="certifications" 
      className="my-8 scroll-mt-24"
    >
      <h2 className="text-lg font-semibold text-slate-200 mb-4">Certifications</h2>
      <div className="flex flex-wrap gap-4">
        {certifications.map((cert) => (
          <Tooltip key={cert.name} content={cert.name}>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="relative w-32 h-32 md:w-36 md:h-36 transition-transform group-hover:scale-110">
                <Image
                  src={cert.image}
                  alt={cert.altText}
                  fill
                  className="object-contain filter hue-rotate-[155deg] brightness-95 saturate-125"
                />
              </div>
              <span className="sr-only">{cert.name}</span>
            </a>
          </Tooltip>
        ))}
      </div>
    </section>
  )
} 