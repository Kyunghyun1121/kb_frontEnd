<template>
  <h1>axios 통신은 즐거워</h1>
</template>

<script setup>
import axios from 'axios';

const datas = async () => {
  console.log(await axios.get(`/api/todos`));
};

const data = async () => {
  console.log(await axios.get(`/api/todos/1`));
};

datas();
data();
</script>
