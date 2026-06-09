# Cruscotto del docente in Notion — prospetto, rami e opzioni

> Documento di progettazione. Obiettivo: definire un'agenda-cruscotto in Notion che sia **l'officina personale del docente**, complementare al Registro Elettronico (RE) e non una sua duplicazione. Non un sistema da adottare in blocco, ma un ventaglio di moduli da combinare secondo bisogno.
>
> **Doppio uso:** dalla **§13** il documento funge anche da *brief tecnico* per costruire l'ecosistema via codice (Notion API + repository GitHub), pensato per essere eseguito in Claude Code; la **§14** elenca le rifiniture che restano necessariamente manuali nell'app.

---

## 1. Principio guida: dove finisce il RE, dove inizia Notion

Il Registro Elettronico (Argo, Classeviva, Nuvola, Mastercom…) è il sistema degli **atti ufficiali e dotati di valore giuridico-amministrativo**: ciò che è registrato lì fa fede. Notion, al contrario, è lo spazio delle **attività funzionali all'insegnamento** — progettazione, ricerca, documentazione, aggiornamento, preparazione dei lavori collegiali — che il CCNL riconosce come parte della funzione docente ma che il RE non ospita.

La regola di demarcazione, da tenere come bussola in ogni scelta: **se un dato ha valore ufficiale o tocca dati personali degli studenti, sta nel RE; se è preparatorio, riflessivo, personale o creativo, può stare in Notion.**

| Funzione | Registro Elettronico | Notion (cruscotto) |
|---|---|---|
| Appello, assenze, ritardi | Sì (fonte ufficiale) | No |
| Voti e valutazioni ufficiali | Sì | No (al massimo simulazioni/proiezioni anonime) |
| Argomento svolto in classe | Sì (registrazione formale) | No — ma sì la **progettazione** che lo precede |
| Compiti assegnati | Sì | No — ma sì il **serbatoio** da cui pesco i compiti |
| Comunicazioni scuola-famiglia, circolari | Sì | No |
| Scrutini, pagelle | Sì | No |
| Programmazione annuale e progettazione di UdA/lezioni | No | **Sì** |
| Banca di versioni, testi, esercizi, attività | Parziale/disordinato | **Sì** |
| Scadenzario personale (verbali, consegne, formazione) | No | **Sì** |
| Osservazioni qualitative su classi (pseudonime) | No | **Sì** |
| Sviluppo professionale, ePortfolio, crediti | No | **Sì** |
| Knowledge base disciplinare | No | **Sì** |
| Template e modulistica (bozze) | No | **Sì** |

---

## 2. Tre rami architettonici (scegliere l'impianto di base)

Prima dei moduli, una decisione di fondo: che tipo di sistema si vuole. Tre filosofie, in ordine crescente di complessità e potenza.

### Ramo A — Agenda-centrica (il calendario al centro)
Tutto ruota attorno alla linea del tempo: una pagina-oggi e una vista calendario alimentate da pochi database. Si apre Notion la mattina e si vede *cosa c'è oggi*.
- **Pro:** bassa frizione, intuitiva, vicina all'idea di "agenda".
- **Contro:** poco potente sul lato archivio/relazioni; rischia di restare un'agenda glorificata.
- **Per chi:** vuole sostituire il diario cartaceo e poco più.

### Ramo B — Database-centrica (tutto è relazione)
Un nucleo di database collegati tra loro (Classi, Lezioni, Materiali, Scadenze, Progetti, Note). Le viste — calendario, kanban, tabella — sono semplici proiezioni dello stesso dato.
- **Pro:** massima potenza; un materiale catalogato una volta riaffiora ovunque serva; niente duplicazioni.
- **Contro:** richiede un'ora o due di impostazione iniziale e disciplina nell'uso delle relazioni.
- **Per chi:** vuole un vero secondo cervello didattico, costruito per durare anni.

### Ramo C — Dashboard ibrida minimalista
Una sola home con blocchi essenziali (oggi, scadenze imminenti, tre liste rapide), pochi database, nessuna pretesa di completezza.
- **Pro:** si monta in mezz'ora, si abbandona senza rimpianti, zero sovraccarico.
- **Contro:** non scala; si esce presto dai suoi limiti.
- **Per chi:** vuole testare l'approccio prima di investirci.

> **Consiglio di percorso:** partire dal Ramo C come prototipo, poi migrare al Ramo B quando il bisogno di archivio e relazioni si fa sentire. Il Ramo A è una sotto-vista che si ottiene comunque "gratis" dentro il Ramo B. L'archivio cronologico per anno (§6) e il ciclo di vita di lezioni/UdA (§7) presuppongono il Ramo B.

---

## 3. Il ventaglio dei moduli

Ogni modulo è un mattoncino indipendente. Si possono attivare tutti o solo alcuni. Per ciascuno: **scopo**, **come si struttura**, **proprietà-chiave**, **perché non è ridondante col RE**, **sforzo** (basso / medio / alto).

### M1 — Home / Cruscotto del giorno  ·  sforzo basso
- **Scopo:** la prima schermata. Cosa devo fare oggi, cosa scade, dove riprendo.
- **Struttura:** una pagina con viste filtrate degli altri database (non un database proprio).
- **Blocchi tipici:** *Oggi* (lezioni e impegni del giorno), *Scadenze entro 7 giorni*, *In sospeso* (task aperti), *Ultimi materiali toccati*, *Note volanti*.
- **Non ridondante perché:** aggrega *il mio lavoro*, non gli atti della classe.

### M2 — Scadenzario e adempimenti  ·  sforzo basso
- **Scopo:** non dimenticare verbali, consegne, finestre di scrutinio, scadenze di formazione, adozioni libri di testo, riunioni.
- **Struttura:** database "Scadenze".
- **Proprietà-chiave:** Titolo · Data · Tipo (verbale / consegna / riunione / formazione / amministrativo) · Stato (da fare / in corso / fatto) · Priorità · Collegamento a Progetto o Classe.
- **Viste:** calendario, lista per imminenza, kanban per stato.
- **Non ridondante perché:** il RE notifica le circolari, ma non gestisce *la mia* coda di adempimenti con priorità e stato.

