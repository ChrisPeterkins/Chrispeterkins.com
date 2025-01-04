import React from 'react'
import Image from 'next/image'

const projects = [
  {
    title: "CLM Tools",
    description: "An online DocuSign CLM workflow documentation generator. Create a repository of your workflows and their documentation. Maintains version history over time. Allows for online and word document generation.",
    image: "/images/project1.png",
    link: "https://clmtools.io",
    technologies: ["Python", "Flask", "SQLite", "Graphviz", "Nginx", "Gunicorn"]
  },  
  {
    title: "Short Form Video Generator",
    description: "An online tool to automatically generate short form videos from Reddit posts and upload them to Youtube, TikTok, and Instagram. Videos are generated with TTS audio and accompanying subtitles. Backkground videos are randomly selected from a repository of royalty free videos.",
    image: "/images/project2.png",
    link: "https://shortsgenerator.com",
    technologies: ["Python", "PRAW", "Edge TTS", "Moviepy", "SQLite", "Tkinter", "Youtube Data API"]
  },
  {
    title: "Personal Portfolio Website",
    description: "My personal portfolio/resume website built with Next.js, Tailwind CSS, and TypeScript.",
    image: "/images/project3.png",
    link: "https://chrispeterkins.com",
    technologies: ["React", "TypeScript", "Tailwind", "Next.js", "Node.js"]
  },
];

interface ProjectProps {
  key: string;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

function ProjectCard({ title, description, image, link, technologies }: ProjectProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a href={link} target="_blank" rel="noreferrer noopener" 
               className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
              {title}
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((tech) => (
              <li key={tech} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={image}
          alt={`${title} preview`}
          width={500}
          height={300}
          priority={true}
          className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
        />
      </div>
    </li>
  )
}

export function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
      </div>

      <div>
        <ul className="group/list">
          {projects.map(({ title, description, image, link, technologies }) => (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              image={image}
              link={link}
              technologies={technologies}
            />
          ))}
        </ul>
      </div>
    </section>
  )
} 