import type { DbKey } from "../src/types";

/**
 * Ordine topologico di creazione dei database (§13.6).
 *
 * Una proprietà-relazione richiede che il database di DESTINAZIONE esista già.
 * Questo ordine garantisce che, quando si creano le relazioni (passata 2), tutti
 * i target siano stati creati nella passata 1. La passata 3 (rollup/formule) viene
 * eseguita in due giri perché alcuni rollup dipendono da rollup di altri DB
 * (es. Programmazione."Ore UdA totali" somma UdA."Ore pianificate").
 */
export const buildOrder: DbKey[] = [
  "anni",
  "classi",
  "obiettivi",
  "materiali",
  "sapere",
  "programmazione",
  "uda",
  "lezioni",
  "verifiche",
  "osservazioni",
  "idee",
  "progetti",
  "task",
  "scadenze",
  "formazione",
  "letture",
  "riunioni",
];
