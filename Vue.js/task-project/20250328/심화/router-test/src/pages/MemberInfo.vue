<template>
  <div class="card card-body">
    <img :src="member.photo" class="img" />
    <h4 class="mt-2">{{ member.name }}({{ member.role }})</h4>
    <br />
    <p>{{ member.desc }}</p>
    <a
      v-if="member.insta && member.insta !== ''"
      class="fa fa-instagram m-1"
      :href="member.insta"
    ></a>
    <a
      v-if="member.facebook && member.facebook !== ''"
      class="fa fa-facebook m-1"
      :href="member.facebook"
    ></a>
    <a
      v-if="member.youtube && member.youtube !== ''"
      class="fa fa-youtube m-1"
      :href="member.youtube"
    ></a>
    <br /><br />
    <router-link to="/members">멤버 목록으로</router-link>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import members from '@/members.json';

const route = useRoute();
const id = parseInt(route.params.id, 10);
const member = members.find((m) => m.id == id);
</script>

<!-- "id": 2,
"name": "이철희",
"role": "드럼",
"photo": "http://sstatic.naver.net/people/25/202004271203269741.jpg",
"desc": "드럼연주가",
"insta": "https://www.instagram.com/chulheedrum/",
"facebook": "",
"youtube": "https://www.youtube.com/channel/UCt4_srP6q_aPsmuZ3W3R-Uw" -->
