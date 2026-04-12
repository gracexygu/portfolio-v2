import { navItems } from '../data'

interface NavProps {
  activeSection: string
}

export function Nav({ activeSection }: NavProps) {
  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-8">
      <div className="max-w-4xl mx-auto flex justify-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`
              text-sm font-sans transition-all duration-300
              link-underline
              ${activeSection === item.id ? 'text-text' : 'text-text-secondary'}
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
