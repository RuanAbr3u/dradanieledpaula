import { ClipboardCheck, LineChart, Route, UserRoundCheck } from 'lucide-react'
import Reveal from './Reveal'

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Avaliação',
    text: 'Entendimento do histórico, queixas, postura, mobilidade e objetivos.',
  },
  {
    icon: Route,
    title: 'Plano de tratamento',
    text: 'Definição de condutas personalizadas para orientar o cuidado.',
  },
  {
    icon: UserRoundCheck,
    title: 'Acompanhamento',
    text: 'Sessões conduzidas com técnica, escuta e ajustes quando necessário.',
  },
  {
    icon: LineChart,
    title: 'Evolução',
    text: 'Observação gradual da funcionalidade, mobilidade e qualidade de vida.',
  },
]

export default function Process() {
  return (
    <section id="processo" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[var(--color-line)] to-transparent" />
      <div className="section-shell relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5 justify-center">Processo</p>
          <h2 className="section-title">Como funciona o acompanhamento.</h2>
          <p className="section-copy mt-6">
            Uma jornada clara, individualizada e conduzida com atenção a cada
            etapa da evolução.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent lg:block" />
          {steps.map(({ icon: Icon, title, text }, index) => (
            <Reveal
              key={title}
              delay={index * 80}
              className="relative rounded-[2rem] border border-white/70 bg-white/68 p-6 text-center shadow-sm backdrop-blur-xl"
            >
              <span className="mx-auto grid size-24 place-items-center rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] shadow-[0_16px_50px_rgba(52,43,34,0.08)]">
                <Icon size={28} className="text-[var(--color-petrol)]" aria-hidden="true" />
              </span>
              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--color-gold)]">
                Etapa {index + 1}
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold text-[var(--color-ink)]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
