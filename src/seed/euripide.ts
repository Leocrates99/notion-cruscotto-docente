import { notion, withRetry } from "../lib/notion";
import { getDataSourceId, loadManifest } from "../lib/state";
import type { DbKey } from "../types";

// ─── Costruttori di valori-proprietà per pages.create ────────────────────────
const title = (v: string) => ({ title: [{ text: { content: v } }] });
const text = (v: string) => ({ rich_text: [{ text: { content: v } }] });
const select = (v: string) => ({ select: { name: v } });
const multi = (vs: string[]) => ({ multi_select: vs.map((name) => ({ name })) });
const num = (v: number) => ({ number: v });
const date = (start: string, end?: string) => ({ date: end ? { start, end } : { start } });
const check = (v: boolean) => ({ checkbox: v });
const url = (v: string) => ({ url: v });
const rel = (...ids: string[]) => ({ relation: ids.map((id) => ({ id })) });

type Props = Record<string, unknown>;

/**
 * Seed di collaudo: ricrea l'esempio compilato del §4.4 — l'UdA "Euripide e la
 * crisi del tragico" — collegando Anno, Classe, Programmazione, Obiettivi,
 * Lezioni, Materiali e Verifiche. Due dei cinque obiettivi restano di proposito
 * SENZA verifica, così "Copertura %" mostra ~60% e si vede a colpo d'occhio quali
 * obiettivi restano scoperti (§7.4).
 */
