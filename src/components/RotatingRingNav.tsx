/**
 * RotatingRingNav - 旋转文字环导航
 * 
 * 特点：
 * - 呼吸泡 + 旋转文字环
 * - 悬停显示章节标题
 * - 点击后烟雾消散 + 页面跳转
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
  { text: 'SocialMedia', offset: '33%', isNav: true, id: 'xhs' },
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
  const [isHidden, setIsHidden] = useState(false)

  const handleNavClick = (sectionId: string) => {
    if (!sectionId || isExploding) return
    setIsExploding(true)
    
    setTimeout(() => {
      setIsHidden(true)
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }, 600)
  }

  if (isHidden) return null

  return (
    <>
      {/* 内联样式定义动画 */}
      <style>{`
        @keyframes navBreathe {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(1.5); filter: blur(20px); }
        }
        @keyframes ringFadeOut {
          from { opacity: 1; transform: rotate(var(--current-rotation, 0deg)) scale(1); }
          to { opacity: 0; transform: rotate(var(--current-rotation, 0deg)) scale(1.3); filter: blur(8px); }
        }
      `}</style>
      
      <div 
        className="absolute z-50 pointer-events-auto"
        style={{
          right: '-80px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '600px',
        }}
      >
        {/* 呼吸泡 - 放大尺寸 */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-[5]"
          style={{
            width: '280px',
            height: '280px',
            background: 'radial-gradient(circle, #002FA7 0%, #1A47C9 35%, transparent 70%)',
            filter: 'blur(60px)',
            animation: isExploding 
              ? 'fadeOut 0.6s ease-out forwards' 
              : 'navBreathe 4s ease-in-out infinite',
            willChange: 'transform, opacity, filter',
          }}
        />

        {/* 悬停标题显示 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <span 
            className="font-serif text-[22px] italic transition-opacity duration-300"
            style={{ 
              color: '#002FA7',
              opacity: hoveredSection && !isExploding ? 1 : 0,
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
              ? 'ringFadeOut 0.6s ease-out forwards' 
              : 'ringRotate 50s linear infinite',
            willChange: 'transform, opacity, filter',
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
      </div>
    </>
  )
}
