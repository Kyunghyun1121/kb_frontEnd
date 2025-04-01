<template>
  <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link to="/" class="text-white">
          <i class="fa-solid fa-home"></i>Fullstack
        </router-link>
      </a>

      <!-- 햄버거 버튼 -->
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
        aria-controls="collapsibleNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->

      <MenuGroup />
      <!-- <router-link to="/electronics">
            <li class="nav-item">가전</li>
          </router-link>
          <router-link to="/jewelery">
            <li class="nav-item">주얼리</li>
          </router-link>
          <router-link to="/mensclothing">
            <li class="nav-item">남성의류</li>
          </router-link>
          <router-link to="/womenclothing">
            <li class="nav-item">여성의류</li>
          </router-link> -->
    </div>
  </nav>
</template>

<script setup>
import MenuGroup from './menu/MenuGroup.vue';
</script>
