# CLAUDE DESIGN — CORSO COMPLETO
## Dal primo accesso alla padronanza professionale

> **Aggiornato:** Aprile 2026 | **Livello:** Beginner → Expert | **Durata stimata:** 6-8 ore
> **Accesso al prodotto:** claude.ai/design — richiede piano Pro ($20/mese), Max, Team o Enterprise

---

## COME USARE QUESTO CORSO

Il corso è diviso in **5 livelli progressivi**. Ogni livello include lezioni teoriche, esempi pratici, esercizi hands-on e un test di verifica finale. Non saltare i livelli: le competenze si costruiscono una sopra l'altra.

| Livello | Nome | A chi serve | Durata |
|---|---|---|---|
| 0 | Fondamenta | Chi non ha mai aperto Claude Design | 30 min |
| 1 | Beginner | Chi vuole ottenere il primo risultato utile | 60 min |
| 2 | Intermedio | Chi vuole usarlo regolarmente nel lavoro | 90 min |
| 3 | Avanzato | Chi vuole output di qualità professionale | 120 min |
| 4 | Expert | Chi lo usa in team o contesti enterprise | 90 min |

**Prerequisito unico:** un abbonamento Claude attivo (Pro o superiore).

---

---

# ░░ LIVELLO 0 ░░
# FONDAMENTA
### Cosa è, come funziona, come accedere

---

## L0.1 — Cos'è Claude Design (e cosa NON è)

Claude Design è un workspace di **prototipazione visiva conversazionale** lanciato da Anthropic il 17 aprile 2026. Permette di creare design, prototipi, slide, landing page, mockup e one-pager descrivendo ciò che si vuole in linguaggio naturale.

Prima di tutto, chiarisci cosa NON è:

| NON è... | MA è... |
|---|---|
| Un generatore di immagini (Midjourney, DALL-E) | Un motore di prototipazione UI/UX |
| Un editor grafico (Photoshop, Illustrator) | Un workspace conversazionale |
| Un tool per template (Canva) | Un partner che parte dall'idea, non dal template |
| Un sostituto di Figma per team di design pro | Uno strumento per non-designer e prototipazione rapida |
| Uno strumento standalone | Un prodotto integrato nell'ecosistema Claude |

**La definizione più precisa:** Claude Design è Claude che ha imparato a pensare visivamente. Non disegna pixel — *ragiona* su layout, gerarchia, colori e composizione, poi genera il codice visivo che rappresenta quel ragionamento.

---

## L0.2 — Il motore: Claude Opus 4.7

Claude Design è alimentato esclusivamente da **Claude Opus 4.7**, rilasciato il 16 aprile 2026. Capire questo modello ti aiuta a capire perché certi prompt funzionano meglio di altri.

### Capacità visive chiave

| Capacità | Valore | Perché conta per il design |
|---|---|---|
| Risoluzione immagini accettate | 2.576px / 3,75MP | Analizza screenshot ad alta def, capisce interfacce reali |
| Acuità visiva (computer use) | 98,5% | Vede ciò che ha generato, si autocorregge |
| Errori su documenti (OfficeQA Pro) | -21% vs modello prev. | Analizza PDF, brief, style guide con precisione |
| Visual reasoning (CharXiv) | 82,1% | Capisce diagrammi, layout, gerarchie visive |
| Context window | 1 milione di token | Può tenere in memoria l'intero progetto durante la sessione |

### Il concetto di auto-validazione

La capacità più rilevante per il design non è la generazione: è l'**auto-validazione**. Opus 4.7 può osservare ciò che ha appena creato, valutarne la qualità visiva, identificare problemi di layout o coerenza, e correggersi — senza che tu debba dirglielo.

Questo è il motivo per cui le iterazioni sono così veloci: il modello non aspetta istruzioni per correggere errori ovvi. Li risolve autonomamente nel ciclo di generazione.

---

## L0.3 — L'interfaccia: mappa visiva

