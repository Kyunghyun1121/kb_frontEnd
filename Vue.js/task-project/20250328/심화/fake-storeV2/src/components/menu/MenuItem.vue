<template>
  <div>
    <li class="nav-item m-1">
      <router-link :to="props.menuItem.url" class="text-white">
        <i :class="menuItem.icon" class="me-1"> </i>{{ menuItem.title }}
      </router-link>
    </li>
  </div>
</template>

<script setup>
const props = defineProps({
  menuItem: { type: Object, required: true },
});
</script>
