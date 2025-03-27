<template>
  <li>
    <span>{{ userItem.name }}{{ userItem.email }}{{ userItem.gitHub }}</span>
  </li>
</template>

<script>
export default {
  name: 'UserListItem',
  props: ['userItem'],
};
</script>
