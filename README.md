# Ethan Bikhazi-Green — Engineering Portfolio

A responsive, framework-free engineering portfolio with nine case studies, real project documentation and videos. This is a local-ready site, **not yet published online**.

## What's included

| Project | Media included | Evidence/source |
|---|---|---|
| Frisbee launcher | Playable launch video, build photos, prototype drawings, downloadable report | Provided `Final Report (1).pdf` and `FrisbeeLaunch.MOV` |
| Jumping robot | Playable demonstration video and still | Provided `Robot_Jumper.MP4`; the 17-inch height is *previously reported*, not independently measured from this video |
| ATOM-IQ infrastructure | Actual 80/20 overhead storage CAD screenshot | Preview from `Overhead Storage Assembly.zip` |
| Lug wrench FEA | Stress maps, convergence and mesh-control visuals, downloadable report | Provided `Report Project 1.pdf` |
| Bed frame FEA | Original/optimized CAD, stress plots, downloadable report | Provided `Project 2 Report (1).pdf` |
| Rocket controls and fins | Clearly labeled illustrative graphic | Needs approved project media |
| Air motor | Clearly labeled illustrative graphic | Needs machining photos |
| Automatic dog feeder | Clearly labeled illustrative graphic | Needs actual prototype media |
| Enterprise AI / workflows | Clearly labeled illustrative graphic | Avoid public company-sensitive screenshots |

The three PDFs inside `documents/` are compressed copies of your original reports. Original reports remain unchanged outside the website. The Frisbee `.MOV` has been converted to H.264 MP4 for broad browser playback; the robot MP4 was kept as submitted.

**The native SolidWorks assembly and part files are deliberately NOT bundled into the public website.** It shows the preview image extracted from your ZIP instead. Please get the research team's permission before publishing the ATOM-IQ screenshot or other unreleased lab details. Likewise, check group-work permissions before putting course report contents publicly online.

## Open locally

1. Unzip the downloaded site.
2. Double-click `index.html` and click any project card.
3. Videos work in modern desktop/mobile browsers. For the most reliable experience, serve the directory locally:

```bash
cd ethan-engineering-portfolio
python3 -m http.server 8000
```

Then browse to `http://localhost:8000`.

## Editing the site

- `index.html`: Homepage and static bio, education and experience content.
- `project.html`: Reusable case-study page.
- `projects.js`: **All editable project content**, photos, video links, metrics, and evidence captions. Each object generates a homepage card and a detail page.
- `app.js`: Filtering, case-study rendering and navigation. Usually no editing required.
- `styles.css`: Layout, fonts, colors, mobile styling.
- `assets/media/`: Real project screenshots and videos.
- `documents/`: Optimized PDFs of the supplied technical reports.
- `assets/*.svg`: Clearly labeled placeholders for projects needing evidence.

### Add a future project

In `projects.js`, duplicate an existing project object and update:

- `id`: Unique URL identifier.
- `title`, `descriptor`, `year`, `role`, `timeline`, `summary`.
- `categories`: Pick from `Mechanical`, `Systems`, `Analysis`, `Software`.
- `image`, `imageAlt`, `imageLabel`: Homepage and project hero graphic.
- `metrics`, `challenge`, `process`, `result`, `contribution`, `tools`.
- Optional `video`: `{src, poster, caption}`.
- Optional `gallery`: Array of `{src, alt, caption}`.
- Optional `documents`: Array of `{label, href}`.
- Optional `sourceNote` to explain whether claims are measured, simulated or design targets.

Project detail URLs use the form `project.html?id=your-project-id`.

### Verify technical claims before publishing

- The frisbee report describes a **30 cm, 1.4 kg flywheel**, a **45-second** motor spin-up and repeatable short-range launches. Its **15 m launch distance** and **≥95% loading rate** are **design targets**. Earlier résumé values for speed/distance/reliability should not be represented as proven by this report and demo video alone.
- The bed-frame **25% mass reduction**, 143/306 psi stress figures and lug-wrench stress improvements are **simulated outcomes**, not results from physical testing.
- The jumping robot's 17-inch result comes from the earlier project description, not an independent measurement from the video.
- The ATOM-IQ SolidWorks preview represents **one assembly**, not the entire research lab. Ask before public sharing.
- Review the uploaded group reports for any names, internal information or team material that should not be publicly shared.

## Publish using GitHub Pages

1. Create a public GitHub repository, such as `engineering-portfolio`.
2. Upload everything *inside* `ethan-engineering-portfolio/` to the repository's root.
3. Go to **Settings → Pages → Deploy from a branch → main → / (root)**.
4. Open the URL GitHub gives you and inspect all pages, links, media and mobile layouts.

Alternatively use a static hosting service like Netlify. No build system, npm, account connection or server-side code is needed.

## Privacy

The website uses the email and LinkedIn address from the original résumé, but **does not publish the résumé PDF or phone number**. Any company or research assets require public-release review before publishing. The package is intended for your review and edits first.
