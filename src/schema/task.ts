import type { SchemaDef } from "../types";

/**
 * Task — sotto-attività dei Progetti (vista kanban per fase, §8).
 * Riceve la relazione inversa "Progetto" dalla duale dichiarata su Progetti.
 */
export const task: SchemaDef = {
  key: "task",
  title: "Task",
  icon: "☑️",
  description: "Le tappe operative di un progetto, con stato e scadenza.",
  properties: {
    Titolo: { type: "title" },
    Stato: {
      type: "select",
      options: [
        { name: "da fare", color: "gray" },
        { name: "in corso", color: "yellow" },
        { name: "fatto", color: "green" },
      ],
    },
    Scadenza: { type: "date" },
  },
};
