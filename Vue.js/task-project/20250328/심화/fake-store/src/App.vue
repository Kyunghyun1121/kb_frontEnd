<template>
  <div class="container">
    <DefaultLayout />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup>
import DefaultLayout from '@/components/DefaultLayout.vue';
import Footer from '@/components/Footer.vue';
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
.jumbotron {
  background-image: url('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg');
}
td > a {
  text-decoration: none;
}
.avatar {
  font-size: 20px;
  color: white;
}
</style>
