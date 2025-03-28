<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 : {{ currentPath.fullPath }}</p>
  </div>
</template>

<script setup>
// export default {
//   name: 'About',
//   created() {
//     console.log(this.$route);
//   },
// };
import { useRoute } from 'vue-router';
// export default {
//   name: 'About',
//   setup() {
//     const currentPath = useRoute();
//     return { currentPath };
//   },
// };
const currentPath = useRoute();
</script>
