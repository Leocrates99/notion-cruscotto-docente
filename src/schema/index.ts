import { buildOrder } from "../../config/buildOrder";
import type { DbKey, SchemaDef } from "../types";

import { anni } from "./anni";
import { classi } from "./classi";
import { obiettivi } from "./obiettivi";
import { materiali } from "./materiali";
import { sapere } from "./sapere";
import { programmazione } from "./programmazione";
import { uda } from "./uda";
import { lezioni } from "./lezioni";
import { verifiche } from "./verifiche";
import { osservazioni } from "./osservazioni";
import { idee } from "./idee";
import { progetti } from "./progetti";
import { task } from "./task";
import { scadenze } from "./scadenze";
import { formazione } from "./formazione";
import { letture } from "./letture";
import { riunioni } from "./riunioni";

/** Tutte le definizioni di database, indicizzate per chiave logica. */
export const schemaByKey: Record<DbKey, SchemaDef> = {
  anni,
  classi,
  obiettivi,
  materiali,
  sapere,
  programmazione,
  uda,
  lezioni,
  verifiche,
  osservazioni,
  idee,
  progetti,
  task,
  scadenze,
  formazione,
  letture,
  riunioni,
};

/** Le definizioni in ordine di build (§13.6). */
export const schemas: SchemaDef[] = buildOrder.map((key) => schemaByKey[key]);
