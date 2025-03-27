<template>
  <ul>
    <li><input type="checkbox" :checked="checked" />{{ name }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CheckboxItem',
  props: {
    id: [Number, String],
    name: String,
    checked: {
      type: Boolean,
      required: false,
      // 옵션
      default: false,
    },
  },
};
</script>
