/**
 * Contact - 联系方式
 * 
 * 特点：
 * - 深色背景（黑底）
 * - 无 Blob 装饰
 * - 香槟金 hover 效果
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
            
            {/* Links */}
            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="contact-link inline-flex items-center gap-2 text-white text-base w-fit transition-colors"
                >
                  {link.label}
                  <span className="text-sm transition-transform hover:translate-x-0.5 hover:-translate-y-0.5">↗</span>
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
