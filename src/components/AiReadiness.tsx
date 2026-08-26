import { useLang } from '../i18n/LanguageProvider';
import { Reveal } from './Reveal';
import SectionHeading from './SectionHeading';

export default function AiReadiness() {
  const { t } = useLang();
  const a = t.aiReadiness;

  return (
    <section className="relative bg-black/75 pb-20 md:pb-36">
      <SectionHeading index={a.index} label={a.label} title={a.title} id="ai-readiness" />

      <div className="mx-auto mt-10 max-w-[1600px] px-5 md:mt-16 md:px-10">
        <div className="max-w-3xl">
          {a.paragraphs.map((par, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="mb-7 text-[15px] leading-relaxed text-[#B7B7B7] md:text-base">{par}</p>
            </Reveal>
          ))}
          <Reveal delay={200}>
            <div className="mt-2 border-l border-white/40 pl-5">
              {a.staccato.map((line, i) => (
                <p key={i} className="mb-2 text-sm leading-relaxed text-white/80 md:text-[15px]">
                  {line}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-10 border-l-2 border-white/60 pl-5 font-display text-xl font-medium leading-snug text-white md:text-2xl">
              {a.bold}
            </p>
          </Reveal>
        </div>

        {/* stats — one tile per figure, each with its own clickable source */}
        <div className="mt-14 grid grid-cols-1 gap-px border border-white/15 bg-white/10 md:grid-cols-3">
          {a.stats.map((s, i) => (
            <Reveal key={i} delay={120 + i * 100} className="h-full">
              <div className="flex h-full flex-col bg-black/90 p-7 transition-colors duration-500 hover:bg-[#0b0b0b] md:p-9">
                <span className="font-display text-6xl font-bold tracking-tight text-white md:text-7xl">
                  {s.value}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-[#D6D6D6] md:text-[15px]">{s.text}</p>
                <a
                  href={s.source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-white/60 underline decoration-white/30 underline-offset-4 transition-colors duration-300 hover:text-white hover:decoration-white"
                >
                  {s.source.label} ↗
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/70 md:text-[15px]">{a.hedge}</p>
        </Reveal>
      </div>
    </section>
  );
}
