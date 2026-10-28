# Mini Next.js Server + Client Demo

A tiny project for Session 11: Next.js App Router.

## Concepts demonstrated

- **Routing:** `app/page.js` creates `/`; `app/product/page.js` creates `/product`.
- **Layout:** `app/layout.js` is the required root layout and wraps both pages.
- **Server Component:** `app/product/page.js` displays product details and is a Server Component by default.
- **Client Component:** `app/components/LikeButton.js` uses `"use client"` and `useState` to handle clicks.
- **Rendering:** Next.js can pre-render HTML on the server for the initial page load. The browser loads the needed client JavaScript and hydrates the button so it becomes interactive. Not every part of every page is handled only by the server.

## Run it

Install Node.js, then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000 and click **View product**.

## Explain it to your mentor

1. `app/page.js` creates the home route.
2. `app/product/page.js` creates the `/product` route.
3. `app/layout.js` wraps both pages with shared UI.
4. Product details are rendered by a Server Component.
5. `LikeButton.js` is a Client Component because it needs `useState` and an `onClick` handler.
6. On initial load, Next.js can send server-generated HTML. The browser loads client JavaScript and hydrates the button so clicks work.
