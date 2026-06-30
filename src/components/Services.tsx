import {
  Activity,
  ClipboardCheck,
  HeartHandshake,
  Move3D,
  Stethoscope,
  UserRoundCheck,
} from 'lucide-react'
import Reveal from './Reveal'

const services = [
  {
    icon: ClipboardCheck,
    title: 'Avaliação fisioterapêutica',
    text: 'Avaliação inicial para compreender queixas, histórico, mobilidade e necessidades de cuidado.',
  },
  {
    icon: Move3D,
    title: 'RPG',
    text: 'Acompanhamento com foco em postura, equilíbrio muscular e consciência corporal.',
  },
  {
    icon: Activity,
    title: 'Reeducação postural',
    text: 'Orientações e condutas que auxiliam na organização postural e na rotina de movimentos.',
  },
  {
    icon: Stethoscope,
    title: 'Fisioterapia para dores e desconfortos',
    text: 'Cuidado individualizado que pode contribuir para aliviar desconfortos e melhorar a funcionalidade.',
  },
  {
    icon: UserRoundCheck,
    title: 'Mobilidade e funcionalidade',
    text: 'Atendimento voltado a movimentos mais seguros, autonomia e qualidade de vida.',
  },
  {
    icon: HeartHandshake,
    title: 'Acompanhamento individualizado',
    text: 'Plano de cuidado personalizado, com escuta e ajustes conforme a evolução de cada paciente.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute left-[-10%] top-1/3 h-72 w-72 rounded-full bg-white/70 blur-3xl" />
      <div className="section-shell relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5">Serviços</p>
          <h2 className="section-title">
            Fisioterapia e RPG para apoiar movimento, postura e bem-estar.
          </h2>
          <p className="section-copy mt-6">
            Atendimentos conduzidos com avaliação profissional, técnica e cuidado
            personalizado para as necessidades de cada paciente.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {services.map(({ icon: Icon, title, text }, index) => (
            <Reveal
              as="article"
              key={title}
              delay={index * 55}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/58 p-7 shadow-sm backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[var(--shadow-soft)] ${
                index === 1 || index === 4 ? 'lg:translate-y-8' : ''
              }`}
            >
              <div className="absolute -right-12 -top-12 h-36 w-36 organic-shape bg-[var(--color-olive-soft)]/50 transition duration-500 group-hover:scale-125" />
              <div className="relative flex items-start gap-5">
                <span className="grid size-14 shrink-0 place-items-center rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-gold)] shadow-sm">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--color-soft)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-semibold leading-none text-[var(--color-ink)]">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    {text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
