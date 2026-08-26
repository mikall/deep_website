import { useLang } from '../i18n/LanguageProvider';
import { Reveal } from './Reveal';
import SectionHeading from './SectionHeading';

export default function Problem() {
  const { t } = useLang();
  const p = t.problem;

  return (
    <section className="relative bg-black/75 pb-20 pt-20 md:pb-36 md:pt-28">
      <SectionHeading index={p.index} label={p.label} title={p.title} id="problema" />

      <div className="mx-auto mt-10 max-w-[1600px] px-5 md:mt-16 md:px-10">
        <Reveal>
          <p className="max-w-3xl text-[15px] leading-relaxed text-[#B7B7B7] md:text-lg">{p.intro}</p>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">{p.listLabel}</p>
        </Reveal>

        <Reveal delay={140}>
          <ul className="mt-5 grid grid-cols-1 gap-px border border-white/15 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {p.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-black px-5 py-4 transition md:px-6 md:py-6-colors duration-300 hover:bg-[#0d0d0d]"
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

        <div className="mt-14 max-w-4xl">
          <Reveal>
            <p className="font-display text-2xl font-semibold leading-snug text-white md:text-3xl">
              {p.statement}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 border-l-2 border-white/60 pl-5 font-display text-xl font-medium leading-snug text-white md:text-2xl">
              {p.bold}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 text-[15px] leading-relaxed text-white/70 md:text-base">{p.close}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
