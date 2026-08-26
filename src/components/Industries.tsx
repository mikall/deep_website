import { useLang } from '../i18n/LanguageProvider';
import { Reveal } from './Reveal';
import SectionHeading from './SectionHeading';

export default function Industries() {
  const { t } = useLang();
  const s = t.industries;

  return (
    <section className="relative bg-black/75 pb-20 md:pb-36">
      <SectionHeading index={s.index} label={s.label} title={s.title} id="settori" />

      <div className="mx-auto mt-10 max-w-[1600px] px-5 md:mt-16 md:px-10">
        <Reveal>
          <p className="max-w-3xl text-[15px] leading-relaxed text-[#B7B7B7] md:text-lg">{s.intro}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1600px] grid-cols-1 gap-px border border-white/15 bg-white/10 px-0 lg:grid-cols-3">
        {s.items.map((item, i) => (
          <article
            key={i}
            className="group relative overflow-hidden bg-black/90 p-7 transition-colors duration-500 hover:bg-[#0b0b0b] md:p-12"
          >
            {/* watermark tag */}
            <span
              aria-hidden="true"
              className="font-display pointer-events-none absolute -right-4 -top-8 select-none text-[10rem] font-bold leading-none text-transparent opacity-60 transition-all duration-700 group-hover:opacity-100 md:text-[12rem] [-webkit-text-stroke:1px_rgba(255,255,255,0.14)]"
            >
              {item.tag}
            </span>

            <Reveal>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
                {String(i + 1).padStart(2, '0')} / {String(s.items.length).padStart(2, '0')}
              </span>
              <h3 className="font-display relative mt-5 max-w-md text-3xl font-semibold uppercase leading-[1.02] tracking-tight text-white md:text-4xl">
                {item.name}
              </h3>
              <p className="relative mt-8 max-w-lg text-[15px] leading-relaxed text-[#B7B7B7] md:text-base">
                {item.body}
              </p>
              <span className="mt-6 block h-px w-16 bg-white/50 transition-all duration-700 group-hover:w-32 group-hover:bg-white" />
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
