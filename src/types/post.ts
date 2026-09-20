/**
 * Day 2 timed slice — Search + detail (90 min)
 *
 * Build:
 * - Fetch a public JSON list (or use mock below if offline)
 * - Client-side filter (reuse useSearch mindset)
 * - Click row → detail panel
 * - loading / empty / error states
 * - Types for the entity
 *
 * Rules: thin UI; logic in composable(s); no AI on the clock
 *
 * Suggested API: https://jsonplaceholder.typicode.com/posts
 * Fallback: MOCK_POSTS in this file
 */

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const MOCK_POSTS: Post[] = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident",
    body: "quia et suscipit suscipit recusandae consequuntur",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil",
  },
  {
    userId: 2,
    id: 3,
    title: "ea molestias quasi exercitationem",
    body: "et iusto sed quo iure voluptatem",
  },
];
