// Tell a Whole Story in 32 Characters — a Wi-Fi network name.
// The program writes the name to /output/entry.txt (at most 32 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "TheLandlordLivesUpstairsNow";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
