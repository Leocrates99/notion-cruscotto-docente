import type { SchemaDef } from "../types";

/**
 * Scadenze e adempimenti (M2): la mia coda personale con priorità e stato.
 * L'aggancio "a un Progetto | una Programmazione | una Classe | una UdA" del
 * prospetto NON è una relazione polimorfica (non esiste in Notion): è modellato
 * come quattro relazioni distinte e facoltative (§13.6).
 */
export const scadenze: SchemaDef = {
  key: "scadenze",
  title: "Scadenze",
  icon: "⏰",
  description: "Verbali, consegne, riunioni, formazione, adempimenti amministrativi (M2).",
  properties: {
    Titolo: { type: "title" },
    Data: { type: "date" },
    Tipo: {
      type: "select",
      options: [
        { name: "verbale", color: "blue" },
        { name: "consegna", color: "orange" },
        { name: "riunione", color: "purple" },
        { name: "formazione", color: "green" },
        { name: "amministrativo", color: "gray" },
      ],
    },
    Stato: {
      type: "select",
      options: [
        { name: "da fare", color: "gray" },
        { name: "in corso", color: "yellow" },
        { name: "fatto", color: "green" },
      ],
    },
    Priorità: {
      type: "select",
      options: [
        { name: "alta", color: "red" },
        { name: "media", color: "yellow" },
        { name: "bassa", color: "green" },
      ],
    },
  },
  relations: [
    { name: "Anno scolastico", target: "anni" },
    { name: "Programmazione", target: "programmazione" },
    { name: "Progetto", target: "progetti" },
    { name: "Classe", target: "classi" },
    { name: "UdA", target: "uda" },
  ],
};
