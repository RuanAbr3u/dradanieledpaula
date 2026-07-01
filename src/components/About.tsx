import {
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  HeartHandshake,
  Home,
  Medal,
  Move3D,
  Stethoscope,
} from "lucide-react";
import Reveal from "./Reveal";

const highlights = [
  { icon: Medal, text: "Trajetória consolidada" },
  { icon: BadgeCheck, text: "CREFITO 186741-F" },
  { icon: HeartHandshake, text: "Atendimento individualizado" },
  { icon: Move3D, text: "Fisioterapia e RPG" },
  { icon: Home, text: "Atendimento domiciliar" },
];

const careItems = [
  { icon: HeartHandshake, text: "Escuta qualificada" },
  { icon: ClipboardCheck, text: "Avaliação criteriosa" },
  { icon: Stethoscope, text: "Plano terapêutico personalizado" },
  { icon: CheckCircle2, text: "Acompanhamento da evolução" },
  { icon: Home, text: "Atendimento em consultório e domicílio" },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative bg-[var(--color-paper)] py-22 sm:py-24 lg:py-30"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-line)] to-transparent" />
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <p className="eyebrow mb-5">Sobre a profissional</p>

          <h2 className="section-title max-w-xl">
            Cuidar do movimento é cuidar da qualidade de vida.
          </h2>

          <p className="mt-6 max-w-xl font-display text-2xl font-semibold leading-tight text-[var(--color-petrol)] sm:text-3xl">
            Mais de uma década dedicada ao cuidado individualizado.
          </p>

          <div className="mt-8 max-w-xl space-y-5 text-[1.02rem] leading-8 text-[var(--color-muted)]">
            <p>
              A Dra. Daniele D'Paula une conhecimento técnico, escuta e atenção
              ao contexto de cada paciente para conduzir um cuidado claro,
              seguro e acolhedor.
            </p>

            <p>
              Sua atuação em <strong>Fisioterapia</strong> e{" "}
              <strong>RPG</strong> apoia a recuperação dos movimentos, a melhora
              da funcionalidade e a construção de mais qualidade de vida na
              rotina.
            </p>
          </div>

          <div className="mt-8 flex max-w-2xl flex-wrap gap-2.5">
            {highlights.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/72 px-3.5 py-2 text-xs font-extrabold text-[var(--color-petrol)] shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-gold)] sm:text-sm"
              >
                <Icon size={15} className="text-[var(--color-gold)]" aria-hidden="true" />
                {text}
              </span>
            ))}
          </div>

          <div className="mt-9 max-w-md rounded-[1.6rem] border border-white/70 bg-[#fbf7ef] p-5 shadow-[0_22px_60px_rgba(52,43,34,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(52,43,34,0.12)] sm:p-6">
            <div className="flex items-end gap-4">
              <p className="font-display text-6xl font-semibold leading-none text-[var(--color-petrol)]">
                13+
              </p>
              <div className="pb-1">
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-[var(--color-gold)]">
                  Experiência clínica
                </p>
                <p className="mt-1 text-sm font-bold leading-6 text-[var(--color-muted)]">
                  Mais de uma década ajudando pessoas a recuperarem seus
                  movimentos.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="absolute -right-4 -top-5 hidden h-28 w-28 organic-shape bg-[var(--color-olive-soft)]/70 lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[#fbf7ef] p-6 shadow-[0_24px_70px_rgba(52,43,34,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(52,43,34,0.12)] sm:p-8 lg:p-10">
            <div className="absolute right-[-12%] top-[-18%] h-48 w-48 rounded-full bg-white/52 blur-3xl" />
            <div className="absolute bottom-[-18%] left-[-12%] h-44 w-44 rounded-full bg-[var(--color-olive-soft)]/45 blur-3xl" />

            <div className="relative">
              <span className="inline-flex size-12 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-gold)] shadow-sm">
                <BadgeCheck size={22} aria-hidden="true" />
              </span>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                Como é o atendimento
              </p>
              <h3 className="mt-3 font-display text-4xl font-semibold leading-none text-[var(--color-ink)] sm:text-5xl">
                Um processo claro, técnico e próximo.
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
                Cada etapa é conduzida com presença, orientação segura e ajustes
                conforme a evolução de cada paciente.
              </p>
            </div>

            <div className="relative mt-8 grid gap-3">
              {careItems.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="group grid grid-cols-[auto_1fr] items-center gap-4 rounded-[1.25rem] border border-white/70 bg-white/72 p-4 transition duration-300 hover:border-[var(--color-gold)] hover:bg-white"
                >
                  <span className="grid size-10 place-items-center rounded-full bg-[var(--color-porcelain)] text-[var(--color-petrol)] transition duration-300 group-hover:text-[var(--color-gold)]">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <p className="text-sm font-extrabold leading-6 text-[var(--color-ink)]">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-8 rounded-[1.35rem] bg-[var(--color-petrol)] p-5 text-white">
              <p className="font-display text-2xl font-semibold leading-tight">
                Atendimento com presença, técnica e continuidade.
              </p>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Em consultório ou em domicílio, o cuidado é planejado para a
                realidade de cada paciente.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
