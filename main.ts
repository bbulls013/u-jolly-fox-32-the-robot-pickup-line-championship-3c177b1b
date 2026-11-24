// The Robot Pickup Line Championship — entry program.
//
// A robot runs a self-diagnostic and reports the only fault it can find:
// its cooling fan spins out of control whenever a certain someone smiles.
// The program writes that one line to /output/entry.txt, exactly as the
// judge will read it: a single line, well under 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Diagnostic complete: one fault found: my cooling fan spins out of control every time you smile.";

// The gate allows 1 to 200 characters, a single line, not only whitespace.
// Fail loudly here instead of shipping a line the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Pickup line is ${LINE.length} characters; the gate needs 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