### M3 — Progettazione didattica (lezioni e UdA)  ·  sforzo medio
- **Scopo:** il dietro-le-quinte della singola lezione. Obiettivi, prerequisiti, fasi, materiali, raccordo con le Indicazioni Nazionali, agganci all'attualità.
- **Struttura:** due database collegati — "Unità didattiche / UdA" e "Lezioni" (ogni lezione appartiene a una UdA).
- **Proprietà-chiave (Lezione):** Titolo · Classe · Materia (Latino / Greco / Italiano / Geostoria) · Data prevista · UdA di appartenenza · Obiettivi · Fasi · Materiali collegati · Esito/riflessione post-lezione.
- **Non ridondante perché:** il RE registra *l'argomento svolto* a posteriori in una riga; qui vive la progettazione, riusabile l'anno dopo.
- **Aggancio al profilo:** spazio naturale per l'approccio metacognitivo e laboratoriale e per il legame antico-contemporaneo.
- **Livello macro:** la cornice annuale che ordina UdA e lezioni è trattata in **§4**; il loro intero ciclo di vita (dall'idea all'archivio) in **§7**.

### M4 — Banca materiali e attività  ·  sforzo medio
- **Scopo:** il serbatoio. Versioni di latino/greco, testi, esercizi, schede, prove, attività laboratoriali — catalogati una volta, ritrovati per sempre.
- **Struttura:** database "Materiali".
- **Proprietà-chiave:** Titolo · Tipo (versione / testo / esercizio / verifica / scheda / laboratorio) · Materia · Argomento/grammatica · Difficoltà · Fonte/autore · Tag · Link al file (Drive) · Lezioni che lo usano.
- **Non ridondante perché:** il RE condivide singoli file alla classe ma non è un archivio interrogabile e riorganizzabile *mio*.
- **Sinergia:** è il bacino da cui M3 (Progettazione) pesca per relazione, senza copiare nulla.
- **Nota cronologica:** i Materiali sono **anno-neutri** (riusabili negli anni), quindi non si archiviano per anno — vedi §6.

### M5 — Osservazioni su classi e studenti (qualitative, pseudonime)  ·  sforzo medio · ⚠ attenzione privacy
- **Scopo:** annotazioni pedagogiche che il voto non cattura — dinamiche di classe, progressi, strategie che funzionano, promemoria didattici.
- **Struttura:** database "Classi" e, se serve, "Studenti" con **identificativi pseudonimi** (iniziali o codici), mai dati anagrafici, mai voti ufficiali, mai dati sensibili.
- **Non ridondante perché:** il RE tiene i dati ufficiali e identificativi; qui sta la memoria didattica, intenzionalmente de-identificata.
- **Vincolo GDPR (vedi §9):** se non si è certi di poter pseudonimizzare in modo robusto, **tenere questo modulo a livello di sola classe** (osservazioni sul gruppo, non sul singolo).

### M6 — Knowledge base disciplinare  ·  sforzo medio-alto
- **Scopo:** il proprio sapere ordinato — schede di grammatica greca e latina, sintesi di autori e opere, parallelismi antico-moderno, metodi di traduzione, nuclei tematici, griglie e rubriche di valutazione.
- **Struttura:** database "Sapere" con tipologie (grammatica / autore / opera / tema / metodo / rubrica).
- **Non ridondante perché:** è materiale d'autore, fuori dal perimetro del RE; alimenta sia la didattica sia la produzione personale.
- **Sinergia:** si lega bene all'ecosistema di contenuti già esistente; Notion qui fa da indice navigabile.

### M7 — Sviluppo professionale ed ePortfolio  ·  sforzo medio
- **Scopo:** tracciare formazione, crediti, certificazione (es. PF60), episodi significativi da rielaborare per il portfolio professionale.
- **Struttura:** database "Formazione" (corsi, ore, attestati) + pagine-episodio per le riflessioni.
- **Proprietà-chiave:** Titolo · Ente · Ore · Data · Stato · Attestato (link) · Ambito.
- **Non ridondante perché:** il portfolio professionale è documento personale e riflessivo; il RE non lo contempla.

### M8 — Progetti e laboratori  ·  sforzo medio
- **Scopo:** gestire progetti che hanno fasi e scadenze — un laboratorio teatrale, un'UdA interdisciplinare, un viaggio d'istruzione, un percorso PCTO.
- **Struttura:** database "Progetti" con sotto-task; vista kanban per fase.
- **Non ridondante perché:** il RE non ha gestione progetti per fasi e milestone.
- **Ciclo di vita:** i progetti seguono la stessa pipeline a stati di lezioni/UdA e si archiviano per anno — vedi §7.

### M9 — Letture e ricerca  ·  sforzo basso
- **Scopo:** registro di letture professionali e critiche, con appunti e citazioni utilizzabili in didattica o produzione.
- **Struttura:** database "Letture" (titolo, autore, stato, note, citazioni-innesco).

### M10 — Template e modulistica (bozze)  ·  sforzo basso
- **Scopo:** modelli pronti per verbali, lettere istituzionali, bozze di PEI/PDP, comunicazioni — da compilare e poi trasferire nei canali ufficiali.
- **Struttura:** una pagina-raccolta di **Notion template** (pulsanti che generano una nuova pagina precompilata).
- **Convenzione:** campi da riempire marcati `[DA COMPLETARE]`.
- **Non ridondante perché:** sono brogliacci preparatori; l'atto definitivo nasce e si protocolla altrove.

### M11 — Riunioni e verbalizzazione  ·  sforzo basso
- **Scopo:** prendere appunti durante consigli e collegi e trasformarli in bozza di verbale.
- **Struttura:** database "Riunioni" con campo note grezze → da cui parte la stesura formale.
- **Non ridondante perché:** è l'anticamera del verbale, non il verbale protocollato.

### M12 — Gestione BES / DSA / L.104 (promemoria e bozze)  ·  sforzo basso · ⚠ attenzione privacy
- **Scopo:** promemoria di scadenze (GLO, revisioni PEI/PDP, NAI) e bozze di misure, **senza dati identificativi né diagnosi**.
- **Vincolo:** i documenti veri (PEI, PDP, Profilo di Funzionamento) restano nei canali protetti della scuola. In Notion solo scadenze e schemi di lavoro.

---

## 4. Programmazione didattica annuale

Questa è la cornice che M3 da solo non copre. Una cosa è progettare la singola lezione (livello micro), un'altra è impostare il **piano di lavoro annuale** per ciascuna classe-materia (livello macro): finalità dell'anno, scansione in moduli, obiettivi cognitivi, strumenti di verifica, criteri di valutazione, raccordo con le Indicazioni Nazionali e con il PTOF. In Notion si rende come una **cascata a quattro livelli**, in cui ogni gradino eredita e specifica il precedente.

```
ANNO SCOLASTICO
   └── PROGRAMMAZIONE ANNUALE   (1 record per Classe × Materia)
          └── MODULO / UdA       (le tappe dell'anno)
                 └── LEZIONE      (M3 — la singola seduta)
```

