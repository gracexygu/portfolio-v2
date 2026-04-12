/**
 * Experience - 经历时间轴
 * 
 * 特点：
 * - Morphing Blob（水平拉伸动画）作为标题背景
 * - 时间轴布局，日期使用 JetBrains Mono
 * - 教育经历标题置灰
 */

import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionHeader } from './MorphingBlob'
import { experiences } from '../data'

export function Experience() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section 
      id="experience" 
      className="border-t border-border-l1 py-16 md:py-20 px-8 md:px-16"
    >
      <div
        ref={ref}
        className={`max-w-4xl mx-auto reveal ${isVisible ? 'visible' : ''}`}
      >
        {/* Section Header with Blob */}
        <SectionHeader num="02" title="EXPERIENCE" blobVariant="experience" />
        
        {/* Timeline */}
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="timeline-item"
            >
              {/* Period */}
              <div className="font-mono text-sm text-text-muted tabular-nums">
                {exp.period}
              </div>
              
              {/* Content */}
              <div>
                <h3 className={`font-serif text-xl font-normal mb-2 ${
                  exp.type === 'education' ? 'text-text-muted' : 'text-text'
                }`}>
                  {exp.title}
                </h3>
                <div className="text-klein text-base mb-3">
                  {exp.organization}
                </div>
                {exp.description && (
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
