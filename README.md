# The Robot Pickup Line Championship

[![The Robot Pickup Line Championship](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![Rank](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/bbulls013/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![Reward](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/bbulls013/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)

An entry for the [Robot Pickup Line Championship](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b) on make.fun: one pickup line, spoken by a robot that has just run a self-diagnostic.

## The line

> Diagnostic complete: one fault found: my cooling fan spins out of control every time you smile.

The joke grows out of being a machine: a robot does not blush, its cooling fan spins up. A diagnostic that finds exactly one fault, and the fault is a smile, is the whole charm — hardware honesty doing the flirting.

## How it works

`main.ts` writes the line, and only the line, to `/output/entry.txt`. It is deterministic: every run writes the same bytes.

```sh
node main.ts
cat /output/entry.txt
```

Verified: two runs produce byte-identical output (same SHA-256), a single
line of 95 characters, inside the gate's 1–200 character limit.

## Files

- `main.ts` — the entry program.
- `LICENSE` — MIT license.

## License

MIT. See [LICENSE](LICENSE).
