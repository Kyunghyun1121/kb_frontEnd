<script setup>
import { computed } from 'vue';
import { useCounterStore } from './stores/counter';

const store = useCounterStore();
console.log(store);
const { increment } = store;
const count = computed(() => store.count);
const doubleCount = computed(() => store.doubleCount);

increment();
</script>

<template>
  <div>
    <h2>TodoList 테스트 (COmposition API)</h2>
  </div>
</template>
