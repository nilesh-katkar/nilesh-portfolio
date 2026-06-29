# nileshkatkar-dev — Next.js Portfolio

## Quick start

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # static export → /out
```

---

## Deploy from GitHub (2 options)

### Option A — GitHub Pages (free, automatic)
1. Push this repo to GitHub.
2. Go to **Settings → Pages → Source → GitHub Actions**.
3. Push any commit to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.
4. Your site will be live at `https://<username>.github.io/<repo>/`.

> **Tip:** If deployed in a sub-path (e.g. `/nilesh-portfolio`), add `basePath: '/nilesh-portfolio'` to `next.config.js`.

### Option B — Vercel (recommended, even easier)
1. Import the repo at https://vercel.com/new.
2. Vercel auto-detects Next.js — just click **Deploy**. No config needed.
3. Every push to `main` redeploys automatically.
   *(Remove `output: 'export'` from `next.config.js` if you want Vercel's full SSR/ISR support.)*

---

## How to add a new page / route

Next.js App Router: **one file = one route**.

```
app/
├── page.tsx          → /           (home — already exists)
├── blog/
│   └── page.tsx      → /blog
├── blog/[slug]/
│   └── page.tsx      → /blog/hello-world
└── resume/
    └── page.tsx      → /resume
```

### Example — add a /blog page

1. Create `app/blog/page.tsx`:

```tsx
export default function Blog() {
  return (
    <main style={{ maxWidth: 820, margin: '0 auto', padding: '5rem 2rem' }}>
      <h1>Blog</h1>
      <p>Coming soon.</p>
    </main>
  );
}
```

2. Add it to the nav in `components/Navbar.tsx`:

```ts
const NAV_LINKS = [
  ...
  { href: '/blog', label: 'Blog' },   // ← add this line
];
```

That's it — push to `main` and it deploys.

---

## Content files (edit data, not JSX)

| File | What you edit |
|---|---|
| `components/Hero.tsx` | Name, bio, CTA links |
| `components/Skills.tsx` | `SKILL_GROUPS` array |
| `components/Experience.tsx` | `JOBS` array |
| `components/Projects.tsx` | `PROJECTS` array |
| `components/Education.tsx` | `EDUCATION` array |
| `components/Contact.tsx` | Email, phone, social links |
| `components/Navbar.tsx` | `NAV_LINKS` array |
