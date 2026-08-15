import { useState } from 'react';
import { useLang } from '../i18n/LanguageProvider';
import { Reveal } from './Reveal';
import SectionHeading from './SectionHeading';

export default function Workflows() {
  const { t } = useLang();
  const w = t.work;
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="relative bg-black/75 pb-28 md:pb-40">
      <SectionHeading index={w.index} label={w.label} title={w.title} id="processi" />

      <div className="mx-auto mt-14 grid max-w-[1600px] grid-cols-1 gap-16 px-5 md:mt-20 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          {w.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p
                className={`mb-7 leading-relaxed ${
                  i === w.paragraphs.length - 1
                    ? 'border-l-2 border-white/60 pl-5 font-display text-lg font-medium text-white md:text-xl'
                    : 'text-[15px] text-[#B7B7B7] md:text-base'
                }`}
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        {/* workflow index — expandable rows */}
        <div className="lg:col-span-8">
          <div className="border-t border-white/15">
            {w.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.id} delay={i * 60} y={16}>
                  <div className="border-b border-white/15">
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="group flex w-full items-baseline gap-5 py-6 text-left md:gap-8 md:py-7"
                      aria-expanded={isOpen}
                    >
                      <span className="font-mono text-[11px] text-white/40">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`font-display flex-1 text-2xl font-semibold uppercase leading-none tracking-tight transition-all duration-500 md:text-4xl lg:text-[2.9rem] ${
                          isOpen ? 'text-white' : 'text-white/45 group-hover:translate-x-2 group-hover:text-white'
                        }`}
                      >
                        {item.title}
                      </span>
                      <span
                        className={`font-mono text-lg text-white/60 transition-transform duration-500 ${
                          isOpen ? 'rotate-45' : 'group-hover:rotate-90'
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    <div
                      className="grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <div className="max-w-3xl pb-9 pl-9 pr-2 md:pl-16">
                          <p className="font-display text-lg font-medium leading-snug text-white md:text-xl">
                            {item.lead}
                          </p>
                          {item.body && (
                            <p className="mt-5 text-[15px] leading-relaxed text-[#B7B7B7] md:text-base">
                              {item.body}
                            </p>
                          )}
                          {item.outro && (
                            <p className="mt-5 border-l border-white/40 pl-4 text-sm leading-relaxed text-white/85">
                              {item.outro}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
