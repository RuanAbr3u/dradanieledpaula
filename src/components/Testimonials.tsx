import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useState } from 'react'
import Reveal from './Reveal'

const testimonials = [
  {
    name: 'Maria Antonietta',
    city: 'São Gonçalo dos Campos',
    text: 'Me senti acolhida desde o primeiro contato. A avaliação foi clara, respeitosa e muito organizada.',
  },
  {
    name: 'João Silva',
    city: 'Feira de Santana',
    text: 'Gostei da forma como a postura e os movimentos foram explicados. Saí com mais segurança sobre os próximos passos.',
  },
  {
    name: 'Ana Souza',
    city: 'Feira de Santana',
    text: 'O acompanhamento trouxe mais consciência corporal e me ajudou a organizar melhor minha rotina de cuidado.',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]

  const goToPrevious = () =>
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    )

  const goToNext = () =>
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    )

  return (
    <section className="bg-[var(--color-paper)] py-24 lg:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal>
          <p className="eyebrow mb-5">Depoimentos</p>
          <h2 className="section-title">
            Experiências que refletem escuta, técnica e cuidado.
          </h2>
          <p className="section-copy mt-6">
            Exemplos editáveis para substituir por depoimentos reais autorizados.
          </p>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Depoimento anterior"
              className="grid size-12 place-items-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-ink)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-gold)]"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Próximo depoimento"
              className="grid size-12 place-items-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-ink)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-gold)]"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="absolute -left-6 -top-6 h-24 w-24 organic-shape bg-[var(--color-olive-soft)]" />
          <article className="relative overflow-hidden rounded-[2.4rem] border border-[var(--color-line)] bg-[#fbf7ef] p-8 shadow-[var(--shadow-soft)] sm:p-10">
            <Quote
              size={76}
              className="absolute right-8 top-8 text-[var(--color-gold)]/18"
              aria-hidden="true"
            />
            <div className="flex text-[var(--color-gold)]" aria-label="Avaliação cinco estrelas">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={18} fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-10 font-display text-3xl font-semibold leading-snug text-[var(--color-ink)] sm:text-4xl">
              "{active.text}"
            </p>
            <div className="mt-10 flex items-center justify-between gap-6 border-t border-[var(--color-line)] pt-6">
              <div>
                <p className="font-extrabold text-[var(--color-ink)]">{active.name}</p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{active.city}</p>
              </div>
              <div className="flex gap-2" aria-hidden="true">
                {testimonials.map((item, index) => (
                  <span
                    key={item.name}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? 'w-8 bg-[var(--color-gold)]'
                        : 'w-2 bg-[var(--color-line)]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
