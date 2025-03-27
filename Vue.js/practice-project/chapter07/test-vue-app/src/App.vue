<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
</script>

<template>
  <div>
    <CheckboxItem />
    <CheckboxItem />
    <CheckboxItem />
  </div>
</template>

<script>
import CheckboxItem from './components/Checkbo xItem.vue';

export default {
  name: 'App',
  components: { CheckboxItem },
};
</script>
