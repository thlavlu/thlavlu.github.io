# GitHub Pages hosting and updates

This project is ready for GitHub Pages. The hosting workflow runs on commits to `main` and can also be triggered manually.

## First deployment
1. Select the GitHub repository to use. If `thlavlu.github.io` already hosts a site, decide explicitly whether to replace that site or use a separate repository such as `portfolio`.
2. Upload this project's source, including `.github/workflows/deploy.yml`, `scripts/`, `src/`, `public/`, `package.json` and `package-lock.json`. Exclude `node_modules/`, `dist/`, `.astro/`, `.git/` and `.openai/`.
3. In the repository, open Settings → Pages → Build and deployment → Source → GitHub Actions.
4. Push to `main` or run Deploy portfolio to GitHub Pages from Actions.
5. Wait for both build and deploy jobs to succeed. The deployment provides the final URL.

The workflow detects the Pages origin and base path. The post-build helper adjusts root-relative public asset and download links for repository URLs such as `/portfolio/`.

## Update content in GitHub
Open the relevant file, click Edit, make the change and commit it. Each commit to `main` triggers a rebuild and deployment.

| Content | File |
|---|---|
| About | `src/content/biography.md` |
| Research interests | `src/content/interests.md` |
| Experience | `src/content/sections/experience.md` |
| Education | `src/content/sections/education.md` |
| Publications | `src/content/sections/publication.md` |
| Projects | `src/content/sections/projects.md` |
| Achievements | `src/content/sections/achievements.md` |
| Activity slides | `src/content/activities/` |
| Contact | `src/content/sections/contact.md` |
| Profile links | `src/data/profile.json` |
| Downloadable CV | `public/CV_Tousif.pdf` |
| Portrait | `public/profile.jpg` |
| Activity photos | `public/activities/` |

For activity photos, upload the image then set its `photo` path in the activity Markdown file, for example `/activities/conference.jpg`.

## Local editing in VS Code
Install Node.js 22, then run `npm ci`, followed by `npm run dev`. Use `npm run build` before committing. Push changes with GitHub Desktop or Git.
