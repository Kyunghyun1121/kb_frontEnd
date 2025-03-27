<!-- 자식 컴포넌트 -->
<template>
  <div>
    <h1>자식 Click Count : {{ cnt }}</h1>
  </div>
  <ChildClickCount />
</template>

<script>
import ChildClickCount from './ChildClickCount.vue';
export default {
  name: 'ClickCount',
  components: { ChildClickCount },
  inject: ['cnt'],
};
</script>
