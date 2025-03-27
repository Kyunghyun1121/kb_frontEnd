<template>
  <div class="row">
    <div class="col">
      <div class="list-group">
        <UserListItem v-for="user in users" :key="user.name" :userItem="user" />
      </div>
    </div>
  </div>
</template>

<script>
import UserListItem from './UserListItem.vue';
export default {
  name: 'UserList',
  components: { UserListItem },
  props: ['users'],
};
</script>
