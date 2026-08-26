import { useLang } from '../i18n/LanguageProvider';
import { Reveal } from './Reveal';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;

  return (
    <section className="relative bg-black/75 pb-20 md:pb-36">
      <SectionHeading index={p.index} label={p.label} title={p.title} id="progetti" />

      <div className="mx-auto mt-10 max-w-[1600px] px-5 md:mt-16 md:px-10">
        <div className="border-t border-white/15">
          {p.items.map((item, i) => (
            <Reveal key={i} delay={i * 80} y={20}>
              <article className="group grid grid-cols-1 gap-6 border-b border-white/15 py-8 transition-colors duration-500 hover:bg-white/[0.015] md:py-14 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-3">
                  <span className="font-mono text-[11px] text-white/40">{String(i + 1).padStart(2, '0')}</span>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/60 md:text-[12px]">
                    {item.client}
                  </p>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="font-display max-w-3xl text-2xl font-semibold uppercase leading-tight tracking-tight text-white md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-[#B7B7B7] md:text-base">
                    {item.body}
                  </p>
                  <div className="mt-7 max-w-3xl border-l-2 border-white/60 pl-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
                      {p.outcomeLabel}
                    </span>
                    {item.metric && (
                      <p className="font-display mt-2 text-6xl font-bold leading-none tracking-tight text-white md:text-7xl">
                        {item.metric}
                      </p>
                    )}
                    <p className="font-display mt-2 text-lg font-medium leading-snug text-white md:text-xl">
                      {item.outcome}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