```
┌─────────────────────────────────────────────────────────────┐
│                    claude.ai/design                         │
├──────────────────────────┬──────────────────────────────────┤
│                          │                                  │
│   SIDEBAR SINISTRA       │        CANVAS CENTRALE           │
│   "Let's Prototype"      │                                  │
│                          │   ┌──────────────────────────┐   │
│  ┌────────────────────┐  │   │                          │   │
│  │  Chat box          │  │   │   Il design prende       │   │
│  │  (prompt input)    │  │   │   forma qui in           │   │
│  └────────────────────┘  │   │   tempo reale            │   │
│                          │   │                          │   │
│  ┌────────────────────┐  │   └──────────────────────────┘   │
│  │  Upload riferimenti│  │                                  │
│  │  immagini/documenti│  │   Clic diretto sugli elementi    │
│  └────────────────────┘  │   per commenti inline            │
│                          │                                  │
│  ┌────────────────────┐  │                                  │
│  │  Web capture tool  │  │                                  │
│  │  (cattura dal sito)│  │                                  │
│  └────────────────────┘  │                                  │
│                          │                                  │
│  ┌────────────────────┐  ├──────────────────────────────────┤
│  │  TWEAKS            │  │  PANNELLO EXPORT                 │
│  │  (modifiche mirate)│  │  PDF | PPTX | HTML | Canva | URL │
│  └────────────────────┘  │                                  │
└──────────────────────────┴──────────────────────────────────┘
```

### Le 5 zone in dettaglio

**1. Chat box (sidebar):** Il tuo canale principale di comunicazione. Qui scrivi i prompt iniziali e le richieste di modifica generali. Claude risponde generando o aggiornando il design sulla canvas.

**2. Upload riferimenti:** Puoi caricare immagini (screenshot, mood board, design di competitor), documenti (PDF delle linee guida brand, brief in DOCX, presentazioni PPTX, dati in XLSX). Claude analizza tutto e usa il materiale per orientare il design.

**3. Web capture tool:** Uno degli strumenti più potenti e meno citati. Fornisci l'URL del tuo sito o prodotto e Claude cattura elementi visivi direttamente dalla pagina. I prototipi risultanti sembrano il tuo prodotto reale, non un mockup generico.

**4. Tweaks (commenti inline):** Clicca su qualsiasi elemento della canvas per aprire un pannello di modifica contestuale. Invece di descrivere nella chat "cambia il terzo bottone a destra", clicchi su quel bottone e scrivi direttamente "rendilo più grande e cambia il colore". Preciso, senza ambiguità.

**5. Pannello Export:** Quando il design è pronto, esporti verso: PDF, PPTX, HTML standalone, URL interno condivisibile, oppure direttamente verso Canva per editing collaborativo o Claude Code per implementazione.

---

## L0.4 — Setup iniziale: 10 minuti per iniziare

### Step 1: Accesso
Vai su **claude.ai/design** con il tuo account. Se hai un piano compatibile, vedrai l'interfaccia descrita sopra. Se non hai accesso, o sei su piano gratuito o il rollout non ha ancora raggiunto il tuo account (è graduale).

### Step 2: Configurazione del Design System (opzionale ma raccomandata)

La prima volta che crei un progetto, Claude ti propone di configurare il design system automatico. Hai tre opzioni:

**Opzione A — Codebase (la più potente):** Se hai accesso a un repository di codice, forniscilo a Claude. Estrarrà automaticamente colori CSS, font, componenti, token di design. Da quel momento ogni progetto userà il tuo brand senza che tu debba specificare nulla.

**Opzione B — File di brand:** Carica le linee guida del brand in PDF, screenshot del sito, immagini con la palette colori. Claude costruirà un design system approssimato ma coerente.

**Opzione C — Nessun setup:** Puoi saltare completamente. Claude userà il suo senso estetico di default. Va bene per sperimentare, ma i risultati non saranno brandizzati.

### Step 3: Primo test rapido
Prima di qualsiasi progetto serio, fai questo test per capire il funzionamento base:

> *Scrivi nella chat:* "Crea un semplice one-pager per presentare [il tuo nome o la tua azienda] con un titolo, una frase di presentazione e un bottone di contatto."

