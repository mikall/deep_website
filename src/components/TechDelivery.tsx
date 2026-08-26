import { useLang } from '../i18n/LanguageProvider';
import { Reveal } from './Reveal';
import SectionHeading from './SectionHeading';

export default function TechDelivery() {
  const { t } = useLang();
  const td = t.techDelivery;

  return (
    <section className="relative bg-black/75 pb-20 md:pb-36">
      <SectionHeading index={td.index} label={td.label} title={td.title} id="delivery" />

      <div className="mx-auto mt-10 max-w-[1600px] px-5 md:mt-16 md:px-10">
        <div className="max-w-3xl">
          {td.intro.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="mb-6 text-[15px] leading-relaxed text-[#B7B7B7] md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {td.cards.map((card, i) => (
            <Reveal key={i} delay={120 + i * 120} className="h-full">
              <article
                className={`group relative flex h-full flex-col p-7 transition-colors duration-500 md:p-12 ${
                  i === 0
                    ? 'border border-white/50 bg-white/[0.04] hover:bg-white/[0.06]'
                    : 'border border-white/15 bg-black/90 hover:bg-[#0b0b0b]'
                }`}
              >
                {i === 0 && (
                  <>
                    <span className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-white/80" />
                    <span className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-white/80" />
                  </>
                )}
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
                  {String(i + 1).padStart(2, '0')} / {String(td.cards.length).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-5 text-2xl font-semibold uppercase leading-tight tracking-tight text-white md:text-3xl">
                  {card.title}
                </h3>
                <p className="mt-6 text-[15px] leading-relaxed text-[#B7B7B7] md:text-base">{card.body}</p>
                <span className="mt-auto block h-px w-16 bg-white/50 pt-0 transition-all duration-700 group-hover:w-32 group-hover:bg-white" />
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Reveal delay={200}>
            <p className="max-w-2xl border-l-2 border-white/60 pl-5 font-display text-xl font-medium leading-snug text-white md:text-2xl">
              {td.bold}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <a
              href={td.cta.href}
              className="inline-block shrink-0 bg-white px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors duration-300 hover:bg-white/85"
            >
              {td.cta.label}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
