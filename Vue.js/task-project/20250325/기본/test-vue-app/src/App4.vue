<template>
  <div>
    <InputName @nameChanged="nameChangedHandler" />
    <div>
      <h3>App 데이터: {{ parentName }}</h3>
    </div>
  </div>
</template>

<script>
import InputName from './components/InputName.vue';
export default {
  name: 'App4',
  components: { InputName },
  data() {
    return {
      parentName: '',
    };
  },
  methods: {
    nameChangedHandler(e) {
      console.log(e.name);
      this.parentName = e.name;
    },
  },
};
</script>
