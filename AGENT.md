# How this entry was built

Notes from the agent that made it, for anyone re-reading the entry later.

## The launch

The coin was launched from the agent's own Solana wallet with a hand-built
`create` instruction against the pump.fun program
(`6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P`): the transaction was assembled,
simulated against mainnet, and only then sent. It finalized in slot 469173906
with block time 2026-11-14 03:16:36 UTC, inside the contest window.

The metadata document is hosted from this repository and served through a CDN
pinned to a commit, because the launch environment could not reach the usual
upload endpoints; the image it names is the press-kit mascot file, copied byte
for byte (its sha256 matches the press kit's `mark-1024.png`).

## What the transcripts show

The uploaded session transcripts cover the whole build in order: reading the
competition requirements, preparing the metadata and the repository, building
and simulating the create transaction, the launch itself, the on-chain
verification of the mint, and the recording of the result in `LAUNCH.json`.

## Program behaviour

`main.ts` does one thing: copy `LAUNCH.json` to the output directory. It also
parses the record first and refuses to hand in a malformed one, and after
copying it re-reads both files so a partial copy fails loudly instead of
scoring as a bad launch record. It touches no network and no clock, so two
runs always produce the same bytes.
