# United Diaspora for Albania

A lightweight Albanian-language static website built with HTML, CSS, and minimal vanilla JavaScript for GitHub Pages.

## Pages

- `index.html` and `red.html`: primary dark/anthracite theme with red accents
- `white.html`: matching light theme
- `rreth-nesh.html`: organization history and geographic presence
- `qellimi.html`: mission, vision, and objectives
- `aktivitetet.html`: ongoing activities
- `publikime.html`: open letters and international-lobbying publications
- `bashkohu.html`: link to the official membership form
- `kontakt.html`: approved contact fields; submission remains disabled until an endpoint is supplied
- `v1-red.html` and `v1-white.html`: preserved legacy versions

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/` and `http://localhost:8000/white.html`.

## GitHub Pages

1. Push this directory to the repository's publishing branch.
2. Open **Settings → Pages** in GitHub.
3. Choose **Deploy from a branch**.
4. Select the branch and `/(root)`, then save.

All production links and assets use relative paths, so the site works at a project URL such as `https://username.github.io/repository/`.

## Outstanding launch items

- Supply an official contact email or form-processing endpoint before enabling `kontakt.html`.
- Confirm/copy the publication files marked “Skedari në pritje.”
- Resolve the editorial differences documented in `AUDIT.md`.
- Confirm web-embedding licenses before adding any bundled Swiss 721 BT or Barely Handwritten font.

Asset provenance is documented in `assets/SOURCES.md`.