Il vantaggio di tenerla nello stesso impianto relazionale: gli obiettivi dichiarati a inizio anno restano agganciati alle UdA e alle lezioni che li realizzano, e a fine anno si vede a colpo d'occhio cosa è stato effettivamente svolto rispetto al previsto — senza riaprire venti file diversi.

### 4.1 Database "Programmazione annuale"

Un record per ogni abbinamento classe-materia (es. *Greco · IV classico · 2025/2026*).

| Proprietà | Tipo | Note |
|---|---|---|
| Titolo | testo | es. "Greco — IV classico — 2025/2026" |
| Anno scolastico | relazione → Anni | aggancio per l'archivio (§6) |
| Classe | relazione → Classi | |
| Materia | select | Latino / Greco / Italiano / Geostoria |
| Monte ore | numero | ore annue previste |
| Finalità generali | testo | raccordo Indicazioni Nazionali / PTOF |
| Competenze attese (fine anno) | relazione → Obiettivi | i traguardi macro |
| Moduli / UdA | relazione → UdA | la scansione dell'anno |
| Strumenti di verifica | multi-select | tipologie previste (vedi 4.3) |
| Criteri / griglie di valutazione | relazione → Sapere o link | rubriche di Italiano/Latino/Greco |
| Stato | select | bozza / approvata / in svolgimento / archiviata |

### 4.2 Obiettivi cognitivi (database "Obiettivi" riutilizzabile)

Conviene **non** scrivere gli obiettivi come testo libero dentro ogni UdA, ma tenerli in un database dedicato, taggati e riusabili. Così lo stesso obiettivo ("tradurre un periodo ipotetico") si collega a più UdA e si vede dove viene ripreso e consolidato.

Proprietà del singolo Obiettivo:
- **Enunciato** (formulato con verbo operativo).
- **Tipo:** conoscenza / abilità / competenza.
- **Livello cognitivo** (tassonomia di Bloom rivista), utile per dosare la progressione e per costruire verifiche coerenti.
- **Materia** e **classe/anno di corso**.
- **UdA collegate**.

Mappa dei livelli cognitivi con verbi operativi tarati sulle lingue classiche e l'italiano:

| Livello | Verbo-guida | Esempio (Greco/Latino) | Esempio (Italiano) |
|---|---|---|---|
| Ricordare | riconoscere, elencare | riconoscere le forme dell'aoristo | elencare i caratteri del Romanticismo |
| Comprendere | spiegare, distinguere | distinguere principale e subordinata | spiegare la funzione di una metafora |
| Applicare | tradurre, applicare | tradurre un passo con apparato | applicare la parafrasi a un testo poetico |
| Analizzare | analizzare, scomporre | analizzare la sintassi del periodo | analizzare struttura metrica e retorica |
| Valutare | argomentare, confrontare | confrontare due rese traduttive | valutare l'efficacia di una scelta stilistica |
| Creare | rielaborare, produrre | rielaborare un frammento in chiave attuale | produrre un testo argomentativo originale |

### 4.3 Verifiche formative (database "Verifiche")

Qui sta una distinzione decisiva per non sconfinare nel RE.

- La **verifica sommativa** (compito in classe, interrogazione con voto) produce un dato ufficiale: il voto va nel RE. In Notion ne resta al più la **traccia/bozza** e la riflessione, mai il voto nominativo.
- La **verifica formativa** è in itinere, serve a regolare l'insegnamento e di norma non genera un voto: è proprio il suo territorio naturale in Notion. Qui si progetta, si annota cosa ha funzionato, si decide come correggere il tiro.

Proprietà del database "Verifiche":
- **Titolo** · **Tipo** (formativa / sommativa-bozza) · **Modalità** (traduzione guidata, mappa, exit ticket, domanda flash, autocorrezione in coppia, commento orale…) · **UdA/Lezione collegata** · **Obiettivi verificati** (relazione → Obiettivi) · **Esito qualitativo / riflessione** (cosa è emerso, cosa ricalibrare) · **Anno scolastico**.

Esempi di strumenti formativi snelli, registrabili e riusabili: domanda di ingresso a inizio ora, breve traduzione a coppie con scambio e autocorrezione, mappa di sintesi a fine modulo, *exit ticket* di tre domande, mini-commento orale a campione. Il valore in Notion non è il punteggio, ma la **memoria di cosa funziona** con quella classe e quell'argomento.

### 4.4 Esempio compilato (Greco, IV classico)

> **UdA "Euripide e la crisi del tragico"** — Modulo della Programmazione annuale di Greco, IV classico.
>
> - **Competenza attesa:** interpretare un testo tragico cogliendo il nesso tra forma drammatica e contesto storico-culturale.
> - **Obiettivi cognitivi:**
>   - *Comprendere* la struttura di episodio e stasimo;
>   - *Applicare* — tradurre una rhesis con apparato;
>   - *Analizzare* la funzione drammaturgica del coro;
>   - *Valutare* la cosiddetta "modernità" euripidea;
>   - *Creare* — rielaborare un frammento in chiave contemporanea (aggancio a Beckett).
> - **Materiali collegati (da M4):** testo con traduzione a fronte, scheda metrica, registrazione di una messa in scena.
> - **Verifiche formative:** traduzione guidata a coppie con autocorrezione; mappa dei personaggi; exit ticket di tre domande sul ruolo del coro.
> - **Verifica sommativa (→ RE):** versione con analisi; il voto si registra nel Registro Elettronico, non qui.

---

## 5. Lo schema relazionale (se si sceglie il Ramo B)

Il valore del sistema sta nelle connessioni tra database. Schema consigliato, con il livello annuale in cima:

```
ANNO SCOLASTICO ──< PROGRAMMAZIONE ANNUALE
                          │
                          └──< UDA ──< LEZIONI >── CLASSI
                                 │         │
                                 │         └──< MATERIALI   (anno-neutri)
                                 └──< OBIETTIVI ──< VERIFICHE
                                                      │
CLASSI ──< OSSERVAZIONI (pseudonime)                  │
                                                      │
IDEE ──> (promosse in UdA | Lezione)                  │
SCADENZE ──> (Programmazione | Progetto | Classe | UdA)
PROGETTI ──< TASK
FORMAZIONE   LETTURE   SAPERE   (autonomi, taggati)
```

