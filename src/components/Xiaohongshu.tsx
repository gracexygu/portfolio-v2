/**
 * Xiaohongshu Section - 小红书主页 + 热门笔记
 * 
 * 特性：
 * - 左侧：主页截图占位（9:16）
 * - 右侧：3 个热门笔记卡片，点击弹窗预览
 */

import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { xhsNotes, socialLinks } from '../data'

export function Xiaohongshu() {
  const { ref, isVisible } = useScrollReveal()
  const [selectedNote, setSelectedNote] = useState<typeof xhsNotes[0] | null>(null)

  const openModal = (note: typeof xhsNotes[0]) => setSelectedNote(note)
  const closeModal = () => setSelectedNote(null)

  return (
    <section
      id="xhs"
      ref={ref}
      className={`py-24 px-8 md:px-16 bg-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Section Header */}
      <div className="flex items-center gap-6 mb-12">
        <div>
          <h2 className="font-serif text-sm tracking-[6px] text-text-secondary uppercase">
            Xiaohongshu
          </h2>
          <p className="text-sm text-text-secondary mt-1">
            我的小红书主页和热门笔记
          </p>
        </div>
      </div>

      {/* Content: 左侧主页 + 右侧笔记 */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto">
        {/* 左侧 - 主页截图占位 */}
        <div className="md:w-1/3 flex-shrink-0">
          <a
            href={socialLinks.xhs}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="aspect-[9/16] rounded-2xl border border-border-l2 shadow-lg overflow-hidden bg-gradient-to-br from-red-50 to-pink-50 hover:shadow-xl hover:border-klein/30 transition-all duration-300">
              {/* 模拟小红书主页 */}
              <div className="p-4 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-pink-400 flex items-center justify-center text-white font-serif text-lg">
                    G
                  </div>
                  <div>
                    <p className="font-serif text-sm text-text">Grace</p>
                    <p className="text-xs text-text-muted">小红书号：grace_gu</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-6 mb-4 text-center">
                  <div>
                    <p className="text-sm font-medium text-text">128</p>
                    <p className="text-xs text-text-muted">关注</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text">3.2k</p>
                    <p className="text-xs text-text-muted">粉丝</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text">15.6k</p>
                    <p className="text-xs text-text-muted">获赞</p>
                  </div>
                </div>

                {/* Grid placeholders */}
                <div className="grid grid-cols-3 gap-1.5 flex-1">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                    >
                      <span className="text-[8px] text-text-muted">笔记</span>
                    </div>
                  ))}
                </div>

                {/* Hover hint */}
                <div className="mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-klein">去小红书查看 ↗</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* 右侧 - 热门笔记 */}
        <div className="md:w-2/3 flex flex-col gap-4">
          <h3 className="font-serif text-lg text-text mb-2">热门笔记</h3>
          {xhsNotes.map((note) => (
            <button
              key={note.id}
              onClick={() => openModal(note)}
              className="xhs-note-card flex items-center gap-4 p-4 rounded-xl border border-border-l2 bg-white hover:border-klein/30 hover:shadow-md transition-all duration-300 text-left group"
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={note.thumbnail}
                  alt={note.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-serif text-sm text-text line-clamp-2 group-hover:text-klein transition-colors">
                  {note.title}
                </p>
                <p className="text-xs text-text-muted mt-1">❤️ {note.likes}</p>
              </div>
              <span className="text-text-muted group-hover:text-klein transition-colors text-lg">›</span>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
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
    </section>
  )
}
