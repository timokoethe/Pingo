# Pingo Website

This directory contains the public website for
[Pingo](https://pingo.itstimo.me), a compact API scratchpad for the macOS menu
bar. The site presents the app, links to the latest downloadable release, and
provides FAQ and privacy information.

The website is built with Next.js, React, TypeScript, and Tailwind CSS. It uses
the App Router and is deployed to Vercel as part of the repository's unified
release workflow.

## Local development

Install the dependencies and start the development server:

```sh
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. Changes to the
application are reflected automatically while the development server is
running.

## Available scripts

- `npm run dev` starts the local Next.js development server.
- `npm run build` creates a production build.
- `npm run start` serves the production build locally after a successful build.
- `npm run lint` checks the website with ESLint.

Before submitting a change, run:

```sh
npm run lint
npm run build
```

## Project structure

- `app/` contains the App Router pages, global styles, metadata routes, and
  application icons.
- `components/` contains shared page and structured-data components.
- `lib/` contains shared metadata and SEO configuration.
- `public/` contains static assets served by the website.
- `vercel.json` disables automatic Git-based deployments because production
  deployment is controlled by the repository release workflow.

The landing page requests the latest release metadata from the GitHub API and
prefers a DMG or ZIP release asset for its download link. If that request fails,
the link falls back to the latest GitHub Release page. The response is
revalidated hourly.

## Deployment

Do not deploy the production website separately. A Pingo version tag triggers
the repository workflow that publishes the macOS release and then deploys this
site to Vercel. Follow the canonical
[release process](../docs/release.md) for setup, release, deployment, and
verification instructions.
