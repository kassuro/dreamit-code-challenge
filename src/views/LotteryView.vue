<template>
  <div class="container mx-auto flex justify-center p-1">
    <Card size="lg">
      <template v-if="loading">
        <p class="text-center">Loading last draw...</p>
      </template>

      <template v-if="error">
        <div class="rounded border border-red-500 bg-red-300 p-3">
          <p class="text-red-800">
            Something went wrong while loading the last draw.
          </p>
        </div>
      </template>

      <template v-if="draw !== undefined">
        <h2 class="mb-2 text-2xl">
          Eurojackpot
          <span class="text-lg">- drawing from {{ draw.date }}</span>
        </h2>

        <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <p class="mb-1">Numbers:</p>

            <div class="flex items-center">
              <span v-for="n in draw.numbers" class="lottery-number" :key="n">
                {{ n }}
              </span>

              <span class="px-3 text-xl font-semibold"> + </span>

              <span
                v-for="n in draw.additionalNumbers"
                class="lottery-number border-yellow-500"
                :key="n"
              >
                {{ n }}
              </span>
            </div>
          </div>
          <div>
            <p class="mb-1">Jackpot:</p>

            {{ moneyFormatter(draw.jackpot) }}
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import Card from '@/components/Layout/Card/Card.vue';
import { loadDraws } from '@/services/api/loadDraws';
import { DrawType, isDrawModel } from '@/services/api/types';
import { moneyFormatter } from '@/utils/moneyFormatter/moneyFormatter';

const { loading, result, error } = loadDraws(DrawType.EuroJackpot);

const draw = computed(() => {
  if (result.value !== undefined) {
    const drawModel = result.value.draw.draws[0];
    if (isDrawModel(drawModel)) {
      return drawModel;
    }
  }
  return undefined;
});
</script>

<style lang="postcss">
.lottery-number {
  @apply flex items-center justify-center;
  @apply h-8 w-8;
  @apply rounded-full border;
  @apply font-semibold;
}
</style>
