import { CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'

const benefits = [
  {
    title: 'Melhora da postura',
    text: 'Apoio na organização postural e no equilíbrio corporal.',
  },
  {
    title: 'Mais consciência corporal',
    text: 'Orientações para perceber movimentos, hábitos e compensações.',
  },
  {
    title: 'Redução de desconfortos',
    text: 'Acompanhamento que pode contribuir para mais conforto e funcionalidade.',
  },
  {
    title: 'Recuperação dos movimentos',
    text: 'Evolução gradual com segurança, técnica e respeito ao seu ritmo.',
  },
  {
    title: 'Comunicação clara',
    text: 'Explicações objetivas para que você entenda cada etapa do processo.',
  },
  {
    title: 'Plano sob medida',
    text: 'Condutas alinhadas às suas necessidades, rotina e objetivos.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-[var(--color-paper)] py-20 lg:py-28">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <div>
            <p className="eyebrow mb-5 justify-center">Benefícios</p>
            <h2 className="section-title">
              Benefícios de um acompanhamento individualizado.
            </h2>
          </div>
          <p className="section-copy mx-auto mt-6 max-w-2xl">
            Um cuidado pensado para melhorar sua relação com o movimento, sua
            postura e sua rotina.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {benefits.map((benefit, index) => (
            <Reveal
              as="article"
              key={benefit.title}
              delay={index * 45}
              className="group relative flex h-full min-h-[200px] flex-col rounded-[1.35rem] border border-[var(--color-line)] bg-[#fffdf9]/88 p-5 shadow-[0_16px_45px_rgba(52,43,34,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)] hover:bg-white hover:shadow-[0_22px_60px_rgba(52,43,34,0.10)] sm:min-h-[215px] sm:p-6"
            >
              <span className="grid size-10 place-items-center rounded-full border border-[var(--color-line)] bg-[var(--color-porcelain)] text-[var(--color-petrol)] shadow-sm transition duration-300 group-hover:border-[var(--color-gold)] group-hover:text-[var(--color-gold)] sm:size-11">
                <CheckCircle2 size={20} aria-hidden="true" />
              </span>
              <span className="mt-6 h-px w-12 bg-[var(--color-gold)]/55" aria-hidden="true" />
              <h3 className="mt-5 font-display text-[1.7rem] font-semibold leading-[1.02] text-[var(--color-ink)] sm:text-3xl">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {benefit.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
