<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">우리반 Contact</div>
    </div>
  </div>
  <InputUser />
  <UserList :users="users" />
  <UserCount :users="users" />
</template>

<script>
import InputUser from './components/inputUser.vue';
import Modal from './components/Modal.vue';
import UserCount from './components/UserCount.vue';
import UserList from './components/UserList.vue';
export default {
  name: 'App',
  components: { InputUser, Modal, UserCount, UserList },
  data() {
    return {
      users: [
        {
          userName: '홍길동',
          gender: 'male',
          age: '18',
          email: 'hong@example.com',
          gitHub: 'hongGD',
        },
        {
          userName: '짱구',
          gender: 'male',
          age: '5',
          email: 'janggu@example.com',
          gitHub: 'janggu',
        },
        {
          userName: '유리',
          gender: 'female',
          age: '5',
          email: 'yuri@example.com',
          gitHub: 'yuri',
        },
        {
          userName: '백도연',
          gender: 'male',
          age: '18',
          email: 'donghyeon@example.com',
          gitHub: 'donghyeon',
        },
      ],
    };
  },
};
</script>
