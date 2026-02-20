import { DettagliServizio } from "../modelli/interface";

export const DettagliServizioData: DettagliServizio[] = [
  {
    id: '1',
    title: 'ESWT - onde d\'urto focale ecoguidata',
    image: 'assets/img/servizi/eswt.jpg',
    description: 'È una terapia non invasiva ed efficace per il trattamento del dolore muscolo-scheletrico.',
    utils: [
      { icon: 'assets/img/icon/check.png', text: 'Lesioni e processi degenerativi dei tendini della cuffia dei rotatori' },
      { icon: 'assets/img/icon/check.png', text: 'Tendinopatia calcifica (es. calcificazione del sovraspinato)' },
      { icon: 'assets/img/icon/check.png', text: 'Processi fibrotici' },
      { icon: 'assets/img/icon/check.png', text: 'Tendinopatie croniche' },
      { icon: 'assets/img/icon/check.png', text: 'Processi artrosici' },
    ],
    p: 'Il trattamento con Onde d’Urto viene sempre preceduto da una valutazione specialistica e devono essere eseguite sempre sotto controllo ecografico, per garantire precisione, sicurezza ed efficacia del trattamento.'
  },
  {
    id: '2',
    title: 'EMT - ElettroMagnetic Transduction Therapy',
    image: 'assets/img/servizi/eswt.jpg',
    description: 'È una terapia non invasiva che utilizza campi elettromagnetici ad alta intensità (\(>80\) mT) e frequenza (\(100-300\) kHz) per trattare dolori muscoloscheletrici, infiammazioni e patologie ossee.',
    utils: [
      { icon: 'assets/img/icon/check.png', text: 'Al trattamento di dolori alla schiena, lombalgie, radicolopatie e contratture muscolari.' },
      { icon: 'assets/img/icon/check.png', text: 'Indicata per artrosi, spondiloartrosi ed ernia del disco.' },
      { icon: 'assets/img/icon/check.png', text: 'Utilizzata per infiammazioni croniche tendinee e articolari, sindromi da sovraccarico e osteite pubica.' },
      { icon: 'assets/img/icon/check.png', text: 'Migliora la circolazione, accelerando i processi di guarigione. ' },
    ],
    p: 'È spesso utilizzata in combinazione con la terapia ad onde durto (ESWT) per potenziarne gli effetti. '
  },
  {
    id: '3',
    title: 'LASER YAG ad alta potenza - 5 Chronic Sport',
    image: 'assets/img/servizi/laser.jpg',
    description: 'È una terapia fisica d’avanguardia che, con potenze elevate (spesso >10-25W), penetra in profondità (4-7 cm) nei tessuti, garantendo un rapido effetto antinfiammatorio, antiedemigeno e antalgico.',
    utils: [
      { icon: 'assets/img/icon/check.png', text: 'Distorsioni (es. caviglia), stiramenti e strappi muscolari, contratture.' },
      { icon: 'assets/img/icon/check.png', text: 'Epicondilite (gomito del tennista), epitrocleite, tendiniti della cuffia dei rotatori, fascite plantare.' },
      { icon: 'assets/img/icon/check.png', text: 'Gonartrosi (ginocchio), artrosi dellanca e della spalla, lombalgie e sciatalgie.' },
      { icon: 'assets/img/icon/check.png', text: 'Favorisce il drenaggio linfatico e la riattivazione del microcircolo.' },
    ],
    p: 'Utilizzato spesso in combinazione con percorsi di riabilitazione, il laser YAG accelera i tempi di recupero post-traumatico o post-operatorio. '
  },
  {
    id: '4',
    title: 'WINBACK THERAPY',
    image: 'assets/img/servizi/winback.jpg',
    description: 'È un sistema di riabilitazione all’avanguardia che combina l’energia ad alta frequenza (Tecar) con la terapia manuale per accelerare la guarigione, ridurre il dolore cronico e acuto e migliorare la mobilità dei tessuti. ',
    utils: [
      { icon: 'assets/img/icon/check.png', text: 'Trattamento di tendiniti, borsiti, distorsioni, contratture, stiramenti, lesioni muscolari e traumi ossei.' },
      { icon: 'assets/img/icon/check.png', text: 'Efficace contro lombalgie, cervicalgie, emicranie e dolori articolari cronici o acuti.' },
      { icon: 'assets/img/icon/check.png', text: 'Velocizza il recupero post-traumatico e chirurgico.' },
      { icon: 'assets/img/icon/check.png', text: 'Trattamento di dolori pelvici, disturbi urinari e recupero post-parto.' },
      { icon: 'assets/img/icon/check.png', text: 'Potenzia le tecniche manuali, accelera il recupero e aiuta nel rinforzo muscolare. ' },
    ],
    p: 'Il trattamento Winback utilizza modalità capacitive e resistive per agire in modo mirato su muscoli, tendini e ossa.'
  },
  {
    id: '5',
    title: 'Neuromodulazione Percutanea Ecoguidata',
    image: 'assets/img/servizi/neuromodulazione.jpg',
    description: 'È una terapia invasiva mini-invasiva che utilizza aghi sottili, guidati dall\'ecografo, per applicare correnti elettriche a bassa/media frequenza su nervi periferici o muscoli. ',
    utils: [
      { icon: 'assets/img/icon/check.png', text: 'Lombalgie, sciatalgie, cervicalgie, nevralgie (es. di Arnold, trigemino) e dolori post-operatori.' },
      { icon: 'assets/img/icon/check.png', text: 'Lesioni muscolari (distrazioni/elongazioni), contratture croniche e disfunzioni miofasciali.' },
      { icon: 'assets/img/icon/check.png', text: 'Sindromi come il tunnel carpale, sindrome del piriforme o del nervo pudendo.' },
      { icon: 'assets/img/icon/check.png', text: 'Tendinopatie  inserzionali o croniche' },
    ],
    p: 'La tecnica è ben tollerata e si inserisce in un percorso riabilitativo, spesso associata ad esercizi terapeutici per risultati duraturi. '
  },
  {
    id: '6',
    title: 'EPI® - Elettrolisi',
    image: 'assets/img/servizi/epi.jpg',
    description: 'È una terapia mininvasiva, ecoguidata, utilizzata per curare tendinopatie e lesioni muscolari croniche. Attraverso un ago da agopuntura, viene applicata una corrente galvanica che provoca una reazione chimica, stimolando la rigenerazione del tessuto degenerato e riducendo il dolore. ',
    utils: [
      { icon: 'assets/img/icon/check.png', text: 'Efficace su tendiniti e tendinosi come quella achillea, del rotuleo (ginocchio), epicondilite (gomito del tennista), epitrocleite, e tendinopatie della spalla (sovraspinoso).' },
      { icon: 'assets/img/icon/check.png', text: 'Velocizza la guarigione di strappi muscolari, lesioni legamentose e fasciti plantari.' },
      { icon: 'assets/img/icon/check.png', text: 'Produce un effetto analgesico immediato e stimola la produzione di nuove cellule per riparare il tessuto degenerato.' },
      { icon: 'assets/img/icon/check.png', text: 'Indicata anche per cicatrici e alcune neuropatie, come la sindrome del tunnel carpale. ' },
    ],
    p: 'È una procedura medica che deve essere eseguita da personale qualificato sotto guida ecografica per garantirne la massima efficacia. '
  },
  {
    id: '7',
    title: 'Terapia infiltrativa ecoguidata',
    image: 'assets/img/servizi/terapia-infiltrativa.jpg',
    description: 'È una terapia  mini-invasiva che inietta farmaci (corticosteroidi, acido ialuronico, PRP, anestetici) in articolazioni, tendini o guaine, utilizzando l\'ecografia in tempo reale per garantire massima precisione, sicurezza e sollievo dal dolore, evitando danni a strutture adiacenti come nervi e vasi. ',
    utils: [
      { icon: 'assets/img/icon/check.png', text: 'Efficace per la gonartrosi (ginocchio), coxartrosi (anca) e artrosi della spalla' },
      { icon: 'assets/img/icon/check.png', text: 'Indicata per infiammazioni dei tendini (es. cuffia dei rotatori, tendine d\'Achille) e borsiti.' },
      { icon: 'assets/img/icon/check.png', text: 'Trattamento di lesioni muscolari e, in alcuni casi, sindromi dolorose della colonna, come le radicolopatie.' },
    ],
    p: 'Questa tecnica è particolarmente raccomandata quando i trattamenti conservativi (terapie fisiche, farmaci per via orale) non hanno portato a miglioramenti, offrendo un sollievo rapido ed efficace dal dolore.'
  },
  {
    id: '8',
    title: 'Ozono terapia',
    image: 'assets/img/servizi/terapia-infiltrativa.jpg',
    description: 'È un trattamento con azione antinfiammatoria e antidolorifica.',
    utils: [
      { icon: 'assets/img/icon/check.png', text: 'Lombosciatalgia, ernia del disco, protrusioni, cervicalgia, dorsalgia, e dolori neuropatici.' },
      { icon: 'assets/img/icon/check.png', text: 'Gonartrosi (ginocchio), coxartrosi (anca), periartrite scapolo-omerale, artrite reumatoide, e artrosi diffusa.' },
      { icon: 'assets/img/icon/check.png', text: 'Tendiniti, tendinosi, epicondiliti (gomito del tennista), contratture muscolari, e lesioni tendinee parziali.' },
      { icon: 'assets/img/icon/check.png', text: 'Insufficienza venosa periferica, arteriopatia periferica, ulcere trofiche e ferite che stentano a guarire.' },
      { icon: 'assets/img/icon/check.png', text: 'Infezioni recidivanti, virus come Herpes Simplex, Herpes Zoster e infezioni resistenti agli antibiotici.' },
      { icon: 'assets/img/icon/check.png', text: 'Fibromialgia, stanchezza cronica, acne, cellulite, cefalee vascolari/miotensive, vertigini e coliti. ' },
    ],
    p: 'Il trattamento prevede diverse modalità di somministrazione, tra cui infiltrazioni locali (intramuscolari, intrarticolari, sottocutanee) o infusione endovenosa, a seconda della patologia da trattare. '
  },
  {
    id: '9',
    title: 'Pedana di valutazione posturale',
    image: 'assets/img/servizi/pedana.jpg',
    description: 'È uno strumento elettronico attraverso cui, nell\'ambito di una visita posturale, è possibile eseguire varie misurazioni in grado di indicare se vi sia o meno presenza di problematiche di natura neuromuscolare.',
    utils: [
      { icon: 'assets/img/icon/check.png', text: 'Misura il centro di pressione (\(CoP\)) e le oscillazioni corporee in posizione eretta, aiutando a identificare asimmetrie e disfunzioni nel controllo posturale.' },
      { icon: 'assets/img/icon/check.png', text: 'Valuta in modo statico e dinamico come il piede distribuisce il peso al suolo' },
      { icon: 'assets/img/icon/check.png', text: 'Utilizzata per monitorare i progressi nella riabilitazione dopo infortuni o interventi a caviglia, ginocchio, anca e rachide' },
      { icon: 'assets/img/icon/check.png', text: ' Permette di osservare come la postura cambi in seguito a modifiche mandibolari (es. utilizzo di un bite) e individuare squilibri posturali legati a problemi occlusali.' },
      { icon: 'assets/img/icon/check.png', text: 'Aiuta a ottimizzare l\'equilibrio e il gesto tecnico dello sportivo, prevenendo infortuni.' },
      { icon: 'assets/img/icon/check.png', text: 'Viene usata per valutare i danni posturali a seguito di incidenti traumatici. ' },
    ],
    p: 'La pedana fornisce dati oggettivi, grafici e numerici che permettono di creare un percorso terapeutico personalizzato e di confrontare la situazione prima e dopo un intervento. '
  },
  {
    id: '10',
    title: 'Baropodometria',
    image: 'assets/img/servizi/baropodometria.jpg',
    description: 'È un esame computerizzato non invasivo che analizza la distribuzione del carico pressorio sui piedi, sia in posizione statica che durante il cammino',
    utils: [
      { icon: 'assets/img/icon/check.png', text: ' Identificare patologie come metatarsalgie, talloniti, fascite plantare, neuroma di Morton e alluce valgo.' },
      { icon: 'assets/img/icon/check.png', text: ' Individuare l\'origine di dolori articolari (piedi, ginocchia, schiena) legati a un appoggio errato.' },
      { icon: 'assets/img/icon/check.png', text: ' fondamentale per progettare plantari su misura per atleti o per la riabilitazione post-chirurgica. ' },
    ],
    p: 'L\'esame è rapido (10-15 minuti), non doloroso e non presenta controindicazioni. '
  },
  {
    id: '11',
    title: 'RedCord®',
    image: 'assets/img/servizi/redcore.jpg',
    description: 'È un metodo riabilitativo e di allenamento norvegese basato su esercizi in sospensione, volto a migliorare il controllo neuromuscolare e a ridurre il dolore cronico o post-traumatico.',
    utils: [
      { icon: 'assets/img/icon/check.png', text: 'dolore lombare, dorsale e cervicale' },
      { icon: 'assets/img/icon/check.png', text: 'rigidità e debolezza muscolare profonda' },
      { icon: 'assets/img/icon/check.png', text: 'alterazioni posturali e scoliosi' },
      { icon: 'assets/img/icon/check.png', text: 'miglioramento del controllo neuromuscolare e della stabilità del core' },
    ],
    p: 'Redcord supporta il fisioterapista nel migliorare la qualità del movimento, ridurre il dolore e rendere la terapia più efficace e sicura, anche in fase riabilitativa.'
  },
  {
    id: '12',
    title: 'Allenamento con attrezzatura Nike',
    image: 'assets/img/servizi/nike.jpg',
    description: 'Siamo il primo studio medico in Italia a collaborare con Nike: la nostra palestra è equipaggiata con attrezzatura di ultima generazione pensata per elevare la tua performance, potenziare la prevenzione e ottimizzare il recupero funzionale.',
    utils: [
    ],
    p: 'Un ambiente professionale e innovativo, dove fisioterapia avanzata e training di alto livello lavorano insieme per offrirti risultati concreti e personalizzati.'
  },
  {
    id: '13',
    title: 'BFR - Blood Flow Restriction Training',
    image: 'assets/img/servizi/bfr.jpg',
    description: 'È una metodologia di allenamento che prevede la parziale restrizione del flusso sanguigno venoso negli arti durante esercizi a basso carico (\(20-40\%\) del massimale), usando bracciali compressivi.',
    utils: [
      { icon: 'assets/img/icon/check.png', text: 'Consente il rafforzamento muscolare precoce in pazienti che non possono sostenere carichi elevati. Riduce l\'atrofia e favorisce la guarigione di tendini e ossa.' },
      { icon: 'assets/img/icon/check.png', text: 'Ottimo per indurre adattamenti muscolari sovrapponibili a quelli dell\'allenamento ad alta intensità (HIT), utilizzando pesi leggeri.' },
      { icon: 'assets/img/icon/check.png', text: ' Migliora la resistenza muscolare, la forza e il VO2 max, riducendo lo stress articolare.' },
      { icon: 'assets/img/icon/check.png', text: 'Aiuta nel trattamento di patologie come l\'artrosi (es. ginocchio) e in situazioni di elevata reattività dolorosa, migliorando la tolleranza al movimento.' },
      { icon: 'assets/img/icon/check.png', text: 'Atleti in scarico, anziani, soggetti sovrappeso o chiunque necessiti di ricondizionamento senza carichi elevati. ' },
    ],
    p: 'Il BFR Training è quindi un potente strumento per recuperare la funzionalità muscolare in sicurezza, favorendo la produzione di ormoni della crescita e stimolando le cellule staminali muscolari. '
  },
  {
    id: '14',
    title: 'MANUTHERA®',
    image: 'assets/img/servizi/manuthera.jpg',
    description: 'In Avicenna Fisiomed utilizziamo Manuthera per ottimizzare il trattamento delle principali disfunzioni della colonna..',
    utils: [
      { icon: 'assets/img/icon/check.png', text: 'rigidità vertebrali' },
      { icon: 'assets/img/icon/check.png', text: 'disfunzioni cervicali e lombari' },
      { icon: 'assets/img/icon/check.png', text: 'scoliosi e alterazioni posturali' },
      { icon: 'assets/img/icon/check.png', text: 'limitazioni della mobilità articolare' },
    ],
    p: 'Manuthera supporta il fisioterapista nel migliorare la qualità del movimento, ridurre il dolore e rendere la terapia più efficace e confortevole.'
  },
  {
    id: '15',
    title: 'Sezione donne',
    image: 'assets/img/servizi/donne.jpg',
    description: 'Fare attività fisica durante la gravidanza non solo è sicuro, ma è fondamentale per il benessere della mamma e del bambino. Da Avicenna Fisiomed proponiamo programmi personalizzati, studiati per mantenere forza, mobilità e controllo posturale, ridurre tensioni e prevenire dolori muscoloscheletrici.',
    utils: [
    ],
    p: 'Ogni percorso è seguito da preparatori atletici e fisioterapisti specializzati, con esercizi sicuri e mirati al pavimento pelvico, alla stabilità del core e alla corretta postura, per accompagnarti in tutte le fasi della gravidanza.'
  },

]