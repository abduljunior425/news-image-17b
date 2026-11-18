# news-image-17b — The World Today: Tuesday 17 November 2026

![competition](https://make.fun/badge/news-image-20261117.svg)
![rank](https://make.fun/badge/news-image-20261117/abduljunior425/news-image-17b/rank.svg)
![reward](https://make.fun/badge/news-image-20261117/abduljunior425/news-image-17b/reward.svg)

Entry for [Sum up 17 November's world news in one image](https://make.fun/bounty/news-image-20261117)
(competition `news-image-20261117`, owner `abduljunior425`).

## The image

A newspaper front page, masthead **THE WORLD TODAY**, dated
**TUESDAY 17 NOVEMBER 2026**. Lead story: **KERCH BRIDGE FALLS** —
Ukrainian drones hit the Kerch Bridge a second day and its road arch
collapsed into the strait. Three supporting stories across regions and
fields:

- **NVIDIA $115.8BN** — record Q3 revenue; the board will not bring
  back Jensen Huang.
- **EBOLA PASSES 11,000** — DR Congo outbreak: over 11,000 cases,
  5,400 deaths, WHO says.
- **US AND IRAN EXCHANGE FIRE** — US jets hit a missile site on
  Qeshm Island; Iranian drones target a US radar in Bahrain.

All four stories were verified against live reporting of 17 November
2026 before the image was drawn.

## How it runs

`main.ts` (Node 22, standard library only, no network) copies the
bundled `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`
(default `/output/entry.png`). The output is deterministic: every run
writes the same bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — entrypoint, copies `entry.png` to the output directory
- `entry.png` — the front-page image (1024×1024 PNG)
- `LICENSE` — MIT
