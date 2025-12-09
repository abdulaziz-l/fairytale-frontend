# Fairy Tale Portrait Books – Frontend

React + Tailwind single-page app for parents to upload their child's photo and create a personalized fairy-tale book.

## Tech stack

- React (Vite)
- Tailwind CSS
- React Router
- Axios

## Pages

- `/` – Landing page with hero and explanation
- `/upload` – Upload form (child name, story template, email, photo)
- `/success/:orderId` – Thank-you page with order ID
- `/admin` – Simple admin login
- `/admin/dashboard` – Admin dashboard for managing orders

## Environment variables

Create a `.env` file in the `frontend` directory:

```bash
VITE_BACKEND_URL=http://localhost:4000
```

When deployed, set `VITE_BACKEND_URL` to your backend URL (e.g. Render/Railway).

## Development

```bash
cd frontend
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Netlify

1. Push the `frontend` folder to a Git repo (or upload directly).
2. In Netlify, create a new site from that folder.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Environment variable:
   - `VITE_BACKEND_URL` = your deployed backend URL.
