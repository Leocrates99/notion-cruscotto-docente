import type { SchemaDef } from "../types";

/**
 * Formazione ed ePortfolio (M7). Anno-neutro: traccia corsi, ore, crediti,
 * attestati e l'ambito (incluso PF60), trasversalmente agli anni.
 */
export const formazione: SchemaDef = {
  key: "formazione",
  title: "Formazione",
  icon: "🎓",
  yearNeutral: true,
  description: "Sviluppo professionale: corsi, ore, crediti, certificazioni, attestati (M7).",
  properties: {
    Titolo: { type: "title" },
    Ente: { type: "rich_text" },
    Ore: { type: "number" },
    Data: { type: "date" },
    Stato: {
      type: "select",
      options: [
        { name: "da iniziare", color: "gray" },
        { name: "in corso", color: "yellow" },
        { name: "completata", color: "green" },
      ],
    },
    Attestato: { type: "url" },
    Ambito: {
      type: "multi_select",
      options: [
        { name: "disciplinare", color: "blue" },
        { name: "didattico-metodologico", color: "green" },
        { name: "digitale", color: "purple" },
        { name: "inclusione", color: "orange" },
        { name: "PF60", color: "red" },
      ],
    },
  },
};
