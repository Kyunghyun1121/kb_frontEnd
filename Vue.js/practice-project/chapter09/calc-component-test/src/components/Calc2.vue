<template>
  <div>
    <h3>Options API</h3>
    <input
      type="text"
      placeholder="입력하면 대문자로 변환"
      :value="name"
      @input="changeName($event.target.value)"
    /><br />
    X :
    <input type="text" v-model.number="x" /><br />
    Y :
    <input type="text" v-model.number="y" /><br />
    <button @click="calculateSum(x, y)">계산하기 버튼</button>
    <p>X + Y = {{ sum1 }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'Calc2',

  setup() {
    const name = ref('');

    const changeName = (inputName) => {
      name.value = inputName.toUpperCase();
    };

    const x = ref(10);
    const y = ref(10);
    const sum1 = ref(10);

    const calculateSum = (num1, num2) => {
      sum1.value = num1 + num2;
    };
    return { name, changeName, x, y, sum1, calculateSum };
  },
};
</script>
