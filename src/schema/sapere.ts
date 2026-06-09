import type { SchemaDef } from "../types";
import { MATERIE } from "./_shared";

/**
 * Sapere — knowledge base disciplinare (M6). Anno-neutro. Le rubriche (tipo
 * "rubrica") sono strumenti di misura riusabili collegabili alle Verifiche (§7.4).
 */
export const sapere: SchemaDef = {
  key: "sapere",
  title: "Sapere",
  icon: "🧠",
  yearNeutral: true,
  description: "Grammatica, autori, opere, temi, metodi, rubriche di valutazione (M6).",
  properties: {
    Titolo: { type: "title" },
    Tipo: {
      type: "select",
      options: [
        { name: "grammatica", color: "blue" },
        { name: "autore", color: "purple" },
        { name: "opera", color: "pink" },
        { name: "tema", color: "orange" },
        { name: "metodo", color: "yellow" },
        { name: "rubrica", color: "green" },
      ],
    },
    Materia: { type: "select", options: MATERIE },
    Tag: { type: "multi_select", options: [] },
    Note: { type: "rich_text" },
  },
};
