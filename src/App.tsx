/**
 * App - 主入口
 *
 * 变更：
 * - 移除顶部固定导航（Hero 底部已有导航）
 * - 新增 SplashCursor 流体光标效果（Klein Blue 配色）
 */

import { useState, useEffect } from 'react'
import { Hero, About, Experience, Photography, Xiaohongshu, Toolkit, Contact, Footer, SplashCursor } from './components'
import { navItems } from './data'

function App() {
  const [_activeSection, setActiveSection] = useState('')

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
      {/* Klein Blue fluid cursor — transparent overlay, pointer-events:none */}
      <SplashCursor
        RAINBOW_MODE={false}
        COLOR="#002FA7"
        BACK_COLOR={{ r: 0, g: 0.02, b: 0.06 }}
        DENSITY_DISSIPATION={4.5}
        VELOCITY_DISSIPATION={2}
        SPLAT_RADIUS={0.12}
        SPLAT_FORCE={3000}
        CURL={3}
      />

      <main>
        <Hero />
        <About />
        <Experience />
        <Photography />
        <Xiaohongshu />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
