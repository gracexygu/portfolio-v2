/**
 * Contact - 联系方式
 * 
 * 特点：
 * - 深色背景（黑底）
 * - 无 Blob 装饰
 * - 香槟金 hover 效果
 * - 三个联系方式平行排列
 */

import { useScrollReveal } from '../hooks/useScrollReveal'
import { contactLinks } from '../data'

export function Contact() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="contact"
      className="bg-[#0A0A0A] py-16 md:py-20 px-8 md:px-16"
    >
      <div
        ref={ref}
        className={`max-w-4xl mx-auto reveal ${isVisible ? 'visible' : ''}`}
      >
        {/* Section Header - 白色文字 */}
        <h2 className="section-title-text flex items-baseline gap-4 text-white mb-16">
          <span className="section-title-num">05</span>
          GET IN TOUCH
        </h2>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Text */}
          <div>
            <p className="text-lg leading-relaxed text-text-muted mb-10">
              Open to opportunities in AI Product Management. 
              Whether you're looking for a strategy-minded PM who can bridge 
              operations and product, or just want to chat about AI applications — 
              let's connect.
            </p>
            
            {/* Links - 平行排列，无箭头 */}
            <div className="flex flex-wrap gap-6">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="contact-link text-white text-base transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Empty column for balance */}
          <div />
        </div>
      </div>
    </section>
  )
}
