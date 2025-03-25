<template lang="">
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">🕒 TodoList App 💻</div>
    </div>
  </div>

  <div class="card card-default card-borderless">
    <div class="card-body">
      <InputTodo @add-todo="addTodo" />
    </div>
  </div>
</template>

<script>
// import 태그명 from '경로';
import InputTodo from './components/InputTodo.vue';
export default {
  components: { InputTodo },
  data() {
    return {
      todolist: [
        { id: Date.now(), todo: '자전거 타기', completed: false },
        { id: Date.now() + 1, todo: '딸과 공원 산책', completed: true },
        {
          id: Date.now() + 2,
          todo: '일요일 애견 카페',
          completed: false,
        },
        { id: Date.now() + 3, todo: 'Vue 원고 집필', completed: false },
      ],
    };
  },
  methods: {
    addTodo(receiveTodo) {
      //InputTodo 컴포넌트의
      // this.$emit('add-todo', this.todo); 에서 전달된 this.todo
      this.todolist.push({
        id: Date.now(),
        todo: receiveTodo,
        completed: false,
      });
    },
  },
};
</script>
