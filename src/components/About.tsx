import { Activity, BadgeCheck, HeartHandshake, Move3D } from 'lucide-react'
import Reveal from './Reveal'

const credentials = [
  { label: 'Crefito', value: '186741-F' },
  { label: 'Atendimento', value: 'Individualizado' },
  { label: 'Área', value: 'RPG' },
]

const timeline = [
  'Escuta e avaliação profissional',
  'Condutas personalizadas',
  'Acompanhamento da funcionalidade',
]

const approach = [
  {
    icon: Activity,
    title: 'Mobilidade e função',
    text: 'Apoio para movimentos mais seguros no dia a dia.',
  },
  {
    icon: Move3D,
    title: 'Postura e consciência corporal',
    text: 'Orientações para perceber melhor o corpo e a rotina.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento humanizado',
    text: 'Escuta, clareza e cuidado individualizado.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="relative bg-[var(--color-paper)] py-22 sm:py-24 lg:py-30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-line)] to-transparent" />
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <Reveal>
          <p className="eyebrow mb-5">Sobre a profissional</p>
          <h2 className="section-title max-w-xl">
            Uma abordagem cuidadosa para o seu movimento.
          </h2>
          <p className="section-copy mt-7 max-w-xl">
            Dra. Daniele D'Paula é fisioterapeuta, Crefito 186741-F, com atuação
            voltada ao cuidado individualizado, à recuperação dos movimentos e à
            melhora da funcionalidade no dia a dia. Seu atendimento une escuta,
            avaliação profissional e condutas personalizadas para cada paciente.
          </p>
          <p className="section-copy mt-5 max-w-xl">
            A proposta é contribuir para mais mobilidade, consciência corporal e
            qualidade de vida, sempre com orientações seguras e acompanhamento
            respeitoso.
          </p>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="absolute -right-4 -top-5 hidden h-28 w-28 organic-shape bg-[var(--color-olive-soft)]/70 lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[#fbf7ef] p-5 shadow-[0_24px_70px_rgba(52,43,34,0.08)] sm:p-6">
            <div className="grid gap-3 sm:grid-cols-3">
              {credentials.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.25rem] border border-white/70 bg-white/72 p-4"
                >
                  <p className="text-[0.64rem] font-extrabold uppercase tracking-[0.17em] text-[var(--color-gold)]">
                    {item.label}
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold leading-none text-[var(--color-ink)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[1.5rem] bg-[var(--color-petrol)] p-5 text-white">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-white/12 text-[var(--color-gold-soft)]">
                    <BadgeCheck size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold">
                      Cuidado com presença
                    </p>
                    <p className="text-xs text-white/68">
                      Técnica, escuta e orientação clara.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {timeline.map((item, index) => (
                    <div key={item} className="grid grid-cols-[auto_1fr] items-start gap-3">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-extrabold leading-none text-[var(--color-petrol)] shadow-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="pt-0.5 text-xs font-bold leading-6 text-white/84">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                {approach.map(({ icon: Icon, title, text }) => (
                  <article
                    key={title}
                    className="grid grid-cols-[auto_1fr] gap-4 rounded-[1.35rem] border border-white/70 bg-white/72 p-4"
                  >
                    <span className="grid size-10 place-items-center rounded-full bg-[var(--color-porcelain)] text-[var(--color-petrol)]">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-extrabold text-[var(--color-ink)]">
                        {title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                        {text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
