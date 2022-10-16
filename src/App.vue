<template>
  <Navbar />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

import Navbar from '@/components/Layout/Navbar/Navbar.vue';
</script>
