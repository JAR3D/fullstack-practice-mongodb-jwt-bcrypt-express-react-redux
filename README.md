# Simple Note App

Full-stack practice project to explore MongoDB data modeling, JWT-based login, bcrypt password hashing, and a small React + Redux client. The back-end exposes user and note APIs secured with signed tokens; the front-end consumes them via axios to register, log in, and create notes.

## Features
- User registration with bcrypt-hashed passwords and duplicate-username guardrails.
- JWT login flow that returns a signed token for authenticated requests.
- Notes API with public listing and protected creation tied to the authenticated user.
- React front-end using Redux for session and notes state, plus React Router navigation.
- Basic logging and error handling to trace API usage and surface validation issues.

## Stack
- Back-end: Node.js, Express 5, MongoDB with Mongoose, bcrypt, jsonwebtoken, dotenv, pnpm.
- Front-end: React + Vite, Redux Toolkit, React Router, axios, pnpm.

## Prerequisites
- Node.js 18+ and pnpm installed.
- MongoDB Atlas (or another cloud MongoDB) connection string ready.

## Getting Started
1) **Back-end**
   ```bash
   cd back-end
   pnpm install
   cp .env.example .env
   ```
   `.env` needed by the server (using your Atlas URI):
   ```
   PORT=3001
   MONGODB_URI="mongodb+srv://<username>:<password>@helsinki.ct3tvha.mongodb.net/simpleNoteApp?appName=helsinki"
   JWT_SECRET=<random-secret-string>
   ```
   Replace `<username>`/`<password>` with your Atlas credentials.
   Start the API:
   ```bash
   pnpm dev
   ```

2) **Front-end**
   ```bash
   cd front-end
   pnpm install
   pnpm dev
   ```
   The client expects the API at `http://localhost:3001`.

## API Quickstart
- Register:
  ```bash
  curl -X POST http://localhost:3001/api/users \
    -H "Content-Type: application/json" \
    -d '{"username":"alice","password":"secret"}'
  ```
- Login (returns `token` used below):
  ```bash
  curl -X POST http://localhost:3001/api/users/login \
    -H "Content-Type: application/json" \
    -d '{"username":"alice","password":"secret"}'
  ```
- Create a note (requires `Authorization: Bearer <token>`):
  ```bash
  curl -X POST http://localhost:3001/api/notes \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"content":"first note","important":false}'
  ```
- List notes:
  ```bash
  curl http://localhost:3001/api/notes
  ```

## Project Structure
- `back-end/app.js` — Express app, Mongo connection, routes, and middleware wiring.
- `back-end/controllers/usersRouter.js` — register, login (JWT), and user listing.
- `back-end/controllers/notesRouter.js` — public note listing and JWT-protected creation.
- `back-end/models/*.js` — Mongoose models for `User` (hashed passwords, note refs) and `Note`.
- `front-end/src/App.jsx` — routing and nav links for home, notes, users, login, register.
- `front-end/src/components/Login.jsx` — handles login, stores user via Redux, navigates to home.
- `front-end/src/components/Register.jsx` — posts new users and redirects to login.
- `front-end/src/components/Notes.jsx` — fetches notes, creates new ones with bearer token.
- `front-end/src/store.js` and `front-end/src/reducers/*` — Redux store, user and notes slices.

## Learning Checklist
- Practice hashing passwords with bcrypt before persisting users.
- Issue and verify JWTs for authenticated routes; pass them via `Authorization: Bearer ...`.
- Model user-note relationships in MongoDB with ObjectId references and populate when needed.
- Keep UI state in sync with the API using axios calls and Redux actions.

## Scripts
- Back-end: `pnpm dev` (watch mode), `pnpm start` (production), `pnpm start:test` (NODE_ENV=test).
- Front-end: `pnpm dev`, `pnpm build`, `pnpm preview`, `pnpm test`, `pnpm lint`.
