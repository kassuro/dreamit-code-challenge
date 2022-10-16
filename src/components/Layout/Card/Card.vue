<template>
  <div
    class="flex-col rounded-md border p-3 shadow-md"
    :class="{
      [cardSize]: true,
      [backgroundColor[background]]: true,
      'lg:max-w-3xl': size !== 'full',
      'cursor-pointer': clickable,
      'hover:brightness-90': clickable,
    }"
    @click="clickHandler"
    @keyup.enter="clickHandler"
  >
    <div v-if="$slots.title" class="mb-3">
      <slot name="title" />
    </div>

    <div class="flex-grow">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

// There seems to be a problem with volar here which makes exporting the interface currently necessary.
// Otherwise we get errors from volar / vue-tsc in VS-Code.
// Volar core maintainer suggests putting props in script tag, which seems weird as we want to use script setup.
// https://github.com/johnsoncodehk/volar/issues/1232
export interface Props {
  size: 'sm' | 'md' | 'lg' | 'full';
  background?: 'yellow' | 'red' | 'blue' | 'white';
  clickable?: boolean;
  clickAction?: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  background: 'white',
  clickable: false,
  link: false,
  clickAction: () => {},
});

const cardSize = computed(() => {
  if (props.size === 'sm') {
    return 'w-1/4';
  }
  if (props.size === 'md') {
    return 'w-1/2';
  }
  return 'w-full';
});

const backgroundColor = {
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  white: 'bg-white-500',
};

const clickHandler = () => {
  if (!props.clickable) {
    return;
  }

  props.clickAction();
};
</script>

<script lang="ts">
export default {
  name: 'TottoCard',
};
</script>
