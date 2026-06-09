import type { SchemaDef } from "../types";
import { STATO_CICLO } from "./_shared";

/**
 * Progetti e laboratori (M8): teatro, UdA interdisciplinari, viaggi, PCTO.
 * Seguono la stessa pipeline a stati di lezioni/UdA (§7) e si archiviano per anno.
 * Hanno sotto-task collegati (relazione duale → Task: "Progetto").
 */
export const progetti: SchemaDef = {
  key: "progetti",
  title: "Progetti",
  icon: "🎭",
  description: "Progetti con fasi, milestone e nota di bilancio finale (M8, §7.5).",
  properties: {
    Titolo: { type: "title" },
    Tipo: {
      type: "select",
      options: [
        { name: "laboratorio", color: "purple" },
        { name: "UdA interdisciplinare", color: "blue" },
        { name: "viaggio d'istruzione", color: "orange" },
        { name: "PCTO", color: "green" },
      ],
    },
    Stato: { type: "select", options: STATO_CICLO },
    "Data inizio": { type: "date" },
    "Data fine": { type: "date" },
    "Nota di bilancio": { type: "rich_text" },
  },
  relations: [
    { name: "Anno scolastico", target: "anni" },
    { name: "Task", target: "task", dual: true, dualName: "Progetto" },
  ],
};
