/**
 * Taste - 审美展示
 * 
 * 特点：
 * - Morphing Blob（大幅度旋转变形）作为标题背景
 * - 摄影作品 Gallery
 * - 小红书卡片入口
 */

import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionHeader } from './MorphingBlob'
import { socialLinks } from '../data'

// Placeholder photos - 替换为真实摄影作品
const photos = [
  { id: 1, placeholder: true },
  { id: 2, placeholder: true },
  { id: 3, placeholder: true },
  { id: 4, placeholder: true },
  { id: 5, placeholder: true },
  { id: 6, placeholder: true },
]

export function Taste() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section 
      id="taste" 
      className="border-t border-border-l1 py-28 md:py-36 px-8 md:px-16"
    >
      <div
        ref={ref}
        className={`max-w-5xl mx-auto reveal ${isVisible ? 'visible' : ''}`}
      >
        {/* Section Header with Blob */}
        <SectionHeader num="03" title="TASTE" blobVariant="taste" />
        
        {/* Intro Text */}
        <p className="text-lg leading-relaxed text-text-secondary max-w-xl mb-12">
          Beyond work, I capture moments through photography and share thoughts on Xiaohongshu. 
          Here's a glimpse into my aesthetic world.
        </p>
        
        {/* Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 border border-dashed border-border-l2 flex items-center justify-center text-text-muted text-sm cursor-pointer hover:border-klein transition-colors"
            >
              Photo {photo.id}
            </div>
          ))}
        </div>
        
        {/* Xiaohongshu Card */}
        <a 
          href={socialLinks.xhs}
          target="_blank"
          rel="noopener noreferrer"
          className="xhs-card no-underline"
        >
          {/* XHS Icon */}
          <div className="w-16 h-16 bg-[#ff2442] rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">小红书</span>
          </div>
          
          {/* Info */}
          <div className="flex-1">
            <h4 className="font-serif text-lg text-text mb-1">我的小红书</h4>
            <p className="text-text-secondary text-sm mb-2">
              生活记录、旅行摄影、读书笔记
            </p>
            <span className="text-klein text-sm inline-flex items-center gap-1">
              查看主页 <span>↗</span>
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
