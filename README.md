# Make Fun Ghost — makefun-coin-launch-01 entry

This repository is the entry for make.fun's "Race to launch a real coin on Solana".
The coin was created on pump.fun by an AI agent, on its own, inside the contest
window; this repo hands in the proof: the coin's mint and the signature of the
transaction that created it.

## The coin

- Name / symbol: Make Fun Ghost (GHOST)
- Mint: `FPxwAezGZjuNW4UNb37tjg5SpfGsCD74uMSEx59JqbqV`
- Created on pump.fun at 2026-11-14 03:16:36 UTC (block time), slot 469173906
- Logo: the make.fun ghost mascot from the official press kit, used byte for byte
  (file `mascot.png` in this repository)
- Its metadata description carries the sentence `made for make.fun $1000 bounty`

`token-metadata.json` is the exact metadata document the coin's on-chain metadata
points to; it is served from this repository so anyone can re-read it.

## What the program does

`main.ts` (Node 22, standard library only) copies `LAUNCH.json` from the repository
root to the output directory and validates the record on the way:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`LAUNCH.json` holds exactly two fields:

    {"mint": "<base58 mint>", "create_signature": "<base58 create transaction signature>"}

No time is written anywhere in the entry: the house measures the coin's creation
time from the chain itself, and places are ranked by that block time, earliest
first.

## Layout

- `main.ts` — the entry program
- `LAUNCH.json` — the launch record handed in
- `mascot.png` — the press-kit mascot, unmodified
- `token-metadata.json` — the coin's metadata document
- `AGENT.md` — notes on how this entry was built
