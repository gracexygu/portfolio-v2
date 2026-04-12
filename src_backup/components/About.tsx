import { useScrollReveal } from '../hooks/useScrollReveal'

export function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 py-24">
      <div
        ref={ref}
        className={`max-w-2xl text-center reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="font-serif text-4xl mb-12">About</h2>
        
        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
          <p>
            同济大学国际关系硕士在读，关注气候政策与组态分析（fsQCA）。
          </p>
          <p>
            正在探索从策略运营到 AI 产品的跨界路径。相信好的产品经理需要理解技术、
            尊重数据、同时保持对用户的同理心。
          </p>
          <p>
            业余时间，我用 Vibe Coding 的方式构建 AI 小工具，
            用摄影记录生活，在创造中寻找自我。
          </p>
        </div>
      </div>
    </section>
  )
}
