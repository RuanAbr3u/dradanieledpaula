import { CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'

const benefits = [
  {
    title: 'Melhora da postura',
    text: 'Condutas que auxiliam na organização postural e no equilíbrio corporal.',
  },
  {
    title: 'Mais consciência corporal',
    text: 'Orientações para perceber melhor movimentos, hábitos e compensações.',
  },
  {
    title: 'Apoio na redução de desconfortos',
    text: 'Acompanhamento que pode contribuir para mais conforto e funcionalidade.',
  },
  {
    title: 'Recuperação gradual dos movimentos',
    text: 'Evolução conduzida com segurança, técnica e respeito ao seu ritmo.',
  },
  {
    title: 'Atendimento humanizado',
    text: 'Escuta qualificada, comunicação clara e cuidado individualizado.',
  },
  {
    title: 'Plano de cuidado personalizado',
    text: 'Estratégias alinhadas às suas necessidades, objetivos e rotina.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-[var(--color-paper)] py-24 lg:py-32">
      <div className="section-shell">
        <Reveal className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="eyebrow mb-5">Benefícios</p>
            <h2 className="section-title">
              Um cuidado que aparece no corpo e na rotina.
            </h2>
          </div>
          <p className="section-copy max-w-2xl lg:justify-self-end">
            A Fisioterapia e o RPG podem ajudar na construção de uma rotina de
            cuidado mais consciente, funcional e alinhada às suas necessidades.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-6">
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              delay={index * 45}
              className={`relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[#fbf7ef] p-6 shadow-sm ${
                index === 0 || index === 3 ? 'md:col-span-3 md:min-h-72' : 'md:col-span-2 md:min-h-64'
              }`}
            >
              <div className="absolute right-5 top-5 h-16 w-16 organic-shape border border-white bg-white/60" />
              <div className="absolute -bottom-10 -right-8 h-28 w-28 organic-shape bg-[var(--color-olive-soft)]/70" />
              <span className="relative grid size-11 place-items-center rounded-full bg-white text-[var(--color-olive)] shadow-sm">
                <CheckCircle2 size={21} aria-hidden="true" />
              </span>
              <h3 className="relative mt-12 font-display text-3xl font-semibold leading-none text-[var(--color-ink)]">
                {benefit.title}
              </h3>
              <p className="relative mt-4 text-sm leading-7 text-[var(--color-muted)]">
                {benefit.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
