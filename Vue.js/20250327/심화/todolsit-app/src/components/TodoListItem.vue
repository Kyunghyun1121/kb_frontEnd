<template>
  <li
    :key="todoItem.id"
    class="list-group-item"
    :class="{ 'list-group-item-success': todoItem.completed }"
  >
    <input
      type="checkbox"
      class="pointer me-3"
      v-model="props.todoItem.completed"
      @click="toggleCompletedHandler(props.todoItem.id)"
    />

    <!-- todoitem.completed 값이 true이면 
                   'todo-done' 클래스, '(완료') 문자열 추가 -->
    <span class="pointer" :class="{ 'todo-done': props.todoItem.completed }">
      {{ props.todoItem.todo }} {{ props.todoItem.completed ? '(완료)' : '' }}
    </span>

    <!-- 
        삭제 버튼이 클릭된 경우 deleteTodo() 메서드 호출
        .stop : 이벤트 전파(하위 요소 -> 상위 요소) 막기 
    -->
    <span
      class="float-end badge bg-secondary pointer"
      @click.stop="emit('delete-todo', props.todoItem.id)"
    >
      삭제
    </span>
  </li>
</template>

<script setup>
const name = 'TodoListitem';
const props = defineProps({
  todoItem: { type: Object, required: true },
});

//부모 컴포넌트로 발신되는 이벤트 유효성 검사
const emit = defineEmits(['toggle-completed', 'delete-todo']);

const toggleCompletedHandler = (id) => {
  emit('toggle-completed', id);
};
</script>
