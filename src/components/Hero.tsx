import { useLang } from '../i18n/LanguageProvider';
import { WordReveal } from './Reveal';

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* vignette to keep type readable */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.72)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative z-10 flex flex-1 flex-col justify-between px-5 pb-10 pt-28 md:px-10 md:pt-32">
        {/* kicker row */}
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 md:text-[11px]">
          <span>{t.hero.kicker}</span>
          <span className="hidden md:block">{t.hero.meta[2]}</span>
        </div>

        {/* headline */}
        <div className="mt-auto pt-16">
          <h1 className="font-display text-[9.5vw] font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-white sm:text-[8.2vw] lg:text-[5.6vw]">
            {t.hero.titleLines.map((line, i) => (
              <span key={i} className="block">
                <WordReveal text={line} baseDelay={150 + i * 160} />
              </span>
            ))}
          </h1>

          <div className="mt-8 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-base leading-relaxed text-[#B7B7B7] md:text-lg">
                {t.hero.sub}{' '}
                <span className="font-medium text-white">{t.hero.subEmphasis}</span>
              </p>
              <p className="mt-5 text-sm leading-relaxed text-white/55 md:text-base">
                {t.hero.sectorsLine}
              </p>
            </div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              <span className="line-flow inline-block h-8 w-px bg-white/50" />
              {t.hero.scrollHint}
            </div>
          </div>
        </div>

        {/* bottom meta strip */}
        <div className="mt-10 grid grid-cols-1 gap-3 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/45 sm:grid-cols-3 md:text-[11px]">
          {t.hero.meta.map((m, i) => (
            <span key={i} className={i === 1 ? 'sm:text-center' : i === 2 ? 'sm:text-right' : ''}>
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
