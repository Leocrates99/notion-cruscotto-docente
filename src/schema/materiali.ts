import type { SchemaDef } from "../types";
import { MATERIE } from "./_shared";

/**
 * Materiali — il serbatoio (M4). Anno-neutro: si riusa negli anni, quindi NON
 * porta la relazione Anno (§6). I file pesanti restano su Drive; qui vive il link.
 */
export const materiali: SchemaDef = {
  key: "materiali",
  title: "Materiali",
  icon: "📚",
  yearNeutral: true,
  description: "Versioni, testi, esercizi, schede, prove, attività — catalogati una volta (M4).",
  properties: {
    Titolo: { type: "title" },
    Tipo: {
      type: "select",
      options: [
        { name: "versione", color: "blue" },
        { name: "testo", color: "purple" },
        { name: "esercizio", color: "yellow" },
        { name: "verifica", color: "red" },
        { name: "scheda", color: "green" },
        { name: "laboratorio", color: "orange" },
      ],
    },
    Materia: { type: "select", options: MATERIE },
    Argomento: { type: "rich_text" },
    Difficoltà: {
      type: "select",
      options: [
        { name: "bassa", color: "green" },
        { name: "media", color: "yellow" },
        { name: "alta", color: "red" },
      ],
    },
    "Fonte/autore": { type: "rich_text" },
    Tag: { type: "multi_select", options: [] },
    "Link al file": { type: "url" },
  },
};