Osserva come risponde. Modifica un elemento cliccandoci sopra. Esporta in PDF. Hai completato il ciclo base.

---

## ✅ TEST LIVELLO 0

Prima di procedere, verifica di saper rispondere a queste domande:

1. Claude Design genera immagini fotografiche? (Sì/No)
2. Quale modello alimenta Claude Design?
3. Cosa fa il "web capture tool"?
4. Qual è la differenza tra Chat box e Tweaks?
5. Su quale piano è disponibile Claude Design?

**Risposte:** No / Claude Opus 4.7 / Cattura elementi visivi dal tuo sito reale / Chat = modifiche generali, Tweaks = modifiche su elemento specifico / Pro, Max, Team, Enterprise

---

---

# ░░ LIVELLO 1 ░░
# BEGINNER
### I tuoi primi design in meno di un'ora

---

## L1.1 — Il Principio Fondamentale del Prompting

Esiste un errore che fanno quasi tutti alla prima apertura di Claude Design. È un errore comprensibile, e capire perché è sbagliato ti farà risparmiare ore di frustrazione.

**L'errore:** descrivere il design in termini tecnici.

```
❌ PROMPT TECNICO (non funziona bene)
"Crea un layout con header fisso alto 64px, background #1a1a2e,
font Inter 16px colore bianco. Body con due colonne: sinistra 40%
con immagine hero, destra 60% con titolo H1 48px bold e paragrafo
di testo con line-height 1.6..."
```

Questo tipo di prompt tratta Claude come Figma o CSS. Gli stai dando specifiche invece che obiettivi.

**La soluzione:** descrivere contesto, audience, obiettivo e tono.

```
✅ PROMPT CONTESTUALE (funziona)
"Crea la homepage di un'app di produttività per freelance.
Chi la visita sono designer e sviluppatori freelance oberati di
lavoro. Devono capire subito che l'app risolve il problema della
gestione del tempo. Tono: professionale ma non corporate, diretto.
Includi: headline forte, tre vantaggi chiave, call-to-action per
la prova gratuita."
```

**Perché funziona meglio?** Perché stai dando a Claude le stesse informazioni che daresti a un bravo designer umano. Un designer non ha bisogno che tu specifichi il font: ha bisogno di capire chi è l'utente e cosa deve sentire guardando quella pagina.

---

## L1.2 — Il Framework P.A.T.C. per i Prompt

Memorizza questo schema per costruire qualsiasi prompt:

**P — Prodotto:** Cosa stai creando? (landing page / pitch deck / prototipo app / one-pager / social graphic / wireframe / presentazione)

**A — Audience:** Chi è l'utente o lettore finale? Qual è il suo contesto e le sue aspettative?

**T — Target:** Cosa deve fare o capire dopo aver visto il design? Qual è l'azione desiderata?

**C — Carattere visivo:** Come deve sentirsi il design? Un aggettivo o riferimento visivo è sufficiente.

Esempio applicato:

| Elemento | Esempio |
|---|---|
| **P**rodotto | Landing page |
| **A**udience | CFO e direttori finanziari di PMI, abituati a presentazioni formali |
| **T**arget | Prenotare una demo del software di reportistica |
| **C**arattere | Autorevole, dati-centrico, colori sobri |

**Prompt risultante:**
> "Crea la landing page di un software di reportistica finanziaria. Target: CFO e direttori finanziari di PMI. Obiettivo: spingerli a prenotare una demo. Tono visivo: autorevole, dati-centrico, colori sobri. Include: headline focalizzata sul risparmio di tempo, 3 funzionalità chiave con numeri, logo clienti di riferimento (placeholder), form di contatto."

---

## L1.3 — I 7 Output Principali e Come Richiederli

### 1. Landing Page

**Quando:** Per promuovere un prodotto o servizio online, raccogliere lead, presentare un'offerta.

**Struttura consigliata da includere nel prompt:**
- Hero section (headline + sottotitolo + CTA)
- Sezione benefici/funzionalità (3-4 elementi)
- Social proof (testimonial, loghi clienti, numeri)
- CTA finale (form, bottone prenotazione)

