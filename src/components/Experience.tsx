import { useScrollReveal } from '../hooks/useScrollReveal'
import { experiences } from '../data'

export function Experience() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-8 py-24">
      <div
        ref={ref}
        className={`max-w-2xl w-full reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="font-serif text-4xl mb-12 text-center">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group flex gap-8 py-4 hover:bg-neutral-50 -mx-4 px-4 rounded-lg transition-colors duration-300"
            >
              {/* Period */}
              <div className="w-24 flex-shrink-0">
                <span className="text-text-muted text-sm font-mono">
                  {exp.period}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-text font-medium group-hover:text-accent transition-colors duration-300">
                  {exp.organization}
                </h3>
                <p className="text-text-secondary mt-1">
                  {exp.title}
                </p>
                {exp.description && (
                  <p className="text-text-muted text-sm mt-2">
                    {exp.description}
                  </p>
                )}
              </div>
              
              {/* Type indicator */}
              <div className="flex-shrink-0">
                <span className={`
                  text-xs px-2 py-1 rounded
                  ${exp.type === 'work' ? 'bg-accent/10 text-accent' : 'bg-neutral-100 text-text-muted'}
                `}>
                  {exp.type === 'work' ? '实习' : '学业'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
