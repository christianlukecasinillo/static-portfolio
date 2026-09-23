# Christian Luke B. Casinillo — Portfolio (React + Vite)

A React recreation of the QA portfolio site, ready to deploy on Netlify.

## Add your assets

Before running or deploying, drop these files into `public/`:

- `public/images/photo.jpg` — your profile photo
- `public/images/activities/2022.jpg`
- `public/images/activities/2023.png`
- `public/images/activities/cviraa.jpg`
- `public/Casinillo-CV.pdf` — your CV (linked from the "Download CV" button)

Edit the content (skills, experience, contact info, social links) directly in `src/App.jsx`.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

## Deploy to Netlify

**Option A — Netlify CLI**

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

**Option B — Git + Netlify dashboard (recommended)**

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. In Netlify: **Add new site → Import an existing project** → pick the repo.
3. Build settings (auto-detected via `netlify.toml`, but confirm):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. Netlify will rebuild automatically on every push.

**Option C — Drag and drop**

1. Run `npm run build` locally.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the `dist/` folder in.

A `public/_redirects` file and `netlify.toml` are already included so routing works correctly on Netlify.

## Contact form

The form currently just shows a confirmation message client-side (no backend). To actually receive
submissions, wire it up to a service such as [Formspree](https://formspree.io) or
[Netlify Forms](https://docs.netlify.com/manage/forms/setup/) — add `data-netlify="true"` to the
`<form>` and a hidden `form-name` input for the latter.