**Prompt template:**
```
Crea una landing page per [prodotto/servizio].
Target: [persona specifica]
Obiettivo: [azione desiderata]
Tono: [aggettivo]
Sezioni: hero con headline, [N] card funzionalità,
         sezione testimonial, CTA con [form/bottone].
```

---

### 2. Pitch Deck

**Quando:** Per presentare una startup a investitori, presentare un progetto internamente, fare una proposta commerciale.

**Struttura standard investor pitch:**
1. Cover (nome, tagline)
2. Problema (il pain point)
3. Soluzione (il tuo prodotto)
4. Mercato (TAM/SAM/SOM)
5. Prodotto (screenshot/demo)
6. Business model (come guadagni)
7. Traction (numeri attuali)
8. Team
9. Roadmap
10. Ask (quanto cerchi e per cosa)

**Prompt template:**
```
Crea un pitch deck di [N] slide per [startup/progetto].
Settore: [categoria]
Target investor: [tipo: angel, VC seed, corporate]
Tono: [visionario/concreto/tecnico]
Struttura: problema → soluzione → mercato →
           prodotto → traction → team → ask
Highlights da enfatizzare: [punti di forza]
```

---

### 3. Prototipo App (Mobile o Desktop)

**Quando:** Per validare un'idea di prodotto, presentare una feature a stakeholder, testare un flusso utente.

**Elemento chiave da specificare:** la schermata specifica, non l'intera app. "Prototipa la schermata principale" è meglio di "prototipa l'app".

**Prompt template:**
```
Prototipa [schermata specifica] di un'app [mobile/desktop]
per [funzione principale].
Utente tipo: [chi usa questa schermata]
Azione principale in questa schermata: [cosa fa l'utente]
Stile visivo: [riferimento o descrizione]
Elementi obbligatori: [navigazione, stati, componenti specifici]
```

---

### 4. One-Pager

**Quando:** Schede vendita, case study, materiali per eventi, presentazioni di servizio, profilo aziendale.

**Regola chiave:** specifica sempre il formato (A4 verticale è standard) e il destinatario.

**Prompt template:**
```
Crea un one-pager formato A4 verticale per presentare
[prodotto/servizio/azienda] a [tipo di destinatario].
Obiettivo: [convincere / informare / ispirare]
Sezioni: [logo, headline, proposta di valore,
          3 punti chiave, processo/metodologia,
          referenze/loghi, contatti]
Tono: [formale/informale/tecnico/commerciale]
```

---

### 5. Grafiche Social Media

**Quando:** Post LinkedIn, banner Instagram, grafiche per campagne, copertine per webinar.

**Elemento chiave:** specifica le dimensioni o la piattaforma target, e il formato (singola immagine, carousel, storia).

**Prompt template:**
```
Crea [N] grafiche per [piattaforma] sul tema [argomento].
Formato: [dimensioni o piattaforma: LinkedIn post /
          Instagram square / Instagram story / Twitter header]
Contenuto: [testo principale, hashtag se necessari]
Stile: [coerente con [brand] / stile [aggettivo]]
Serie o standalone: [se serie, definire il filo conduttore]
```

---

### 6. Wireframe / Mockup di Funzionalità

**Quando:** Per comunicare un'idea di feature a designer o sviluppatori, presentare una user story, fare grooming del backlog.

**Elemento chiave:** il wireframe serve a comunicare struttura e logica, non estetica. Dillo esplicitamente.

**Prompt template:**
```
Crea un wireframe [lo-fi/mid-fi] per la funzionalità di
[nome feature] nel prodotto [nome prodotto].
Scopo del wireframe: comunicare la struttura a [designer/dev/stakeholder]
Flusso utente: [step 1 → step 2 → step 3]
Vincoli tecnici: [se esistono]
Non serve estetica definitiva: focus su struttura e logica.
```

---

### 7. Presentazione / Slide Deck Aziendale

**Quando:** Report trimestrale, presentazione di risultati, onboarding aziendale, training interno.

