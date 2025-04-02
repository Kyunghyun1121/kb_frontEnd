<template>
  <h1>axios 통신은 즐거워</h1>
</template>

<script setup>
import axios from 'axios';

const datas = () => {
  return new Promise((result, err) => {
    axios
      .get(`/api/todos`)
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  });
};

const data = () => {
  return new Promise((result, err) => {
    axios
      .get(`/api/todos/1`)
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  });
};

datas();
data();
</script>