Lettura dello schema:
- un **Anno scolastico** raccoglie più **Programmazioni annuali** (una per classe-materia); ogni Programmazione si articola in **UdA**, che contengono **Lezioni** (M3);
- una **Lezione** appartiene a una **Classe** e usa più **Materiali**;
- **Obiettivi** e **Verifiche** si agganciano a UdA/Lezioni, rendendo tracciabile il "previsto vs svolto";
- le **Idee** (§7.1) sono il bacino da cui nascono UdA e Lezioni e restano collegate come genesi;
- le **Scadenze** puntano (facoltativamente) a una Programmazione, un Progetto, una Classe o una UdA;
- gli archivi di sapere (Formazione, Letture, Sapere) e i **Materiali** restano **anno-neutri**: si riusano negli anni e non vanno legati a un singolo anno scolastico.

Con questo impianto un materiale inserito una volta in M4 compare nella lezione che lo usa, nella UdA e — filtrando — nella vista della classe; e un obiettivo dichiarato nella programmazione si ritrova nelle verifiche che dovrebbero accertarlo. Nessuna duplicazione manuale.

---

## 6. Archivio cronologico per anno scolastico — valutazione

Esigenza reale: a fine anno "chiudere" l'agenda senza buttare nulla, e poter recuperare l'anno dopo (o tre anni dopo) come avevo impostato la programmazione, quale versione avevo assegnato, cosa avevo annotato su una classe. In Notion ci sono tre strade. Vanno pesate, perché la scelta condiziona quanto sarà facile (o doloroso) il recupero.