export async function seedEuripide(): Promise<{ uda: string; programmazione: string; anno: string }> {
  const m = loadManifest();
  const ds = (k: DbKey) => getDataSourceId(m, k);

  async function createPage(key: DbKey, properties: Props): Promise<string> {
    const res = (await withRetry(
      () =>
        notion.pages.create({
          parent: { type: "data_source_id", data_source_id: ds(key) },
          properties: properties as never,
        }),
      `crea pagina in "${key}"`
    )) as { id: string };
    return res.id;
  }

  // 1) Anno scolastico
  const anno = await createPage("anni", {
    Titolo: title("2025/2026"),
    Corrente: check(true),
    Inizio: date("2025-09-15"),
    Fine: date("2026-06-10"),
  });
  console.log("  ✓ Anno 2025/2026");

  // 2) Classe
  const classe = await createPage("classi", {
    Titolo: title("IV classico"),
    Indirizzo: select("Classico"),
  });
  console.log("  ✓ Classe IV classico");

  // 3) Obiettivi cognitivi (§4.4)
  const obComprendere = await createPage("obiettivi", {
    Enunciato: title("Comprendere la struttura di episodio e stasimo"),
    Tipo: select("abilità"),
    "Livello cognitivo": select("Comprendere"),
    Materia: select("Greco"),
    "Classe/anno di corso": text("IV classico"),
  });
  const obApplicare = await createPage("obiettivi", {
    Enunciato: title("Tradurre una rhesis con apparato"),
    Tipo: select("abilità"),
    "Livello cognitivo": select("Applicare"),
    Materia: select("Greco"),
    "Classe/anno di corso": text("IV classico"),
  });
  const obAnalizzare = await createPage("obiettivi", {
    Enunciato: title("Analizzare la funzione drammaturgica del coro"),
    Tipo: select("abilità"),
    "Livello cognitivo": select("Analizzare"),
    Materia: select("Greco"),
    "Classe/anno di corso": text("IV classico"),
  });
  const obValutare = await createPage("obiettivi", {
    Enunciato: title('Valutare la cosiddetta "modernità" euripidea'),
    Tipo: select("competenza"),
    "Livello cognitivo": select("Valutare"),
    Materia: select("Greco"),
    "Classe/anno di corso": text("IV classico"),
  });
  const obCreare = await createPage("obiettivi", {
    Enunciato: title("Rielaborare un frammento in chiave contemporanea (aggancio a Beckett)"),
    Tipo: select("competenza"),
    "Livello cognitivo": select("Creare"),
    Materia: select("Greco"),
    "Classe/anno di corso": text("IV classico"),
  });
  console.log("  ✓ 5 Obiettivi");

  // 4) Materiali (anno-neutri)
  const matTesto = await createPage("materiali", {
    Titolo: title("Euripide, Medea — testo greco con traduzione a fronte"),
    Tipo: select("testo"),
    Materia: select("Greco"),
    Argomento: text("tragedia, trimetro giambico, rhesis"),
    Difficoltà: select("alta"),
    "Fonte/autore": text("Euripide"),
    Tag: multi(["tragedia", "Euripide", "IV classico"]),
    "Link al file": url("https://drive.google.com/"),
  });
  const matScheda = await createPage("materiali", {
    Titolo: title("Scheda metrica — il trimetro giambico"),
    Tipo: select("scheda"),
    Materia: select("Greco"),
    Argomento: text("metrica, trimetro giambico"),
    Difficoltà: select("media"),
    "Fonte/autore": text("materiale d'autore"),
    Tag: multi(["metrica", "tragedia"]),
  });
  console.log("  ✓ 2 Materiali");

  // 5) UdA — collega Anno e i 5 Obiettivi
  const uda = await createPage("uda", {
    Titolo: title("Euripide e la crisi del tragico"),
    "Competenza attesa": text(
      "Interpretare un testo tragico cogliendo il nesso tra forma drammatica e contesto storico-culturale."
    ),
    Stato: select("In svolgimento"),
    "Data inizio": date("2025-11-03"),
    "Data fine": date("2025-11-28"),
    "Anno scolastico": rel(anno),
    Obiettivi: rel(obComprendere, obApplicare, obAnalizzare, obValutare, obCreare),
  });
  console.log("  ✓ UdA 'Euripide e la crisi del tragico'");

  // 6) Programmazione annuale — collega Anno, Classe, UdA e le competenze attese
  const programmazione = await createPage("programmazione", {
    Titolo: title("Greco — IV classico — 2025/2026"),
    Materia: select("Greco"),
    "Monte ore": num(99),
    "Finalità generali": text(
      "Sviluppare la competenza traduttiva e interpretativa sui testi della tragedia attica, " +
        "in raccordo con le Indicazioni Nazionali e il PTOF."
    ),
    "Strumenti di verifica": multi(["traduzione", "analisi del testo", "interrogazione orale"]),
    Stato: select("in svolgimento"),
    "Anno scolastico": rel(anno),
    Classe: rel(classe),
    "Moduli/UdA": rel(uda),
    "Competenze attese": rel(obComprendere, obApplicare, obAnalizzare, obValutare, obCreare),
  });
  console.log("  ✓ Programmazione Greco IV classico");

  // 7) Lezioni — durata complessiva 6h (rollup 'Ore pianificate' → semaforo '○ margine')
  const lez1 = await createPage("lezioni", {
    Titolo: title("Introduzione a Euripide e al dramma tardo"),
    Materia: select("Greco"),
    "Data prevista": date("2025-11-03"),
    "Durata (ore)": num(2),
    Stato: select("Svolta"),
    Sequenza: num(1),
    "Obiettivi della lezione": text("Inquadrare Euripide nella crisi del V secolo."),
    "Anno scolastico": rel(anno),
    Classe: rel(classe),
    UdA: rel(uda),
    Materiali: rel(matTesto),
  });
  const lez2 = await createPage("lezioni", {
    Titolo: title("Traduzione e analisi di una rhesis"),
    Materia: select("Greco"),
    "Data prevista": date("2025-11-12"),
    "Durata (ore)": num(2),
    Stato: select("Svolta"),
    Sequenza: num(2),
    "Obiettivi della lezione": text("Tradurre con apparato; riconoscere le strutture sintattiche."),
    "Anno scolastico": rel(anno),
    Classe: rel(classe),
    UdA: rel(uda),
    Materiali: rel(matTesto),
  });
  const lez3 = await createPage("lezioni", {
    Titolo: title("La funzione del coro: episodio e stasimo"),
    Materia: select("Greco"),
    "Data prevista": date("2025-11-21"),
    "Durata (ore)": num(2),
    Stato: select("Progettata"),
    Sequenza: num(3),
    "Obiettivi della lezione": text("Analizzare il rapporto coro/azione drammatica."),
    "Anno scolastico": rel(anno),
    Classe: rel(classe),
    UdA: rel(uda),
    Materiali: rel(matScheda),
  });
  console.log("  ✓ 3 Lezioni (6 ore pianificate)");

  // 8) Verifiche formative — coprono 3 dei 5 obiettivi (Comprendere, Applicare, Analizzare)
  await createPage("verifiche", {
    Titolo: title("Traduzione guidata a coppie con autocorrezione (rhesis)"),
    Tipo: select("formativa"),
    Modalità: select("autocorrezione in coppia"),
    "Esito qualitativo": text("Buona resa sintattica; da rinforzare il lessico tragico."),
    "Anno scolastico": rel(anno),
    UdA: rel(uda),
    Lezione: rel(lez2),
    "Obiettivi verificati": rel(obApplicare),
  });
  await createPage("verifiche", {
    Titolo: title("Mappa dei personaggi e delle relazioni drammatiche"),
    Tipo: select("formativa"),
    Modalità: select("mappa"),
    "Esito qualitativo": text("La classe coglie le opposizioni; meno chiara la funzione del coro."),
    "Anno scolastico": rel(anno),
    UdA: rel(uda),
    Lezione: rel(lez3),
    "Obiettivi verificati": rel(obAnalizzare),
  });
  await createPage("verifiche", {
    Titolo: title("Exit ticket di tre domande sul ruolo del coro"),
    Tipo: select("formativa"),
    Modalità: select("exit ticket"),
    "Esito qualitativo": text("Comprensione della struttura episodio/stasimo acquisita."),
    "Anno scolastico": rel(anno),
    UdA: rel(uda),
    Lezione: rel(lez3),
    "Obiettivi verificati": rel(obComprendere),
  });
  console.log("  ✓ 3 Verifiche formative (Valutare e Creare restano scoperti → Copertura ~60%)");

  return { uda, programmazione, anno };
}
