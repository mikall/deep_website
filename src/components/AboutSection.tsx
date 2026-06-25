"use client";

const Divider = () => (
  <div className="flex items-center justify-center my-12" aria-hidden="true">
    <div className="h-px bg-gray-800 flex-1 max-w-[120px]"></div>
    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mx-4"></div>
    <div className="h-px bg-gray-800 flex-1 max-w-[120px]"></div>
  </div>
);

const indexableUseCases = [
  "Consolidamento di analisi funzionale e tecnica, analisi impatti delle CR e generazione di testbook",
  "Gap analysis su RFP",
  "Generazione assistita di manuali d'uso",
  "Specifiche per lo sviluppo agentico del codice",
  "Supporto alle operations, con triage di issue e ticket",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <article className="text-gray-300 leading-relaxed">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Agent-ready knowledge
          </p>

          <p className="text-body-lg md:text-xl mb-2 first-letter:text-primary first-letter:text-3xl first-letter:font-semibold">
            Deep4it è un <span className="text-white font-medium">AI Lab</span> specializzato nella rappresentazione della conoscenza fruibile da agenti AI. Non partiamo dall&apos;agente: partiamo dalla <span className="text-white font-medium">conoscenza che l&apos;agente deve usare</span>, trasformando contenuti complessi in conoscenza <span className="text-primary font-medium">normalizzata, tracciabile e interrogabile</span>.
          </p>

          <Divider />

          <h2 className="text-h3 text-white">Il problema</h2>
          <p className="text-body-lg mb-6">
            I documenti non bastano. Il retrieval non basta. Gli agenti da soli non bastano. La conoscenza di prodotto e di processo è dispersa tra testi, tabelle, immagini, grafici e snippet tecnici.
          </p>
          <p className="text-body-lg">
            I sistemi di retrieval aiutano a trovare le informazioni, ma faticano con le domande che contano davvero: <span className="text-white font-medium">cosa manca? cosa è in conflitto? quali regole dipendono da altre regole? quale documento è disallineato?</span> Serve una rappresentazione intermedia della conoscenza: normalizzata, tracciabile e analizzabile.
          </p>

          <Divider />

          <h2 className="text-h3 text-white">La soluzione</h2>
          <p className="text-body-lg mb-6">
            Introduciamo un <span className="text-primary font-medium">livello intermedio tra i documenti e gli agenti AI</span>. Trasformiamo contenuti eterogenei — testi, tabelle, immagini, grafici e parti tecniche — in <span className="text-white font-medium">conoscenza strutturata, coerente e tracciabile</span>, pronta per essere usata dagli agenti.
          </p>
          <p className="text-body-lg">
            Così l&apos;agente non lavora su documenti recuperati alla rinfusa, ma su <span className="text-white font-medium">conoscenza affidabile e verificabile</span>.
          </p>

          <Divider />

          <div className="rounded-lg border border-gray-800 bg-white/[0.02] p-6 md:p-8 mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-2">
              Product Intelligence
            </p>
            <h3 className="text-h3 text-white">Indexable</h3>
            <p className="text-body mb-4">
              Trasforma la documentazione di prodotto e di servizio in conoscenza agent-ready: <span className="text-white">normalizzazione semantica human-in-the-loop</span>, un <span className="text-white">grafo di micro-sentenze</span> tracciabili e un <span className="text-white">agentic query layer</span> per cercare, confrontare, verificare e motivare le risposte sulle fonti. Formalizza la conoscenza critica — spesso custodita nelle persone — in una base strutturata, interrogabile e riutilizzabile.
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium mb-3">
              Esempi di casi d&apos;uso
            </p>
            <ul className="space-y-2 mb-6">
              {indexableUseCases.map((useCase) => (
                <li key={useCase} className="text-body-sm text-gray-400 flex gap-2 mb-0">
                  <span className="text-primary mt-0.5" aria-hidden="true">▸</span>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
            <div className="border-l-2 border-primary pl-4">
              <p
                className="text-white font-bold leading-none mb-0"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                3,5 → 1,5 <span className="text-primary text-xl font-medium">mesi/uomo</span>
              </p>
              <p className="text-caption text-gray-500 mt-2 mb-0">
                Caso reale: un&apos;attività stimata in ~3,5 mesi/uomo completata in 1,5, inclusa la prima costruzione della knowledge base.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-gray-800 bg-white/[0.02] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-2">
              HR Process Assistant
            </p>
            <h3 className="text-h3 text-white">Juno AI</h3>
            <p className="text-body mb-4">
              Costruito su <span className="text-primary font-medium">Indexable</span>, rende la conoscenza HR fruibile dai dipendenti tramite agenti conversazionali su <span className="text-white">policy aziendali, regolamenti interni, normative nazionali, procedure HR</span> e percorsi di formazione. Abilita Q&amp;A sempre disponibile, risposte coerenti con policy e fonti, qualificazione delle richieste ed escalation verso HR quando serve. L&apos;obiettivo non è sostituire l&apos;HR, ma rendere la sua conoscenza più accessibile, coerente e scalabile.
            </p>
            <div className="border-l-2 border-primary pl-4">
              <p
                className="text-white font-bold leading-none mb-0"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                −34% <span className="text-primary text-xl font-medium">carico HR</span>
              </p>
              <p className="text-caption text-gray-500 mt-2 mb-0">
                Riduzione osservata del carico operativo HR sulle richieste informative.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
