/**
 * Taste - 审美展示
 * 
 * 特点：
 * - Morphing Blob（大幅度旋转变形）作为标题背景
 * - 小红书主页截图 + 热门笔记
 * - 点击交互查看笔记详情
 */

import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionHeader } from './MorphingBlob'
import { socialLinks, xhsNotes, type XHSNote } from '../data'

export function Taste() {
  const { ref, isVisible } = useScrollReveal()
  const [selectedNote, setSelectedNote] = useState<XHSNote | null>(null)

  const handleNoteClick = (note: XHSNote) => {
    setSelectedNote(note)
    // 实际项目中这里可以跳转到笔记详情页或打开弹窗
    // window.open(`${socialLinks.xhs}/note/${note.id}`, '_blank')
  }

  const closeModal = () => setSelectedNote(null)

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
          Here's a glimpse into my world.
        </p>
        
        {/* XHS Profile + Popular Notes Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Profile Screenshot Placeholder */}
          <a 
            href={socialLinks.xhs}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="aspect-[9/16] max-w-xs mx-auto bg-gradient-to-b from-gray-50 to-gray-100 border border-border-l2 rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-500">
              {/* XHS Header */}
              <div className="bg-[#ff2442] p-3 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full" />
                  <span className="text-sm font-medium">我的小红书主页</span>
                </div>
              </div>
              {/* Profile Area */}
              <div className="p-4 border-b border-border-l2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-16 h-16 bg-klein/20 rounded-full border-2 border-white shadow-md" />
                  <div>
                    <div className="text-sm font-medium text-text">Grace</div>
                    <div className="text-xs text-text-muted">小红书号：5bc9f03e</div>
                  </div>
                </div>
                <div className="text-xs text-text-secondary">生活记录 · 旅行摄影 · 读书笔记</div>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 py-3 border-b border-border-l2">
                <div className="text-center">
                  <div className="text-sm font-medium text-text">128</div>
                  <div className="text-xs text-text-muted">关注</div>
                </div>
                <div className="text-center border-x border-border-l2">
                  <div className="text-sm font-medium text-text">2.5k</div>
                  <div className="text-xs text-text-muted">粉丝</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-text">45.2k</div>
                  <div className="text-xs text-text-muted">获赞</div>
                </div>
              </div>
              {/* Notes Grid Preview */}
              <div className="p-3 grid grid-cols-3 gap-1">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square bg-gray-200 rounded" />
                ))}
              </div>
            </div>
            <p className="text-center text-sm text-text-muted mt-4 group-hover:text-klein transition-colors">
              点击访问小红书主页 ↗
            </p>
          </a>

          {/* Right: Popular Notes */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-text mb-6">热门笔记</h3>
            
            {xhsNotes.map((note) => (
              <button
                key={note.id}
                onClick={() => handleNoteClick(note)}
                className="w-full text-left group"
              >
                <div className="flex gap-4 p-4 bg-white border border-border-l2 rounded-lg shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5 group-hover:border-klein transition-all duration-300">
                  {/* Note Thumbnail Placeholder */}
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-md flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-text-muted">📷</span>
                  </div>
                  
                  {/* Note Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-text truncate mb-1 group-hover:text-klein transition-colors">
                      {note.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-text-muted">
                      <span>❤️ {note.likes}</span>
                      <span>·</span>
                      <span className="text-klein">点击查看</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Note Detail Modal */}
        {selectedNote && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-serif text-xl text-text">{selectedNote.title}</h3>
                <button 
                  onClick={closeModal}
                  className="text-text-muted hover:text-text text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-text-muted">笔记截图占位</span>
              </div>
              
              <p className="text-text-secondary text-sm mb-4">
                这里是笔记的详细内容预览。实际使用时可以替换为真实的笔记截图或嵌入内容。
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-muted">❤️ {selectedNote.likes}</span>
                <a 
                  href={socialLinks.xhs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-klein hover:underline"
                >
                  去小红书查看 ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
