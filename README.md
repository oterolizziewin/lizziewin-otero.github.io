# Lizziewin Otero — Portfolio Website

A plain HTML, CSS, and JavaScript website. There is nothing to install and no build step, so it runs anywhere and is easy to edit.

## What's in the folder

```
lizziewin-portfolio/
├── index.html                 ← the main page (all sections A–F)
├── assets/
│   ├── css/styles.css         ← colors, fonts, layout
│   ├── js/main.js             ← mobile menu and small animations
│   └── img/work/              ← put your design images here
└── samples/                   ← the 7 administrative demonstration projects
    ├── meeting-agenda-minutes.html      (ADM-01)
    ├── task-tracker.html                (ADM-02)
    ├── weekly-schedule.html             (ADM-03)
    ├── email-correspondence.html        (ADM-04)
    ├── records-tracker.html             (ADM-05)
    ├── information-brief.html           (ADM-06)
    ├── quarterly-report.html            (ADM-07)
    ├── sample.css
    └── downloads/                       (the 3 Excel templates)
```

## View it on your computer

Double-click `index.html`. It opens in your browser. That's all.

(Optional, closer to how it works online: open a terminal in this folder and run `python -m http.server 8000`, then go to http://localhost:8000.)

## Replace the placeholders

Open `index.html` in any text editor (VS Code is free and easy). Search for `EDIT:` and `[` to find every spot to fill in.

| What | Where in `index.html` | What to do |
|---|---|---|
| Email | Contact section | Replace `[your professional email]` with your email. To make it clickable: `<a href="mailto:you@example.com">you@example.com</a>` |
| LinkedIn | Contact section | Replace `[your LinkedIn profile URL]` with `<a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener">linkedin.com/in/yourname</a>` |
| Other link | Contact section | Your GitHub, Behance, or delete the line |
| PACLIC paper link | Writing & Research | Add the proceedings link when published |
| Thesis link | Writing & Research | Link to the abstract or PDF, or delete the placeholder line |
| Presentations / writing samples | Writing & Research | Fill in the two "slot" blocks; copy a block to add more, or delete them |
| Design images | Graphic Design section | See below |

### Adding your design work

1. Export images from Canva as JPG (about 1200 px wide is enough).
2. Save them in `assets/img/work/`, for example `assets/img/work/magazine-spread.jpg`.
3. In `index.html`, replace the placeholder line, for example
   `<div class="frame"><span>Add image: publication layout</span></div>`
   with
   `<div class="frame"><img src="assets/img/work/magazine-spread.jpg" alt="Magazine spread for [organization name]"></div>`
4. Update the caption below it to name the actual piece.

Only show work you are allowed to share publicly.

### Editing the sample documents

The samples are in `samples/`. They are labeled **Demonstration Project** and use a fictional organization, so they are honest to show as-is. Read through them once so you can talk about them in an interview, and change anything you'd write differently.

## Publish it free with GitHub Pages

1. Create a free account at https://github.com.
2. Click **+** (top right) → **New repository**.
   - Name it `yourusername.github.io` (use your exact GitHub username) to get the address `https://yourusername.github.io`.
   - Set it to **Public** and click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Open the `lizziewin-portfolio` folder on your computer, select **everything inside it** (not the folder itself), and drag it into the upload area. Folders upload too.
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, Branch to **main** and folder **/ (root)**, then **Save**.
7. Wait 1–2 minutes and open `https://yourusername.github.io`.

To update the site later: open the repository, click a file, click the pencil icon to edit, then **Commit changes**. Or upload a new version of the file with **Add file → Upload files**.

**For job applications** you can now give two links:

- Portfolio: `https://yourusername.github.io`
- GitHub: `https://github.com/yourusername`

### Other free options

- **Netlify Drop** (https://app.netlify.com/drop): drag the folder onto the page and get a link in seconds.
- **Cloudflare Pages**: similar to Netlify, connected to GitHub.

## Before you send the link

- [ ] All `[placeholder]` text replaced or removed
- [ ] Opened the site on your phone
- [ ] Clicked every "View document" and "Download .xlsx" button
- [ ] Design images added (or the section trimmed to what you have)
