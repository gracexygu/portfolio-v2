/**
 * Hero - 首屏组件
 * 
 * 特点：
 * - 打字机效果的自我介绍
 * - 右侧旋转文字环导航（absolute 定位，仅首屏可见）
 * - 关键词可点击高亮
 */

import { useState, useEffect } from 'react'
import { RotatingRingNav } from './RotatingRingNav'

const greetingText = "Hello,"
const introText = "I'm Grace – endlessly curious about how AI changes the way we build things. The best ideas come from the mess."
const keywords = ['Grace', 'curious', 'AI', 'mess']

export function Hero() {
  const [displayedGreeting, setDisplayedGreeting] = useState('')
  const [displayedIntro, setDisplayedIntro] = useState<(string | { text: string; isKeyword: boolean })[]>([])
  const [phase, setPhase] = useState<'greeting' | 'intro' | 'done'>('greeting')
  const [showCursor, setShowCursor] = useState(true)

  // 打字机效果
  useEffect(() => {
    let timeout: number

    if (phase === 'greeting') {
      if (displayedGreeting.length < greetingText.length) {
        const char = greetingText[displayedGreeting.length]
        const delay = char === ',' ? 200 : 50
        timeout = window.setTimeout(() => {
          setDisplayedGreeting(prev => prev + char)
        }, delay)
      } else {
        timeout = window.setTimeout(() => setPhase('intro'), 350)
      }
    } else if (phase === 'intro') {
      const currentLength = displayedIntro.reduce((acc, item) => 
        acc + (typeof item === 'string' ? item.length : item.text.length), 0
      )
      
      if (currentLength < introText.length) {
        // 检查是否是关键词开始
        let foundKeyword: string | null = null
        for (const kw of keywords) {
          if (introText.substring(currentLength, currentLength + kw.length) === kw) {
            const prevChar = currentLength > 0 ? introText[currentLength - 1] : ' '
            if (/[\s\.,\-–']/.test(prevChar) || kw === 'Grace') {
              foundKeyword = kw
              break
            }
          }
        }

        if (foundKeyword) {
          const kwToAdd = foundKeyword
          timeout = window.setTimeout(() => {
            setDisplayedIntro(prev => [...prev, { text: kwToAdd, isKeyword: true }])
          }, 45)
        } else {
          const char = introText[currentLength]
          const delay = char === ',' || char === '–' ? 180 : char === '.' ? 280 : 45
          timeout = window.setTimeout(() => {
            setDisplayedIntro(prev => [...prev, char])
          }, delay)
        }
      } else {
        setPhase('done')
      }
    }

    return () => window.clearTimeout(timeout)
  }, [displayedGreeting, displayedIntro, phase])

  // 光标闪烁
  useEffect(() => {
    const interval = window.setInterval(() => setShowCursor(prev => !prev), 500)
    return () => window.clearInterval(interval)
  }, [])

  const handleKeywordClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.currentTarget
    target.style.color = '#002FA7'
    target.animate([
      { transform: 'translateY(0)' },
      { transform: 'translateY(-12px)' },
      { transform: 'translateY(0)' },
    ], { duration: 500, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' })
  }

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ padding: '0 8vw', background: '#F5F5F5' }}
    >
      {/* 左侧内容 */}
      <div className="z-10" style={{ maxWidth: '55%' }}>
        {/* Hello, - 蓝色 */}
        <h1 
          className="font-serif font-normal leading-tight mb-6"
          style={{ fontSize: 'clamp(38px, 5vw, 64px)', color: '#002FA7' }}
        >
          {displayedGreeting}
          {phase === 'greeting' && (
            <span 
              className="inline-block w-[2px] h-[1em] ml-[2px] align-text-bottom"
              style={{ background: '#002FA7', opacity: showCursor ? 1 : 0 }}
            />
          )}
        </h1>

        {/* 自我介绍 */}
        <p 
          className="font-serif font-normal"
          style={{ fontSize: 'clamp(22px, 3.2vw, 36px)', color: '#1A1A1A', lineHeight: 1.5 }}
        >
          {displayedIntro.map((item, index) => 
            typeof item === 'string' ? (
              <span key={index}>{item}</span>
            ) : (
              <span 
                key={index} 
                className="cursor-pointer transition-colors duration-300 hover:text-klein"
                onClick={handleKeywordClick}
              >
                {item.text}
              </span>
            )
          )}
          {phase !== 'greeting' && (
            <span 
              className="inline-block w-[2px] h-[1em] ml-[2px] align-text-bottom"
              style={{ background: '#002FA7', opacity: showCursor ? 1 : 0 }}
            />
          )}
        </p>
      </div>

      {/* 右侧旋转导航环 */}
      <RotatingRingNav />
    </section>
  )
}
