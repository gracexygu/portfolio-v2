/**
 * Hero - 首屏组件
 * 
 * 特点：
 * - 克莱因蓝模糊球背景
 * - Liesingers 风格底部四栏导航
 * - 去除顶部固定导航
 */

import { KleinOrb } from './KleinOrb'
import { navItems, socialLinks } from '../data'

export function Hero() {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex flex-col px-8 md:px-16 py-10 relative">
      {/* Klein Blue Orb */}
      <KleinOrb />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center max-w-2xl py-16 relative z-10">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-16">
          Hello,
          <br /><br />
          I am Grace – exploring the intersection of strategy, product, and AI.
        </h1>
        
        {/* Links */}
        <div className="flex flex-col gap-3">
          <a 
            href={`mailto:${socialLinks.email}`}
            className="inline-flex items-center gap-2 text-sm text-text hover:text-klein transition-colors w-fit"
          >
            {socialLinks.email}
            <span className="text-klein transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
          <a 
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text hover:text-klein transition-colors w-fit"
          >
            GitHub
            <span className="text-klein">↗</span>
          </a>
        </div>
      </div>
      
      {/* Bottom Navigation - Liesingers Style */}
      <nav className="grid grid-cols-2 md:grid-cols-4 border-t border-text relative z-10">
        {navItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`
              nav-bottom-item
              py-6 flex justify-between items-center
              font-serif text-lg md:text-xl
              text-text lowercase
              ${index < navItems.length - 1 ? 'border-r border-text' : ''}
              ${index === 0 ? 'pr-4 md:pr-6' : 'px-4 md:px-6'}
              ${index === 1 && 'md:border-r'}
              ${index === 2 && 'border-r-0 md:border-r'}
            `}
          >
            <span>{item.label}</span>
            <span className="text-klein text-base transition-transform">↗</span>
          </button>
        ))}
      </nav>
      
      {/* Scroll Indicator */}
      <div className="absolute right-8 md:right-16 bottom-32 font-serif text-sm text-text-muted hidden lg:block">
        scroll & explore
      </div>
    </section>
  )
}
