export type Lang = 'it' | 'en';

export interface WorkflowItem {
  id: string;
  title: string;
  lead: string;
  body: string;
  outro?: string;
}

export interface Content {
  nav: { label: string; href: string }[];
  navCta: string;
  hero: {
    kicker: string;
    titleLines: string[];
    sub: string;
    subEmphasis: string;
    sectorsLine: string;
    scrollHint: string;
    meta: string[];
  };
  knowledge: {
    index: string;
    label: string;
    title: string;
    paragraphs: string[];
    indexable: {
      name: string;
      claim: string;
      intro: string;
      listLabel: string;
      bullets: string[];
      outro: string;
    };
    indexing: {
      label: string;
      term: string;
      lead: string;
      flow: string[];
      indexes: string[];
      clarify: string;
      benefitsLabel: string;
      benefits: string[];
      tagline: string;
    };
  };
  work: {
    index: string;
    label: string;
    title: string;
    paragraphs: string[];
    items: WorkflowItem[];
  };
  critical: {
    index: string;
    label: string;
    title: string;
    paragraphs: string[];
    formulaLabel: string;
    formula: string[];
  };
  sectors: {
    index: string;
    label: string;
    title: string;
    items: { name: string; tag: string; paragraphs: string[] }[];
  };
  about: {
    label: string;
    paragraphs: string[];
    statement: string[];
    sectorsLine: string;
    wordmark: string;
    contacts: {
      label: string;
      lines: string[];
      email: string;
      legal: string;
    };
  };
}

