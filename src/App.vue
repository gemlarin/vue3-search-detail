<script setup lang="ts">
import SearchDetail from "./components/SearchDetail.vue";
</script>

<template>
  <main class="page">
    <h1>Search + detail</h1>
    <p>Filter posts by user ID, expand a row for title and body.</p>
    <SearchDetail />
  </main>
</template>

<style scoped>
.page {
  max-width: 48rem;
  margin: 2rem auto;
  padding: 0 1rem;
}
</style>
