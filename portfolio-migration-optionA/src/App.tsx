/**
 * App - 主入口
 * 
 * 变更：
 * - 移除顶部固定导航（Hero 底部已有导航）
 * - 保留滚动监听（用于未来扩展）
 */

import { useState, useEffect } from 'react'
import { Hero, About, Experience, Taste, Toolkit, Contact, Footer } from './components'
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

  // activeSection 可用于未来扩展（如浮动进度指示器）
  // _activeSection available for future use

  return (
    <div className="relative">
      {/* 移除顶部导航 - Hero 底部已有导航 */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Taste />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
