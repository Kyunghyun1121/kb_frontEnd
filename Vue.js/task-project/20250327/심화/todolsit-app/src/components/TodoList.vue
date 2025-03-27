<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <!-- 확인용 태그
        <p v-for="todo in todolist">{{ todo }}</p> -->

        <!-- 할일 목록 요소 -->
        <!-- TodoItem -> TodoList -> App -->
        <TodoListItem
          v-for="todo in todolist"
          :todoItem="todo"
          @toggle-completed="$emit('toggle-completed', $event)"
          @delete-todo="$emit('delete-todo', $event)"
        />
        <!-- $event : 자식 컴포넌트에서 방출된 payload 참조 변수 -->
      </ul>
    </div>
  </div>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';

//부모로 부터 전달받은 데이터를 수신하면서 유효성 검사를 진행한다.
const props = defineProps({
  //데이터의 형식과 유무를 정하여 유효성 검사
  todolist: { type: Array, required: true },
});
//부모 컴포넌트로 방출되는 이벤트 검사
</script>
