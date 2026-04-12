import { useScrollReveal } from '../hooks/useScrollReveal'

export function Contact() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="contact" className="min-h-[60vh] flex items-center justify-center px-8 py-24">
      <div
        ref={ref}
        className={`max-w-2xl text-center reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="font-serif text-4xl mb-8">Contact</h2>
        
        <p className="text-text-secondary mb-12">
          期待与你交流
        </p>
        
        {/* Links */}
        <div className="flex justify-center gap-8">
          <a
            href="mailto:your@email.com"
            className="text-text-secondary hover:text-accent transition-colors duration-300 link-underline"
          >
            Email
          </a>
          <a
            href="https://github.com/gracexygu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors duration-300 link-underline"
          >
            GitHub
          </a>
          <a
            href="https://www.xiaohongshu.com/user/profile/YOUR_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors duration-300 link-underline"
          >
            小红书
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-12 text-center">
      <p className="font-script text-lg text-text-muted">
        Finding myself in what I build.
      </p>
      <p className="text-xs text-text-muted mt-4">
        © {new Date().getFullYear()} Grace
      </p>
    </footer>
  )
}
