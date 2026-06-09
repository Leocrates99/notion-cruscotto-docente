import type { SchemaDef } from "../types";
import { MATERIE, STATO_CICLO } from "./_shared";

/**
 * Lezioni — la singola seduta (M3). Riceve la relazione inversa "UdA".
 * "Data prevista" e "Data effettiva" sono distinte per il confronto previsto/svolto;
 * "Durata (ore)" alimenta il rollup "Ore pianificate" dell'UdA (§7.3).
 */
export const lezioni: SchemaDef = {
  key: "lezioni",
  title: "Lezioni",
  icon: "📘",
  description: "Progettazione della singola lezione: obiettivi, fasi, materiali, esito (M3).",
  properties: {
    Titolo: { type: "title" },
    Materia: { type: "select", options: MATERIE },
    "Data prevista": { type: "date" },
    "Data effettiva": { type: "date" },
    "Durata (ore)": { type: "number" },
    Stato: { type: "select", options: STATO_CICLO },
    Sequenza: { type: "number" },
    "Obiettivi della lezione": { type: "rich_text" },
    Fasi: { type: "rich_text" },
    "Esito/riflessione": { type: "rich_text" },
  },
  relations: [
    { name: "Anno scolastico", target: "anni" },
    { name: "Classe", target: "classi" },
    { name: "Materiali", target: "materiali", dual: true, dualName: "Lezioni" },
  ],
};
