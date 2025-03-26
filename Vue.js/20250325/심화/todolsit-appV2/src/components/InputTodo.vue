<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input
          id="msg"
          type="text"
          class="form-control"
          name="msg"
          placeholder="할일을 여기에 입력!"
          v-model.trim="todo"
          @keyup.enter="addTodo"
        />

        <!-- 추가 버튼 클릭 시 작성된 할 일 내용을 todolist에 추가 -->
        <span class="btn btn-primary input-group-addon" @click="addTodoHandler"
          >추가</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputTodo',
  data() {
    return { todo: '' };
  },
  inject: ['addTodo'],
  methods: {
    addTodoHandler() {
      if (this.todo.length >= 3) {
        // 작성된 할 일(this. todo)을 뷰모 컴포넌트 (Appp.vue)로
        // 전달해야 한다. -> emit을 이용한다.

        this.$emit('addTodo', this.todo);
        this.todo = '';
      } else {
        alert('할 일은 3글자 이상으로 작성해주세요!!');
      }
    },
  },
};
</script>
