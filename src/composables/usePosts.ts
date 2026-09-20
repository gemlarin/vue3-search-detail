/**
 * Day 2 timed — fetch posts (or swap to MOCK_POSTS on failure).
 * Fill from memory: data / error / loading + load()
 */

import { ref, computed, type Ref } from "vue";
import type { Post } from "../types/post";
import { MOCK_POSTS } from "../types/post";

export function usePosts(userId: Ref<number | undefined>) {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const loading = ref<boolean>(false);
  const error = ref<string>("");
  const posts = ref<Post[] | undefined>();

  async function getPosts() {
    try {
      loading.value = true;
      error.value = "";
      const response = await fetch(url);
      if (!response.ok) {
        posts.value = MOCK_POSTS;
        throw new Error(`HTTP error: ${response.status}`);
      }
      posts.value = await response.json();
    } catch {
      posts.value = MOCK_POSTS;
      error.value = "Loading Error";
      console.error("Loading Error");
    } finally {
      loading.value = false;
    }
  }

  const filteredPosts = computed(() => {
    const id = userId.value;
    if (!id) return posts.value;
    return posts.value?.filter((post) => post.userId === id);
  });

  return {
    getPosts,
    filteredPosts,
    loading,
    error,
    posts,
  };
}
