<template>
  <div>
    <router-link :to="props.menuItem.url" class="text-white">
      <li class="nav-item m-1">
        <i :class="menuItem.icon" class="me-1"> </i>{{ menuItem.title }}
      </li>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  menuItem: { type: Object, required: true },
});
</script>
