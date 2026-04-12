/**
 * KleinOrb - Hero 区域的克莱因蓝模糊球
 * 
 * 两层叠加：主球 + 辅助球，形成有层次的模糊光晕效果
 */

export function KleinOrb() {
  return (
    <div className="absolute pointer-events-none z-0"
      style={{
        bottom: 'calc(75px + 10rem)',
        left: 'calc(5% + 8ch)',
        width: '500px',
        height: '500px',
      }}
    >
      {/* 主球 - 大尺寸、呼吸动画 */}
      <div 
        className="absolute animate-orb-breathe"
        style={{
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle at 30% 30%, #3D6AE8, #002FA7)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.6,
          willChange: 'transform, opacity',
        }}
      />
      
      {/* 辅助球 - 较小、漂浮动画 */}
      <div 
        className="absolute animate-orb-float"
        style={{
          width: '280px',
          height: '280px',
          background: '#1A47C9',
          borderRadius: '50%',
          filter: 'blur(80px)',
          top: '5%',
          right: '0',
          opacity: 0.4,
          willChange: 'transform, opacity',
        }}
      />
    </div>
  )
}

// 响应式版本 - 用于移动端
export function KleinOrbMobile() {
  return (
    <div className="absolute pointer-events-none z-0"
      style={{
        bottom: 'calc(70px + 8rem)',
        right: '0',
        width: '320px',
        height: '320px',
      }}
    >
      <div 
        className="absolute animate-orb-breathe"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle at 30% 30%, #3D6AE8, #002FA7)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.6,
        }}
      />
      
      <div 
        className="absolute animate-orb-float"
        style={{
          width: '180px',
          height: '180px',
          background: '#1A47C9',
          borderRadius: '50%',
          filter: 'blur(80px)',
          top: '5%',
          right: '0',
          opacity: 0.4,
        }}
      />
    </div>
  )
}
