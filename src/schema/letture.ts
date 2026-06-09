import type { SchemaDef } from "../types";

/**
 * Letture e ricerca (M9). Anno-neutro: registro di letture professionali e
 * critiche, con appunti e "citazioni-innesco" riusabili in didattica o produzione.
 */
export const letture: SchemaDef = {
  key: "letture",
  title: "Letture",
  icon: "📖",
  yearNeutral: true,
  description: "Letture professionali e critiche con note e citazioni-innesco (M9).",
  properties: {
    Titolo: { type: "title" },
    Autore: { type: "rich_text" },
    Stato: {
      type: "select",
      options: [
        { name: "da leggere", color: "gray" },
        { name: "in lettura", color: "yellow" },
        { name: "letto", color: "green" },
      ],
    },
    Note: { type: "rich_text" },
    "Citazioni-innesco": { type: "rich_text" },
  },
};
