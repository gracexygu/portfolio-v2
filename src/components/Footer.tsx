/**
 * Footer - 页脚
 * 
 * 特点：
 * - 深色背景延续
 * - Caveat 手写签名字体
 * - 香槟金版权符号
 */

export function Footer() {
  return (
    <footer className="bg-[#F5F5F5] py-10 px-8 md:px-16 text-center border-t border-border-l2">
      {/* Signature - 手写字体 */}
      <p className="font-script text-4xl md:text-5xl text-klein mb-3">
        Grace
      </p>
      
      {/* Tagline */}
      <p className="text-text-muted text-sm">
        <span className="text-accent-warm">©</span> {new Date().getFullYear()} · Finding myself in what I build.
      </p>
    </footer>
  )
}
