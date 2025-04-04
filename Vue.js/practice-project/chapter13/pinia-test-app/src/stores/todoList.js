import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

export const useTodoListStore = defineStore('todoList', () => {
  const state = reactive({
    todoList: [
      { id: 1, name: '吃饭', done: false },
      { id: 2, name: '睡觉', done: false },
      { id: 3, name: '打豆豆', done: false },
    ],
  });

  const doneCount = computed(() => {
    return state.todoList.filter((todoItem) => todoItem.done).length;
  });

  const todoList = computed(() => state.todoList);
  return { todoList, doneCount, addTodo, deleteTodo, toggleTDone };
});
