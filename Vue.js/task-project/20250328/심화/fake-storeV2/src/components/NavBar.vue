<template>
  <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link to="/" class="text-white">
          <i class="fa-solid fa-home"></i>Fullstack
        </router-link>
      </a>

      <!-- 메뉴 햄버거 버튼 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
        @click="toggleNavShow"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="navClass" id="collapsibleNavbar">
        <MenuGroup :menus="config.menus" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import config from '@/config'; // src/config/index.js 모듈에서 데이터 가져오기
import { reactive, computed } from 'vue';
import MenuGroup from './menu/MenuGroup.vue';

// 상태 관리 객체 생성
let state = reactive({ isNavShow: false });

// 메뉴 햄버거 버튼 클릭 시 메뉴 보여줄지 안보여줄지 결정
let navClass = computed(() =>
  state.isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
);
const toggleNavShow = () => (state.isNavShow = !state.isNavShow);
</script>
