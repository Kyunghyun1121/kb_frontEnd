<template>
  <h1>axios 통신은 즐거워</h1>
</template>

<script setup>
import axios from 'axios';

let data = { todo: '윗몸일으키기 3세트', desc: '너무 빠르지 않게...' };

const datas = async () => {
  console.log(await axios.get(`/api/todos`));
  await axios.post(`/api/todos`, data);
  console.log(await axios.get(`/api/todos`));
};

datas();
</script>
