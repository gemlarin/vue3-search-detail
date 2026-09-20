# vue3-search-detail

Vue 3 + TypeScript demo of a **searchable list with expandable detail**.

## What it demonstrates

- Fetch posts from a public API (`jsonplaceholder`) with mock fallback
- Client-side filter by user ID
- Expand / collapse row detail (title + body)
- Loading, empty, and error UI with `aria-live`
- Escape closes an expanded row
- Thin component; fetch + filter logic in a composable
- Typed `Post` entity

## Run locally

```bash
npm install
npm run dev
```

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite dev server |
| `npm run typecheck` | TypeScript check (`vue-tsc`) |
| `npm run build` | Typecheck + production build |

## Layout

- `src/components/SearchDetail.vue` — list UI, expand, Escape
- `src/composables/usePosts.ts` — fetch, loading/error, filter
- `src/types/post.ts` — `Post` type + `MOCK_POSTS` fallback

## CI

GitHub Actions runs install → typecheck → build on push and pull requests to `main`.
