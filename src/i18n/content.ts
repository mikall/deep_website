export type Lang = 'it' | 'en';

export interface DiagramLayer {
  title: string;
  sub?: string;
  highlight?: boolean;
}

export interface OperationItem {
  title: string;
  question: string;
  body: string;
}

export interface ProjectItem {
  client: string;
  title: string;
  body: string;
  outcome: string;
  metric?: string;
}

export interface Content {
  nav: { label: string; href: string }[];
  navCta: string;
  hero: {
    kicker: string;
    titleLines: string[];
    sub: string;
    subEmphasis: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    scrollHint: string;
  };
  problem: {
    index: string;
    label: string;
    title: string;
    intro: string;
    listLabel: string;
    items: string[];
    statement: string;
    bold: string;
    close: string;
  };
  aiReadiness: {
    index: string;
    label: string;
    title: string;
    paragraphs: string[];
    staccato: string[];
    bold: string;
    stats: { value: string; text: string; source: { label: string; href: string } }[];
    hedge: string;
  };
  dataKnowledge: {
    index: string;
    label: string;
    title: string;
    intro: string;
    defects: string[];
    expertPara: string;
    ragPara: string;
    bold: string;
  };
  indexable: {
    index: string;
    label: string;
    title: string;
    lead: string[];
    diagram: {
      sources: string;
      name: string;
      ops: string;
      output: string;
      branches: { title: string; items: string[] }[];
    };
    stack: DiagramLayer[];
    sideTitle: string;
    sideParagraphs: string[];
    sideClaim: string;
    proof: { label: string; text: string; cta: { label: string; href: string } };
  };
  operations: {
    index: string;
    label: string;
    title: string;
    paragraphs: string[];
    items: OperationItem[];
    propsLabel: string;
    props: string[];
  };
  contextStat: {
    index: string;
    label: string;
    title: string;
    stat: { value: string; title: string; qualifier: string; body: string };
    cta: { label: string; href: string };
  };
  experts: {
    index: string;
    label: string;
    title: string;
    intro: string;
    flow: string[];
    statement: string[];
  };
  completeness: {
    index: string;
    label: string;
    title: string;
    lead: string;
    emphasis: string;
    checkLabel: string;
    checks: string[];
    outro: string;
  };
  deliverables: {
    index: string;
    label: string;
    title: string;
    intro: string;
    groups: { name: string; items: string[] }[];
    outro: string;
    chain: string[];
    bold: string;
  };
  projects: {
    index: string;
    label: string;
    title: string;
    outcomeLabel: string;
    items: ProjectItem[];
  };
  techDelivery: {
    index: string;
    label: string;
    title: string;
    intro: string[];
    cards: { title: string; body: string }[];
    bold: string;
    cta: { label: string; href: string };
  };
  industries: {
    index: string;
    label: string;
    title: string;
    intro: string;
    items: { name: string; tag: string; body: string }[];
  };
  recognition: {
    index: string;
    label: string;
    title: string;
    body: string;
    logos: { src: string; alt: string }[];
  };
  about: {
    label: string;
    statement: string[];
    paragraphs: string[];
    emphasis: string;
    cta: { label: string; href: string };
    tagline: string;
    wordmark: string;
    contacts: {
      label: string;
      lines: string[];
      email: string;
      legal: string;
    };
  };
}

const recognitionLogos = [
  { src: '/images/deloitte.png', alt: 'Deloitte Innovation 2025' },
  { src: '/images/polihub.webp', alt: 'PoliHub 2025' },
  { src: '/images/kaleyra.avif', alt: 'Kaleyra Awards' },
];

