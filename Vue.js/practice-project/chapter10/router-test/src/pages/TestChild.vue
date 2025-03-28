<template>
  <div class="card card-body">
    <h2>TestChild</h2>

    <h3>파라미터 num : {{ num }}</h3>

    <button class="btn btn-lg btn-secondary" @click="closeTest">닫기</button>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { ref, watchEffect } from 'vue'; // compostion 방식의 단일 값 proxy 래핑 객체
export default {
  name: 'TestChild',

  setup() {
    // 현재 라우트 정보
    const currentRoute = useRoute();
    const router = useRouter();

    // 동적 라우트에 전달된 값을 얻어와서 num 변수에 저장
    const num = ref(currentRoute.params.num);

    // watchEffect : ref 등의 변화가 감지되면 작동한다.
    watchEffect(() => {
      num.value = currentRoute.params.num;
    });

    const closeTest = () => {
      router.push('/test');
      // <RouterLink to = "/test">와 같은 효과
    };

    return { num, closeTest };
  },
};
</script>
