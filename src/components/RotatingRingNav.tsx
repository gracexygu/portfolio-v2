/**
 * RotatingRingNav - 旋转文字环导航
 * 
 * 特点：
 * - 呼吸泡 + 旋转文字环
 * - 悬停显示章节标题
 * - 点击后爆炸消散 + 页面跳转
 * - 仅在 Hero 区域显示（absolute 定位）
 */

import { useRef, useState } from 'react'

const navWords = [
  { text: 'About', offset: '0%', isNav: true, id: 'about' },
  { text: '·', offset: '5%', isNav: false, id: '' },
  { text: 'Experience', offset: '7%', isNav: true, id: 'experience' },
  { text: '·', offset: '17%', isNav: false, id: '' },
  { text: 'Photography', offset: '19%', isNav: true, id: 'taste' },
  { text: '·', offset: '31%', isNav: false, id: '' },
  { text: 'SocialMedia', offset: '33%', isNav: true, id: 'socialmedia' },
  { text: '·', offset: '45%', isNav: false, id: '' },
  { text: 'Toolkit', offset: '47%', isNav: true, id: 'toolkit' },
  { text: '·', offset: '55%', isNav: false, id: '' },
  { text: 'Contact', offset: '57%', isNav: true, id: 'contact' },
  { text: '·', offset: '65%', isNav: false, id: '' },
  { text: 'finding myself in what i build', offset: '67%', isNav: false, id: '' },
]

export function RotatingRingNav() {
  const ringRef = useRef<HTMLDivElement>(null)
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const [isExploding, setIsExploding] = useState(false)
  const [currentRotation, setCurrentRotation] = useState(0)

  // 获取当前旋转角度
  const captureRotation = () => {
    if (!ringRef.current) return 0
    const style = window.getComputedStyle(ringRef.current)
    const matrix = style.transform
    if (matrix === 'none') return 0
    const values = matrix.split('(')[1].split(')')[0].split(',')
    return Math.round(Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180 / Math.PI))
  }

  const handleNavClick = (sectionId: string) => {
    if (!sectionId) return
    setCurrentRotation(captureRotation())
    setIsExploding(true)
    
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }, 800)

    window.setTimeout(() => {
      setIsExploding(false)
    }, 1200)
  }

  return (
    <div 
      className="absolute z-50 pointer-events-auto"
      style={{
        right: '-100px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '600px',
        height: '600px',
      }}
    >
      {/* 呼吸泡 */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full pointer-events-none z-[5]"
        style={{
          background: 'radial-gradient(circle, #002FA7 0%, #1A47C9 35%, transparent 70%)',
          filter: 'blur(50px)',
          animation: isExploding ? 'orbExplode 1s ease-out forwards' : 'navBreathe 4s ease-in-out infinite',
        }}
      />

      {/* 悬停标题显示 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <span 
          className="font-serif text-[22px] italic transition-opacity duration-300"
          style={{ 
            color: '#002FA7',
            opacity: hoveredSection ? 1 : 0,
            animation: isExploding ? 'titleExplode 1s ease-out forwards' : 'none',
          }}
        >
          {hoveredSection}
        </span>
      </div>

      {/* 旋转文字环 */}
      <div 
        ref={ringRef}
        className="absolute inset-0"
        style={{
          animation: isExploding 
            ? 'ringExplode 1s ease-out forwards' 
            : 'ringRotate 50s linear infinite',
          ['--current-rotation' as string]: `${currentRotation}deg`,
        }}
        onMouseEnter={() => ringRef.current && (ringRef.current.style.animationPlayState = 'paused')}
        onMouseLeave={() => ringRef.current && (ringRef.current.style.animationPlayState = 'running')}
      >
        <svg className="w-full h-full overflow-visible" viewBox="0 0 600 600">
          <defs>
            <path 
              id="circlePath" 
              d="M 300, 300 m -240, 0 a 240,240 0 1,1 480,0 a 240,240 0 1,1 -480,0" 
              fill="none"
            />
          </defs>
          {/* 圆圈描边（透明度为0） */}
          <circle cx="300" cy="300" r="240" fill="none" stroke="rgba(26,26,26,0.4)" strokeWidth="0.3" opacity="0" />
          
          {navWords.map((word, index) => (
            <text
              key={index}
              className="cursor-pointer transition-all duration-300"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                fontWeight: 300,
                letterSpacing: '3px',
                fill: word.isNav 
                  ? (hoveredSection === word.text ? '#002FA7' : 'rgba(26, 26, 26, 0.4)')
                  : 'rgba(26, 26, 26, 0.4)',
              }}
              onMouseEnter={() => word.isNav && setHoveredSection(word.text)}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => word.isNav && handleNavClick(word.id)}
            >
              <textPath href="#circlePath" startOffset={word.offset}>
                {word.text}
              </textPath>
            </text>
          ))}
        </svg>
      </div>

      {/* 右侧渐隐遮罩 */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to left, #F5F5F5 0%, rgba(245,245,245,0.8) 30%, rgba(245,245,245,0) 70%)',
        }}
      />
    </div>
  )
}
