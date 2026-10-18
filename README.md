# Lizziewin Otero — Virtual Assistant Website

Plain HTML, CSS, and JavaScript. No installs, no build step.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About, experience, results and achievements, tools |
| `services.html` | Services and how working together works |
| `work.html` | Design gallery, Facebook page case studies, practice documents |
| `contact.html` | Email button, copy-email button, links |
| `documents/` | The 7 practice admin documents and 3 Excel templates |
| `assets/img/` | Your photo, design samples, and Facebook cover images |

## Preview on your computer

Unzip the folder and double-click `index.html`.

## Common edits

Open any `.html` file in a text editor (VS Code is free).

- **Change text:** find the words and type over them. Don't delete the tags around them (`<p>`, `</p>`).
- **Change your email:** search all files for `oterolizziewin@gmail.com` and replace it.
- **Add a design:** save the image in `assets/img/work/`, then in `work.html` copy one `<figure class="piece" ...>` block and change the file name and caption. `data-cat` decides which filter shows it: `social`, `events`, `publications`, `infographics`, or `branding` (use several, separated by spaces).
- **Update follower counts:** they appear in `work.html` (the two page cards) and `about.html` (the combined number, 769).

## Publish free with GitHub Pages

1. Go to https://github.com and create a free account. Pick your username carefully. It becomes part of your website address.
2. Click **+** (top right) → **New repository**.
   - **Repository name:** `yourusername.github.io` (your exact username). This gives you the address `https://yourusername.github.io`.
   - Set it to **Public**, then click **Create repository**.
3. On the empty repository page, click **uploading an existing file**.
4. Unzip `lizziewin-va.zip`. Open the `lizziewin-va` folder, select **everything inside it** (`index.html`, `about.html`, the `assets` and `documents` folders, and so on), and drag it all into the upload box.
5. Scroll down and click **Commit changes**.
6. Go to **Settings** → **Pages** (left menu). Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/ (root)** → **Save**
7. Wait 1–3 minutes, then open `https://yourusername.github.io`.

**Already used `yourusername.github.io` for the admin portfolio?** Name this repository something else, like `va`. Its address becomes `https://yourusername.github.io/va/`.

### Updating later

Open the repository, click the file, click the pencil icon, edit, then **Commit changes**. To replace images or many files, use **Add file → Upload files** and upload the new versions with the same names. The site updates in a minute or two.

## Before you share the link

- [ ] Open every page on your phone
- [ ] Click **Email me** and check it opens an email to you
- [ ] Click each portfolio image, filter, and document
- [ ] Check the follower counts are still current
