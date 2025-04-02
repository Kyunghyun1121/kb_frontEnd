<template>
  <h1>axios 통신은 즐거워</h1>
</template>

<script setup>
import axios from 'axios';

const url = '/api/todos2';
const datas = async () => {
  await axios
    .get(url)
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      console.log(`에러입니다 : ${err}`);
    });
};

datas();
</script>
