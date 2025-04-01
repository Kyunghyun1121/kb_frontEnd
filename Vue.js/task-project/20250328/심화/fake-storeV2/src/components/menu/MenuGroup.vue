<template>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapsibleNavbar"
    aria-controls="collapsibleNavbar"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav me-auto">
      <MenuItem v-for="menu in menuGroup" :menuItem="menu" />
    </ul>
  </div>
</template>

<script setup>
import menuList from '@/config/index.js';
import MenuItem from '@/components/menu/MenuItem.vue';
const menuGroup = menuList.menus;
</script>
