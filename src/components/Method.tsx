import { useLang } from '../i18n/LanguageProvider';
import { Reveal, WordReveal } from './Reveal';
import SectionHeading from './SectionHeading';

const FlowArrow = () => (
  <div className="flex items-center justify-center py-1 md:px-1 md:py-0" aria-hidden="true">
    <svg width="28" height="14" viewBox="0 0 36 14" className="rotate-90 text-white/40 md:rotate-0">
      <path d="M0 7 H30 M24 1 L30 7 L24 13" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  </div>
);

export default function Method() {
  const { t } = useLang();
  const m = t.experts;
  const c = t.completeness;

  return (
    <section className="relative overflow-hidden bg-black/70 pb-20 md:pb-36">
      {/* faint field lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      <SectionHeading index={m.index} label={m.label} title={m.title} id="esperti" />

      <div className="relative mx-auto mt-10 max-w-[1600px] px-5 md:mt-16 md:px-10">
        <Reveal>
          <p className="max-w-3xl text-[15px] leading-relaxed text-[#B7B7B7] md:text-lg">{m.intro}</p>
        </Reveal>

        {/* cumulative pipeline */}
        <Reveal delay={140}>
          <div className="mt-14 flex flex-col items-stretch md:flex-row">
            {m.flow.map((node, i) => (
              <div key={i} className="contents">
                {i > 0 && <FlowArrow />}
                <div
                  className={`relative flex-1 border px-4 py-5 md:py-7 ${
                    i === 3 ? 'border-white/40 bg-white/[0.04]' : 'border-white/15 bg-white/[0.015]'
                  }`}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-display mt-3 text-base font-semibold uppercase leading-tight tracking-tight text-white/85 md:text-lg">
                    {node}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <h3 className="font-display mt-14 max-w-5xl text-[6vw] font-semibold uppercase leading-[1.08] tracking-tight text-white sm:text-3xl md:text-[2.6vw]">
          {m.statement.map((line, i) => (
            <span key={i} className="block">
              <WordReveal text={line} baseDelay={i * 220} step={45} />
            </span>
          ))}
        </h3>

        {/* completeness & control — the standard expert review enforces */}
        <div className="mt-14 border-t border-white/15 pt-12 md:mt-24 md:pt-16">
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45 md:text-[11px]">
              {c.label}
            </span>
            <h3 className="font-display mt-5 max-w-4xl text-2xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl">
              {c.title}
            </h3>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-[#B7B7B7] md:text-base">{c.lead}</p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-3xl border-l-2 border-white/60 pl-5 font-display text-lg font-medium leading-snug text-white md:text-xl">
              {c.emphasis}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">{c.checkLabel}</p>
            <ul className="mt-5 grid grid-cols-1 gap-px border border-white/15 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {c.checks.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 bg-black px-6 py-5 transition-colors duration-300 hover:bg-[#0d0d0d]"
                >
                  <span className="mt-[3px] font-mono text-[10px] text-white/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-[15px] font-medium leading-snug text-white md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-white/70 md:text-base">{c.outro}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
