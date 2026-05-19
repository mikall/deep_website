"use client";

const Divider = () => (
  <div className="flex items-center justify-center my-12" aria-hidden="true">
    <div className="h-px bg-gray-800 flex-1 max-w-[120px]"></div>
    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mx-4"></div>
    <div className="h-px bg-gray-800 flex-1 max-w-[120px]"></div>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <article className="text-gray-300 leading-relaxed">
          <p className="text-body-lg md:text-xl mb-2 first-letter:text-primary first-letter:text-3xl first-letter:font-semibold">
            Deep4IT nasce dall&apos;esperienza di <span className="text-white font-medium">professionisti senior</span> che hanno progettato e portato in produzione piattaforme software utilizzate da <span className="text-white font-medium">milioni di persone in contesti regolamentati</span>.
          </p>

          <Divider />

          <p className="text-body-lg mb-6">
            Abbiamo trasformato questa esperienza in una <span className="text-primary font-medium">AI-native Product Factory</span>: un modello di lavoro che accelera progettazione, specifiche, sviluppo, test e documentazione, mantenendo controllo tecnico, qualità architetturale e responsabilità senior.
          </p>

          <p className="text-body-lg">
            Rispetto ai modelli di delivery tradizionali, questo approccio ci permette di <span className="text-white font-medium">ridurre drasticamente tempi e costi di sviluppo</span>, anche quando la complessità funzionale, tecnica o regolamentare è elevata.
          </p>

          <Divider />

          <p className="text-body-lg mb-6">
            In parallelo, abbiamo sviluppato una competenza distintiva nella <span className="text-primary font-medium">profilazione avanzata dei clienti</span> e nella costruzione di <span className="text-primary font-medium">percorsi di ingaggio iperpersonalizzati</span>.
          </p>

          <p className="text-body-lg">
            Attraverso dati transazionali, dati conversazionali e canali digitali di relazione, aiutiamo le aziende a comprendere meglio bisogni, comportamenti e intenzioni dei propri clienti, per costruire offerte, comunicazioni e customer journey <span className="text-white font-medium">più rilevanti, contestuali e misurabili</span>.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
