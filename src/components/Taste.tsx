import { useScrollReveal } from '../hooks/useScrollReveal'

// Placeholder images - replace with your actual photos
const photos = [
  { id: 1, placeholder: true },
  { id: 2, placeholder: true },
  { id: 3, placeholder: true },
  { id: 4, placeholder: true },
  { id: 5, placeholder: true },
  { id: 6, placeholder: true },
]

export function Taste() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="taste" className="min-h-screen flex items-center justify-center px-8 py-24">
      <div
        ref={ref}
        className={`max-w-4xl w-full reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="font-serif text-4xl mb-12 text-center">Taste</h2>
        
        {/* Photo Gallery */}
        <div className="mb-16">
          <h3 className="text-sm text-text-muted mb-6 text-center">摄影作品</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="aspect-square bg-neutral-100 rounded-lg overflow-hidden group cursor-pointer"
              >
                {photo.placeholder ? (
                  <div className="w-full h-full flex items-center justify-center text-text-muted text-sm">
                    Photo {photo.id}
                  </div>
                ) : (
                  <img
                    src={`/photos/${photo.id}.jpg`}
                    alt={`Photo ${photo.id}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Xiaohongshu */}
        <div className="text-center">
          <h3 className="text-sm text-text-muted mb-6">小红书</h3>
          <a
            href="https://www.xiaohongshu.com/user/profile/YOUR_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-300"
          >
            <span>查看我的小红书</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
