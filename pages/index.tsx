import Head from 'next/head'
import { About, Experience, Projects, Writing, Footer, Certifications } from '../components'
import { Header } from '../components/Header'
import { useEffect, useRef } from 'react'

export default function Home() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const { pageX, pageY } = e
        const scrollX = window.scrollX
        const scrollY = window.scrollY
        
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${pageX}px ${pageY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative">
      <div 
        ref={spotlightRef} 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      />
      <Head>
        <title>Your Portfolio</title>
        <meta name="description" content="Your portfolio description" />
      </Head>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Certifications />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
} 