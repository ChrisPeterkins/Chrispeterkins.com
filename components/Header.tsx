import Link from 'next/link'
import { SocialLinks } from './SocialLinks'

export function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Chris Peterkins
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Solution Engineer | 5x DocuSign Certified
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I specialize in architecting end to end, scalable, DocuSign CLM solutions. I'm also a hobbyist software developer.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {['about', 'experience', 'projects', 'certifications'].map((section) => (
              <li key={section}>
                <a href={`#${section}`} className="group flex items-center py-3">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200" />
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                    {section}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <SocialLinks />
    </header>
  )
} 