export const content: Record<Lang, Content> = {
  it: {
    nav: [
      { label: 'Problema', href: '#problema' },
      { label: 'Indexable', href: '#indexable' },
      { label: 'Operazioni', href: '#operazioni' },
      { label: 'Progetti', href: '#progetti' },
      { label: 'Deep4IT', href: '#deep4it' },
    ],
    navCta: 'Contattaci',
    hero: {
      kicker: 'Product & Service Knowledge Infrastructure',
      titleLines: ['Un agente AI è il tuo', 'prossimo nuovo assunto'],
      sub: 'Prima di affidargli software, analisi, specifiche o manuali, devi portarlo a bordo sulla conoscenza dei tuoi prodotti e servizi, proprio come faresti con una nuova persona. Indexable consolida informazioni e documenti dispersi in conoscenza controllata e verificabile, pronta per persone e agenti AI.',
      subEmphasis: 'Le persone cambiano. La conoscenza deve restare.',
      ctaPrimary: { label: 'Scopri come funziona', href: '#indexable' },
      ctaSecondary: { label: 'Parliamo del tuo caso d’uso', href: '#deep4it' },
      scrollHint: 'Scorri',
    },
    problem: {
      index: '01',
      label: 'Il problema',
      title: 'Se serve un lungo affiancamento, la conoscenza non è ancora in azienda.',
      intro: 'Una nuova persona riceve documenti, accesso ai sistemi e indicazioni su dove cercare.',
      listLabel: 'Per lavorare davvero deve però capire',
      items: [
        'Quali informazioni sono valide e quali superate',
        'Che cosa manca e non è mai stato scritto',
        'Perché sono state prese determinate decisioni',
        'Quali eccezioni si applicano nei casi reali',
        'Quali dipendenze sono più critiche',
        'Che cosa viene impattato quando qualcosa cambia',
      ],
      statement:
        'Quando le persone più esperte cambiano ruolo, lasciano l’azienda o vanno in pensione, una parte della conoscenza scompare con loro.',
      bold: 'I documenti restano. La comprensione del prodotto se ne va.',
      close: 'Se la conoscenza lascia l’azienda insieme alle persone, non è ancora un vero asset aziendale.',
    },
    aiReadiness: {
      index: '03',
      label: 'AI readiness',
      title: 'La tua AI eredita lo stesso problema di onboarding.',
      paragraphs: [
        'Modelli e agenti sono sempre più capaci di produrre lavoro complesso. Ma possono lavorare soltanto sulla conoscenza che ricevono.',
        'Se documenti e sistemi non bastano a rendere autonoma una nuova persona, non possono bastare a rendere affidabile un agente AI.',
      ],
      staccato: [
        'Una specifica può perdere un requisito.',
        'Un’analisi può ignorare una dipendenza.',
        'Un manuale può utilizzare una regola superata.',
        'Il software può essere quasi corretto, ma richiedere una revisione completa.',
      ],
      bold: 'Se devi rifarlo a mano per fidarti, non l’hai automatizzato.',
      stats: [
        {
          value: '41%',
          text: 'dei prototipi GenAI raggiunge la produzione',
          source: { label: 'Gartner, 2024', href: 'https://www.gartner.com/en/documents/6587902' },
        },
        {
          value: '46%',
          text: 'degli sviluppatori non si fida dell’accuratezza degli output AI',
          source: { label: 'Stack Overflow, 2025', href: 'https://survey.stackoverflow.co/2025/ai' },
        },
        {
          value: '66%',
          text: 'indica come principale frustrazione le soluzioni AI “quasi corrette”',
          source: { label: 'Stack Overflow, 2025', href: 'https://survey.stackoverflow.co/2025/ai' },
        },
      ],
      hedge:
        'Le cause del mancato passaggio in produzione sono molte. Una delle più strutturali è la qualità della conoscenza fornita al sistema.',
    },
    dataKnowledge: {
      index: '02',
      label: 'I dati',
      title: 'La conoscenza non è tutta nei dati.',
      intro:
        'Documenti, ticket, repository, specifiche e manuali raccontano parti diverse dello stesso prodotto o servizio. Le informazioni scritte, però, sono:',
      defects: [
        'distribuite in sistemi diversi',
        'espresse con terminologie differenti',
        'mescolate tra versioni valide e superate',
        'talvolta in conflitto tra loro',
        'separate dal contesto delle decisioni',
      ],
      expertPara:
        'E una parte critica della conoscenza non è mai stata scritta: eccezioni, motivazioni e regole del mestiere vivono nella testa degli esperti, e vanno fatte emergere.',
      ragPara:
        'Una ricerca può trovare documenti rilevanti. Un sistema RAG può passarli a un modello. Ma rilevante non significa completo, coerente o aggiornato: dati e documenti esistono, non sono ancora consolidati in una conoscenza univoca, aggiornata e verificabile.',
      bold: 'Un modello migliore non può recuperare la conoscenza che l’azienda non ha consolidato.',
    },
    indexable: {
      index: '04',
      label: 'Indexable',
      title: 'Riporta la conoscenza dentro l’organizzazione.',
      lead: [
        'Indexable trasforma informazioni frammentate, documenti e competenza degli esperti in conoscenza di prodotto, servizio e progetto pronta all’uso.',
        'Rende esplicite regole, decisioni, dipendenze ed eccezioni. Mantiene ogni elemento collegato alle fonti e permette agli esperti di verificare ciò che è valido, ciò che è in conflitto e ciò che manca.',
        'Il risultato è un asset aziendale duraturo, meno dipendente dalle singole persone e riutilizzabile da team e agenti diversi.',
      ],
      diagram: {
        sources: 'Documenti · Specifiche · Ticket · Repository · Manuali · Esperti',
        name: 'Indexable',
        ops: 'organizza · riconcilia · completa · traccia · revisiona',
        output: 'Conoscenza controllata di prodotto e servizio',
        branches: [
          { title: 'Persone', items: ['Onboarding più rapido', 'Meno affiancamento', 'Conoscenza che resta'] },
          { title: 'Agenti AI', items: ['Contesto più completo', 'Maggiore accuratezza', 'Deliverable più affidabili'] },
        ],
      },
      stack: [
        { title: 'Business · IT · Operations' },
        { title: 'Il tuo stack AI e di agenti', sub: 'Framework e orchestratori • Agenti custom • Copilot • Modelli' },
        { title: 'Indexable', sub: 'Conoscenza di prodotto e servizio agent-ready', highlight: true },
        { title: 'Le tue fonti', sub: 'Documenti • Sistemi • Esperti di dominio' },
      ],
      sideTitle: 'Mantieni il tuo stack AI. Migliora la conoscenza su cui lavora.',
      sideParagraphs: [
        'Indexable non sostituisce modelli, copilot o framework di agenti. Costruisce il layer di conoscenza che permette a persone e sistemi AI diversi di lavorare sulla stessa rappresentazione controllata del prodotto.',
      ],
      sideClaim: 'I modelli cambieranno. La conoscenza dei tuoi prodotti e servizi deve restare.',
      proof: {
        label: 'Sul campo',
        text: 'Specifiche funzionali per un sistema nazionale di Direct Debit: effort da 3,5 a 1,5 mesi-persona (−57%), ogni requisito tracciabile alla fonte.',
        cta: { label: 'Vedi il progetto', href: '#progetti' },
      },
    },
    operations: {
      index: '05',
      label: 'Le operazioni',
      title: 'Trovare informazioni non basta.',
      paragraphs: [
        'Per produrre lavoro affidabile, persone e agenti devono sapere che cosa è valido, che cosa è in conflitto, che cosa manca, quale versione usare e da dove deriva ogni informazione.',
      ],
      items: [
        {
          title: 'Retrieve',
          question: 'Che cosa sappiamo su questo tema?',
          body: 'Recupera la conoscenza rilevante insieme alle fonti, alle versioni e al contesto da cui deriva.',
        },
        {
          title: 'Detect conflicts',
          question: 'Dove le nostre fonti si contraddicono?',
          body:
            'Individua affermazioni incompatibili tra documenti, requisiti, specifiche e versioni prima che vengano trattate come fatti.',
        },
        {
          title: 'Find gaps',
          question: 'Che cosa manca rispetto a ciò che era atteso?',
          body:
            'Confronta la conoscenza disponibile con una struttura attesa, un insieme di riferimento o un deliverable target. Rende visibili requisiti mancanti, specifiche incomplete ed eccezioni non documentate che una normale ricerca non può trovare.',
        },
      ],
      propsLabel: 'Proprietà del layer',
      props: [
        'Fonti preservate',
        'Versioni distinguibili',
        'Decisioni tracciabili',
        'Conoscenza revisionabile',
        'Intervento degli esperti sui punti critici',
      ],
    },
    contextStat: {
      index: '06',
      label: 'Efficienza del contesto',
      title: 'Più conoscenza utile. Meno rumore per il modello.',
      stat: {
        value: '68×',
        title: 'contesto più compatto per query',
        qualifier: 'a parità di recall sul nostro gold set interno',
        body:
          'Indexable recupera le evidenze necessarie limitando le informazioni irrilevanti passate al modello. Un contesto più preciso riduce il rumore e permette agli agenti di lavorare su una rappresentazione più focalizzata e verificabile del prodotto.',
      },
      cta: { label: 'Scopri come funziona il 68×', href: '#operazioni' },
    },
    experts: {
      index: '06',
      label: 'Gli esperti',
      title: 'Le persone esperte continuano a creare conoscenza. L’organizzazione smette di perderla.',
      intro:
        'Indexable non assume che ogni documento sia corretto e non trasforma automaticamente ogni informazione in conoscenza di prodotto e servizio. Gli esperti di dominio restano responsabili delle decisioni critiche. Il loro contributo diventa però cumulativo:',
      flow: [
        'Informazioni raccolte',
        'Conoscenza estratta e organizzata',
        'Conflitti e lacune evidenziati',
        'Revisione degli esperti',
        'Conoscenza approvata che resta',
        'Riutilizzo da persone e agenti',
      ],
      statement: [
        'La competenza individuale diventa conoscenza di prodotto e servizio.',
        'Questa conoscenza diventa utilizzabile da persone e AI.',
      ],
    },
    completeness: {
      index: '08',
      label: 'Completezza e controllo',
      title: 'Nei settori regolamentati, la completezza è parte della correttezza.',
      lead:
        'Un output AI può essere corretto nei fatti e comunque sbagliato dal punto di vista operativo. Può aver perso un’eccezione. Una dipendenza. Un requisito nascosto in un altro documento. Una versione più recente della stessa regola.',
      emphasis: 'Per processi complessi e regolamentati, trovare una risposta rilevante non basta.',
      checkLabel: 'Devi sapere',
      checks: [
        'Se la conoscenza è completa',
        'Da quale fonte deriva',
        'Quale versione è valida',
        'Se esistono informazioni in conflitto',
        'Quali parti sono state revisionate',
        'Quali assunzioni restano da verificare',
      ],
      outro:
        'Indexable mantiene conoscenza e deliverable collegati alle evidenze, alle versioni e al processo di revisione.',
    },
    deliverables: {
      index: '07',
      label: 'I deliverable',
      title: 'Una conoscenza più chiara e meno ambigua produce lavoro più affidabile.',
      intro: 'La stessa base di conoscenza serve a creare e mantenere:',
      groups: [
        {
          name: 'Software e sistemi AI',
          items: ['Software e componenti applicativi', 'Agenti e workflow AI'],
        },
        {
          name: 'Analisi e specifiche',
          items: ['Specifiche di prodotto e servizio', 'Analisi d’impatto', 'Test book'],
        },
        {
          name: 'Documentazione e operations',
          items: ['Manuali tecnici', 'Procedure operative', 'Documentazione regolamentata'],
        },
      ],
      outro: 'Ogni deliverable resta collegato alla conoscenza da cui è stato generato.',
      chain: ['Fonte', 'Conoscenza', 'Deliverable'],
      bold: 'Non soltanto output plausibili. Lavoro che gli esperti possono verificare, approvare e mantenere.',
    },
    projects: {
      index: '08',
      label: 'Progetti reali',
      title: 'Indexable è già al lavoro su sistemi complessi.',
      outcomeLabel: 'Outcome',
      items: [
        {
          client: 'Banca Centrale, Medio Oriente',
          title: 'Specifiche funzionali per un sistema nazionale di Direct Debit',
          body:
            'Indexable ha trasformato documentazione sorgente complessa in conoscenza strutturata di prodotto e ha supportato la creazione semiautomatizzata delle specifiche funzionali, mantenendo ogni requisito collegato alle evidenze da cui derivava.',
          outcome: 'Effort ridotto da 3,5 a 1,5 mesi-persona, con ogni requisito tracciabile alla fonte.',
          metric: '−57%',
        },
        {
          client: 'Banca Centrale, Africa',
          title: 'La base di conoscenza di una piattaforma Anti-Money Laundering',
          body:
            'Requisiti, integrazioni, regole e comportamento del sistema sono stati organizzati in una base revisionabile e tracciabile.',
          outcome:
            'Conoscenza regolatoria e tecnica complessa resa esplicita e mantenibile durante l’evoluzione della piattaforma.',
        },
        {
          client: 'Sistemi di difesa',
          title: 'Documentazione tecnica e manuali assistiti dall’AI',
          body:
            'Indexable supporta la creazione e la manutenzione di documentazione tecnica per sistemi complessi, mantenendo gli esperti responsabili della revisione.',
          outcome: 'L’AI accelera la produzione. Le persone mantengono il controllo.',
        },
      ],
    },
    techDelivery: {
      index: '09',
      label: 'Technology & Delivery',
      title: 'Usa Indexable con il tuo team. Oppure affidaci il risultato.',
      intro: [
        'Questo è ciò che abbiamo già fatto. Ora puoi usare lo stesso prodotto con il tuo team, oppure affidarci il risultato.',
        'Quando servono anche capacità progettuale e competenze specialistiche, Deep4IT utilizza la stessa tecnologia per realizzare software, analisi, specifiche e documentazione complessa.',
      ],
      cards: [
        {
          title: 'Indexable per il tuo team',
          body:
            'Tecnologia, integrazioni e processi per costruire e mantenere la vostra base di conoscenza di prodotto, servizio e progetto.',
        },
        {
          title: 'Delivery by Deep4IT',
          body:
            'Un team specializzato che utilizza Indexable per produrre e mantenere deliverable completi, tracciabili e revisionabili.',
        },
      ],
      bold: 'Puoi adottare la tecnologia, coinvolgere il nostro team oppure combinare entrambi.',
      cta: { label: 'Parliamo del tuo caso d’uso', href: '#deep4it' },
    },
    industries: {
      index: '10',
      label: 'Settori',
      title: 'Costruito per prodotti, servizi e sistemi complessi.',
      intro:
        'Indexable è progettato per organizzazioni in cui la conoscenza di prodotto è vasta, frammentata e difficile da mantenere, e dove le informazioni mancanti hanno conseguenze reali.',
      items: [
        {
          name: 'Servizi Finanziari',
          tag: 'FS',
          body: 'Pagamenti, banking, infrastrutture finanziarie, compliance e documentazione di prodotti regolamentati.',
        },
        {
          name: 'Difesa & Sistemi Complessi',
          tag: 'DEF',
          body: 'Grandi corpus di documentazione tecnica, specifiche, procedure operative, test e manuali.',
        },
        {
          name: 'Enterprise IT',
          tag: 'EIT',
          body:
            'Conoscenza di prodotto e di progetto distribuita tra requisiti di business, specifiche tecniche, repository e documentazione operativa.',
        },
      ],
    },
    recognition: {
      index: '11',
      label: 'Riconoscimenti',
      title: 'Riconosciuti per l’innovazione',
      body:
        'Deep4IT e la tecnologia alla base di Indexable sono state selezionate e riconosciute da programmi italiani dedicati all’innovazione.',
      logos: recognitionLogos,
    },
    about: {
      label: 'Deep4IT',
      statement: ['Il prossimo membro del tuo team', 'non dovrebbe ripartire da zero.'],
      paragraphs: [
        'Che sia una nuova persona o un agente AI, deve poter comprendere che cosa l’azienda sa, quale informazione è valida e da dove deriva.',
        'Indexable riporta la conoscenza di prodotto e servizio dentro l’organizzazione e la trasforma in un asset che rimane, evolve e continua a produrre valore.',
      ],
      emphasis: 'Un’azienda che non trattiene ciò che sa non può essere pronta per l’AI.',
      cta: { label: 'Richiedi una demo di Indexable', href: 'mailto:info@deep4it.com?subject=Demo%20Indexable' },
      tagline: 'Product & service knowledge, made agent-ready.',
      wordmark: 'DEEP4',
      contacts: {
        label: 'Contatti',
        lines: ['Via Italia, 44', '20900 Monza, Italia'],
        email: 'info@deep4it.com',
        legal:
          '© 2026 Deep4IT srl. Tutti i diritti riservati.  |  Capitale sociale: € 70.000,00  |  P.IVA: 13477300969',
      },
    },
  },
  en: {
    nav: [
      { label: 'Problem', href: '#problema' },
      { label: 'Indexable', href: '#indexable' },
      { label: 'Operations', href: '#operazioni' },
      { label: 'Projects', href: '#progetti' },
      { label: 'Deep4IT', href: '#deep4it' },
    ],
    navCta: 'Get in touch',
    hero: {
      kicker: 'Product & Service Knowledge Infrastructure',
      titleLines: ['An AI agent is your', 'next new hire'],
      sub: 'Before trusting it with software, analyses, specifications or manuals, you have to onboard it on the knowledge of your products and services, just as you would a new person. Indexable consolidates scattered information and documents into controlled, verifiable knowledge, ready for people and AI agents.',
      subEmphasis: 'People change. The knowledge must remain.',
      ctaPrimary: { label: 'See how it works', href: '#indexable' },
      ctaSecondary: { label: 'Let’s talk about your use case', href: '#deep4it' },
      scrollHint: 'Scroll',
    },
    problem: {
      index: '01',
      label: 'The problem',
      title: 'If long shadowing is needed, the knowledge is not in the company yet.',
      intro: 'A new person receives documents, access to systems and directions on where to look.',
      listLabel: 'But to really work, they need to understand',
      items: [
        'Which information is valid and which superseded',
        'What is missing and was never written down',
        'Why certain decisions were made',
        'Which exceptions apply in real cases',
        'Which dependencies are most critical',
        'What is impacted when something changes',
      ],
      statement:
        'When the most experienced people change role, leave the company or retire, part of the knowledge disappears with them.',
      bold: 'The documents remain. The understanding of the product walks away.',
      close: 'If knowledge leaves the company together with people, it is not yet a real company asset.',
    },
    aiReadiness: {
      index: '03',
      label: 'AI readiness',
      title: 'Your AI inherits the same onboarding problem.',
      paragraphs: [
        'Models and agents are increasingly capable of producing complex work. But they can only work on the knowledge they are given.',
        'If documents and systems are not enough to make a new person autonomous, they cannot be enough to make an AI agent reliable.',
      ],
      staccato: [
        'A specification can miss a requirement.',
        'An analysis can ignore a dependency.',
        'A manual can apply a superseded rule.',
        'The software can be almost right, and still require a full review.',
      ],
      bold: 'If you have to redo it by hand to trust it, you have not automated it.',
      stats: [
        {
          value: '41%',
          text: 'of GenAI prototypes reach production',
          source: { label: 'Gartner, 2024', href: 'https://www.gartner.com/en/documents/6587902' },
        },
        {
          value: '46%',
          text: 'of developers distrust the accuracy of AI output',
          source: { label: 'Stack Overflow, 2025', href: 'https://survey.stackoverflow.co/2025/ai' },
        },
        {
          value: '66%',
          text: 'name “almost right” AI solutions as their top frustration',
          source: { label: 'Stack Overflow, 2025', href: 'https://survey.stackoverflow.co/2025/ai' },
        },
      ],
      hedge:
        'There are many reasons prototypes never reach production. One of the most structural is the quality of the knowledge the system is given.',
    },
    dataKnowledge: {
      index: '02',
      label: 'The data',
      title: 'The knowledge is not all in the data.',
      intro:
        'Documents, tickets, repositories, specifications and manuals tell different parts of the same product or service. The written information, though, is:',
      defects: [
        'spread across different systems',
        'expressed in different terminologies',
        'mixed between valid and superseded versions',
        'sometimes in conflict',
        'detached from the context of decisions',
      ],
      expertPara:
        'And a critical part of the knowledge was never written down: exceptions, rationales and rules of the trade live in the experts’ heads, and have to be drawn out.',
      ragPara:
        'A search can find relevant documents. A RAG system can pass them to a model. But relevant does not mean complete, consistent or up to date: the data and documents exist, they are just not yet consolidated into univocal, current, verifiable knowledge.',
      bold: 'A better model cannot retrieve knowledge the company has never consolidated.',
    },
    indexable: {
      index: '04',
      label: 'Indexable',
      title: 'Bring the knowledge back into the organisation.',
      lead: [
        'Indexable turns fragmented information, documents and expert know-how into ready-to-use product, service and project knowledge.',
        'It makes rules, decisions, dependencies and exceptions explicit. It keeps every element linked to its sources and lets experts verify what is valid, what is in conflict and what is missing.',
        'The result is a durable company asset, less dependent on single individuals and reusable across different teams and agents.',
      ],
      diagram: {
        sources: 'Documents · Specifications · Tickets · Repositories · Manuals · Experts',
        name: 'Indexable',
        ops: 'organise · reconcile · complete · trace · review',
        output: 'Controlled product & service knowledge',
        branches: [
          { title: 'People', items: ['Faster onboarding', 'Less shadowing', 'Knowledge that stays'] },
          { title: 'AI agents', items: ['More complete context', 'Higher accuracy', 'More reliable deliverables'] },
        ],
      },
      stack: [
        { title: 'Business · IT · Operations' },
        { title: 'Your AI & agent stack', sub: 'Frameworks & orchestrators • Custom agents • Copilots • Models' },
        { title: 'Indexable', sub: 'Agent-ready product & service knowledge', highlight: true },
        { title: 'Your sources', sub: 'Documents • Systems • Domain experts' },
      ],
      sideTitle: 'Keep your AI stack. Improve the knowledge it works on.',
      sideParagraphs: [
        'Indexable does not replace models, copilots or agent frameworks. It builds the knowledge layer that lets different people and AI systems work on the same controlled representation of the product.',
      ],
      sideClaim: 'Models will change. The knowledge of your products and services must remain.',
      proof: {
        label: 'In the field',
        text: 'Functional specifications for a national Direct Debit system: effort from 3.5 to 1.5 person-months (−57%), every requirement traceable to its source.',
        cta: { label: 'See the project', href: '#progetti' },
      },
    },
    operations: {
      index: '05',
      label: 'The operations',
      title: 'Finding information is not enough.',
      paragraphs: [
        'To produce reliable work, people and agents need to know what is valid, what is in conflict, what is missing, which version to use and where each piece of information comes from.',
      ],
      items: [
        {
          title: 'Retrieve',
          question: 'What do we know about this?',
          body: 'Retrieve the relevant knowledge together with the sources, versions and context it derives from.',
        },
        {
          title: 'Detect conflicts',
          question: 'Where do our sources contradict each other?',
          body:
            'Identify incompatible statements across documents, requirements, specifications and versions before they are treated as facts.',
        },
        {
          title: 'Find gaps',
          question: 'What is missing against what was expected?',
          body:
            'Compare the available knowledge with an expected structure, a reference set or a target deliverable. It surfaces missing requirements, incomplete specifications and undocumented exceptions that ordinary search cannot find.',
        },
      ],
      propsLabel: 'Properties of the layer',
      props: [
        'Sources preserved',
        'Versions distinguishable',
        'Decisions traceable',
        'Knowledge reviewable',
        'Expert intervention on critical points',
      ],
    },
    contextStat: {
      index: '06',
      label: 'Context efficiency',
      title: 'More useful knowledge. Less noise for the model.',
      stat: {
        value: '68×',
        title: 'more compact context per query',
        qualifier: 'with no loss of recall on our internal gold-set benchmark',
        body:
          'Indexable retrieves the necessary evidence while limiting the irrelevant information passed to the model. A more precise context reduces noise and lets agents work on a more focused, verifiable representation of the product.',
      },
      cta: { label: 'See how the 68× works', href: '#operazioni' },
    },
    experts: {
      index: '06',
      label: 'The experts',
      title: 'Experts keep creating knowledge. The organisation stops losing it.',
      intro:
        'Indexable does not assume every document is correct, and does not automatically turn every piece of information into product and service knowledge. Domain experts remain responsible for critical decisions. Their contribution, however, becomes cumulative:',
      flow: [
        'Information collected',
        'Knowledge extracted & organised',
        'Conflicts & gaps surfaced',
        'Expert review',
        'Approved knowledge that stays',
        'Reuse by people & agents',
      ],
      statement: [
        'Individual expertise becomes product and service knowledge.',
        'That knowledge becomes usable by people and AI.',
      ],
    },
    completeness: {
      index: '08',
      label: 'Completeness & control',
      title: 'In regulated industries, completeness is part of correctness.',
      lead:
        'An AI output can be factually correct and still be operationally wrong. It may have missed an exception. A dependency. A requirement hidden in another document. A more recent version of the same rule.',
      emphasis: 'For complex, regulated processes, finding a relevant answer is not enough.',
      checkLabel: 'You need to know',
      checks: [
        'Whether the knowledge is complete',
        'Which source it derives from',
        'Which version is valid',
        'Whether conflicting information exists',
        'Which parts have been reviewed',
        'Which assumptions remain to be verified',
      ],
      outro:
        'Indexable keeps knowledge and deliverables linked to their evidence, versions and review process.',
    },
    deliverables: {
      index: '07',
      label: 'The deliverables',
      title: 'Clearer, less ambiguous knowledge produces more reliable work.',
      intro: 'The same knowledge base serves to create and maintain:',
      groups: [
        {
          name: 'Software & AI systems',
          items: ['Software and application components', 'AI agents and workflows'],
        },
        {
          name: 'Analyses & specifications',
          items: ['Product and service specifications', 'Impact analyses', 'Test books'],
        },
        {
          name: 'Documentation & operations',
          items: ['Technical manuals', 'Operating procedures', 'Regulated documentation'],
        },
      ],
      outro: 'Every deliverable stays linked to the knowledge it was generated from.',
      chain: ['Source', 'Knowledge', 'Deliverable'],
      bold: 'Not just plausible output. Work that experts can verify, approve and maintain.',
    },
    projects: {
      index: '08',
      label: 'Real projects',
      title: 'Indexable is already at work on complex systems.',
      outcomeLabel: 'Outcome',
      items: [
        {
          client: 'Middle East Central Bank',
          title: 'Functional specifications for a national Direct Debit system',
          body:
            'Indexable turned complex source documentation into structured product knowledge and supported the semi-automated creation of functional specifications, keeping every requirement linked to its originating evidence.',
          outcome: 'Effort reduced from 3.5 to 1.5 person-months, with every requirement traceable to its source.',
          metric: '−57%',
        },
        {
          client: 'African Central Bank',
          title: 'The knowledge base of an Anti-Money Laundering platform',
          body:
            'Requirements, integrations, rules and system behaviour were organised into a reviewable, traceable base.',
          outcome: 'Complex regulatory and technical knowledge made explicit and maintainable as the platform evolves.',
        },
        {
          client: 'Defence Systems',
          title: 'AI-assisted technical documentation & manuals',
          body:
            'Indexable supports the creation and maintenance of technical documentation for complex systems, keeping experts responsible for review.',
          outcome: 'AI speeds up production. People keep control.',
        },
      ],
    },
    techDelivery: {
      index: '09',
      label: 'Technology & Delivery',
      title: 'Use Indexable with your team. Or entrust us with the result.',
      intro: [
        'This is what we have already done. Now you can use the same product with your team, or entrust us with the result.',
        'When project capacity and specialist skills are also needed, Deep4IT uses the same technology to deliver software, analyses, specifications and complex documentation.',
      ],
      cards: [
        {
          title: 'Indexable for your team',
          body:
            'Technology, integrations and processes to build and maintain your own base of product, service and project knowledge.',
        },
        {
          title: 'Delivery by Deep4IT',
          body:
            'A specialised team that uses Indexable to produce and maintain complete, traceable, reviewable deliverables.',
        },
      ],
      bold: 'Adopt the technology, engage our team, or combine both.',
      cta: { label: 'Let’s talk about your use case', href: '#deep4it' },
    },
    industries: {
      index: '10',
      label: 'Industries',
      title: 'Built for complex products, services and systems.',
      intro:
        'Indexable is designed for organisations where product knowledge is large, fragmented and difficult to maintain, and where missing information has real consequences.',
      items: [
        {
          name: 'Financial Services',
          tag: 'FS',
          body: 'Payments, banking, financial infrastructure, compliance and regulated product documentation.',
        },
        {
          name: 'Defence & Complex Systems',
          tag: 'DEF',
          body: 'Large technical documentation sets, specifications, operating procedures, tests and manuals.',
        },
        {
          name: 'Enterprise IT',
          tag: 'EIT',
          body:
            'Product and project knowledge spread across business requirements, technical specifications, repositories and operational documentation.',
        },
      ],
    },
    recognition: {
      index: '11',
      label: 'Recognition',
      title: 'Recognised for innovation',
      body:
        'Deep4IT and the technology behind Indexable have been selected and recognised by leading Italian innovation programmes.',
      logos: recognitionLogos,
    },
    about: {
      label: 'Deep4IT',
      statement: ['The next member of your team', 'should not start from zero.'],
      paragraphs: [
        'Whether it is a new person or an AI agent, it must be able to understand what the company knows, which information is valid and where it comes from.',
        'Indexable brings product and service knowledge back into the organisation, turning it into an asset that stays, evolves and keeps producing value.',
      ],
      emphasis: 'A company that does not retain what it knows cannot be ready for AI.',
      cta: { label: 'Request an Indexable demo', href: 'mailto:info@deep4it.com?subject=Indexable%20Demo' },
      tagline: 'Product & service knowledge, made agent-ready.',
      wordmark: 'DEEP4',
      contacts: {
        label: 'Contact',
        lines: ['Via Italia, 44', '20900 Monza, Italy'],
        email: 'info@deep4it.com',
        legal:
          '© 2026 Deep4IT srl. All rights reserved.  |  Share capital: € 70,000.00  |  VAT: 13477300969',
      },
    },
  },
};