export const content: Record<Lang, Content> = {
  it: {
    nav: [
      { label: 'Conoscenza', href: '#conoscenza' },
      { label: 'Processi', href: '#processi' },
      { label: 'Metodo', href: '#metodo' },
      { label: 'Settori', href: '#settori' },
      { label: 'Deep4it', href: '#deep4it' },
    ],
    navCta: 'Contattaci',
    hero: {
      kicker: 'AI Lab — Conoscenza agent-ready',
      titleLines: [
        'Trasformiamo informazioni',
        'e documenti aziendali sparsi',
        'in conoscenza su cui l\u2019AI',
        'pu\u00f2 lavorare nei processi critici',
      ],
      sub: 'Costruiamo basi di conoscenza strutturate e pronte per l\u2019AI. Su queste automatizziamo processi di analisi, progettazione, documentazione, test e sviluppo software,',
      subEmphasis: 'mantenendo la revisione esperta dove serve.',
      sectorsLine:
        'Lavoriamo in settori altamente regolamentati come Servizi Finanziari e Aerospazio & Difesa, dove affidabilit\u00e0 e controllo sono requisiti essenziali.',
      scrollHint: 'Scorri',
      meta: ['Servizi Finanziari', 'Aerospazio & Difesa', 'Agent-Ready Company Knowledge'],
    },
    knowledge: {
      index: '01',
      label: 'La base',
      title: 'Prima costruiamo una base di conoscenza pronta per l\u2019AI',
      paragraphs: [
        'Le informazioni necessarie per comprendere un prodotto o un sistema sono spesso disperse tra normative, documenti commerciali, requisiti, specifiche, procedure, manuali e documentazione tecnica.',
        'Per un esperto, queste fonti nel tempo diventano conoscenza del prodotto. Per un agente AI restano documenti separati, duplicati, correlati e talvolta incoerenti.',
        'Prima di affidare all\u2019AI attivit\u00e0 complesse, queste informazioni devono diventare una base di conoscenza coerente, strutturata e revisionabile.',
      ],
      indexable: {
        name: 'Indexable',
        claim: 'Il layer di conoscenza alla base dei nostri processi AI',
        intro:
          'Indexable trasforma informazioni e documenti aziendali sparsi in una base di conoscenza strutturata e revisionabile dagli esperti, utilizzabile sia dalle persone sia dagli agenti AI.',
        listLabel: 'Indexable permette di',
        bullets: [
          'integrare informazioni provenienti da fonti e formati differenti',
          'organizzare e collegare le informazioni che descrivono prodotti e sistemi',
          'consolidare informazioni duplicate o correlate',
          'mantenere il collegamento con le fonti originali',
          'permettere agli esperti di revisionare la knowledge base',
          'rendere la conoscenza disponibile agli agenti AI per attivit\u00e0 specifiche',
        ],
        outro:
          'La knowledge base diventa un asset aziendale riutilizzabile: una rappresentazione condivisa della conoscenza di prodotto o di sistema che pu\u00f2 alimentare pi\u00f9 applicazioni, agenti e processi AI.',
      },
      indexing: {
        label: 'Come funziona',
        term: 'Knowledge Indexing',
        lead:
          'Indexable non si limita a dividere i documenti e cercare i passaggi pi\u00f9 simili. Costruisce pi\u00f9 indici complementari della conoscenza, collegati alle fonti, che permettono all\u2019AI di trovare e ricostruire il contesto rilevante per ogni attivit\u00e0.',
        flow: ['Documenti', 'Knowledge Indexes', 'Contesto rilevante', 'AI'],
        indexes: ['Concetti', 'Soggetti', 'Relazioni', 'Struttura'],
        clarify:
          'Gli indici sono viste complementari sullo stesso materiale sorgente: non uno schema rigido, non un modello unico.',
        benefitsLabel: 'I vantaggi',
        benefits: [
          'Meno contesto irrilevante',
          'Migliore copertura delle informazioni',
          'Tracciabilit\u00e0 delle fonti',
          'Risultati pi\u00f9 ripetibili',
        ],
        tagline: 'Indexable rende la conoscenza aziendale indicizzabile e navigabile dall\u2019AI.',
      },
    },
    work: {
      index: '02',
      label: 'I processi',
      title: 'Su questa base automatizziamo il lavoro specialistico',
      paragraphs: [
        'Su questa knowledge base costruiamo processi in cui agenti AI svolgono attivit\u00e0 oggi affidate ad analisti, ingegneri, sviluppatori ed esperti di dominio.',
        'Alcune attivit\u00e0 possono essere automatizzate completamente; altre prevedono una revisione umana. In entrambi i casi l\u2019obiettivo \u00e8 aumentare la capacit\u00e0 dei team specialistici mantenendo il controllo sui passaggi critici.',
      ],
      items: [
        {
          id: 'impact',
          title: 'Impact & Change Analysis',
          lead:
            'Analizziamo cambiamenti normativi, di business o tecnici per determinarne l\u2019impatto su prodotti e sistemi.',
          body:
            'Identifichiamo le componenti coinvolte, le logiche e le regole da modificare, i processi impattati, le dipendenze e gli artefatti da aggiornare. Produciamo una stima del perimetro, della complessit\u00e0 e dell\u2019impatto del cambiamento.',
          outro: 'Quando richiesto, confrontiamo inoltre la soluzione risultante con standard e soluzioni di mercato.',
        },
        {
          id: 'requirements',
          title: 'Requirements & Specifications',
          lead:
            'Trasformiamo esigenze di business, vincoli normativi e input tecnici in requisiti e specifiche strutturate.',
          body:
            'Produciamo e aggiorniamo requisiti di business, funzionali e tecnici, oltre a specifiche di prodotto e di sistema, secondo i principi dello standard ISO/IEC/IEEE 29148:2018, mantenendo coerenza tra i diversi livelli di requisito e gli input da cui derivano.',
        },
        {
          id: 'design',
          title: 'Analysis & Design',
          lead:
            'Trasformiamo requisiti e vincoli in una progettazione sufficientemente dettagliata da guidare le fasi successive di sviluppo.',
          body:
            'Per il software utilizziamo l\u2019Attribute-Driven Design (ADD) del SEI, progettando l\u2019architettura a partire dai requisiti architetturalmente significativi, inclusi requisiti funzionali, attributi di qualit\u00e0 e vincoli.',
          outro:
            'Produciamo analisi funzionali e tecniche, architetture, componenti, interfacce e decisioni progettuali che diventano input strutturati per lo sviluppo.',
        },
        {
          id: 'development',
          title: 'Software Development',
          lead: 'Lo sviluppo parte dal design, non da un prompt.',
          body:
            'Utilizziamo strumenti e agenti custom che prendono in ingresso il lavoro di progettazione di dettaglio svolto nelle fasi precedenti: requisiti, analisi, architettura, componenti, interfacce, vincoli e standard tecnologici.',
          outro:
            'Su questa base automatizziamo implementazione, modifica e verifica del software, mantenendo la revisione esperta dove necessaria e la continuit\u00e0 tra requirements \u2192 design \u2192 code \u2192 test.',
        },
        {
          id: 'testing',
          title: 'Testing',
          lead:
            'Generiamo e aggiorniamo test book, test case, scenari end-to-end, regression test e criteri di accettazione a partire da requisiti, specifiche e cambiamenti introdotti.',
          body: '',
        },
        {
          id: 'documentation',
          title: 'Technical Documentation & Manuals',
          lead:
            'Generiamo e aggiorniamo manuali tecnici e operativi, documentazione di prodotto e documentazione di manutenzione a partire dalla conoscenza del sistema, con revisione e approvazione degli esperti nei passaggi richiesti.',
          body: '',
        },
      ],
    },
    critical: {
      index: '03',
      label: 'Metodo',
      title: 'AI per processi dove l\u2019errore conta',
      paragraphs: [
        'L\u2019AI \u00e8 pi\u00f9 semplice da introdurre nelle attivit\u00e0 in cui un errore pu\u00f2 essere individuato e corretto facilmente.',
        'Deep4it la porta anche nei processi specialistici e critici, dove affidabilit\u00e0 e controllo sono requisiti del processo.',
      ],
      formulaLabel: 'Per questo combiniamo',
      formula: ['Knowledge base strutturate', 'Agenti AI', 'Processi controllati', 'Revisione degli esperti'],
    },
    sectors: {
      index: '04',
      label: 'Settori',
      title: 'I settori in cui lavoriamo',
      items: [
        {
          name: 'Servizi Finanziari',
          tag: 'FS',
          paragraphs: [
            'Lavoriamo su prodotti finanziari, sistemi di pagamento e piattaforme regolamentate, applicando l\u2019AI a processi di impact analysis, requirements engineering, analisi funzionale e tecnica, sviluppo software, testing e documentazione.',
          ],
        },
        {
          name: 'Aerospazio & Difesa',
          tag: 'A&D',
          paragraphs: [
            'Lavoriamo su sistemi complessi come radar e sistemi di difesa, utilizzando l\u2019AI per produrre e aggiornare analisi, specifiche, software, test e manualistica tecnica.',
          ],
        },
      ],
    },
    about: {
      label: 'Chi siamo',
      paragraphs: [],
      statement: [
        'Trasformiamo informazioni sparse in basi di conoscenza pronte per l\u2019AI.',
        'Su queste basi costruiamo processi che automatizzano attivit\u00e0 e aumentano la capacit\u00e0 dei team specialistici.',
      ],
      sectorsLine: 'Lavoriamo nei Servizi Finanziari e nell\u2019Aerospazio & Difesa.',
      wordmark: 'DEEP4',
      contacts: {
        label: 'Contatti',
        lines: ['Via Italia, 44', '20900 Monza, Italia'],
        email: 'info@deep4it.com',
        legal:
          '\u00a9 2026 Deep4It srl. Tutti i diritti riservati.  |  Capitale sociale: \u20ac 70.000,00  |  P.IVA: 13477300969',
      },
    },
  },
  en: {
    nav: [
      { label: 'Knowledge', href: '#conoscenza' },
      { label: 'Processes', href: '#processi' },
      { label: 'Method', href: '#metodo' },
      { label: 'Industries', href: '#settori' },
      { label: 'Deep4it', href: '#deep4it' },
    ],
    navCta: 'Get in touch',
    hero: {
      kicker: 'AI Lab — Agent-ready knowledge',
      titleLines: [
        'We transform scattered',
        'enterprise information and documents',
        'into knowledge AI can work on',
        'in critical processes',
      ],
      sub: 'We build structured, AI-ready knowledge bases. On top of them we automate analysis, design, documentation, testing and software development processes,',
      subEmphasis: 'keeping expert review where it matters.',
      sectorsLine:
        'We work in highly regulated industries such as Financial Services and Aerospace & Defense, where reliability and control are essential requirements.',
      scrollHint: 'Scroll',
      meta: ['Financial Services', 'Aerospace & Defense', 'Agent-Ready Company Knowledge'],
    },
    knowledge: {
      index: '01',
      label: 'The foundation',
      title: 'First, we build an AI-ready knowledge base',
      paragraphs: [
        'The information needed to understand a product or system is often scattered across regulations, commercial documents, requirements, specifications, procedures, manuals and technical documentation.',
        'For an expert, over time, these sources become knowledge of the product. For an AI agent they remain separate documents \u2014 duplicated, correlated and sometimes incoherent.',
        'Before entrusting AI with complex activities, this information must become a coherent, structured and reviewable knowledge base.',
      ],
      indexable: {
        name: 'Indexable',
        claim: 'The knowledge layer at the foundation of our AI processes',
        intro:
          'Indexable transforms scattered enterprise information and documents into a structured knowledge base that experts can review, usable by both people and AI agents.',
        listLabel: 'Indexable allows you to',
        bullets: [
          'integrate information from different sources and formats',
          'organize and link the information describing products and systems',
          'consolidate duplicated or related information',
          'maintain the link with the original sources',
          'let experts review the knowledge base',
          'make knowledge available to AI agents for specific tasks',
        ],
        outro:
          'The knowledge base becomes a reusable enterprise asset: a shared representation of product or system knowledge that can feed multiple AI applications, agents and processes.',
      },
      indexing: {
        label: 'How it works',
        term: 'Knowledge Indexing',
        lead:
          'Indexable does not simply split documents and search for the most similar passages. It builds multiple complementary indexes of the knowledge, linked to the sources, that allow AI to find and reconstruct the relevant context for every activity.',
        flow: ['Documents', 'Knowledge Indexes', 'Relevant context', 'AI'],
        indexes: ['Concepts', 'Subjects', 'Relations', 'Structure'],
        clarify:
          'The indexes are complementary views over the same source material: not a rigid schema, not a single fixed model.',
        benefitsLabel: 'The benefits',
        benefits: [
          'Less irrelevant context',
          'Better information coverage',
          'Source traceability',
          'More repeatable results',
        ],
        tagline: 'Indexable makes enterprise knowledge indexable and navigable by AI.',
      },
    },
    work: {
      index: '02',
      label: 'The processes',
      title: 'On this foundation we automate specialist work',
      paragraphs: [
        'On this knowledge base we build processes in which AI agents carry out activities currently performed by analysts, engineers, developers and domain experts.',
        'Some activities can be fully automated; others include human review. In both cases the goal is to increase the capacity of specialist teams while keeping control over the critical steps.',
      ],
      items: [
        {
          id: 'impact',
          title: 'Impact & Change Analysis',
          lead:
            'We analyze regulatory, business or technical changes to determine their impact on products and systems.',
          body:
            'We identify the components involved, the logic and rules to modify, the impacted processes, the dependencies and the artifacts to update. We produce an estimate of the change\u2019s scope, complexity and impact.',
          outro: 'When required, we also benchmark the resulting solution against market standards and solutions.',
        },
        {
          id: 'requirements',
          title: 'Requirements & Specifications',
          lead:
            'We turn business needs, regulatory constraints and technical inputs into structured requirements and specifications.',
          body:
            'We produce and update business, functional and technical requirements, as well as product and system specifications, according to the principles of the ISO/IEC/IEEE 29148:2018 standard, maintaining coherence between the different requirement levels and the inputs they derive from.',
        },
        {
          id: 'design',
          title: 'Analysis & Design',
          lead:
            'We turn requirements and constraints into a design detailed enough to guide the following development phases.',
          body:
            'For software we use SEI\u2019s Attribute-Driven Design (ADD), designing the architecture from architecturally significant requirements, including functional requirements, quality attributes and constraints.',
          outro:
            'We produce functional and technical analyses, architectures, components, interfaces and design decisions that become structured input for development.',
        },
        {
          id: 'development',
          title: 'Software Development',
          lead: 'Development starts from the design, not from a prompt.',
          body:
            'We use custom tools and agents that take as input the detailed design work carried out in the previous phases: requirements, analysis, architecture, components, interfaces, constraints and technology standards.',
          outro:
            'On this foundation we automate software implementation, modification and verification, keeping expert review where needed and continuity across requirements \u2192 design \u2192 code \u2192 test.',
        },
        {
          id: 'testing',
          title: 'Testing',
          lead:
            'We generate and update test books, test cases, end-to-end scenarios, regression tests and acceptance criteria from requirements, specifications and introduced changes.',
          body: '',
        },
        {
          id: 'documentation',
          title: 'Technical Documentation & Manuals',
          lead:
            'We generate and update technical and operational manuals, product documentation and maintenance documentation from system knowledge, with expert review and approval at the required steps.',
          body: '',
        },
      ],
    },
    critical: {
      index: '03',
      label: 'Method',
      title: 'AI for processes where errors matter',
      paragraphs: [
        'AI is easier to introduce in activities where an error can be easily spotted and corrected.',
        'Deep4it brings it into specialist, critical processes as well, where reliability and control are requirements of the process itself.',
      ],
      formulaLabel: 'That is why we combine',
      formula: ['Structured knowledge bases', 'AI agents', 'Controlled processes', 'Expert review'],
    },
    sectors: {
      index: '04',
      label: 'Industries',
      title: 'The industries we work in',
      items: [
        {
          name: 'Financial Services',
          tag: 'FS',
          paragraphs: [
            'We work on financial products, payment systems and regulated platforms, applying AI to impact analysis, requirements engineering, functional and technical analysis, software development, testing and documentation.',
          ],
        },
        {
          name: 'Aerospace & Defense',
          tag: 'A&D',
          paragraphs: [
            'We work on complex systems such as radar and defense systems, using AI to produce and update analyses, specifications, software, tests and technical manuals.',
          ],
        },
      ],
    },
    about: {
      label: 'About us',
      paragraphs: [],
      statement: [
        'We turn scattered information into AI-ready knowledge bases.',
        'On these foundations we build processes that automate activities and increase the capacity of specialist teams.',
      ],
      sectorsLine: 'We work in Financial Services and Aerospace & Defense.',
      wordmark: 'DEEP4',
      contacts: {
        label: 'Contact',
        lines: ['Via Italia, 44', '20900 Monza, Italy'],
        email: 'info@deep4it.com',
        legal:
          '\u00a9 2026 Deep4It srl. Tutti i diritti riservati.  |  Capitale sociale: \u20ac 70.000,00  |  P.IVA: 13477300969',
      },
    },
  },
};
