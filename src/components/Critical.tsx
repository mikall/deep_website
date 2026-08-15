import { useLang } from '../i18n/LanguageProvider';
import { Reveal } from './Reveal';
import SectionHeading from './SectionHeading';

export default function Critical() {
  const { t } = useLang();
  const c = t.critical;

  return (
    <section className="relative overflow-hidden bg-black/70 pb-28 md:pb-40">
      {/* faint field lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      <SectionHeading index={c.index} label={c.label} title={c.title} id="metodo" />

      <div className="relative mx-auto mt-14 max-w-[1600px] px-5 md:mt-20 md:px-10">
        <div className="max-w-3xl">
          {c.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className="mb-7 text-[15px] leading-relaxed text-[#B7B7B7] md:text-base">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.3em] text-white/45 md:text-[11px]">
            {c.formulaLabel}
          </p>
        </Reveal>

        <div className="mt-6 flex flex-col lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-6">
          {c.formula.map((f, i) => (
            <Reveal key={i} delay={250 + i * 130} className="flex items-center gap-6">
              <span className="font-display py-2 text-[8.5vw] font-bold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-[3.6vw]">
                {f}
              </span>
              {i < c.formula.length - 1 && (
                <span className="hidden font-mono text-3xl font-light text-white/35 lg:inline">+</span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
