<template>
  <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <i class="fa-solid fa-home"></i> Fullstack
      </a>

      <!-- 햄버거 버튼 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="collapsibleNavbar">
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
        <MenuGroup />
      </div>
    </div>
  </nav>
</template>

<script setup>
import MenuGroup from './menu/MenuGroup.vue';
</script>
