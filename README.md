# United Diaspora for Albania

A lightweight, responsive static website prepared for GitHub Pages.

## Preview locally

From this directory, start any static file server:

    python3 -m http.server 8000

Then open http://localhost:8000.

## Add real destinations

Navigation uses `#placeholder` because destination URLs were not provided.
Replace each occurrence in `index.html` with the appropriate relative path or
external URL.

## Deploy with GitHub Pages

1. Push this directory to a GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the site branch and the `/(root)` folder, then save.

All asset references are relative, so the site also works at a project URL such
as `https://username.github.io/repository/`.
