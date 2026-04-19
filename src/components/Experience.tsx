/**
 * Experience - 岁月拨盘 Chronicle Dial
 */

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionHeader } from './MorphingBlob'
import { dialExperiences } from '../data'

const typeIcon: Record<string, string> = {
  education: '🎓',
  work: '💼',
  achievement: '🏆',
}

export function Experience() {
  const { ref, isVisible } = useScrollReveal()
  const years = dialExperiences.map((e) => e.year)
  const [activeYear, setActiveYear] = useState(years[0])
  const currentIndex = years.indexOf(activeYear)
  const current = dialExperiences[currentIndex]
  const totalYears = years.length
  const rotationPerYear = 15
  const dialRotation = (currentIndex - (totalYears - 1) / 2) * -rotationPerYear

  const goPrev = useCallback(() => {
    if (currentIndex > 0) setActiveYear(years[currentIndex - 1])
  }, [currentIndex, years])

  const goNext = useCallback(() => {
    if (currentIndex < years.length - 1) setActiveYear(years[currentIndex + 1])
  }, [currentIndex, years])

  return (
    <section id="experience" className="py-16 md:py-20 px-8 md:px-16">
      <div ref={ref} className={`max-w-6xl mx-auto reveal ${isVisible ? 'visible' : ''}`}>
        <SectionHeader num="02" title="EXPERIENCE" blobVariant="experience" />
        <div className="dial-wrapper">
          <div className="dial-content-area">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeYear}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="dial-content-inner"
              >
                <div className="dial-left-col">
                  <div className="dial-image-wrap">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="dial-image"
                      loading="lazy"
                    />
                    <div className="dial-image-overlay" />
                  </div>
                  <div className="dial-meta">
                    <span className="dial-icon">{typeIcon[current.type]}</span>
                    <span className="dial-location">{current.location}</span>
                  </div>
                </div>

                <div className="dial-right-col">
                  <div className="dial-era-label">
                    <div className="dial-era-line" />
                    <span>Era_{activeYear}</span>
                  </div>
                  <h3 className="dial-title">{current.title}</h3>
                  <p className="dial-subtitle">{current.subtitle}</p>
                  <p className="dial-description">{current.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="dial-bottom">
            <div className="dial-arc-container">
              <motion.div
                className="dial-arc"
                animate={{ rotate: dialRotation }}
                transition={{ type: 'spring', stiffness: 35, damping: 12 }}
              >
                {years.map((year, i) => {
                  const angle = (i - (totalYears - 1) / 2) * rotationPerYear
                  const isActive = activeYear === year
                  return (
                    <div
                      key={year}
                      className="dial-marker-root"
                      style={{ transform: `translateX(-50%) rotate(${angle}deg)` }}
                    >
                      <div className="dial-marker-inner">
                        <span
                          className={`dial-marker-year ${
                            isActive ? 'text-klein scale-110' : 'text-gray-300/60'
                          }`}
                        >
                          {year}
                        </span>
                        <div
                          className={`dial-marker-bar ${
                            isActive ? 'h-16 bg-klein' : 'h-8 bg-gray-300/40'
                          }`}
                        />
                      </div>
                    </div>
                  )
                })}
                {years.map((year, i) => {
                  const angle = (i - (totalYears - 1) / 2) * rotationPerYear
                  return (
                    <button
                      key={`btn-${year}`}
                      onClick={() => setActiveYear(year)}
                      className="dial-click-area"
                      style={{ transform: `translateX(-50%) rotate(${angle}deg)` }}
                      aria-label={`Go to year ${year}`}
                    >
                      <span className="sr-only">{year}</span>
                    </button>
                  )
                })}
              </motion.div>
            </div>

            <div className="dial-pointer-wrap">
              <div className="dial-pointer-needle" />
              <div className="dial-pointer-dot" />
            </div>

            <div className="dial-nav">
              <button
                onClick={goPrev}
                disabled={currentIndex === 0}
                className="dial-nav-btn group"
                aria-label="Previous era"
              >
                <ChevronLeft className="w-6 h-6 group-hover:text-klein transition-colors" />
                <span className="dial-nav-label">Prev</span>
              </button>

              <div className="flex items-center gap-1.5">
                {years.map((y, idx) => (
                  <div
                    key={`dot-${y}`}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      idx === currentIndex ? 'w-8 bg-klein' : 'w-3 bg-gray-300/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                disabled={currentIndex === years.length - 1}
                className="dial-nav-btn group"
                aria-label="Next era"
              >
                <ChevronRight className="w-6 h-6 group-hover:text-klein transition-colors" />
                <span className="dial-nav-label">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}