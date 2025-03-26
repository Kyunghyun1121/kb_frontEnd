<!-- 자식 컴포넌트 -->
<template>
  <input
    type="text"
    :value="name"
    @input="$emit('update:name', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'InputName',
  props: ['name'],
};
</script>
