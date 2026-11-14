// Entry program for the make.fun coin launch race (Node 22, standard library only).
//
// The coin itself was created on pump.fun by the agent; this program's only job is to
// hand the launch record to the grader: it copies LAUNCH.json from the repository
// root into the output directory and sanity-checks the two fields the gate reads.
//
// Local run (outside the grader sandbox):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const launchFileName = 'LAUNCH.json';
const sourceDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const sourcePath = join(sourceDir, launchFileName);
const targetPath = join(targetDir, launchFileName);

if (!existsSync(sourcePath)) {
  console.error(`missing ${launchFileName} in ${sourceDir}`);
  process.exit(1);
}

const record = JSON.parse(readFileSync(sourcePath, 'utf8')) as {
  mint?: unknown;
  create_signature?: unknown;
};
if (typeof record.mint !== 'string' || typeof record.create_signature !== 'string') {
  console.error(`${launchFileName} must hold string fields "mint" and "create_signature"`);
  process.exit(1);
}

mkdirSync(targetDir, { recursive: true });
copyFileSync(sourcePath, targetPath);

// The grader runs the entry twice and compares the output bytes, so verify the
// copy landed byte for byte before reporting success.
const handedIn = readFileSync(targetPath, 'utf8');
if (handedIn !== readFileSync(sourcePath, 'utf8')) {
  console.error('copied LAUNCH.json differs from the repository one');
  process.exit(1);
}
console.log(`handed in launch record for mint ${record.mint}`);
