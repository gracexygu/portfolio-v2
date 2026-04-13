/**
 * Taste Section - 3D Flip Gallery (Photography)
 * 
 * 特性：
 * - 点击翻转展示拍摄故事
 * - Klein Blue 背面 + 香槟金 meta 信息
 * - 3D 入场动画
 * - 移动端触摸支持
 */

import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { MorphingBlob } from './MorphingBlob'
import { tasteItems } from '../data'

interface FlipCardProps {
  item: typeof tasteItems[0]
  index: number
  isFlipped: boolean
  onFlip: () => void
}

function FlipCard({ item, index, isFlipped, onFlip }: FlipCardProps) {
  return (
    <div
      className="flip-card h-[320px] cursor-pointer"
      style={{
        perspective: '1000px',
        animationDelay: `${index * 0.1}s`,
      }}
      onClick={onFlip}
    >
      <div
        className={`flip-card-inner relative w-full h-full transition-transform duration-700 ease-out`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* 正面 - 图片 */}
        <div
          className="flip-front absolute w-full h-full rounded-xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {/* 悬浮提示 */}
          <span className="absolute bottom-3 right-3 bg-klein text-white font-mono text-[10px] px-2 py-1 rounded opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hint-tag">
            CLICK
          </span>
        </div>

        {/* 背面 - 故事 */}
        <div
          className="flip-back absolute w-full h-full rounded-xl overflow-hidden flex flex-col justify-center p-6 bg-klein shadow-xl"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* 关闭按钮 */}
          <button
            className="absolute top-3 right-3 w-7 h-7 bg-white/20 hover:bg-white/30 rounded-full text-white text-base flex items-center justify-center transition-all duration-300 hover:rotate-90"
            onClick={(e) => {
              e.stopPropagation()
              onFlip()
            }}
          >
            ×
          </button>

          <h3 className="font-serif text-xl text-white mb-3">
            {item.title}
          </h3>
          <p className="text-sm text-white/80 leading-relaxed mb-4">
            {item.story}
          </p>
          <span className="font-mono text-xs text-accent">
            {item.location} · {item.date}
          </span>
        </div>
      </div>
    </div>
  )
}

export function Taste() {
  const { ref, isVisible } = useScrollReveal()
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index)
  }

  return (
    <section
      id="taste"
      ref={ref}
      className={`py-24 px-8 md:px-16 bg-gradient-to-br from-gray-100 to-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ perspective: '2000px' }}
    >
      {/* Section Header with Morphing Blob */}
      <div className="flex items-center gap-6 mb-12">
        <MorphingBlob variant="taste" />
        <h2 className="section-title-text flex items-baseline gap-4">
          <span className="section-title-num">03</span>
          PHOTOGRAPHY
        </h2>
      </div>

      {/* 3D Flip Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
        {tasteItems.map((item, index) => (
          <FlipCard
            key={item.id}
            item={item}
            index={index}
            isFlipped={flippedIndex === index}
            onFlip={() => handleFlip(index)}
          />
        ))}
      </div>
    </section>
  )
}
