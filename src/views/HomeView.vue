<template>
  <main class="container mx-auto p-3">
    <RouterLink :to="{ name: 'lottery' }" class="hover:brightness-90">
      <Card size="full" background="yellow" class="mb-8">
        <template #default>
          <div class="mb-5 text-center">
            <h2 class="text-4xl">Eurojackpot</h2>
            <p class="text-xl">next draw is coming soon!</p>
            <p class="text-xs text-gray-700">
              Secure your ticket to happiness now!
            </p>
          </div>
        </template>
      </Card>
    </RouterLink>

    <div
      class="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-3"
    >
      <Card size="lg" background="red">
        <template #title>
          <h2 class="text-lg">XYZ-Jackpot</h2>
        </template>

        <template #default>
          <div class="mb-5 text-center">
            <p class="text-xl">next draw is coming soon!</p>
            <p class="text-xs text-white">
              Secure your ticket to happiness now!
            </p>
          </div>
        </template>
      </Card>

      <Card size="lg" background="blue">
        <template #title>
          <h2 class="text-lg">ABC-Lottery</h2>
        </template>

        <template #default>
          <div class="mb-5 text-center">
            <p class="text-xl">next draw is coming soon!</p>
            <p class="text-xs text-white">
              Secure your ticket to happiness now!
            </p>
          </div>
        </template>
      </Card>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';

import Card from '@/components/Layout/Card/Card.vue';
</script>
