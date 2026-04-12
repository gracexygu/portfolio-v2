import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { skills, projects } from '../data'

type Tab = 'skills' | 'projects'

export function Toolkit() {
  const [activeTab, setActiveTab] = useState<Tab>('skills')
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="toolkit" className="min-h-screen flex items-center justify-center px-8 py-24">
      <div
        ref={ref}
        className={`max-w-2xl w-full reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="font-serif text-4xl mb-12 text-center">Toolkit</h2>
        
        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-12">
          <button
            onClick={() => setActiveTab('skills')}
            className={`
              text-sm font-medium pb-2 border-b-2 transition-all duration-300
              ${activeTab === 'skills' 
                ? 'border-text text-text' 
                : 'border-transparent text-text-muted hover:text-text-secondary'}
            `}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`
              text-sm font-medium pb-2 border-b-2 transition-all duration-300
              ${activeTab === 'projects' 
                ? 'border-text text-text' 
                : 'border-transparent text-text-muted hover:text-text-secondary'}
            `}
          >
            Vibe Coding
          </button>
        </div>
        
        {/* Skills List */}
        {activeTab === 'skills' && (
          <div className="space-y-2">
            {skills.map((skill) => (
              <a
                key={skill.id}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-3 px-4 -mx-4 rounded-lg hover:bg-neutral-50 transition-colors duration-300"
              >
                {/* Folder icon */}
                <svg
                  className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                
                {/* Name */}
                <span className="font-mono text-sm text-text group-hover:text-accent transition-colors duration-300">
                  {skill.name}
                </span>
                
                {/* Description */}
                <span className="text-text-muted text-sm flex-1">
                  {skill.description}
                </span>
                
                {/* Tags */}
                <div className="flex gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-neutral-100 text-text-muted rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Arrow */}
                <svg
                  className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ))}
          </div>
        )}
        
        {/* Projects (placeholder) */}
        {activeTab === 'projects' && (
          <div className="text-center py-16">
            {projects.length === 0 ? (
              <p className="text-text-muted">
                Vibe Coding 项目即将上线...
              </p>
            ) : (
              <div className="grid gap-4">
                {/* TODO: Project cards */}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
