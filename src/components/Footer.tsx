import { Camera, MessageCircle } from 'lucide-react'
import { INSTAGRAM_URL, WHATSAPP_URL } from '../config'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-petrol)] text-white">
      <div className="section-shell py-12 lg:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-display text-4xl font-semibold">
              Dra. Daniele D'Paula
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/65">
              Fisioterapeuta, Crefito 186741-F. 
              Atendimento em Fisioterapia e
              RPG com cuidado individualizado.
            </p>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
              Contato
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Daniele"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/72 transition hover:text-white"
              >
                <Camera size={17} aria-hidden="true" />
                @fisio.danieledepaula
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da Dra. Daniele"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/72 transition hover:text-white"
              >
                <MessageCircle size={17} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
              Registro
            </p>
            <p className="mt-5 font-display text-3xl font-semibold">
              Crefito 186741-F
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Todos os direitos reservados.</p>
          <p className="font-semibold">
            Desenvolvido por{' '}
            <a
              href="https://www.instagram.com/abr3u.tech/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da ABR3U TECH"
              className="text-white/80 transition hover:text-white"
            >
              ABR3U TECH
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
