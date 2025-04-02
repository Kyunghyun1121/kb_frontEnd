<template>
  <div class="container">
    <slot name="header"></slot>
    <slot name="navbar"></slot>
  </div>

  <div class="content my-5 px-3">
    <!-- v-slot:default 가 이 자리에 들어온다.  -->
    <slot></slot>
  </div>
</template>
<script setup></script>
