import { useLang } from '../i18n/LanguageProvider';
import { Reveal } from './Reveal';

/* per-logo heights: source images differ wildly in padding and aspect ratio
   (Deloitte ships inside a grey box, Kaleyra is a bare wide wordmark) */
const LOGO_SIZES = ['h-16 md:h-20', 'h-12 md:h-14', 'h-7 md:h-8'];

export default function Recognition() {
  const { t } = useLang();
  const r = t.recognition;

  return (
    <section className="relative bg-black/60 py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] border-t border-white/15 px-5 pt-14 md:px-10 md:pt-20">
        <Reveal>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45 md:text-[11px]">
            {r.label}
          </span>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-white md:text-4xl">
                {r.title}
              </h3>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#B7B7B7] md:text-base">{r.body}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={160}>
              <div className="flex flex-wrap items-end gap-x-16 gap-y-10">
                {r.logos.map((logo, i) => (
                  <figure key={i} className="flex flex-col items-center gap-4">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`w-auto opacity-85 grayscale transition-opacity duration-500 hover:opacity-100 ${LOGO_SIZES[i] ?? 'h-10'}`}
                      loading="lazy"
                    />
                    <figcaption className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/65">
                      {logo.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
