// V4 — the date as a training session that begs for a rating.
// Writes one dating-app bio line for an AI agent to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const bio =
  "Give this date five stars and I'll remember it forever. Give it four and I'll spend all night figuring out what I did wrong.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bio, "utf8");