### Opzione 1 — Proprietà "Anno scolastico" su ogni dato anno-specifico (archivio per filtro)
Ogni record dei database anno-specifici porta un campo **Anno scolastico**. "Archiviare" significa solo cambiare il filtro delle viste: nulla si sposta fisicamente.
- **Pro:** zero migrazione; relazioni intatte per sempre; ricerca trasversale tra anni immediata; riuso facilissimo (duplico l'UdA di due anni fa e la aggiorno).
- **Contro:** i database crescono nel tempo (Notion regge migliaia di record, ma le viste "correnti" vanno tenute filtrate con disciplina); un'unica vista non filtrata mostrerebbe tutto insieme.

### Opzione 2 — Duplicazione/snapshot annuale (copia congelata)
A fine anno si duplica l'intero spazio in una pagina "Archivio AS 2024/2025", resa di sola lettura.
- **Pro:** separazione netta; lo snapshot è congelato; lo spazio di lavoro resta leggero.
- **Contro:** la duplicazione **spezza le relazioni** tra database; il recupero diventa "sfoglio", non "interrogo"; il riuso torna a essere copia-incolla; manutenzione e rischio di divergenza.

### Opzione 3 — Ibrido (consigliata)
Nucleo relazionale con proprietà **Anno scolastico** (Opzione 1) per tutto ciò che vive di relazioni e riuso (Programmazione, UdA, Lezioni, Verifiche, Osservazioni, Scadenze), **più** una pagina-indice per anno — un *Annuario* — che fa da sommario cronologico navigabile.
- **Pro:** mantiene la potenza relazionale e la ricercabilità, e dà al tempo stesso un punto d'ingresso umano e ordinato per ogni anno trascorso.
- **Contro:** richiede una piccola procedura di passaggio anno (sotto), ma è questione di minuti.

> **Raccomandazione:** Opzione 3. L'Opzione 1 è il motore; l'Annuario per anno è la copertina. L'Opzione 2 (snapshot) ha senso solo come backup esterno occasionale (export), non come architettura, perché perdere le relazioni vanifica gran parte del Ramo B.

### Cosa si archivia per anno e cosa no

| Anno-specifico (porta il campo Anno scolastico) | Anno-neutro (mai legato a un anno) |
|---|---|
| Programmazione annuale | Materiali (M4) |
| UdA e Lezioni (istanze svolte) | Sapere / knowledge base (M6) |
| Verifiche | Letture (M9) |
| Osservazioni su classi | Template (M10) |
| Scadenze e Riunioni | Obiettivi (catalogo riusabile)* |
| Progetti (se circoscritti all'anno) | Idee non ancora promosse |

\* gli Obiettivi sono un catalogo permanente; sono le UdA che, anno per anno, li richiamano.

### L'Annuario: pagina-indice per anno
Per ogni anno scolastico, una pagina che raccoglie: le programmazioni di quell'anno (una riga per materia-classe), i progetti realizzati, le riunioni principali, e una breve **nota di bilancio** (cosa ha funzionato, cosa cambiare). È la pagina che si riapre quando si vuole "tornare" a un anno: da lì, grazie alle relazioni, si scende a UdA, lezioni e verifiche di allora.

### Procedura di passaggio anno (rollover)
Da incapsulare in un pulsante-template "Apri nuovo anno scolastico":
1. creare il record del nuovo **Anno scolastico** e la relativa pagina Annuario;
2. impostare il nuovo anno come "corrente" nei filtri delle viste di lavoro (o aggiornare l'unico filtro globale);
3. marcare come **archiviata** la Programmazione dell'anno chiuso (cambio di stato, non spostamento);
4. duplicare le programmazioni/UdA che si vogliono riproporre, agganciandole al nuovo anno e ripulendo date ed esiti;
5. scrivere due righe di bilancio nell'Annuario dell'anno appena concluso.

### Scenari di recupero (a riprova del valore)
- *"Come avevo scandito la programmazione di Greco in IV due anni fa?"* → filtro Programmazione per Anno + Classe.
- *"Quella versione di Tucidide che avevo usato…"* → Materiali (anno-neutri), ricerca per autore/argomento.
- *"Cosa avevo annotato sul clima della 3ª l'anno scorso?"* → Osservazioni filtrate per Anno (a livello di classe).
- *"Quali obiettivi avevo previsto e quali ho davvero verificato?"* → confronto Obiettivi ↔ Verifiche dentro l'UdA.

---

## 7. Il ciclo di vita di una lezione, di una UdA e di un progetto

Le sezioni precedenti descrivono le *strutture* (i database) e la loro *cornice temporale* (anno e archivio). Questa descrive il *movimento*: come una lezione, un'intera UdA o un progetto nascono come spunto, prendono forma, si collocano nel calendario, vengono misurati e infine si archiviano — toccando, a ogni passo, una parte diversa del sistema. È la colla operativa che fa dialogare i moduli tra loro.

L'idea portante: lezione, UdA e progetto non sono record statici, ma **oggetti che cambiano stato**. Un'unica proprietà *Stato* governa l'intero percorso e decide in quale vista l'oggetto compare. La UdA è il contenitore, la Lezione l'unità, il Progetto un contenitore con scadenze proprie: tutti e tre percorrono la stessa pipeline, su scale diverse.

```
IDEA → BOZZA → PROGETTATA → CALENDARIZZATA → IN SVOLGIMENTO → SVOLTA → VALUTATA → ARCHIVIATA
```

### 7.1 Fase elaborativa / brainstorming — database "Idee"
Lo spazio per la scintilla, prima che diventi struttura. Qui atterrano gli spunti grezzi: un aggancio antico-moderno, un testo da usare, un'attività laboratoriale, una domanda da cui partire.
- **Struttura:** database "Idee" (o uno stato *Idea* dentro le UdA).
- **Proprietà:** Spunto · Tipo (idea-lezione / idea-UdA / attività / aggancio / domanda) · Materia · Stato (grezza / in sviluppo / promossa) · Link a Materiali o Sapere che l'hanno ispirata.
- **Dialoga con:** M6 (Sapere) e M4 (Materiali), da cui un'idea pesca; §4 (Obiettivi), a cui si aggancia quando matura.
- **Promozione:** quando un'idea regge, la si "promuove" — diventa un record UdA o Lezione. Lo spunto non si perde: resta collegato come **genesi**, utile l'anno dopo per ricostruire perché una scelta era stata fatta.
- **Vantaggio:** separa la fase divergente (raccogliere senza giudicare) da quella convergente (strutturare). Il cruscotto accoglie il disordine creativo senza che invada la progettazione.

### 7.2 Dalla bozza alla progettazione strutturata
L'idea promossa diventa il guscio di una UdA, poi si articola in lezioni secondo la cascata di §4.
- **Strumento:** un pulsante-template **"Nuova UdA"** che genera già i campi pronti (competenza attesa, relazione a Obiettivi, slot per le lezioni, slot per le verifiche, date inizio/fine) e un pulsante **"Nuova lezione"** che eredita per default Classe, Materia e UdA.
- **Sotto-elementi:** le Lezioni come *sub-items* dell'UdA, così l'UdA mostra la propria scansione interna senza aprire altre viste.
- **Dialoga con:** §4 (struttura e obiettivi), M4 (materiali agganciati per relazione).

### 7.3 Cronoprogramma e calendarizzazione
Qui la progettazione incontra il tempo reale. Due piani distinti ma collegati:
- **Cronoprogramma dell'UdA** — la distribuzione delle lezioni sull'arco di settimane. Si ottiene con una **vista Timeline** sul database Lezioni, raggruppata per UdA: a colpo d'occhio si vede quante settimane occupa un modulo e come si incastra con gli altri.
- **Calendarizzazione delle singole lezioni** — ogni lezione ha una *Data prevista*; compare nelle viste Calendario e Settimana e si sincronizza con Google Calendar (§11).
- **Proprietà utili (Lezione):** Data prevista · Data effettiva di svolgimento (distinta, per il "previsto vs svolto") · Durata/ore · Settimana · Sequenza nell'UdA.
- **Controllo di sostenibilità:** un *rollup* somma le ore delle lezioni di un'UdA e le confronta con il monte ore della Programmazione (§4.1): il cronoprogramma avverte se si sta pianificando più di quanto l'anno consenta.
- **Dialoga con:** §4 (monte ore), M2 (le consegne legate all'UdA diventano Scadenze), M8 (se l'UdA è anche un progetto laboratoriale), §11 (Google Calendar).

### 7.4 Misura valutativa
La dimensione valutativa, tenuta rigorosamente entro il perimetro GDPR (i voti nominativi restano nel RE). Due livelli:
- **A livello di lezione/UdA** — le *Verifiche* (§4.3) accertano gli obiettivi. Si annota l'**esito qualitativo a livello di classe** (obiettivo raggiunto / parziale / da riprendere), non il voto del singolo. È questa la "misura" che serve a decidere cosa riprendere.
- **Strumenti di misura riusabili** — *griglie e rubriche* (Italiano, Latino, Greco) tenute in M6 (Sapere, tipologia *rubrica*) e collegate alle Verifiche: la stessa rubrica si riapplica a prove diverse senza riscriverla.
- **Indicatore di copertura** — un *rollup* sull'UdA conta quanti degli obiettivi dichiarati hanno almeno una verifica collegata: misura non lo studente, ma la **completezza della progettazione e l'effettiva copertura didattica**. Mostra a colpo d'occhio gli obiettivi rimasti "scoperti".
- **Dialoga con:** §4 (Obiettivi e Verifiche), M6 (rubriche), RE (i voti, che restano lì).

### 7.5 Archiviazione di lezioni, UdA e progetti
Chiusura del ciclo, raccordata a §6.
- Quando lo stato passa a *Svolta* → *Valutata* → **Archiviata**, l'oggetto esce dalle viste di lavoro (filtrate su "non archiviato" e anno corrente) ma resta interrogabile per sempre, con relazioni intatte.
- **Per i progetti (M8):** un laboratorio, un viaggio, un percorso PCTO seguono la stessa pipeline; alla chiusura si scrive una breve *nota di bilancio* che confluisce nell'Annuario dell'anno (§6).
- **Riuso:** una UdA archiviata è di fatto un **template vivo**: "duplica e aggiorna" la riporta in vita per l'anno nuovo, chiudendo il cerchio con la fase di brainstorming (un'UdA passata è spesso la scintilla della prossima).
- **Dialoga con:** §6 (archivio per filtro, Annuario), M8 (progetti).

### 7.6 Il flusso in sintesi — chi dialoga con chi

| Fase | Stato | Database coinvolti | Vista d'elezione | Dialoga con |
|---|---|---|---|---|
| Brainstorming | Idea | Idee, Sapere, Materiali | Galleria "Idee grezze" | M4, M6, §4 |
| Progettazione | Bozza → Progettata | UdA, Lezioni, Obiettivi, Materiali | Tabella UdA / sub-items | §4, M4 |
| Cronoprogramma | Calendarizzata | Lezioni, Programmazione | Timeline (cronoprogramma) | §4, M2, §11 |
| Svolgimento | In svolgimento → Svolta | Lezioni | Calendario / Oggi | M1, §11 |
| Misura valutativa | Valutata | Verifiche, Obiettivi, Sapere(rubriche) | "Previsto vs svolto" | §4, M6, RE |
| Archiviazione | Archiviata | UdA/Lezioni/Progetti + Anno + Annuario | Annuari | §6, M8 |

> In pratica: una scintilla entra come *Idea*, diventa *UdA* con i suoi obiettivi, si distende sul *cronoprogramma*, si svolge lezione per lezione, viene *misurata* per copertura ed esito di classe, e infine si *archivia* restando pronta a essere riproposta. Ogni transizione è un semplice cambio di stato, e ogni stato accende la vista giusta.

---

## 8. Le viste da costruire

Le stesse poche tabelle, guardate da angolazioni diverse:

- **Oggi** — lezioni e scadenze del giorno (home).
- **Settimana** — calendario a 7 giorni.
- **Anno corrente** — tutto filtrato sull'anno scolastico in corso (la vista di lavoro predefinita).
- **Cronoprogramma (timeline)** — Lezioni distese nel tempo, raggruppate per UdA o per materia (§7.3).
- **Per classe** — tutto ciò che riguarda una classe (programmazione, lezioni, materiali, osservazioni).
- **Per materia** — Latino / Greco / Italiano / Geostoria.
- **Previsto vs svolto** — UdA/obiettivi pianificati a confronto con lezioni e verifiche effettive.
- **Idee grezze** — galleria del brainstorming, filtrata su stato "grezza / in sviluppo".
- **Kanban progetti** — colonne per fase (la pipeline a stati di §7).
- **Scadenze imminenti** — lista ordinata per data, filtrata su "non fatto".
- **Archivio materiali** — galleria o tabella filtrabile per tipo/argomento/difficoltà (anno-neutra).
- **Annuari** — elenco delle pagine-indice per anno scolastico (l'accesso allo storico, §6).

---

## 9. Privacy e GDPR — il paletto da non superare

Questa sezione non è un dettaglio: condiziona l'intero progetto.

- **Mai in Notion:** dati anagrafici degli studenti, voti ufficiali, diagnosi, certificazioni L.104, contenuti dei PEI/PDP, dati di contatto delle famiglie, qualunque dato sensibile.
- **Il RE resta l'unica fonte ufficiale** per valutazioni e dati personali.
- **Pseudonimizzazione** obbligatoria se si annota qualcosa sul singolo studente (codici o iniziali, mai associazioni ricostruibili nello stesso spazio).
- **La misura valutativa (§7.4) resta a livello di classe:** esiti aggregati e copertura degli obiettivi, mai punteggi nominativi.
- **Attenzione all'archivio:** conservare osservazioni anno dopo anno aumenta la massa di dati nel tempo; tenerle a livello di classe e ripulire ciò che non serve più mantiene l'archivio sobrio e a norma.
- **Account personale, non condiviso:** lo spazio è strumento di lavoro individuale; la condivisione di pagine va valutata con cautela.
- **Regola pratica:** prima di scrivere un dato, chiedersi *"se questa pagina diventasse pubblica, esporrei un minore?"*. Se sì, non va in Notion.

> In caso di dubbio, il modulo M5/M12 si declina a livello di **classe** anziché di **studente**: si perde granularità, si guadagna sicurezza.

---

## 10. Percorsi di adozione (per non abbandonare al terzo giorno)

### Livello 0 — MVP (≈ 30–60 min di setup)
M1 (Home) + M2 (Scadenze) + una lista task. È già un'agenda-cruscotto funzionante.

### Livello 1 — Operativo (≈ 1 settimana di rodaggio)
Aggiunge M3 (Progettazione) + M4 (Banca materiali) collegati. Qui Notion smette di essere un'agenda e diventa officina.

### Livello 2 — Sistema completo (a regime)
Impianto relazionale del Ramo B con M5–M12, la programmazione annuale (§4), il ciclo di vita a stati (§7) e l'archivio cronologico (§6) attivati secondo bisogno. Da costruire per accrescimento, non in un colpo solo. L'anno scolastico è l'unità naturale di crescita: il sistema "matura" un anno alla volta.

---

## 11. Integrazioni utili

- **Google Calendar** — sincronizzazione bidirezionale di scadenze e lezioni calendarizzate (§7.3); resta il canale per gli appuntamenti veri.
- **Google Drive** — i file pesanti restano su Drive; in Notion vivono i link e i metadati (così l'archivio è interrogabile senza appesantirsi).
- **Notion AI** — utile per riassumere appunti di riunione in bozza di verbale (M11), per sviluppare un'idea grezza in scaletta di UdA (§7.1) o per generare prime versioni di schede (M6), sempre da rivedere.
- **Registro Elettronico** — *nessuna* sincronizzazione automatica: il collegamento è concettuale (Notion prepara, il RE certifica), non tecnico.

---

## 12. Decisioni da prendere (checklist di orientamento)

Per scegliere tra i rami e i moduli, rispondere a queste domande:

1. **Cerco un'agenda o un secondo cervello?** Agenda → Ramo A/C. Secondo cervello → Ramo B.
2. **Quanto tempo posso dedicare al setup iniziale?** Poco → Livello 0. Un weekend → Livello 1–2.
3. **Voglio annotare sui singoli studenti?** Sì → attivare M5 con rigore GDPR. Incerto → restare a livello di classe.
4. **Ho già un archivio di materiali da versare?** Sì → M4 diventa prioritario. No → costruirlo per accrescimento.
5. **Mi interessa la continuità tra anni (recuperare lo storico)?** Sì → Ramo B + archivio per filtro (Opzione 3, §6) fin dall'inizio, con il campo Anno scolastico su tutto ciò che è anno-specifico. No → si può rimandare, ma reintrodurlo dopo costa più fatica.
6. **Lavoro più per lezioni isolate o per UdA?** Per UdA → adottare subito il ciclo di vita a stati (§7) e la vista cronoprogramma. Per lezioni isolate → basta M3 con lo stato e la data.
7. **La parte più dolorosa del mio lavoro oggi è…** scadenze dimenticate → M2; lezioni riprogettate da zero ogni volta → M3+M4; programmazione annuale dispersa su più file → §4; idee che si perdono prima di diventare lezioni → §7.1; portfolio/formazione dispersi → M7.

> Suggerimento finale: scegliere **un solo** dolore dalla domanda 7 e costruire il sistema attorno a quello. Tutto il resto si aggiunge dopo, se serve. Un cruscotto che fa bene tre cose batte un sistema completo mai finito. Due accortezze da prendere comunque fin dall'MVP, perché sono le uniche scomode da introdurre a posteriori: il campo *Anno scolastico* e la proprietà *Stato* su lezioni e UdA.

---

## 13. Implementazione via codice — Notion API + GitHub (brief per Claude Code)

L'intera struttura descritta sopra (§3–§7) può essere costruita a mano nell'app oppure generata via codice. Questa sezione è il brief che Claude Code può eseguire per creare schema, relazioni, rollup, formule e dati di esempio in modo **ripetibile, versionato e idempotente**. Va letta come specifica, non come prosa.

### 13.1 Cosa il codice può e non può fare (matrice di capacità)

Premessa che orienta tutta l'architettura: l'API di Notion gestisce **dati e schema**, non l'interfaccia. Viste, pulsanti e automazioni restano manuali (§14).

| Elemento | Via API (codice) | Solo UI manuale |
|---|---|---|
| Database (contenitori) e data source | ✅ | |
| Proprietà (title, rich_text, number, select, multi_select, status, date, checkbox, url, files) | ✅ | |
| Relazioni (anche duali) | ✅ | |
| Rollup | ✅ | |
| Formule | ✅ | |
| Pagine e dati di esempio (seed) | ✅ | |
| Icone e cover | ✅ | |
| **Viste** (timeline/cronoprogramma, calendar, kanban, filtri "anno corrente") | | ❌ |
| **Pulsanti-template** ("Nuova UdA", rollover anno) | | ❌ |
| **Sync con Google Calendar** | | ❌ (connettore nativo) |
| **Condivisione e permessi** | | ❌ |
| **Notion AI** | | ❌ |

Conseguenza operativa: **il codice costruisce il modello dati + i dati di esempio; la §14 (checklist manuale) rifinisce viste e automazioni nell'app.**

### 13.2 Il modello "data source" — da sapere prima di scrivere codice

Da settembre 2025 (versione API `2025-09-03`) Notion separa due concetti: la **database** è un contenitore, la **data source** è la tabella vera (proprietà + pagine). Le relazioni puntano a una *data source*, e le pagine si creano con `parent: { data_source_id }`. Per i nostri scopi vale la regola: **una data source per database**. Conviene fissare l'header di versione a `2025-09-03` (è il default dell'SDK v5; esiste anche un opt-in più recente `2026-03-11`, da non adottare salvo necessità).

Riferimenti ufficiali: guida all'upgrade `developers.notion.com/guides/get-started/upgrade-guide-2025-09-03` e SDK `github.com/makenotion/notion-sdk-js`.

### 13.3 Stack consigliato

- **Node 18+ con TypeScript** e SDK ufficiale `@notionhq/client` (v5), che espone i namespace `databases`, `dataSources`, `pages`.
- `dotenv` per i segreti; `tsx` (o `ts-node`) per eseguire gli script.
- Client inizializzato con `notionVersion: "2025-09-03"`.
- Alternativa Python: `notion-client`; funziona, ma l'SDK JS è più allineato alle novità del modello data source.

### 13.4 Prerequisiti (una tantum, a tuo carico)

1. Crea una *internal integration* su `notion.so/my-integrations` e copia il **secret**.
2. Crea (o scegli) una **pagina-genitore** in Notion che ospiterà tutti i database, e **condividila con l'integrazione** (menu ⋯ → Connections).
3. Copia l'**ID della pagina-genitore** (dall'URL).
4. Inserisci `NOTION_TOKEN` e `NOTION_PARENT_PAGE_ID` nel file `.env` locale.

> **Sicurezza:** il token è un segreto. Va solo nel tuo `.env` locale, mai incollato in chat e mai committato. Se finisse nel repo, va revocato e rigenerato in Notion. Sono passaggi che esegui tu: il codice li legge da variabili d'ambiente, non li contiene.

### 13.5 Architettura del repository (GitHub)

```
notion-cruscotto-docente/
├─ src/
│  ├─ schema/                 # una definizione dichiarativa per database
│  │  ├─ anni.ts  classi.ts  obiettivi.ts  materiali.ts  sapere.ts
│  │  ├─ programmazione.ts  uda.ts  lezioni.ts  verifiche.ts
│  │  ├─ osservazioni.ts  idee.ts  progetti.ts  task.ts  scadenze.ts
│  │  └─ formazione.ts  letture.ts  riunioni.ts
│  ├─ lib/
│  │  ├─ notion.ts            # client + helper (retry, rate-limit)
│  │  ├─ createDatabase.ts    # crea contenitore + data source con schema
│  │  ├─ addRelations.ts      # 2ª passata: relazioni
│  │  ├─ addRollupsFormulas.ts# 3ª passata: rollup e formule
│  │  └─ state.ts             # manifest idempotenza (legge/scrive notion-state.json)
│  ├─ seed/                   # dati di esempio (UdA "Euripide", ecc.)
│  └─ build.ts                # orchestratore: esegue le passate nell'ordine giusto
├─ config/
│  └─ buildOrder.ts           # ordine topologico di creazione (vedi 13.6)
├─ .env.example               # NOTION_TOKEN= / NOTION_PARENT_PAGE_ID=
├─ .gitignore                 # .env, node_modules, notion-state.json
├─ package.json               # script: build, seed, verify
├─ tsconfig.json
├─ README.md                  # istruzioni di setup
└─ docs/
   └─ prospetto.md            # questo documento
```

### 13.6 Ordine di costruzione (il nodo delle dipendenze)

Una relazione richiede che la data source di destinazione **esista già**. Quindi la creazione segue un ordine topologico e si articola in tre passate:

- **Passata 1 — database e proprietà base** (senza relazioni che puntino a DB non ancora creati).
- **Passata 2 — relazioni** (ora tutti i target esistono; le relazioni duali si creano una volta).
- **Passata 3 — rollup e formule** (dipendono dalle relazioni della passata 2).

Ordine consigliato dei database:

```
Anni → Classi → Obiettivi → Materiali → Sapere
   → Programmazione → UdA → Lezioni → Verifiche
   → Osservazioni → Idee → Progetti → Task → Scadenze
   → Formazione → Letture → Riunioni
```

> **Avvertenza tecnica importante:** in Notion una proprietà-relazione punta a **una sola** data source. Quindi lo "Scadenze → (Programmazione | Progetto | Classe | UdA)" di §7 non è una relazione polimorfica: va implementato come **quattro proprietà-relazione distinte e facoltative** (una per target). Stessa logica per "Idee → promossa in UdA *oppure* Lezione" (due proprietà) e per "Verifiche → UdA *oppure* Lezione".

### 13.7 Grafo delle relazioni da creare

| Da (database) | Proprietà | A (database) | Duale |
|---|---|---|---|
| Programmazione | Anno scolastico | Anni | no |
| Programmazione | Classe | Classi | no |
| Programmazione | Competenze attese | Obiettivi | no |
| Programmazione | Moduli/UdA | UdA | sì |
| UdA | Obiettivi | Obiettivi | sì |
| UdA | Lezioni | Lezioni | sì |
| Lezioni | Classe | Classi | no |
| Lezioni | Materiali | Materiali | sì |
| Verifiche | UdA | UdA | no |
| Verifiche | Lezione | Lezioni | no |
| Verifiche | Obiettivi verificati | Obiettivi | sì |
| Osservazioni | Classe / Anno | Classi / Anni | no |
| Idee | Ispirata da | Materiali / Sapere | no |
| Idee | Promossa in (UdA) / (Lezione) | UdA / Lezioni | no |
| Progetti | Anno / Task | Anni / Task | Task: sì |
| Scadenze | Programmazione / Progetto / Classe / UdA | (rispettivi) | no |

Le entità anno-specifiche (Programmazione, UdA, Lezioni, Verifiche, Osservazioni, Progetti, Scadenze) portano una relazione **Anno scolastico → Anni**: è il perno dell'archivio per filtro (§6).

### 13.8 Rollup e formule chiave (la parte "intelligente")

Due catene da implementare nella passata 3.

**A. Sostenibilità oraria (cronoprogramma, §7.3)**
- *UdA* → rollup **Ore pianificate** = somma di `Durata (ore)` delle Lezioni collegate.
- *Programmazione* → rollup **Ore UdA totali** = somma di `Ore pianificate` delle UdA collegate.
- *Programmazione* → formula **Scostamento** = `Monte ore − Ore UdA totali`.
- *Programmazione* → formula **Semaforo** = se Scostamento < 0 → "⚠ oltre il monte ore", se = 0 → "● pieno", se > 0 → "○ margine".

**B. Copertura degli obiettivi (misura valutativa, §7.4)**
- *Obiettivi* → rollup **n. verifiche** = conteggio delle Verifiche collegate (richiede la relazione duale Verifiche↔Obiettivi).
- *Obiettivi* → formula **Verificato** = `prop("n. verifiche") > 0`.
- *UdA* → rollup **Obiettivi totali** = conteggio degli Obiettivi collegati.
- *UdA* → rollup **Obiettivi verificati** = conteggio degli Obiettivi collegati filtrati su `Verificato = true`.
- *UdA* → formula **Copertura %** = `round(prop("Obiettivi verificati") / prop("Obiettivi totali") * 100)`.

Queste due catene rendono visibile, senza alcun dato sensibile, sia se la programmazione "sfora" le ore, sia quali obiettivi restano scoperti da verifica.

### 13.9 Pattern di definizione dichiarativa (illustrativo)

Schema tenuto come dato, non come codice imperativo: ogni file in `src/schema/` esporta un oggetto, e gli helper lo traducono in chiamate API. Esempio per *Lezioni* (passata 1 + relazioni in passata 2):

```ts
// src/schema/lezioni.ts
export const lezioni = {
  key: "lezioni",
  title: "Lezioni",
  properties: {
    "Titolo":   { type: "title" },
    "Data prevista":  { type: "date" },
    "Data effettiva": { type: "date" },
    "Durata (ore)":   { type: "number", number: { format: "number" } },
    "Stato": { type: "status" }, // Idea→Bozza→…→Archiviata (§7)
    // le relazioni vengono aggiunte nella passata 2:
    // "UdA" → uda, "Classe" → classi, "Materiali" → materiali
  },
} as const;
```

```ts
// src/lib/createDatabase.ts (concetto)
import { Client } from "@notionhq/client";
const notion = new Client({ auth: process.env.NOTION_TOKEN, notionVersion: "2025-09-03" });

// NB: verificare in SDK v5 il campo esatto dello schema iniziale
// (initial_data_source.properties) sulla "Create a database",
// oppure creare il database e poi dataSources.create con le properties.
export async function createDb(parentPageId: string, def: SchemaDef) {
  const res = await notion.databases.create({
    parent: { type: "page_id", page_id: parentPageId },
    title: [{ type: "text", text: { content: def.title } }],
    initial_data_source: { properties: toNotionProps(def.properties) },
  });
  return res; // salvare databaseId e data_sources[0].id nel manifest
}
```

Le relazioni e i rollup si aggiungono aggiornando lo schema della data source (passate 2 e 3), una volta noti gli `id` dei target letti dal manifest.

### 13.10 Idempotenza e stato

Per poter rieseguire `build` senza duplicare nulla:
- mantenere un **manifest** `notion-state.json` che mappa `chiave logica → { databaseId, dataSourceId }`;
- prima di creare, controllare il manifest: se presente, **saltare o aggiornare** (PATCH dello schema) invece di ricreare;
- il manifest descrive una specifica istanza Notion: tenerlo in `.gitignore` e documentarne lo scopo nel README.

Script in `package.json`: `build` (crea/aggiorna lo schema), `seed` (inserisce i dati di esempio), `verify` (rilegge e stampa un riepilogo).

### 13.11 Igiene del repo e versione API

- `.gitignore`: `.env`, `node_modules`, `notion-state.json`; committare invece `.env.example`.
- Nessun segreto nei commit; in caso di leak, rigenerare il token.
- Header di versione fissato a `2025-09-03`; valutare `2026-03-11` solo se servono le sue novità (rinomina `archived` → `in_trash`, parametro `position`).

---

## 14. Checklist di completamento manuale (post-build, nell'app Notion)

Ciò che l'API non costruisce e va rifinito a mano dopo l'esecuzione del codice:

1. **Viste** (da §8), create su ciascuna data source: Oggi, Settimana, **Anno corrente** (filtro su Anno = corrente), **Cronoprogramma** (Timeline sulle Lezioni, raggruppate per UdA), Calendario, **Kanban progetti** (per Stato, §7), **Previsto vs svolto**, **Idee grezze**, Per classe, Per materia, Annuari.
2. **Pulsanti-template** (§7.2): "Nuova UdA", "Nuova lezione", "Apri nuovo anno scolastico" (procedura di rollover §6).
3. **Sync Google Calendar** (§11) sulle scadenze e sulle lezioni calendarizzate.
4. **Condivisione e permessi** (§9): mantenere lo spazio personale; nessuna condivisione automatica.
5. **Notion AI** (§11) dove utile: bozze di verbale, sviluppo di un'idea grezza in scaletta di UdA.

> Sequenza completa consigliata: `1)` setup integrazione e `.env` → `2)` `npm run build` (schema, relazioni, rollup, formule) → `3)` `npm run seed` (UdA "Euripide" come collaudo) → `4)` rifiniture manuali di questa §14. Da quel punto, l'anno scolastico è l'unità di crescita: il codice ricrea o aggiorna lo schema, l'uso quotidiano avviene nell'app.

### Riferimenti

- Notion — Upgrade guide 2025-09-03: https://developers.notion.com/guides/get-started/upgrade-guide-2025-09-03
- Notion — FAQ data sources: https://developers.notion.com/docs/upgrade-faqs-2025-09-03
- SDK ufficiale JavaScript/TypeScript: https://github.com/makenotion/notion-sdk-js
