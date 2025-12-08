# Node + Express Boilerplate

A minimal starter for building Node.js services with Express. It includes sensible defaults for JSON APIs, CORS, environment-based configuration, and simple logging.

## Prerequisites
- Node.js 18+ (Express 5 requires modern Node)
- pnpm (recommended; see `packageManager` in `package.json`)

## Getting started
1) Install dependencies:
   ```bash
   pnpm install
   ```
2) Create a `.env` file and set the port:
   ```bash
   PORT=3001
   ```
3) Run in watch mode for local development:
   ```bash
   pnpm dev
   ```
4) Hit the health route:
   ```bash
   curl http://localhost:3001/
   ```

## Scripts
- `pnpm dev` — start the server in development with file watching.
- `pnpm start` — start the server in production mode.
- `pnpm start:test` — start the server with `NODE_ENV=test` (useful for integration setups).
- `pnpm test` — placeholder; replace with your test command of choice.

## Project structure
- `app.js` — Express app setup with JSON parsing and CORS enabled.
- `index.js` — application entrypoint; reads config and starts the HTTP server.
- `utils/config.js` — loads environment variables via `dotenv`.
- `utils/logger.js` — tiny wrapper around `console` for consistent logging.
- `eslint.config.js` — linting configuration (ESLint + Prettier).

## Next steps
- Add routes, middleware, and error handling for your service domain.
- Configure lint/test scripts when you add tooling.
- Containerize or add deployment scripts as needed for your target platform.
