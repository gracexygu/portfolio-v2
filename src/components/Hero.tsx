/**
 * Hero - 首屏组件
 * 
 * 特点：
 * - 克莱因蓝模糊球背景
 * - 简洁首屏，导航在下方独立目录区
 */

import { KleinOrb } from './KleinOrb'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col px-8 md:px-16 py-10 relative">
      {/* Klein Blue Orb */}
      <KleinOrb />
      
      {/* Main Content - 右移 */}
      <div className="flex-1 flex flex-col justify-center max-w-2xl ml-auto py-16 relative z-10">
        <h1 className="font-serif font-normal leading-tight mb-16">
          <span className="text-7xl md:text-8xl lg:text-9xl text-klein">Hello,</span>
          <br /><br />
          <span className="text-4xl md:text-5xl lg:text-6xl">I am Grace – exploring the intersection of strategy, product, and AI.</span>
        </h1>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute right-8 md:right-16 bottom-12 font-serif text-sm text-text-muted hidden lg:block">
        scroll & explore
      </div>
    </section>
  )
}
