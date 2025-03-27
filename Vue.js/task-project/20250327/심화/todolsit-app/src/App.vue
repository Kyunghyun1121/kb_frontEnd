<template lang="">
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">🕒 TodoList App 💻</div>
    </div>
  </div>

  <div class="card card-default card-borderless">
    <div class="card-body">
      <InputTodo @addTodo="addTodo" />
      <!-- 카운트 컴포넌트 -->
      <TodoCount :todolist="sortedList" />

      <!-- 목록 컴포넌트  
        - 목록 화면 랜더링에 필요한 데이터 todolist를 부모가 가지고 있음 
        부모 -> 자식 데이터 전달 : props 이용 -> v-bind: 전달할 이름="데이터"
      -->
      <TodoList
        :todolist="sortedList"
        @toggle-completed="toggleCompleted"
        @delete-todo="deleteTodo"
      />
    </div>
  </div>
</template>

<script setup>
// import 태그명 from '경로';
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';
import TodoCount from './components/TodoCount.vue';
import { computed, onMounted, reactive } from 'vue';

const state = reactive({ todolist: [] });

onMounted(() => {
  state.todolist.push({
    id: Date.now(),
    todo: '자전거 타기',
    completed: false,
  });
  state.todolist.push({
    id: Date.now() + 1,
    todo: '딸과 공원 산책',
    completed: true,
  });
  state.todolist.push({
    id: Date.now() + 2,
    todo: '일요일 애견 카페',
    completed: false,
  });
  state.todolist.push({
    id: Date.now() + 3,
    todo: 'Vue 원고 집필',
    completed: false,
  });
});

const addTodo = (receiveTodo) => {
  //InputTodo 컴포넌트의
  // this.$emit('add-todo', this.todo); 에서 전달된 this.todo
  state.todolist.push({
    id: Date.now(),
    todo: receiveTodo,
    completed: false,
  });
};

//     /* 할 일 완료 여부 변경 메서드 */
const toggleCompleted = (id) => {
  let index = state.todolist.findIndex((item) => id === item.id);
  state.todolist[index].completed = !state.todolist[index].completed;
};

//     /* 할 일 삭제 메서드 */
const deleteTodo = (id) => {
  // 배열.findIndex(콜백함수) : 콜백 함수의 결과가 true인 index를 반환
  let index = state.todolist.findIndex((item) => id === item.id);
  state.todolist.splice(index, 1);
};

//   //data가 변할 때 감지한다.
//   // 게산되서 리턴된 값은 함수명으로 사용한다.

// 정렬
const sortedList = computed(() => {
  state.todolist.sort((t1, t2) => {
    // true > false  -> 결과 : true
    if (t1.completed > t2.completed) {
      return 1; // 양수 반환 시 자리 바뀜 (t1, t2 -> t2, t1)
    }

    if (t1.completed < t2.completed) {
      return -1; // 음수 반환 시 자리 바꿈 X
    }

    // 위 if문 실행 X === completed가 같을 경우
    // -> 문자열 오름 차순 정렬

    // 모두 소문자로 변경(대소문자 구분 X)
    const todo1 = t1.todo.toLowerCase();
    const todo2 = t2.todo.toLowerCase();

    if (todo1 > todo2) return 1; // 자리 교체
    else if (todo1 === todo2) return 0; // 유지
    else return -1; // 유지
  });

  // 정렬된 todoList 반환
  return state.todolist;
});
</script>
