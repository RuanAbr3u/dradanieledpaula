import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Processo', href: '#processo' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        className={`section-shell grid grid-cols-[1fr_auto] items-center gap-4 rounded-full border transition-all duration-500 ${
          isScrolled
            ? 'border-white/70 bg-[#fffdf9]/82 px-4 py-2 shadow-[0_18px_60px_rgba(52,43,34,0.10)] backdrop-blur-2xl'
            : 'border-transparent bg-transparent px-0 py-3'
        }`}
        aria-label="Navegação principal"
      >
        <a href="#inicio" className="group flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full border border-[var(--color-line)] bg-white/80 font-display text-xl font-semibold text-[var(--color-gold)] shadow-sm">
            D
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-extrabold tracking-[0.08em] text-[var(--color-ink)] sm:text-base">
              Dra. Daniele D'Paula
            </span>
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Fisioterapia e RPG
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/60 bg-white/55 p-1 shadow-sm backdrop-blur-xl lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--color-muted)] transition hover:bg-white hover:text-[var(--color-ink)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-[#e7dacb] bg-white/90 text-[var(--color-ink)] shadow-sm lg:hidden"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="section-shell mt-3 rounded-[1.75rem] border border-white/70 bg-[#fffdf9]/94 p-3 shadow-[var(--shadow-soft)] backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-[var(--color-muted)] transition hover:bg-[var(--color-porcelain)] hover:text-[var(--color-ink)]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
