import { useState, useEffect } from 'react'
import { Nav, Hero, About, Experience, Toolkit, Taste, Contact, Footer } from './components'
import { navItems } from './data'

function App() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      <Nav activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Toolkit />
        <Taste />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
