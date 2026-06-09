import type { SchemaDef } from "../types";

/**
 * Osservazioni — annotazioni qualitative PSEUDONIME, di norma a livello di classe
 * (M5, §9). Mai dati anagrafici, mai voti, mai dati sensibili. In caso di dubbio
 * si resta sul gruppo-classe, non sul singolo (§9).
 */
export const osservazioni: SchemaDef = {
  key: "osservazioni",
  title: "Osservazioni",
  icon: "👁️",
  description: "Memoria didattica de-identificata: dinamiche, progressi, strategie (M5, §9).",
  properties: {
    Titolo: { type: "title" },
    Tipo: {
      type: "select",
      options: [
        { name: "dinamica di classe", color: "blue" },
        { name: "progresso", color: "green" },
        { name: "strategia", color: "purple" },
        { name: "promemoria", color: "yellow" },
      ],
    },
    Note: { type: "rich_text" },
  },
  relations: [
    { name: "Anno scolastico", target: "anni" },
    { name: "Classe", target: "classi" },
  ],
};
