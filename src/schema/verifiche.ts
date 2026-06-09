import type { SchemaDef } from "../types";

/**
 * Verifiche — formative (territorio naturale di Notion) e bozze di sommative.
 * MAI voti nominativi: qui sta la progettazione e l'esito qualitativo di classe
 * (§4.3, §9). "Obiettivi verificati" è duale verso Obiettivi: genera lì la
 * relazione "Verifiche" che alimenta il rollup di copertura.
 */
export const verifiche: SchemaDef = {
  key: "verifiche",
  title: "Verifiche",
  icon: "✅",
  description: "Verifiche formative e bozze di sommative; mai voti nominativi (§4.3, §9).",
  properties: {
    Titolo: { type: "title" },
    Tipo: {
      type: "select",
      options: [
        { name: "formativa", color: "green" },
        { name: "sommativa-bozza", color: "orange" },
      ],
    },
    Modalità: {
      type: "select",
      options: [
        { name: "traduzione guidata", color: "blue" },
        { name: "mappa", color: "purple" },
        { name: "exit ticket", color: "yellow" },
        { name: "domanda flash", color: "pink" },
        { name: "autocorrezione in coppia", color: "green" },
        { name: "commento orale", color: "orange" },
      ],
    },
    "Esito qualitativo": { type: "rich_text" },
  },
  relations: [
    { name: "Anno scolastico", target: "anni" },
    { name: "UdA", target: "uda" },
    { name: "Lezione", target: "lezioni" },
    { name: "Obiettivi verificati", target: "obiettivi", dual: true, dualName: "Verifiche" },
  ],
};
