import { useLang } from '../i18n/LanguageProvider';
import { Reveal } from './Reveal';
import SectionHeading from './SectionHeading';

const ChainArrow = () => (
  <div className="flex items-center justify-center px-3" aria-hidden="true">
    <svg width="36" height="14" viewBox="0 0 36 14" className="text-white/40">
      <path d="M0 7 H30 M24 1 L30 7 L24 13" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  </div>
);

export default function Deliverables() {
  const { t } = useLang();
  const d = t.deliverables;

  return (
    <section className="relative bg-black/75 pb-20 md:pb-36">
      <SectionHeading index={d.index} label={d.label} title={d.title} id="deliverable" />

      <div className="mx-auto mt-10 max-w-[1600px] px-5 md:mt-16 md:px-10">
        <Reveal>
          <p className="max-w-3xl text-[15px] leading-relaxed text-[#B7B7B7] md:text-lg">{d.intro}</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-px border border-white/15 bg-white/10 lg:grid-cols-3">
          {d.groups.map((group, gi) => (
            <Reveal key={gi} delay={100 + gi * 100} className="h-full">
              <div className="flex h-full flex-col bg-black/90 p-7 transition-colors duration-500 hover:bg-[#0b0b0b] md:p-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
                  {String(gi + 1).padStart(2, '0')} / {String(d.groups.length).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-4 text-xl font-semibold uppercase leading-tight tracking-tight text-white md:text-2xl">
                  {group.name}
                </h3>
                <ul className="mt-6 border-t border-white/10">
                  {group.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 border-b border-white/10 py-3 text-sm leading-relaxed text-[#D6D6D6] md:text-[15px]"
                    >
                      <span className="mt-[2px] font-mono text-[10px] text-white/40">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <p className="mt-10 max-w-3xl text-[15px] leading-relaxed text-[#B7B7B7] md:text-base">{d.outro}</p>
        </Reveal>

        {/* source → knowledge → deliverable */}
        <Reveal delay={280}>
          <div className="mt-10 flex flex-wrap items-center">
            {d.chain.map((step, i) => (
              <div key={i} className="contents">
                {i > 0 && <ChainArrow />}
                <span className="font-display py-1 text-[7vw] font-bold uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-[3vw]">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={340}>
          <p className="mt-10 max-w-3xl border-l-2 border-white/60 pl-5 font-display text-xl font-medium leading-snug text-white md:text-2xl">
            {d.bold}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
