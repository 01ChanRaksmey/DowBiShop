# Launchpad

A responsive front-end deployment learning site, built with React and Vite. Explore a beginner-friendly deployment checklist, try the color themes, and copy a build command from the page.

## Run locally

Install dependencies and start the Vite development server:

```sh
npm install
npm run dev
```

## Check before deploying

```sh
npm run lint
npm run build
```

Vite writes the production-ready static site to `dist/`. Deploy that folder with a static hosting provider such as Netlify, Vercel, or GitHub Pages. For continuous deployment, connect the hosting provider to your GitHub repository and use `npm run build` as the build command and `dist` as the output directory.
