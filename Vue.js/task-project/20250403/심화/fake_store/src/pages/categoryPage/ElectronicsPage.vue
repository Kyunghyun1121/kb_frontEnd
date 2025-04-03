<!-- 가전 페이지 -->
<template>
  <div>
    <h1><i class="fa-solid fa-tv"></i>가전</h1>
    <div>
      <router-link :to>
        <button>+ 상품 등록</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import ProductAddButton from '@/components/layout/product/ProductAddButton.vue';
</script>
