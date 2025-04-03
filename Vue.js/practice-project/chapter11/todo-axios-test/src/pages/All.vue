<template>
  <div>
    <h1>ALL(전체 조회)</h1>
    <table class="table table-bordered">
      <thead>
        <th>Done</th>
        <th>ID</th>
        <th>Todo</th>
        <th>Description</th>
        <th>Delete</th>
      </thead>

      <tbody>
        <tr v-for="todo in state.todos" :key="todo.id">
          <td>
            <input
              type="checkbox"
              :checked="todo.done"
              @change="updateTodo(todo)"
            />
          </td>
          <td>{{ todo.id }}</td>
          <td>{{ todo.todo }}</td>
          <td>{{ todo.desc }}</td>
          <td><button @click="deleteTodo(todo)">삭제</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import axios from 'axios';

const state = reactive({ todos: [] });

const fetchTodoList = async () => {
  const response = await axios.get('/api/todos');
  state.todos = response.data;
};
fetchTodoList();

const updateTodo = (todo) => {
  todo.done = !todo.done;

  const response = axios.put(`/api/todos/${todo.id}`, todo);
};

const deleteTodo = async (todo) => {
  const response = await axios.delete(`/api/todos/${todo.id}`);
  console.log(response.data);

  // 삭제된 할 일을 state.todos에서 찾아서 제거한다.
  state.todos = state.todos.filter((todo) => todo.id !== id);
};
</script>
