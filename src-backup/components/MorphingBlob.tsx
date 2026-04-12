/**
 * MorphingBlob - 变形 Blob 组件
 * 
 * 作为 section 标题的背景装饰，三种差异化动画：
 * - about: 柔和呼吸
 * - experience: 水平拉伸
 * - taste: 大幅度旋转变形
 */

type BlobVariant = 'about' | 'experience' | 'taste'

interface MorphingBlobProps {
  variant: BlobVariant
  className?: string
}

const animationMap: Record<BlobVariant, string> = {
  about: 'animate-blob-about',
  experience: 'animate-blob-experience',
  taste: 'animate-blob-taste',
}

export function MorphingBlob({ variant, className = '' }: MorphingBlobProps) {
  return (
    <div 
      className={`absolute z-0 ${animationMap[variant]} ${className}`}
      style={{
        right: '-60px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '80px',
        height: '80px',
        background: `radial-gradient(circle at 30% 30%, 
          rgba(0, 47, 167, 0.9) 0%, 
          rgba(61, 106, 232, 0.6) 50%, 
          rgba(61, 106, 232, 0.3) 100%
        )`,
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        opacity: 0.6,
        willChange: 'transform, border-radius',
      }}
    />
  )
}

// Section Header with Blob - 封装标题 + Blob 组合
interface SectionHeaderProps {
  num: string
  title: string
  blobVariant?: BlobVariant
  className?: string
}

export function SectionHeader({ num, title, blobVariant, className = '' }: SectionHeaderProps) {
  return (
    <div className={`section-header-with-blob ${className}`}>
      <h2 className="section-title-text flex items-baseline gap-4">
        <span className="section-title-num">{num}</span>
        {title}
      </h2>
      {blobVariant && <MorphingBlob variant={blobVariant} />}
    </div>
  )
}

// 响应式 Blob - 移动端尺寸
export function MorphingBlobMobile({ variant, className = '' }: MorphingBlobProps) {
  return (
    <div 
      className={`absolute z-0 ${animationMap[variant]} ${className}`}
      style={{
        right: '-30px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '50px',
        height: '50px',
        background: `radial-gradient(circle at 30% 30%, 
          rgba(0, 47, 167, 0.9) 0%, 
          rgba(61, 106, 232, 0.6) 50%, 
          rgba(61, 106, 232, 0.3) 100%
        )`,
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        opacity: 0.6,
      }}
    />
  )
}
