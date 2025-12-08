# Vite React Boilerplate

Starter template for new React projects using Vite. Includes ESLint + Prettier, Vitest with Testing Library, and an optional json-server mock API.

## Why use it
- React 19 + Vite 7 with fast HMR and production builds
- ESLint + Prettier preconfigured for React and Hooks
- Testing ready with Vitest, @testing-library/react, and jsdom
- Optional mock API via `pnpm server` (port 3001, requires `db.json`)

## Create a new project from this template
1. On GitHub, click "Use this template" to create your repository.
2. Clone the repository you just created.
3. Install dependencies: `pnpm install` (or `npm install` / `yarn install`).
4. Start the dev server: `pnpm dev`.

## Scripts
- `pnpm dev` — start development server
- `pnpm build` — production build
- `pnpm preview` — preview the production build
- `pnpm lint` — run linting
- `pnpm test` — run unit tests
- `pnpm server` — start json-server mock API (port 3001)

## Project layout
- `src/` — React application code
- `public/` — static assets
- `testSetup.js` — Vitest/JSDOM setup
- `vite.config.js` and `eslint.config.js` — build and lint configuration

## Optional improvements
- Add TypeScript and type-aware ESLint rules if you need static typing.
- Add GitHub Actions to run lint/tests on pull requests.
- Commit a sample `db.json` for the mock API server.
- Add Husky + lint-staged for pre-commit checks.
