# Prompt 4 implementation audit

## Content and brand changes

- Replaced the old English hero copy, 25-country highlight, “amaneti” subtitle, placeholder links, and “Bashkohu tani” CTA with approved Albanian content.
- Replaced the burgundy full-page palette with a dark anthracite theme and a light theme. Red is now limited to accents and calls to action.
- Replaced the old JPEG logo and generic content icons with official UDA assets.
- Added About, Purpose, Activities, Publications, Join, and Contact pages.
- Removed unsupported Facebook, YouTube, and email links; only `@uda.network` is presented.
- Removed the local membership page; all “Bashkohu” links now open the approved Google Form directly.
- Preserved all legacy v1 files.

## Asset and crop decisions

- `Mountain 1.jpg` was selected because its wide landscape composition provides the strongest desktop hero crop and clear central text area.
- `Sea 2.jpg` was selected because it is the supplied landscape-format sea image and adapts cleanly to a wide section.
- Images use `cover` with stable focal positions and are not distorted.
- Official UDA icons are optically normalized inside consistent image boxes.

## Publication status

Available and linked:

- Oil-price transparency open letter
- Serbian-consulate open-letter carousel
- Open letter to the United States Congress
- Vjosa-Narta ENVI submission
- Visually confirmed UN protest photographs

Listed without a false download because no matching file was confirmed:

- Territorial-reform open letter, 3 August 2026
- Solidarity statement against violence, 3 July 2026
- Statement to Albanian-American organizations, 26 June 2026
- Statement condemning violence during the 2 July protest, dated 9 July 2026

## Font decision

Swiss 721 BT and Barely Handwritten were not embedded because the supplied archives do not establish webfont-embedding permission. System font stacks implement the visual guide safely.

## Editorial issues requiring confirmation

- “Nga Alpe” versus “Nga Alpet”
- “Ionian See” versus “Ionian Sea” in the future English version
- New “trashëgimia jonë” versus old “amaneti jonë”
- 25 states in the history, +30 states in objectives/activities, and 31 geographic jurisdictions in the hero/map
- Source typo “publikm,” rendered as “publik”
- Source typo “zgjove,” rendered as “zgjodhe”
- Source typo “zyrtate,” rendered as “zyrtare”
- Stray apostrophes removed from headings
- Albanian accents normalized in display metadata

## Launch blocker

No official contact email or form endpoint was supplied. The approved contact fields are displayed in a disabled form, and no success response is simulated. Enable submission only after a real endpoint is configured.

## Difference from v3.pdf

The composition and hierarchy remain influenced by v3, but its broad burgundy surfaces, older typography, substitute icons, and earlier copy were superseded by the August 2026 visual and content guides.
