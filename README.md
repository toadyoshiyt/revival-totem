# Revival Totem website

A static GitHub Pages website for Revival Totem 1.3.2, including the downloadable Fabric mod. No build tools or backend needed.

## Publish on GitHub Pages

1. Create a public GitHub repository named `revival-totem`.
2. Upload the contents of this folder to the repository root. `index.html` must be at the root, not inside another folder. Include `assets`, `downloads`, `style.css`, `script.js`, and `.nojekyll`.
3. Open the repository's **Settings → Pages**.
4. Under Source, select **Deploy from a branch**.
5. Select **main** and **/(root)**, then Save.
6. GitHub shows the published website URL in Settings → Pages after deployment completes.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

All asset and download links are relative, so the site works under a repository URL such as `https://YOUR-USERNAME.github.io/revival-totem/` as well as a custom domain.

## Update the download

Put the new mod JAR in `downloads/`. Update the download links, version labels, and release information in `index.html`. The site currently offers the existing built v1.3.2 JAR; creating this website did not change or retest the Minecraft mod.

The custom totem texture was supplied by the project owner. Minecraft ingredient and Steve textures belong to their respective owners. This is an unofficial fan mod website. Do not imply Mojang/Microsoft endorsement. Google Fonts are optional; system fonts are used if unavailable.

