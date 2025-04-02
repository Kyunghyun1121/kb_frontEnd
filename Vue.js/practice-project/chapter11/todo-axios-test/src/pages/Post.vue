<template>
  <div><h1>/post(할 일 추가)</h1></div>
  <hr />
  <h3>할 일 추가</h3>
  <form @submit.prevent="addTodo">
    <div>
      할 일 :
      <input type="text" v-model="state.todo.todo" />
    </div>
    <div>
      설 명 :
      <input type="text" v-model="state.todo.desc" />
    </div>
    <button type="submit">추가</button>
  </form>
</template>
<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const state = reactive({
  todo: {
    id: '',
    todo: '',
    desc: '',
    done: 'false',
  },
});

const router = useRouter();

const addTodo = async () => {
  const length = (await axios.get('/api/todos')).data.length;
  console.log(length);
  state.todo.id = `${length + 1}`;
  const response = axios.post('/api/todos', state.todo);
  const result = (await response).data;
  const id = result.id;
  router.push(`/get/${id}`);
};
</script>
