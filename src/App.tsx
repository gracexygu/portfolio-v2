/**
 * App - 主入口
 * 
 * 布局：
 * - Hero 首屏
 * - 静态目录导航（5项横排）
 * - 5个Section横向滚动容器（snap对齐）
 * - Footer
 */

import { useState, useEffect, useRef } from 'react'
import { Hero, About, Experience, Taste, Toolkit, Contact, Footer } from './components'
import { navItems } from './data'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // 监听横向滚动，更新 activeSection
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const sectionWidth = container.clientWidth
      const index = Math.round(scrollLeft / sectionWidth)
      if (index >= 0 && index < navItems.length) {
        setActiveSection(navItems[index].id)
      }
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  // 点击导航项，横向滚动到对应Section
  const handleNavClick = (id: string) => {
    const container = scrollContainerRef.current
    const sectionEl = document.getElementById(id)
    if (container && sectionEl) {
      const index = navItems.findIndex((item) => item.id === id)
      container.scrollTo({
        left: index * container.clientWidth,
        behavior: 'smooth',
      })
      setActiveSection(id)
    }
  }

  return (
    <div className="relative">
      <main>
        {/* Hero 首屏 */}
        <Hero />

        {/* 静态目录导航 - 柔和边框 + 箭头流动背景 */}
        <nav className="border-t border-b border-border-l1 sticky top-0 z-40 overflow-hidden">
          {/* 箭头流动背景层 */}
          <div className="nav-arrow-flow" aria-hidden="true" />
          {/* 导航内容层 */}
          <div className="relative z-10 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  nav-catalog-item
                  flex-1 py-2 md:py-3
                  font-serif text-sm md:text-base lowercase
                  text-center
                  transition-colors duration-300
                  ${activeSection === item.id ? 'text-klein bg-klein/5' : 'text-text hover:text-klein'}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* 5个Section横向滚动容器 */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="min-w-full snap-center"><About /></div>
          <div className="min-w-full snap-center"><Experience /></div>
          <div className="min-w-full snap-center"><Taste /></div>
          <div className="min-w-full snap-center"><Toolkit /></div>
          <div className="min-w-full snap-center"><Contact /></div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
