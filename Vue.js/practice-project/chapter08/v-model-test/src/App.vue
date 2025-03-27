<!-- 부모 컴포넌트 -->
<template>
  <div>
    <InputName v-model:name="searchName" />
    <h3>검색어 : {{ searchName }}</h3>
  </div>

  <hr />
  <h1>부모 Click Count : {{ count }}</h1>
  <ClickCount />

  <hr />
  <h1>Teleport Text</h1>
  <button @click="changeModal">isModal 상태 변경</button>
  <teleport to="#modal">
    <Modal v-if="isModal"></Modal>
  </teleport>
</template>

<script>
import InputName from './components/InputName.vue';
import ClickCount from './components/ClickCount.vue';
import { computed } from 'vue';
import Modal from './components/Modal.vue';

export default {
  name: 'App',

  // 자식 컴포넌트 등록
  components: { InputName, ClickCount, Modal },
  data() {
    return { searchName: 'John', count: 0, isModal: false };
  },

  methods: {
    changeModal() {
      this.isModal = true;
      setTimeout(() => {
        this.isModal = false;
      }, 2000);
    },
  },

  // 하위 컴포넌트에게 정보 제공
  provide() {
    return {
      cnt: computed(() => this.count),
      increment: () => this.count++,
    };
  },
};
</script>