**Prompt template:**
```
Crea una presentazione di [N] slide per [contesto:
board meeting / all-hands / cliente / formazione interna].
Argomento: [tema principale]
Audience: [chi guarda]
Punti chiave da comunicare: [lista]
Tono: [formale/informale] | Stile: [minimalista/data-driven/visuale]
Includi: grafici placeholder per [tipo di dato]
```

---

## L1.4 — Aggiungere Contesto: Reference Material

Un prompt da solo produce buoni risultati. Un prompt con materiale di riferimento produce risultati eccellenti.

### Cosa puoi caricare e cosa ne fa Claude

| Materiale | Formato | Come lo usa Claude |
|---|---|---|
| Screenshot del tuo sito | PNG/JPG | Replica stile, colori, componenti reali |
| Design di competitor | PNG/JPG | Capisce il mercato visivo di riferimento |
| Linee guida brand | PDF | Estrae palette, font, regole visive |
| Brief del progetto | DOCX/PDF | Usa testi reali, capisce vincoli |
| Dati da presentare | XLSX | Genera grafici e visualizzazioni coerenti |
| Presentazione esistente | PPTX | Mantiene stile e template, aggiunge contenuto |
| Screenshot competitor | PNG/JPG | Differenzia o ispira dipende dall'istruzione |

### Il Web Capture Tool

Invece di fare screenshot manuali, usa il web capture tool: fornisci l'URL del tuo prodotto o sito, e Claude cattura direttamente gli elementi visivi. Il risultato è che i prototipi sembrano il tuo prodotto reale — stesso header, stessa palette, stesso stile generale.

**Come usarlo:**
1. Nella sidebar, cerca l'opzione "Cattura dal sito" o "Web capture"
2. Incolla l'URL della pagina di riferimento
3. Claude analizza e cattura lo stile
4. Usa questo come base visiva per il nuovo progetto

---

## L1.5 — Prime Iterazioni: i 4 Modi per Modificare

Una volta che hai il primo draft, hai quattro modi per raffinarlo. Ognuno è ottimale per scenari diversi.

### Modo 1: Chat (per cambiamenti strutturali)
**Quando usarlo:** vuoi cambiare il layout, aggiungere/rimuovere sezioni, cambiare il tono generale.

Esempi:
- "Aggiungi una sezione testimonial dopo le funzionalità"
- "Rendi il design più scuro e premium"
- "Elimina la sezione pricing e sostituiscila con un comparison table"
- "Cambia il layout da una a due colonne"

### Modo 2: Tweaks / Commenti Inline (per cambiamenti puntuali)
**Quando usarlo:** vuoi modificare un elemento specifico senza toccare il resto.

Come funziona: clicchi sull'elemento sulla canvas → si apre un pannello → scrivi la modifica.

