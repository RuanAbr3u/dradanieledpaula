import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal'

const questions = [
  {
    question: 'O que é RPG?',
    answer:
      'RPG significa Reeducação Postural Global. É uma abordagem fisioterapêutica que trabalha postura, consciência corporal e equilíbrio muscular de forma individualizada.',
  },
  {
    question: 'Para quem a fisioterapia é indicada?',
    answer:
      'A fisioterapia pode ser indicada para pessoas com dores, desconfortos, limitações de movimento, alterações posturais ou necessidade de melhorar funcionalidade e qualidade de vida.',
  },
  {
    question: 'Preciso de avaliação antes de iniciar?',
    answer:
      'Sim. A avaliação ajuda a entender suas necessidades, histórico e objetivos para definir um plano de cuidado mais adequado.',
  },
  {
    question: 'Como faço para agendar?',
    answer:
      'Você pode tocar no botão de WhatsApp do site e enviar a mensagem automática para solicitar horários disponíveis para avaliação.',
  },
  {
    question: 'Existe atendimento em domicílio?',
    answer:
      'Sim. A possibilidade é avaliada no agendamento, especialmente para pacientes com dificuldade de locomoção ou que preferem mais comodidade.',
  },
  {
    question: 'O atendimento é individual?',
    answer:
      'Sim. As sessões são conduzidas com orientações e condutas ajustadas para cada paciente.',
  },
  {
    question: 'Pilates já está disponível?',
    answer:
      'No momento, a Dra. Daniele está divulgando as modalidades principais. Novas opções poderão ser adicionadas futuramente.',
  },
]

export default function FAQ() {
  return (
    <section id="duvidas" className="py-24 lg:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <p className="eyebrow mb-5">Dúvidas</p>
          <h2 className="section-title">
            Perguntas frequentes antes de começar.
          </h2>
          <p className="section-copy mt-6">
            Respostas simples para facilitar o primeiro contato com a Dra. Daniele.
          </p>
        </Reveal>

        <Reveal delay={120} className="space-y-4">
          {questions.map((item) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/62 p-6 shadow-sm backdrop-blur-xl transition duration-300 open:bg-white open:shadow-[var(--shadow-soft)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-extrabold text-[var(--color-ink)]">
                {item.question}
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--color-porcelain)] text-[var(--color-gold)] transition group-open:rotate-180">
                  <ChevronDown size={18} aria-hidden="true" />
                </span>
              </summary>
              <div className="grid grid-rows-[0fr] transition-all duration-300 group-open:grid-rows-[1fr]">
                <p className="mt-4 overflow-hidden text-sm leading-7 text-[var(--color-muted)]">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
