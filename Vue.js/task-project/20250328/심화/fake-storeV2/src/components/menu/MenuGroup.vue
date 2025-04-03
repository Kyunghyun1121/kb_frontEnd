<template>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav me-auto">
      <MenuItem v-for="menu in menus" :menuItem="menu" />
    </ul>
  </div>
</template>

<script setup>
import MenuItem from '@/components/menu/MenuItem.vue';
const props = defineProps({
  menus: { Type: Array, required: true },
});
</script>
