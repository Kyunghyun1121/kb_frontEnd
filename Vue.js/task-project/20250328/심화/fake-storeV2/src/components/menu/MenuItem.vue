<template>
  <div>
    <router-link :to="props.menuItem.url" class="text-white">
      <li class="nav-item">
        <i :class="menuItem.icon"> </i>{{ menuItem.title }}
      </li>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  menuItem: { type: Object, required: true },
});
</script>
