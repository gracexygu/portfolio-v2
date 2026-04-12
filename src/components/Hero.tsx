export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8">
      <div className="text-center max-w-2xl">
        {/* Name */}
        <h1 className="font-serif text-6xl md:text-7xl mb-8 tracking-tight">
          Grace
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-12">
          explores the intersection of{' '}
          <span className="hover-italic hover-muted cursor-default">strategy</span>,{' '}
          <span className="hover-italic hover-muted cursor-default">product</span>, and{' '}
          <span className="hover-italic hover-muted cursor-default">AI</span>
        </p>
        
        {/* Divider */}
        <div className="w-16 h-px bg-border mx-auto mb-8" />
        
        {/* Slogan */}
        <p className="font-script text-2xl text-text-muted">
          Finding myself in what I build.
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-border animate-pulse" />
      </div>
    </section>
  )
}
