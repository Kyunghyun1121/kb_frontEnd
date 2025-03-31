<script setup>
import { RouterView } from 'vue-router';
import DefaultLayout from './components/DefaultLayout.vue';
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <DefaultLayout>
    <template v-slot:header><Header /></template>
    <template v-slot:navbar><NavBar /></template>
    <template v-slot:default><RouterView /></template>
    <template v-slot:footer><Footer /></template>
  </DefaultLayout>
</template>
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css');

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
.navItem {
  color: white;
}
</style>
