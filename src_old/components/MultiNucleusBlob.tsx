/**
 * MultiNucleusBlob - 多核聚合球
 * 
 * Toolkit section 的视觉元素
 * 三个连接的球体，各自独立呼吸，形成有机聚合效果
 */

interface MultiNucleusBlobProps {
  className?: string
}

export function MultiNucleusBlob({ className = '' }: MultiNucleusBlobProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* 核心球 - 最大 */}
      <div 
        className="animate-nucleus-1 rounded-full"
        style={{
          width: '60px',
          height: '60px',
          background: `radial-gradient(circle at 30% 30%, 
            rgba(0, 47, 167, 0.9) 0%, 
            rgba(61, 106, 232, 0.7) 100%
          )`,
          filter: 'blur(1px)',
          opacity: 0.7,
          willChange: 'transform, opacity',
        }}
      />
      
      {/* 中等球 */}
      <div 
        className="animate-nucleus-2 rounded-full -ml-4"
        style={{
          width: '45px',
          height: '45px',
          background: `radial-gradient(circle at 40% 30%, 
            rgba(26, 71, 201, 0.85) 0%, 
            rgba(0, 47, 167, 0.6) 100%
          )`,
          filter: 'blur(1px)',
          opacity: 0.6,
          willChange: 'transform, opacity',
        }}
      />
      
      {/* 小球 */}
      <div 
        className="animate-nucleus-3 rounded-full -ml-3"
        style={{
          width: '35px',
          height: '35px',
          background: `radial-gradient(circle at 40% 40%, 
            rgba(61, 106, 232, 0.8) 0%, 
            rgba(26, 71, 201, 0.5) 100%
          )`,
          filter: 'blur(1px)',
          opacity: 0.5,
          willChange: 'transform, opacity',
        }}
      />
    </div>
  )
}

// 响应式版本 - 移动端
export function MultiNucleusBlobMobile({ className = '' }: MultiNucleusBlobProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div 
        className="animate-nucleus-1 rounded-full"
        style={{
          width: '45px',
          height: '45px',
          background: `radial-gradient(circle at 30% 30%, 
            rgba(0, 47, 167, 0.9) 0%, 
            rgba(61, 106, 232, 0.7) 100%
          )`,
          filter: 'blur(1px)',
          opacity: 0.7,
        }}
      />
      
      <div 
        className="animate-nucleus-2 rounded-full -ml-3"
        style={{
          width: '35px',
          height: '35px',
          background: `radial-gradient(circle at 40% 30%, 
            rgba(26, 71, 201, 0.85) 0%, 
            rgba(0, 47, 167, 0.6) 100%
          )`,
          filter: 'blur(1px)',
          opacity: 0.6,
        }}
      />
      
      <div 
        className="animate-nucleus-3 rounded-full -ml-2.5"
        style={{
          width: '25px',
          height: '25px',
          background: `radial-gradient(circle at 40% 40%, 
            rgba(61, 106, 232, 0.8) 0%, 
            rgba(26, 71, 201, 0.5) 100%
          )`,
          filter: 'blur(1px)',
          opacity: 0.5,
        }}
      />
    </div>
  )
}
