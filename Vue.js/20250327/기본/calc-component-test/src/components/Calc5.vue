<template>
  <div>
    X : <input type="text" v-model.number="x" /> <br />
    결과 : {{ result }}
  </div>
</template>

<script>
import { watch, ref } from 'vue';

export default {
  name: 'Calc5',
  setup() {
    const x = ref(0);
    const result = ref(0);
    watch(x, (c, o) => {
      console.log(`이전값: ${o} -> 바뀐 값: ${c}`);
      result.value = c * 2;
    });
    return { x, result };
  },
};
</script>
