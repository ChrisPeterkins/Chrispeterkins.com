import React from 'react'
import Image from 'next/image'

const projects = [
  {
    title: "BrewedAt",
    description: "Full-stack platform for craft beer events, content, and community engagement. Includes a React Native mobile app, an admin CMS dashboard for managing events, podcasts, breweries, and raffles, and a public-facing website. Powered by Firebase with real-time analytics and image uploads.",
    image: null,
    link: "https://github.com/ChrisPeterkins/BrewedAt",
    technologies: ["TypeScript", "React Native", "Vite", "Expo"]
  },
  {
    title: "Twilight Imperium 4th Edition",
    description: "A comprehensive digital implementation of the Twilight Imperium 4th Edition board game. Features full game state management, real-time multiplayer, combat resolution, technology research tracking, resource management, and map generation.",
    image: null,
    link: "https://github.com/ChrisPeterkins/TI4",
    technologies: ["TypeScript"]
  },
  {
    title: "CLM DevOps Tool",
    description: "A desktop app that manages the lifecycle of a DocuSign CLM Environment. Integrates with DocuSign CLM and JIRA to manage implementing new features from ideation to deployment. Features a fully functional test suite, peer review system and diff checking tools.",
    image: "/images/project4.png",
    link: "https://github.com/ChrisPeterkins/ds-clm-devops",
    technologies: ["TypeScript", "React", "Electron", "SQLite", "Node.js", "Redux"]
  },
  {
    title: "DocuSign CLM GitHub Sync",
    description: "Bidirectional sync between DocuSign CLM Admin folders and a GitHub repository. Supports multiple environments (dev, uat, prod) with independent sync branches, drift detection, cross-environment promotion, and a real-time web dashboard with Server-Sent Events.",
    image: null,
    link: "https://github.com/ChrisPeterkins/ds-clm-github-sync",
    technologies: ["TypeScript", "Node.js", "GitHub API", "DocuSign CLM API"]
  },
  {
    title: "CLM Helper Extension",
    description: "A browser extension that enhances the DocuSign CLM admin experience with productivity tools and shortcuts for managing workflows, templates, and environment configurations.",
    image: null,
    link: "https://github.com/ChrisPeterkins/clm-helper-extension",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: "Self-Hosted Budgeting App",
    description: "A comprehensive local-first budgeting application designed for couples to manage their finances together. Features include expense tracking, budget management, goal setting, bank statement imports (CSV/PDF), spending analytics, and multi-user support. Runs entirely on your computer with complete data privacy and zero ongoing costs.",
    image: "/images/project5.png",
    link: "https://github.com/ChrisPeterkins/budgeting-app",
    technologies: ["TypeScript", "Next.js", "Tailwind", "SQLite", "React"]
  },
  {
    title: "PA School Data Visualization",
    description: "A web application for visualizing and analyzing Pennsylvania school performance data from PSSA and Keystone exams. Features school search, interactive charts, historical data from 2015-2024, comparison tools, and state-level aggregate analytics.",
    image: null,
    link: "https://github.com/ChrisPeterkins/school-data-visualization",
    technologies: ["TypeScript", "React", "Fastify", "SQLite", "Recharts", "Drizzle ORM"]
  },
  {
    title: "Interactive Learning Platform",
    description: "A comprehensive web development learning platform featuring 22+ interactive projects covering modern web technologies including React patterns, state management, Three.js, WebAssembly, WebRTC, shaders, and more. Live at learning.chrispeterkins.com.",
    image: null,
    link: "https://github.com/ChrisPeterkins/learning.chrispeterkins.com",
    technologies: ["TypeScript", "React", "Three.js", "WebAssembly", "Rust", "GLSL"]
  },
  {
    title: "CLM Documentation Tool",
    description: "An online DocuSign CLM workflow documentation generator. Create a repository of your workflows and their documentation. Maintains version history over time. Allows for online and word document generation.",
    image: "/images/project1.png",
    link: "https://clmtools.io",
    technologies: ["Python", "Flask", "SQLite", "Graphviz", "Nginx", "Gunicorn"]
  },
  {
    title: "Short Form Video Generator",
    description: "An online tool to automatically generate short form videos from Reddit posts and upload them to Youtube, TikTok, and Instagram. Videos are generated with TTS audio and accompanying subtitles. Background videos are randomly selected from a repository of royalty free videos.",
    image: "/images/project2.png",
    link: "https://github.com/ChrisPeterkins/RSSVU",
    technologies: ["Python", "PRAW", "Edge TTS", "Moviepy", "SQLite", "Tkinter", "Youtube Data API"]
  },
  {
    title: "C Calculator",
    description: "A collection of calculator implementations in C, each under 1000 lines with no external dependencies. Includes a CLI REPL calculator, an enhanced terminal UI with history and arrow key navigation, and a native macOS Cocoa GUI application.",
    image: null,
    link: "https://github.com/ChrisPeterkins/C-Calculator",
    technologies: ["C", "Objective-C", "Cocoa"]
  },
  {
    title: "Cube Field",
    description: "A browser-based game built with vanilla HTML and JavaScript.",
    image: null,
    link: "https://github.com/ChrisPeterkins/Cube-Field",
    technologies: ["JavaScript", "HTML"]
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
  image: string | null;
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

        {image ? (
          <Image
            src={image}
            alt={`${title} preview`}
            width={500}
            height={300}
            priority={true}
            className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          />
        ) : (
          <div className="aspect-video rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 bg-gradient-to-br from-teal-400/10 to-slate-800 flex items-center justify-center">
            <span className="text-2xl font-bold text-teal-300/40">{title.charAt(0)}</span>
          </div>
        )}
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