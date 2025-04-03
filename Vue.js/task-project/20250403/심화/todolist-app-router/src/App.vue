<template>
  <!-- 전체 컨테이너를 감싸는 div -->
  <div class="container">
    <!-- 헤더 컴포넌트를 표시 -->
    <Header />

    <!-- 라우터에 의해 매칭되는 컴포넌트를 표시하는 영역 -->
    <!-- 클릭된 RouterLink에 따라 표시되는 컴포넌트가 변경됨 -->
    <RouterView />

    <!-- 로딩 중일 때만 Loading 컴포넌트를 표시 -->
    <Loading v-if="states.isLoading" />
  </div>
</template>

<script setup>
// import 태그명 from '경로';
import axios from 'axios';
import Header from './components/Header.vue';
import { computed, onMounted, reactive } from 'vue';

const state = reactive({ todoList: [] });

/********* axios 요청 처리 함수 *********/

/**
 * TodoList 목록을 서버에서 가져오는 함수
 */
const fetchTodoList = async () => {
  const response = await axios.get('/api/todos');
  state.todoList = { ...response };
};

/**
 * TodoItem 서버 추가 함수
 * @param {Object} todo - TodoItem의 정보를 포함하는 객체
 * @param {Function} successCallback - 요청 성공 시 호출될 콜백 함수
 */
const addTodo = async ({ todo, desc }, successCallback) => {
  const payload = { todo, desc };
  const response = await axios.post('/api/todos', payload);
  state.todoList.push({ ...response.data });
};

/**
 * TodoItem 서버 수정 함수
 * @param {Object} todo - TodoItem의 정보를 포함하는 객체
 * @param {Function} successCallback - 요청 성공 시 호출될 콜백 함수
 */
const updateTodo = async ({ id, todo, desc, done }, successCallback) => {
  const response = await axios.put('/api/todos' + `/${id}`);
};

/**
 * TodoItem 서버 삭제 함수
 * @param {string} id - TodoItem의 id
 */
const deleteTodo = async (id) => {
  const response = await axios.delete('/api/todos' + `/${id}`);
};

/**
 * TodoItem 완료여부 토글 함수
 * @param {string} id - TodoItem의 id
 */
const toggleDone = async (id) => {
  let todo = states.todoList.find((todo) => todo.id === id);
  let payload = { ...todo, done: !todo.done };
  const response = await axios.put(BASEURI + `/${id}`, payload);
};

/**
 * provide를 사용하여 자식 컴포넌트들에게 데이터와 함수들을 전달함
 * @param {string} name - 전달할 데이터의 이름
 * @param {Function} data - 전달할 데이터
 */
provide(
  'todoList',
  computed(() => states.todoList)
);

provide('actions', {
  addTodo,
  deleteTodo,
  toggleDone,
  updateTodo,
  fetchTodoList,
});

/* 앱이 시작될 때 TodoList를 가져옴 */
fetchTodoList();
</script>
