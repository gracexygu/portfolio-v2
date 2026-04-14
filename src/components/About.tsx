/**
 * About - 关于我
 * 
 * 特点：
 * - Morphing Blob 作为标题背景
 * - 双栏布局（文字 + 照片）
 * - 金句衬线化
 */

import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionHeader } from './MorphingBlob'


export function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 px-8 md:px-16"
    >
      <div
        ref={ref}
        className={`max-w-5xl mx-auto reveal ${isVisible ? 'visible' : ''}`}
      >
        {/* Section Header with Blob */}
        <SectionHeader num="01" title="ABOUT" blobVariant="about" />
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Text Column */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-text-secondary text-justify">
              I'm a <span className="text-klein font-medium">Master's student at Tongji University</span> studying International Relations, 
              with a background in Public Administration from Lanzhou University. 
              My journey spans operations, strategy, and now product — always driven by 
              curiosity about how systems work and how AI can make them better.
            </p>
            
            {/* Quote removed - moved to bottom as slogan */}
            
            <p className="text-lg leading-relaxed text-text-secondary text-justify">
              From designing coupon strategies at TikTok Indonesia to crafting 
              high-conversion ad materials at Xiaohongshu, I've learned to balance 
              data-driven decisions with creative intuition.
            </p>
          </div>
          
          {/* Photo Column - 倾斜 + 阴影 */}
          <div className="md:justify-self-end max-w-sm md:max-w-md order-first md:order-last">
            <div className="rotate-3 shadow-2xl hover:rotate-0 hover:shadow-3xl transition-all duration-500">
              <img 
                src="/photo.jpg" 
                alt="Grace" 
                className="w-full aspect-[4/5] object-cover object-top border border-border-l2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Slogan */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-28 overflow-hidden">
        <p className="font-serif text-5xl md:text-7xl lg:text-8xl text-klein/10 leading-none tracking-wider whitespace-nowrap">
          Finding myself in what I build
        </p>
      </div>
    </section>
  )
}
