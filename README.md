# Tousif’s research portfolio

Astro static website with Markdown content.

## Run
npm install
npm run dev

## Build
npm run build

## Update content
Edit files in `src/content/sections/`. The frontmatter controls the heading, subtitle and display order. Use `###` for an entry title, paragraphs for descriptions, and ordinary Markdown links for paper/code URLs. Add links only when you have the correct URLs. Publication status currently reflects the supplied CV.

Edit the About introduction in `src/pages/index.astro`. Replace `public/CV_Tousif.pdf` to update the downloadable CV. All other sections load automatically from Markdown. Theme colours and responsive styles are in `src/styles.css`.

The light/dark preference is saved in the visitor’s browser. Contact uses an email link; no server or database is required.

## Profile photo and links
Replace `public/profile.jpg` to update the About portrait. Social URLs are in the `profile-links` area of `src/pages/index.astro`. LinkedIn and GitHub come from the CV. Add Google Scholar when the correct profile URL is available.

Research interests on the opening About section are editable in `src/content/interests.md`. The separate Research and About sections have been merged into the opening About section.

## Social icons and editable fields
Edit `src/data/profile.json` to change Email, LinkedIn, GitHub and Google Scholar destinations. Set `scholar` to your complete Google Scholar profile URL to activate its icon. Empty Scholar URLs show a disabled icon.

Each degree has a **Highlights** subsection in `src/content/sections/education.md`. Each role has a **Key Contributions** subsection in `src/content/sections/experience.md`. Edit their Markdown bullets to add coursework, projects, responsibilities or outcomes. HTML comments mark the edit locations and do not appear on the site. These are source content fields, not a live browser editor.

## Publication links
Edit DOI and arXiv destinations in `src/content/sections/publication.md`. Missing links render as disabled labels; replace the span with an anchor when you have a verified URL. BibTeX downloads live in `public/citations/`. Published-paper metadata is based on Springer records; submitted entries are minimal CV-based records. The compact CV icon is last in the social row.

The About biography is editable in `src/content/biography.md`. Research interests follow it and are editable in `src/content/interests.md`.

## Project entries
Each project in `src/content/sections/projects.md` includes an editable **Project Highlights** bullet list and a GitHub button. Replace the disabled GitHub span with an anchor when a missing repository URL becomes available. STM32 and Arduino projects have separate entries so each can have its own highlights and repository link.

## Achievements and presentations
`src/content/sections/achievements.md` contains matching **Academic Recognition** and **Activities and Participation** groups. Each entry uses the same heading and label/value layout. The activity title is the presentation title for talks or posters. Each event includes Event, Date, Location and Role. Existing activities come from the CV; unknown dates and locations are explicitly marked.

Copy the commented presentation template at the bottom of that file, remove its comment markers, and fill in the title, event name, date, location and role. Optional Slides, Photos and Video anchors use the compact resource-link style; omit unused links. No sample presentation is displayed as a real event.

## Activity photo slider
Achievements uses a simple Academic Recognition list and an Activities and Participation carousel. Edit one Markdown file per activity in `src/content/activities/`. Set `photo` to an image path such as `/activities/my-event.jpg`, add the actual photo to `public/activities/`, and fill in `photoAlt`. The title, event, date, role, location and Markdown description appear below each photo. Optional `slides`, `photos` and `video` fields add links. Blank photo fields show a clearly labeled empty state. Navigation supports arrows, keyboard and mobile swipe.
