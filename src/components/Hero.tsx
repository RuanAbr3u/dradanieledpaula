import {
  ArrowRight,
  BadgeCheck,
  Check,
  ShieldCheck,
} from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { INSTAGRAM_URL, WHATSAPP_URL } from '../config'
import Reveal from './Reveal'

const badges = [
  'Atendimento em Domicílio',
  'Cuidado Individual',
  'Postura e Mobilidade',
  'Alívio de Desconfortos',
]

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pb-16 pt-26 sm:pt-32 lg:pb-12 lg:pt-28">
      <div className="absolute left-[-18%] top-24 -z-10 h-60 w-60 rounded-full bg-[var(--color-olive-soft)]/70 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute right-[-22%] top-10 -z-10 h-80 w-80 organic-shape bg-[#ead8c7]/50 blur-2xl sm:right-[-8%] sm:h-96 sm:w-96" />
      <div className="absolute bottom-4 left-[46%] -z-10 hidden h-44 w-44 rounded-full bg-[var(--color-gold-soft)]/25 blur-3xl lg:block" />

      <div className="section-shell grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <Reveal className="order-2 w-full min-w-0 max-w-3xl lg:order-1">
          <p className="eyebrow mb-5 sm:mb-6">Recupere seus movimentos sem dor.</p>
          <h1 className="font-display text-[clamp(2.75rem,11vw,7.8rem)] font-semibold leading-[0.88] tracking-[0] text-[var(--color-ink)] sm:text-[clamp(3.35rem,10vw,6.6rem)] sm:leading-[0.86]">
            <span className="block sm:inline">Movimento</span>{' '}
            <span className="block sm:inline">com técnica,</span>{' '}
            <span className="block sm:inline">cuidado e</span>{' '}
            <span className="block sm:inline">acolhimento.</span>
          </h1>
          <p className="section-copy mt-5 max-w-[20rem] sm:max-w-xl">
            Atendimento em Fisioterapia e RPG com foco em mobilidade, postura,
            alívio de desconfortos e qualidade de vida.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Perguntar sobre avaliação pelo WhatsApp"
              className="premium-button group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-petrol)] px-7 py-4 text-sm font-extrabold text-white shadow-[0_18px_50px_rgba(47,75,79,0.22)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              <FaWhatsapp
                className="text-[20px] transition duration-300 group-hover:scale-105"
                aria-hidden="true"
              />
              Entender avaliação
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Acessar Instagram da Dra. Daniele"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-line)] bg-white/72 px-7 py-4 text-sm font-extrabold text-[var(--color-ink)] shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[var(--color-gold)]"
            >
              <FaInstagram
                className="text-[20px] transition duration-300 group-hover:scale-105"
                aria-hidden="true"
              />
              Ver Instagram
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-2.5">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/72 px-3 py-2 text-[0.7rem] font-bold text-[var(--color-petrol)] shadow-sm backdrop-blur-xl sm:gap-2 sm:px-4 sm:text-xs"
              >
                <Check size={13} aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 relative min-h-[360px] sm:min-h-[560px] lg:order-2 lg:min-h-[700px]">
          <div className="absolute left-0 top-10 hidden h-64 w-64 organic-shape border border-[var(--color-line)] bg-white/30 lg:block" />
          <div className="absolute right-3 top-3 h-[78%] w-[82%] organic-shape bg-[linear-gradient(145deg,#fffdf9,#f3eadf_48%,#dfe7d7)] shadow-[var(--shadow-deep)] sm:right-4 sm:top-0 sm:w-[74%]" />
          <div className="absolute right-0 top-8 h-[80%] w-[86%] overflow-hidden rounded-[44%_56%_42%_58%/50%_36%_64%_50%] border-[8px] border-white/75 bg-white shadow-[0_28px_80px_rgba(52,43,34,0.14)] sm:top-10 sm:h-[82%] sm:w-[78%] sm:border-[12px] lg:top-6 lg:h-[86%] lg:w-[82%] lg:shadow-[0_40px_100px_rgba(52,43,34,0.16)]">
            <img
              src="/foto.jpeg"
              alt="Retrato profissional da Dra. Daniele D'Paula"
              className="h-full w-full object-cover object-[center_22%] sm:object-[center_28%]"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <div className="glass-panel absolute left-0 top-14 max-w-[172px] rounded-[1.15rem] p-3 sm:left-4 sm:top-28 sm:max-w-[220px] sm:rounded-[1.5rem] sm:p-5">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-[var(--color-olive-soft)] text-[var(--color-olive)] sm:size-11">
                <BadgeCheck size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-[var(--color-gold)] sm:text-xs">
                  Crefito
                </p>
                <p className="text-sm font-extrabold text-[var(--color-ink)] sm:text-base">
                  186741-F
                </p>
              </div>
            </div>
          </div>

          <div className="absolute right-1 top-16 rounded-full border border-white/70 bg-white/82 p-2.5 text-[var(--color-gold)] shadow-xl backdrop-blur-xl sm:right-8 sm:top-20 sm:p-3">
            <ShieldCheck size={22} aria-hidden="true" />
          </div>
        </Reveal>
      </div>

      <a
        href="#sobre"
        className="section-shell mt-4 hidden items-center gap-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--color-soft)] lg:flex"
      >
        Conheça a abordagem
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    </section>
  )
}
