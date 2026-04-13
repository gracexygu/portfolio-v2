/**
 * Toolkit - 技能与项目
 * 
 * 特点：
 * - 多核聚合球作为标题装饰
 * - 平铺展示
 * - 技能列表 + 项目卡片
 */

import { useScrollReveal } from '../hooks/useScrollReveal'
import { MultiNucleusBlob } from './MultiNucleusBlob'
import { skills, projects } from '../data'

export function Toolkit() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section 
      id="toolkit" 
      className="py-20 md:py-24 px-8 md:px-16"
    >
      <div
        ref={ref}
        className={`max-w-5xl mx-auto reveal ${isVisible ? 'visible' : ''}`}
      >
        {/* Section Header with Multi-Nucleus Blob */}
        <div className="flex items-center gap-6 mb-16">
          <MultiNucleusBlob />
          <h2 className="section-title-text flex items-baseline gap-4">
            <span className="section-title-num">04</span>
            TOOLKIT
          </h2>
        </div>
        
        {/* Intro Text */}
        <p className="text-lg leading-relaxed text-text-secondary max-w-xl mb-12">
          My AI toolkit — a collection of Mira custom Skills and vibe coding projects 
          that demonstrate how I approach product and engineering challenges.
        </p>
        
        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="flex items-center gap-2 text-sm text-text-muted mb-6">
            <span className="text-lg">📁</span> ai-toolkit
          </h3>
          
          <div className="space-y-1">
            {skills.map((skill) => (
              <a
                key={skill.id}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-item group"
              >
                {/* Name */}
                <span className="font-mono text-sm text-text skill-name transition-colors">
                  {skill.name}
                </span>
                
                {/* Description */}
                <span className="text-text-muted text-sm flex-1 hidden md:block">
                  {skill.description}
                </span>
                
                {/* Tags */}
                <div className="flex gap-2 hidden lg:flex">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-gray-100 text-text-muted rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Projects Section */}
        <h3 className="font-serif text-xl mb-8">Vibe Coding Projects</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
            >
              <h4 className="font-serif text-lg mb-3">{project.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <span className="inline-block px-3 py-1 bg-klein/10 text-klein text-xs font-medium rounded">
                {project.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
