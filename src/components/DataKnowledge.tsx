import { useLang } from '../i18n/LanguageProvider';
import { Reveal } from './Reveal';
import SectionHeading from './SectionHeading';

export default function DataKnowledge() {
  const { t } = useLang();
  const d = t.dataKnowledge;

  return (
    <section className="relative bg-black/75 pb-20 md:pb-36">
      <SectionHeading index={d.index} label={d.label} title={d.title} id="dati" />

      <div className="mx-auto mt-10 grid max-w-[1600px] grid-cols-1 gap-14 px-5 md:mt-16 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="text-[15px] leading-relaxed text-[#B7B7B7] md:text-base">{d.intro}</p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-6 grid grid-cols-1 gap-px border border-white/15 bg-white/10">
              {d.defects.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 bg-black px-5 py-3.5 transition-colors duration-300 hover:bg-[#0d0d0d]"
                >
                  <span className="mt-[2px] font-mono text-[10px] text-white/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm leading-relaxed text-[#D6D6D6] md:text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={120}>
            <p className="border-l-2 border-white/60 pl-5 font-display text-lg font-medium leading-snug text-white md:text-xl">
              {d.expertPara}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-[15px] leading-relaxed text-[#B7B7B7] md:text-base">{d.ragPara}</p>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-10 font-display text-2xl font-semibold leading-snug text-white md:text-3xl">
              {d.bold}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
