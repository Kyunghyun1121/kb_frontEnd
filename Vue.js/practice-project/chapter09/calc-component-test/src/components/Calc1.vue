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
export default {
  name: 'Calc1',
  data() {
    return {
      name: '',
      x: 10,
      y: 20,
      sum1: 30,
    };
  },
  methods: {
    changeName(inputName) {
      this.name = inputName.toUpperCase();
    },
    calculateSum(num1, num2) {
      this.sum1 = num1 + num2;
    },
  },
};
</script>
