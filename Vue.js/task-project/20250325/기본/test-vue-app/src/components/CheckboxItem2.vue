<template>
  <ul>
    <li><input type="checkbox" :checked="checked" />{{ idol.name }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CheckboxItem',
  props: ['idol'],
};
</script>
