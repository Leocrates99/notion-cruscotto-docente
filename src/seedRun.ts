import "dotenv/config";
import { describeError } from "./lib/notion";
import { loadManifest } from "./lib/state";
import { seedEuripide } from "./seed";

/**
 * Inserisce i dati di esempio (UdA "Euripide"). Richiede che lo schema esista già
 * (esegui prima "npm run build"). È pensato per essere lanciato UNA volta come
 * collaudo: rilanciarlo crea pagine duplicate.
 */
async function main() {
  const m = loadManifest();
  if (!m.anni || !m.uda) {
    console.error('Manifest incompleto: esegui prima "npm run build".');
    process.exit(1);
  }

  console.log('\n━━ Seed — UdA "Euripide e la crisi del tragico" (§4.4) ━━\n');
  const { uda } = await seedEuripide();

  console.log("\n✅ Seed completato.");
  console.log("   Apri Notion e controlla che calcolino:");
  console.log("   • UdA → 'Ore pianificate' = 6 e 'Copertura %' ≈ 60");
  console.log("   • Programmazione → 'Scostamento' = 93 e 'Semaforo' = '○ margine'\n");
  console.log(`   (UdA creata: ${uda})\n`);
}

main().catch((err) => {
  console.error("❌ Seed:", describeError(err));
  process.exit(1);
});
