<template>
  <li><input type="checkbox" v-model="checked" />{{ name }}</li>
</template>

<script>
export default {
  name: 'CheckboxItem',
  data() {
    return {
      checed: false,
      props: ['name', 'checked'],
    };
  },
};
</script>
