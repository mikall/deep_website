import { useLang } from '../i18n/LanguageProvider';
import { Reveal } from './Reveal';
import SectionHeading from './SectionHeading';

export default function Operations() {
  const { t } = useLang();
  const o = t.operations;
  const cs = t.contextStat;

  return (
    <section className="relative bg-black/75 pb-20 md:pb-36">
      <SectionHeading index={o.index} label={o.label} title={o.title} id="operazioni" />

      <div className="mx-auto mt-10 max-w-[1600px] px-5 md:mt-16 md:px-10">
        <div className="max-w-3xl">
          {o.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="mb-7 text-[15px] leading-relaxed text-[#B7B7B7] md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>

        {/* three operations */}
        <div className="mt-12 grid grid-cols-1 gap-px border border-white/15 bg-white/10 lg:grid-cols-3">
          {o.items.map((item, i) => (
            <Reveal key={i} delay={120 + i * 100} className="h-full">
              <article className="group flex h-full flex-col bg-black/90 p-7 transition-colors duration-500 hover:bg-[#0b0b0b] md:p-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
                  {String(i + 1).padStart(2, '0')} / {String(o.items.length).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-5 text-2xl font-semibold uppercase leading-tight tracking-tight text-white md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-5 border-l-2 border-white/60 pl-4 font-display text-lg font-medium leading-snug text-white/90">
                  {item.question}
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-[#B7B7B7] md:text-base">{item.body}</p>
                <span className="mt-auto block h-px w-16 bg-white/50 pt-0 transition-all duration-700 group-hover:w-32 group-hover:bg-white" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* properties of the layer */}
        <Reveal delay={200}>
          <p className="mt-14 font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">{o.propsLabel}</p>
          <ul className="mt-5 flex flex-wrap gap-px bg-white/10">
            {o.props.map((p, i) => (
              <li
                key={i}
                className="grow bg-black px-5 py-3 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-white/85"
              >
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* context efficiency — measured result of the same operations */}
        <div className="mt-12 border-t border-white/15 pt-10 md:mt-16 md:pt-14">
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45 md:text-[11px]">
              {cs.label}
            </span>
            <h3 className="font-display mt-5 text-2xl font-semibold uppercase tracking-tight text-white md:text-4xl">
              {cs.title}
            </h3>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative mt-10 border border-white/15 bg-white/[0.02] p-7 md:p-12">
              <span className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-white/70" />
              <span className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-white/70" />
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <p className="font-display text-[22vw] font-bold leading-none tracking-tight text-white sm:text-8xl lg:text-[8vw]">
                    {cs.stat.value}
                  </p>
                  <p className="font-display mt-2 text-xl font-semibold uppercase leading-tight tracking-tight text-white md:text-2xl">
                    {cs.stat.title}
                  </p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/75 md:text-xs">
                    {cs.stat.qualifier}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <p className="border-l border-white/40 pl-5 text-[15px] leading-relaxed text-[#B7B7B7] md:text-base">
                    {cs.stat.body}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
