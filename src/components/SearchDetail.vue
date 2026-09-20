<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { usePosts } from "./../composables/usePosts";

const searchId = ref<number>();
const { getPosts, loading, filteredPosts, error } = usePosts(searchId);
const expandedRow = ref<number | undefined>();

onMounted(async () => {
  await getPosts();
  window.addEventListener("keydown", onKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeyDown);
});

function onKeyDown(event: KeyboardEvent) {
  if (event.key === "Escape" && expandedRow.value !== undefined) {
    // if any row is expanded close it on escape key
    expandedRow.value = undefined;
  }
}

function toggleDetails(rowId: number) {
  if (expandedRow.value === rowId) {
    expandedRow.value = undefined;
    return;
  }
  expandedRow.value = rowId;
}

const isExpanded = (id: number | undefined) => {
  if (!id) return false;
  return expandedRow.value === id;
};
</script>

<template>
  <div class="search-detail">
    <label for="search"> User ID: </label>
    <input type="number" id="search" v-model="searchId" />
    <button @click="searchId = undefined" type="button">Clear</button>
    <span v-if="loading" aria-live="polite">Loading...</span>
    <span v-if="error" aria-live="polite">{{ error }}</span>
    <span v-if="filteredPosts?.length === 0" aria-live="polite"
      >No Results</span
    >
    <table>
      <thead>
        <tr>
          <th><span class="sr-only">Actions</span></th>
          <th>ID</th>
          <th>User ID</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="post in filteredPosts" :key="post.id">
          <tr class="main-row">
            <td>
              <button
                @click="toggleDetails(post.id)"
                :aria-expanded="isExpanded(post.id)"
                type="button"
                :aria-label="`Expand details for post ${post.id}`"
              >
                <span v-if="!isExpanded(post.id)">Expand</span
                ><span v-else>Close</span>
              </button>
            </td>
            <td>
              {{ post.id }}
            </td>
            <td>{{ post.userId }}</td>
          </tr>
          <tr class="details-row" v-if="isExpanded(post.id)">
            <td colspan="3">
              <h3>{{ post.title }}</h3>
              <p>{{ post.body }}</p>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<style lang="css">
table {
  width: 100%;
  border: 1px solid #000;
  background-color: #fff;
}
tr {
  text-align: left;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
