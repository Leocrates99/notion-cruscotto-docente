import type { SchemaDef } from "../types";
import { MATERIE } from "./_shared";

/**
 * Idee — la fase divergente del brainstorming (§7.1). Un'idea "promossa" diventa
 * una UdA o una Lezione, ma resta collegata come genesi (le due relazioni
 * "Promossa in ..."). Anno-neutro finché non viene promossa.
 */
export const idee: SchemaDef = {
  key: "idee",
  title: "Idee",
  icon: "💡",
  yearNeutral: true,
  description: "Spunti grezzi: agganci antico-moderno, testi, attività, domande (§7.1).",
  properties: {
    Spunto: { type: "title" },
    Tipo: {
      type: "select",
      options: [
        { name: "idea-lezione", color: "blue" },
        { name: "idea-UdA", color: "purple" },
        { name: "attività", color: "green" },
        { name: "aggancio", color: "orange" },
        { name: "domanda", color: "yellow" },
      ],
    },
    Materia: { type: "select", options: MATERIE },
    Stato: {
      type: "select",
      options: [
        { name: "grezza", color: "gray" },
        { name: "in sviluppo", color: "yellow" },
        { name: "promossa", color: "green" },
      ],
    },
  },
  relations: [
    { name: "Ispirata da (Materiali)", target: "materiali" },
    { name: "Ispirata da (Sapere)", target: "sapere" },
    { name: "Promossa in UdA", target: "uda" },
    { name: "Promossa in Lezione", target: "lezioni" },
  ],
};
