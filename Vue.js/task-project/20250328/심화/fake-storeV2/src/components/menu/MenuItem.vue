<template>
  <li>
    <router-link :to="props.menuItem.url" class="text-white m-1">
      <i :class="menuItem.icon" class="me-1"> </i>{{ menuItem.title }}
    </router-link>
  </li>
</template>

<script setup>
const props = defineProps({
  menuItem: { type: Object, required: true },
});
</script>
