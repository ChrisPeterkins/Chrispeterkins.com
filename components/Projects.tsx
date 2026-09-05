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
    title: "Vellum",
    description: "A cross-platform desktop workbench for DocuSign CLM release management. Connects to multiple CLM tenants, pulls down templates, deployment packages, workflows, and admin folder content, then syncs that content bidirectionally with a GitHub repository. Includes environment-scoped test suites, side-by-side workflow comparison, peer review, a durable sync history, and optional Playwright-driven browser capture.",
    image: null,
    link: "https://github.com/ChrisPeterkins/Vellum",
    technologies: ["C#", ".NET 9", "Avalonia", "SQLite", "GitHub API", "Playwright", "xUnit"]
  },
  {
    title: "CLM Helper Extension",
    description: "A browser extension that enhances the DocuSign CLM admin experience with productivity tools and shortcuts for managing workflows, templates, and environment configurations.",
    image: null,
    link: "https://github.com/ChrisPeterkins/clm-helper-extension",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: "PA School Data Visualization",
    description: "A web application for visualizing and analyzing Pennsylvania school performance data from PSSA and Keystone exams. Features school search, interactive charts, historical data from 2015-2024, comparison tools, and state-level aggregate analytics.",
    image: null,
    link: "https://github.com/ChrisPeterkins/school-data-visualization",
    technologies: ["TypeScript", "React", "Fastify", "SQLite", "Recharts", "Drizzle ORM"]
  },
  {
    title: "Tessel",
    description: "Windows-style window management for macOS. Snap windows to halves, thirds, quarters, and sixths with hotkeys, drag windows to screen edges with a live preview overlay, and throw them between displays. Also supports saved workspace arrangements, window stashing, custom sizes, and app pinning. A menu bar app written in native Swift with zero dependencies.",
    image: null,
    link: "https://github.com/ChrisPeterkins/Tessel",
    technologies: ["Swift", "macOS", "Accessibility API"]
  },
  {
    title: "Claude History & Codex History",
    description: "Terminal UIs for browsing your Claude Code and Codex conversation history. Three-panel project, session, and conversation layout with full Markdown rendering, syntax-highlighted code, collapsible tool calls, full-text search, vim-style marks, multiple color themes, and clipboard export to Markdown. Cross-platform for macOS, Linux, and Windows.",
    image: null,
    link: "https://github.com/ChrisPeterkins/claude-history",
    technologies: ["Go", "Bubble Tea", "Lip Gloss", "Glamour"]
  },
  {
    title: "Lamplight",
    description: "A cozy audiobook player and EPUB/PDF reader for macOS and iPhone. Point it at a folder and it builds a shelf from your files, reading titles, authors, and cover art from metadata. Automatically converts Audible .aax files into per-chapter .m4b files losslessly. The iPhone app adds an offline shelf, Files import, a paginated EPUB reader, a native PDF reader, and synced reading progress.",
    image: null,
    link: "https://github.com/ChrisPeterkins/Lamplight",
    technologies: ["Electron", "JavaScript", "Swift", "SwiftUI", "FFmpeg"]
  },
  {
    title: "Paper Trail",
    description: "A private, single-owner tracker for congressional financial disclosures. Ingests official House filings, preserves the raw source documents, resolves securities and market prices, and surfaces followed-person and watchlisted-security activity in a curated feed. Scanned filings are recognized entirely on-device with Apple Vision OCR and queued for owner review before any row is approved.",
    image: null,
    link: "https://github.com/ChrisPeterkins/paper-trail",
    technologies: ["Python", "Django", "SQLite", "Apple Vision", "OpenFIGI", "Tiingo"]
  },
  {
    title: "AtticWatch",
    description: "A native macOS monitor for a GardePro E6 trail camera. Performs the full vendor handshake itself over Bluetooth and Wi-Fi, streams the camera's H.264 RTSP feed, and reads and writes the camera's own settings. Desktop motion detection saves pre-roll MP4 clips, classifies likely animals locally with Apple Vision, and provides an event timeline, motion heatmap, and daily contact-sheet export.",
    image: null,
    link: "https://github.com/ChrisPeterkins/AtticWatch",
    technologies: ["Swift", "macOS", "RTSP", "Apple Vision", "CoreBluetooth"]
  },
  {
    title: "OSRS Tangleroot Drop Calculator",
    description: "An offline desktop calculator for Tangleroot, the Old School RuneScape Farming pet. Configure your farm run and Farming level to see your odds per run, a cumulative curve toward 99% confidence, milestone estimates, a per-crop contribution breakdown, and a dry-streak read-out. Covers all 80 crops across 21 patch types with rates sourced from the OSRS Wiki, fully bundled with no network access.",
    image: null,
    link: "https://github.com/ChrisPeterkins/OSRS-Tangleroot-Drop-Calculator",
    technologies: ["JavaScript", "Electron", "HTML", "CSS"]
  },
  {
    title: "Home Automation System",
    description: "A macOS SwiftUI app for managing a home or multi-property portfolio from one place. Combines an interactive floor-plan editor with electrical, plumbing, HVAC, and network overlays, inventory tracking with QR codes and reorder alerts, maintenance scheduling, bills, documents with OCR, contacts, vehicles, and a full audit trail. Exports property backups plus buyer and estate binder PDFs.",
    image: null,
    link: "https://github.com/ChrisPeterkins/home-automation-system",
    technologies: ["Swift", "SwiftUI", "SwiftData", "macOS"]
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