Esempi:
- [clic sul titolo] "Aumenta il font size di 4px"
- [clic su un bottone] "Usa il colore brand principale, non questo grigio"
- [clic su un'immagine placeholder] "Sostituisci con un'icona astratta"
- [clic su uno spazio] "C'è troppo spazio qui, riduci il padding"

### Modo 3: Editing Diretto del Testo
**Quando usarlo:** devi cambiare i testi senza modificare il layout.

Clicca direttamente su qualsiasi testo nella canvas e modificalo come faresti in un editor. Claude mantiene automaticamente la coerenza visiva: gerarchia tipografica, stile, peso del font.

### Modo 4: Adjustment Knobs (Manopole Dinamiche)
**Quando usarlo:** vuoi regolare un parametro quantitativo senza sapere il valore esatto.

Claude può creare su richiesta degli slider interattivi per:
- Spaziatura tra elementi (padding/margin)
- Intensità e saturazione dei colori
- Peso dei caratteri (light ↔ bold)
- Dimensione dei componenti
- Contrasto generale

**Come richiederli:**
> "Crea una manopola per regolare il padding verticale tra le sezioni"

Sposti lo slider, vedi il risultato in tempo reale, quando trovi il valore giusto Claude lo applica a tutto il design in modo coerente.

---

## L1.6 — Il Tuo Primo Progetto Completo: Esercizio Guidato

**Obiettivo:** creare un one-pager professionale in meno di 20 minuti.

**Scenario:** sei un consulente freelance (o un'azienda — adatta al tuo contesto) e devi presentare i tuoi servizi a un potenziale cliente.

**Step 1 — Prompt iniziale (2 minuti):**
```
Crea un one-pager formato A4 verticale per presentare i servizi
di [il tuo nome/azienda] a potenziali clienti [tipo di azienda target].

Servizi offerti: [lista i tuoi 3 servizi principali]
Proposta di valore: [in una frase, perché sceglierti]
Tono: professionale ma accessibile

Struttura:
- Header con nome/logo e tagline
- Proposta di valore principale (headline grande)
- 3 servizi con breve descrizione
- Come lavoro (processo in 3-4 step)
- Risultati / numeri chiave (usa placeholder realistici)
- CTA con email e sito
```

**Step 2 — Prima iterazione (3 minuti):**
Guarda il risultato. Identifica la cosa che ti piace di meno. Clicca su quell'elemento e modifica. Non cercare la perfezione subito: un cambiamento alla volta.

**Step 3 — Seconda iterazione (3 minuti):**
Usa la chat per un cambiamento strutturale: "Rendi il design più [aggettivo che rappresenta meglio il tuo brand]."

**Step 4 — Testo reale (5 minuti):**
Sostituisci i testi placeholder con i tuoi testi reali usando l'editing diretto.

**Step 5 — Export (2 minuti):**
Esporta in PDF. Hai il tuo primo deliverable professionale.

---

## ✅ TEST LIVELLO 1

1. Qual è la differenza principale tra un prompt tecnico e un prompt contestuale?
2. Cosa significano le lettere del framework P.A.T.C.?
3. Quando userest i Tweaks invece della chat per modificare?
4. Quale tipo di file caricheresti per far sì che Claude usi i tuoi dati reali in una presentazione?
5. Cosa sono gli "Adjustment Knobs"?

**Risposte:** Tecnico = specifiche CSS/px, Contestuale = audience/obiettivo/tono / Prodotto-Audience-Target-Carattere / Tweaks per elementi specifici, Chat per cambiamenti generali / XLSX / Slider interattivi per regolare parametri quantitativi

---

---

# ░░ LIVELLO 2 ░░
# INTERMEDIO
### Brand, collaborazione, export professionale

---

## L2.1 — Il Design System: il Cuore dell'Automazione

Il design system è la funzionalità che trasforma Claude Design da "tool utile" a "asset aziendale". Capirla bene è il salto di qualità più importante del livello intermedio.

### Cosa è un design system

Un design system è l'insieme di regole visive che definiscono l'identità grafica di un'organizzazione:
- **Palette colori** (primari, secondari, semantici: success/warning/error)
- **Tipografia** (font family, pesi, dimensioni, gerarchia)
- **Componenti** (bottoni, card, form, navigation, badge)
- **Spaziatura** (grid, padding standard, margini)
- **Tono visivo** (angoli arrotondati vs spigolosi, densità, uso degli spazi bianchi)

### Come Claude costruisce il design system automaticamente

Durante l'onboarding del primo progetto, Claude esegue questo processo:

**Percorso A — Dal codebase:**
Claude scansiona i file CSS/SCSS/Tailwind e il codice del frontend. Estrae variabili colore, import di font, classi di spacing, componenti riutilizzabili. È il metodo più accurato perché usa i valori esatti già in uso nel prodotto reale.

```
Esempio di cosa estrae da un file CSS:
:root {
  --color-primary: #0066FF;    ← diventa il tuo colore brand
  --color-text: #1a1a2e;       ← diventa il colore testo
  --font-body: 'Inter', sans;  ← diventa il tuo font
  --radius-md: 8px;            ← diventa il border-radius standard
}
```

**Percorso B — Da file di brand:**
Carichi PDF delle linee guida, screenshot del sito, immagini con la palette. Claude analizza visivamente e costruisce un design system approssimato. Meno preciso del codebase, ma sufficiente per il 90% dei casi.

**Percorso C — Dall'URL (web capture):**
Fornisci l'URL del sito e Claude cattura stili, layout e componenti direttamente. Utile se non hai accesso al codice sorgente.

### Multi-brand: gestire più design system

I team possono mantenere più design system nella stessa organizzazione. Scenari d'uso:

- **Agenzia:** un design system per ogni cliente
- **Holding:** brand separati per ogni prodotto/divisione
- **B2B con white label:** versioni brandizzate per clienti diversi

Per passare da un design system all'altro, selezioni quello attivo prima di creare un nuovo progetto. Tutti i progetti ereditano automaticamente le regole del sistema selezionato.

### Raffinamento progressivo del design system

Il design system non è statico. Puoi migliorarlo nel tempo:
- Aggiungere componenti mancanti ("aggiungi al design system un componente card con immagine in evidenza")
- Correggere interpretazioni errate ("il colore primario dovrebbe essere più saturo")
- Aggiornare dopo un rebrand

---

## L2.2 — Prompt Avanzati con Reference Material

### La tecnica "ispira + differenzia"

Invece di partire da zero, usa i design dei competitor come punto di partenza strategico:

```
Carico lo screenshot del sito di [competitor].

Crea una landing page per [il mio prodotto] che:
- Abbia la stessa chiarezza strutturale di questo competitor
- Si differenzi nettamente nello stile visivo (più [aggettivo])
- Comunichi [il mio punto di forza distintivo]
```

### La tecnica "ricostruzione fedele"

Per prototipi che devono sembrare il prodotto reale:

```
Usando il web capture del nostro sito [URL], crea una nuova
schermata che mostra [nuova funzionalità].
Deve sembrare una schermata reale del nostro prodotto, non un mockup.
La funzionalità mostra: [descrizione del flusso]
```

### La tecnica "documento → design"

Hai un brief, un piano, un documento di testo? Trasformalo in design:

```
[Carica il PDF/DOCX del brief]

Basandoti su questo documento, crea:
- Un one-pager che sintetizza i punti chiave per [audience]
- Usa solo le informazioni presenti nel documento
- Evidenzia: [cosa enfatizzare]
- Tono: [come adattare la voce]
```

---

## L2.3 — Collaborazione: come lavorare in team

### Livelli di accesso

Claude Design supporta condivisione a scope organizzativo con tre livelli:

| Livello | Visibilità | Permessi |
|---|---|---|
| **Privato** | Solo tu | Visualizzare, modificare, esportare |
| **Link interno** | Chiunque nell'org con il link | Solo visualizzare |
| **Accesso di modifica** | Colleghi invitati | Modificare il design, chattare con Claude |

### Workflow di collaborazione asincrona

Claude Design non ha co-editing in tempo reale (come Google Docs). La collaborazione è **asincrona**: un utente alla volta interagisce con il design. Il workflow ottimale per team:

```
1. Designer A crea il draft iniziale
   ↓
2. Designer A condivide il link con permesso di visualizzazione
   al team per review
   ↓
3. Il team lascia feedback via commenti o in un canale separato
   ↓
4. Designer A torna nel design, applica le modifiche via chat/tweaks
   ↓
5. Quando approvato, condivide con permesso di modifica per
   rifinitura finale o esportazione
```

### Best practice per la collaborazione

- **Naming dei progetti:** usa nomi chiari e con versione (es: "Landing_v2_revisione_marketing")
- **Commenti strutturati:** quando usi i tweaks per feedback, sii specifico: "Questo font è troppo piccolo per mobile" è meglio di "cambia il font"
- **Export intermedi:** condividi PDF o URL per review, non l'accesso diretto al canvas durante le fasi di feedback

---

## L2.4 — Export Professionale: quale formato per quale scopo

### PDF
**Quando:** documenti da condividere via email, stampare, presentare in formato fisso.

**Ideale per:** one-pager, case study, materiali di vendita, report, qualsiasi documento che non deve essere modificato dal destinatario.

**Limitazione:** layout fisso, non editabile, nessuna interattività.

### PPTX (PowerPoint)
**Quando:** presentazioni da aprire in PowerPoint o Google Slides, deck da personalizzare dopo l'export, presentazioni da presentare live.

**Ideale per:** pitch deck, presentazioni client, board meeting, training.

**Vantaggio chiave:** il destinatario può modificare liberamente. Google Slides può aprire PPTX tramite import.

### HTML Standalone
**Quando:** prototipi interattivi da condividere, demo offline, output da integrare in sistemi esistenti.

**Ideale per:** prototipi con interattività, demo per stakeholder tecnici, landing page da implementare.

**Vantaggio chiave:** funziona nel browser senza server, mantiene l'interattività generata da Claude.

### URL Interno
**Quando:** review veloci, condivisione rapida all'interno del team, raccolta feedback preliminari.

**Ideale per:** durante il processo creativo, per far vedere lo stato avanzamento.

**Limitazione:** accessibile solo ai membri dell'organizzazione con l'account Claude.

### Export verso Canva
**Quando:** il design deve essere raffinato ulteriormente con collaborazione real-time, pubblicato sui social, stampato in vari formati, o condiviso con persone esterne all'organizzazione.

**Flusso:** Claude Design genera il draft → export Canva → il design diventa un documento Canva completamente editabile con drag-and-drop, animazioni, pubblicazione diretta.

**Perché funziona:** Canva e Anthropic collaborano da due anni. Canva ha rilasciato un MCP (Model Context Protocol) per Claude già a luglio 2025. L'integrazione è profonda, non superficiale.

### Handoff a Claude Code
**Quando:** il design è approvato ed è pronto per essere implementato in produzione.

**Come funziona:** Claude impacchetta tutto in un "handoff bundle" che contiene layout, colori, tipografia, componenti, spaziature, e — aspetto unico — il **design intent**: la ragione di ogni scelta visiva. Claude Code usa questo bundle per implementare il design senza perdita di informazioni nel passaggio designer → sviluppatore.

**Differenza con Figma Dev Mode:** In Figma puoi esportare specifiche (px, colori, CSS). Nel handoff bundle di Claude Design sono incluse anche le motivazioni delle scelte, che Claude Code può usare per prendere decisioni coerenti quando implementa.

---

## L2.5 — Esercizio Intermedio: Pitch Deck Completo

**Obiettivo:** creare un pitch deck da 10 slide in meno di 30 minuti.

**Step 1 — Setup (3 min):**
Se non l'hai fatto, configura il design system caricando lo screenshot del tuo sito o il logo aziendale.

**Step 2 — Prompt principale (3 min):**
```
Crea un pitch deck da 10 slide per [il tuo progetto/azienda].
Struttura: cover, problema, soluzione, mercato (TAM/SAM/SOM),
           prodotto (screenshots), business model,
           traction (numeri chiave), team, roadmap, ask.
Target: [tipo di investor o stakeholder]
Tono: [scegli: visionario/concreto/tecnico]
Punti di forza da enfatizzare: [2-3 elementi distintivi]
Usa placeholder realistici per i dati che non specifico.
```

**Step 3 — Iterazione per slide (10 min):**
Apri ogni slide e usa i tweaks per aggiustare testi e layout. Concentrati sulle slide più importanti: cover, problema, soluzione, ask.

**Step 4 — Coerenza visiva (5 min):**
Nella chat: "Controlla la coerenza visiva tra tutte le slide: font, colori e spaziature devono essere uniformi."

**Step 5 — Export (2 min):**
Esporta in PPTX. Apri in PowerPoint o Google Slides e sostituisci i dati placeholder con quelli reali.

---

## ✅ TEST LIVELLO 2

1. Qual è il metodo più accurato per costruire un design system automatico?
2. Quali sono i tre livelli di condivisione in Claude Design?
3. Quando usi l'export HTML invece del PDF?
4. Cosa è incluso in un "handoff bundle" che non è incluso in un normale export Figma?
5. Come si chiama il protocollo che ha permesso l'integrazione Canva-Claude?

**Risposte:** Dal codebase / Privato, Link interno, Accesso modifica / HTML per prototipi interattivi o da implementare / Il design intent (le motivazioni delle scelte) / MCP (Model Context Protocol)

