import { useLang } from '../i18n/LanguageProvider';
import { Reveal } from './Reveal';
import SectionHeading from './SectionHeading';

const FlowArrow = () => (
  <div className="flex items-center justify-center py-1 md:px-2 md:py-0" aria-hidden="true">
    <svg
      width="36"
      height="14"
      viewBox="0 0 36 14"
      className="rotate-90 text-white/40 md:rotate-0"
    >
      <path d="M0 7 H30 M24 1 L30 7 L24 13" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  </div>
);

export default function Knowledge() {
  const { t } = useLang();
  const k = t.knowledge;
  const ki = k.indexing;

  return (
    <section className="relative bg-black/75 pb-28 pt-24 md:pb-40 md:pt-32">
      <SectionHeading index={k.index} label={k.label} title={k.title} id="conoscenza" />

      <div className="mx-auto mt-14 grid max-w-[1600px] grid-cols-1 gap-14 px-5 md:mt-20 md:px-10 lg:grid-cols-12">
        {/* narrative column */}
        <div className="lg:col-span-5">
          {k.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p
                className={`mb-7 leading-relaxed ${
                  i === k.paragraphs.length - 1
                    ? 'font-display text-xl font-medium text-white md:text-2xl'
                    : 'text-[15px] text-[#B7B7B7] md:text-base'
                }`}
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Indexable panel */}
        <div className="lg:col-span-7">
          <Reveal delay={150}>
            <div className="group relative border border-white/15 bg-white/[0.02] p-7 transition-colors duration-500 hover:border-white/35 md:p-12">
              {/* corner ticks */}
              <span className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-white/70" />
              <span className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-white/70" />

              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-4xl font-semibold uppercase tracking-tight text-white md:text-6xl">
                  {k.indexable.name}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 md:text-[11px]">
                  {k.indexable.claim}
                </span>
              </div>

              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#B7B7B7] md:text-base">
                {k.indexable.intro}
              </p>

              <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
                {k.indexable.listLabel}
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2">
                {k.indexable.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 bg-black px-5 py-4 transition-colors duration-300 hover:bg-[#0d0d0d]"
                  >
                    <span className="mt-[3px] font-mono text-[10px] text-white/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm leading-relaxed text-[#D6D6D6]">{b}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-l-2 border-white/60 pl-5 font-display text-lg font-medium leading-snug text-white md:text-xl">
                {k.indexable.outro}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Knowledge Indexing — how Indexable works */}
      <div className="mx-auto mt-20 max-w-[1600px] border-t border-white/15 px-5 pt-16 md:mt-28 md:px-10 md:pt-24">
        <Reveal>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45 md:text-[11px]">
            {ki.label}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h3 className="font-display mt-6 text-3xl font-semibold uppercase tracking-tight text-white md:text-5xl">
            {ki.term}
          </h3>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-[#B7B7B7] md:text-lg">
            {ki.lead}
          </p>
        </Reveal>

        {/* visual flow: Documenti → Knowledge Indexes → Contesto rilevante → AI */}
        <Reveal delay={200}>
          <div className="mt-14 flex flex-col items-stretch md:flex-row">
            {ki.flow.map((node, i) => (
              <div key={i} className="contents">
                {i > 0 && <FlowArrow />}
                <div
                  className={`relative flex-1 border px-6 py-6 md:py-8 ${
                    i === 1
                      ? 'border-white/40 bg-white/[0.04]'
                      : 'border-white/15 bg-white/[0.015]'
                  }`}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p
                    className={`font-display mt-3 font-semibold uppercase leading-tight tracking-tight ${
                      i === 1 ? 'text-xl text-white md:text-2xl' : 'text-lg text-white/85 md:text-xl'
                    }`}
                  >
                    {node}
                  </p>
                  {i === 1 && (
                    <div className="mt-5 grid grid-cols-2 gap-px bg-white/10">
                      {ki.indexes.map((ix, j) => (
                        <span
                          key={j}
                          className="bg-black px-3 py-2.5 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-[#D6D6D6]"
                        >
                          {ix}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-8 max-w-3xl border-l border-white/40 pl-5 text-sm leading-relaxed text-white/70 md:text-[15px]">
            {ki.clarify}
          </p>
        </Reveal>

        {/* benefits */}
        <Reveal delay={300}>
          <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
            {ki.benefitsLabel}
          </p>
          <ul className="mt-5 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {ki.benefits.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-black px-5 py-5 transition-colors duration-300 hover:bg-[#0d0d0d]"
              >
                <span className="mt-[3px] font-mono text-[10px] text-white/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-[15px] font-medium leading-snug text-white">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={340}>
          <p className="mt-14 max-w-4xl border-l-2 border-white/60 pl-5 font-display text-xl font-medium leading-snug text-white md:text-2xl">
            {ki.tagline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
