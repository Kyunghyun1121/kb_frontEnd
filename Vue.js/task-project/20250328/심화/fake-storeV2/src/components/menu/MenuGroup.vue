<template>
  <div>
    <div class="container">
      <div class="row">
        <ul class="navbar-nav me-auto">
          <MenuItem v-for="menu in menuGroup" :menuItem="menu" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import menuList from '@/config/index.js';
import MenuItem from '@/components/menu/MenuItem.vue';
const menuGroup = menuList.menus;
</script>
