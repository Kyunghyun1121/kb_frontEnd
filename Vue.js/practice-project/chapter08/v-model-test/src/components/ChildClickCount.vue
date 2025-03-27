<!-- 자식 컴포넌트 -->
<template>
  <div>
    <h1>자식의 자식 Click Count : {{ cnt }}</h1>
    <button @click="increment">클릭 시 1 증가</button>
  </div>
</template>

<script>
export default {
  name: 'ChildClickCount',
  inject: ['cnt', 'increment'],
};
</script>
