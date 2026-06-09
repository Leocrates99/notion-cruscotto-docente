import type { SchemaDef } from "../types";

/**
 * Anni scolastici — perno dell'archivio per filtro (§6).
 * "Corrente" alimenta il filtro della vista "Anno corrente" (§8, da creare a mano).
 * "Nota di bilancio" è il nucleo dell'Annuario (cosa ha funzionato, cosa cambiare).
 */
export const anni: SchemaDef = {
  key: "anni",
  title: "Anni scolastici",
  icon: "📅",
  description: "Ogni dato anno-specifico si lega a un anno per l'archivio cronologico (§6).",
  properties: {
    Titolo: { type: "title" },
    Corrente: { type: "checkbox" },
    Inizio: { type: "date" },
    Fine: { type: "date" },
    "Nota di bilancio": { type: "rich_text" },
  },
};
