import "dotenv/config";
import { getParentPageId, describeError } from "./lib/notion";
import { loadManifest, saveManifest, setDbState } from "./lib/state";
import { createDatabase } from "./lib/createDatabase";
import { addRelations } from "./lib/addRelations";
import { addRollupsAndFormulas } from "./lib/addRollupsFormulas";
import { buildOrder } from "../config/buildOrder";
import { schemaByKey } from "./schema";

/**
 * Orchestratore del build, in tre passate (§13.6):
 *   1) database + proprietà base
 *   2) relazioni
 *   3) rollup e formule (due giri: alcuni rollup dipendono da rollup di altri DB)
 * Idempotente: i database già nel manifest si saltano; relazioni/rollup si PATCH-ano.
 */
async function main() {
  const parentPageId = getParentPageId();
  const manifest = loadManifest();

  console.log("\n━━ Cruscotto del docente — build dello schema Notion ━━\n");

  // ── Passata 1 — database e proprietà base ─────────────────────────────────
  console.log("Passata 1/3 — database e proprietà base");
  for (const key of buildOrder) {
    const def = schemaByKey[key];
    if (manifest[key]) {
      console.log(`  • ${def.title}: già presente (salto)`);
      continue;
    }
    const state = await createDatabase(parentPageId, def);
    setDbState(manifest, key, state);
    console.log(`  ✓ ${def.title}`);
  }

  // ── Passata 2 — relazioni ─────────────────────────────────────────────────
  console.log("\nPassata 2/3 — relazioni");
  for (const key of buildOrder) {
    const def = schemaByKey[key];
    const n = await addRelations(def, manifest);
    if (n > 0) console.log(`  ✓ ${def.title}: ${n} relazioni`);
  }

  // ── Passata 3 — rollup e formule ──────────────────────────────────────────
  // Due giri: al primo alcuni rollup-di-rollup possono fallire perché il rollup
  // di destinazione non esiste ancora; al secondo giro esiste. Si segnalano solo
  // i fallimenti residui del giro finale.
  console.log("\nPassata 3/3 — rollup e formule");
  for (let sweep = 1; sweep <= 2; sweep++) {
    for (const key of buildOrder) {
      await addRollupsAndFormulas(schemaByKey[key], manifest, { logWarnings: sweep === 2 });
    }
  }
  console.log("  ✓ rollup e formule applicati");

  saveManifest(manifest);
  console.log("\n✅ Build completato.");
  console.log("   Prossimi passi:  npm run seed   (dati di esempio)   →   npm run verify\n");
}

main().catch((err) => {
  console.error("\n❌ Build interrotto:", describeError(err));
  process.exit(1);
});
