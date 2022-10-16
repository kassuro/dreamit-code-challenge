<template>
  <nav class="mb-5 flex justify-center bg-blue-800 p-2">
    <div class="container flex items-center">
      <RouterLink
        :to="{ name: 'home' }"
        class="flex-grow text-5xl font-semibold text-white"
      >
        Totto24
      </RouterLink>

      <a href="#" class="nav-item">Login</a>
      <a href="#" class="nav-item">Register</a>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<script lang="ts">
export default {
  name: 'TottoNavbar',
};
</script>

<style lang="postcss">
.nav-item {
  @apply text-xl text-gray-300;
  @apply p-1 px-3;
}

.nav-item:nth-child(odd) {
  @apply border-l border-gray-500 border-opacity-70;
}
</style>
