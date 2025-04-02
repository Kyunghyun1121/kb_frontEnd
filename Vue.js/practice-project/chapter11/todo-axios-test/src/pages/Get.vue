<template>
  <div>
    <h1>/get/:id(단건 조회)</h1>
    <hr />
    <h3>조회할 Todo의 id 입력</h3>
    <div>
      <input type="text" placeholder="ID 입력" v-model="id" />
      <button @click="getTodo">조회</button>
    </div>
    <div>
      <h3>조회 결과</h3>
      <ul>
        <li>id : {{ state.todo.id }}</li>
        <li>todo : {{ state.todo.todo }}</li>
        <li>desc : {{ state.todo.desc }}</li>
        <li>done : {{ state.todo.done }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const id = ref(route.params.id);
const state = reactive({ todo: {} });

const getTodo = async () => {
  const response = await axios.get(`/api/todos/${id.value}`);
  console.log(response.data);
  state.todo = response.data;
};

onMounted(() => {
  getTodo();
});
</script>
