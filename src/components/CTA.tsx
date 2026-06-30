import { CalendarCheck, MessageCircle, Sparkles } from 'lucide-react'
import { WHATSAPP_URL } from '../config'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-[var(--color-paper)] py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-line)] to-transparent" />
      <div className="section-shell">
        <Reveal className="relative overflow-hidden rounded-[2.8rem] bg-[var(--color-petrol)] px-7 py-14 text-white shadow-[var(--shadow-deep)] sm:px-12 lg:px-16 lg:py-20">
          <div className="absolute -right-16 -top-16 h-72 w-72 organic-shape bg-white/10 blur-sm" />
          <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-[var(--color-gold)]/18 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--color-gold-soft)]">
                <Sparkles size={15} aria-hidden="true" />
                Agendamento
              </span>
              <h2 className="mt-7 font-display text-[clamp(3.2rem,7vw,6.7rem)] font-semibold leading-[0.88] tracking-[0]">
                Pronta para cuidar melhor dos seus movimentos?
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/72">
                Envie uma mensagem para agendar sua avaliação e entender como a
                Fisioterapia e o RPG podem auxiliar na sua rotina de cuidado.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Agendar avaliação pelo WhatsApp"
              className="premium-button inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-5 text-sm font-extrabold text-[var(--color-petrol)] shadow-[0_24px_70px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Agendar avaliação
            </a>
          </div>

          <div className="relative mt-12 grid gap-4 border-t border-white/12 pt-8 sm:grid-cols-3">
            {['Crefito 186741-F', 'Fisioterapia', 'RPG'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold text-white/78">
                <CalendarCheck size={18} className="text-[var(--color-gold-soft)]" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
