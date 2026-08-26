import { useLang } from '../i18n/LanguageProvider';
import { Reveal } from './Reveal';
import SectionHeading from './SectionHeading';

const DownArrow = () => (
  <div className="flex items-center justify-center py-1" aria-hidden="true">
    <svg width="14" height="30" viewBox="0 0 14 30" className="text-white/40">
      <path d="M7 0 V24 M1 18 L7 24 L13 18" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  </div>
);

const UpArrow = () => (
  <div className="flex items-center justify-center py-1" aria-hidden="true">
    <svg width="14" height="30" viewBox="0 0 14 30" className="text-white/40">
      <path d="M7 30 V6 M1 12 L7 6 L13 12" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  </div>
);

export default function Layer() {
  const { t } = useLang();
  const ix = t.indexable;

  return (
    <section className="relative bg-black/75 pb-20 md:pb-36">
      <SectionHeading index={ix.index} label={ix.label} title={ix.title} id="indexable" />

      <div className="mx-auto mt-10 grid max-w-[1600px] grid-cols-1 gap-14 px-5 md:mt-16 md:px-10 lg:grid-cols-12">
        {/* transformation diagram — sources flow down through Indexable to people and agents */}
        <div className="lg:col-span-6">
          <Reveal delay={100}>
            <div className="flex flex-col">
              <div className="border border-white/15 bg-white/[0.015] px-6 py-5 text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/75 md:text-xs">
                  {ix.diagram.sources}
                </p>
              </div>
              <DownArrow />
              <div className="relative border border-white/60 bg-white/[0.05] px-6 py-6 text-center">
                <span className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-white/80" />
                <span className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-white/80" />
                <p className="font-display text-3xl font-semibold uppercase tracking-tight text-white md:text-4xl">
                  {ix.diagram.name}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/80 md:text-xs">
                  {ix.diagram.ops}
                </p>
              </div>
              <DownArrow />
              <div className="border border-white/15 bg-white/[0.015] px-6 py-5 text-center">
                <p className="font-display text-lg font-semibold uppercase leading-tight tracking-tight text-white/90 md:text-xl">
                  {ix.diagram.output}
                </p>
              </div>
              <div className="grid grid-cols-2" aria-hidden="true">
                <DownArrow />
                <DownArrow />
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {ix.diagram.branches.map((b, i) => (
                  <div key={i} className="border border-white/15 bg-white/[0.015] px-4 py-5 md:px-6">
                    <p className="font-display text-center text-lg font-semibold uppercase tracking-tight text-white md:text-xl">
                      {b.title}
                    </p>
                    <ul className="mt-4 border-t border-white/10">
                      {b.items.map((item, j) => (
                        <li
                          key={j}
                          className="border-b border-white/10 py-2.5 text-center text-[13px] leading-snug text-[#B7B7B7] md:text-sm"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* narrative */}
        <div className="lg:col-span-6">
          {ix.lead.map((p, i) => (
            <Reveal key={i} delay={120 + i * 90}>
              <p className="mb-7 text-[15px] leading-relaxed text-[#B7B7B7] md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* where Indexable sits — the stack underneath your AI */}
      <div className="mx-auto mt-14 max-w-[1600px] border-t border-white/15 px-5 pt-12 md:mt-24 md:px-10 md:pt-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal delay={100}>
              <div className="flex flex-col">
                {ix.stack.map((layer, i) => (
                  <div key={i} className="contents">
                    {i > 0 && <UpArrow />}
                    <div
                      className={`relative border px-6 py-5 text-center md:py-6 ${
                        layer.highlight ? 'border-white/60 bg-white/[0.05]' : 'border-white/15 bg-white/[0.015]'
                      }`}
                    >
                      {layer.highlight && (
                        <>
                          <span className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-white/80" />
                          <span className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-white/80" />
                        </>
                      )}
                      <p
                        className={`font-display font-semibold uppercase leading-tight tracking-tight ${
                          layer.highlight ? 'text-2xl text-white md:text-4xl' : 'text-lg text-white/85 md:text-xl'
                        }`}
                      >
                        {layer.title}
                      </p>
                      {layer.sub && (
                        <p
                          className={`mt-2 font-mono text-[11px] uppercase tracking-[0.18em] md:text-xs ${
                            layer.highlight ? 'text-white/80' : 'text-white/65'
                          }`}
                        >
                          {layer.sub}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <h3 className="font-display text-3xl font-semibold uppercase tracking-tight text-white md:text-5xl">
                {ix.sideTitle}
              </h3>
            </Reveal>
            {ix.sideParagraphs.map((p, i) => (
              <Reveal key={i} delay={180 + i * 90}>
                <p className="mt-8 text-[15px] leading-relaxed text-[#B7B7B7] md:text-base">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={280}>
              <p className="mt-10 border-l-2 border-white/60 pl-5 font-display text-xl font-medium leading-snug text-white md:text-2xl">
                {ix.sideClaim}
              </p>
            </Reveal>
          </div>
        </div>

        {/* field proof — the 57% case, next to the product explanation */}
        <Reveal delay={200}>
          <div className="mt-16 flex flex-col gap-6 border border-white/15 bg-white/[0.02] p-7 md:mt-20 md:flex-row md:items-center md:justify-between md:p-9">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                {ix.proof.label}
              </span>
              <p className="mt-3 max-w-3xl font-display text-lg font-medium leading-snug text-white md:text-xl">
                {ix.proof.text}
              </p>
            </div>
            <a
              href={ix.proof.cta.href}
              className="inline-block shrink-0 border border-white/30 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-white"
            >
              {ix.proof.cta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
