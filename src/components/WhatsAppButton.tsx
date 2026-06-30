import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../config'

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-olive)] text-white shadow-[0_22px_60px_rgba(118,133,103,0.38)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[var(--color-petrol)] focus-visible:outline-white max-sm:bottom-4 max-sm:right-4 sm:h-[60px] sm:w-[60px]"
    >
      <MessageCircle size={27} aria-hidden="true" />
    </a>
  )
}
