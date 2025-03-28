import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import ElectronicsPage from '@/pages/ElectronicsPage.vue';
import JeweleryPage from '@/pages/JeweleryPage.vue';
import MensClothingpage from '@/pages/MensClothingpage.vue';
import WomensClothingPage from '@/pages/WomensClothingPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/electronics', component: ElectronicsPage },
    { path: '/jewelery', component: JeweleryPage },
    { path: '/mensclothing', component: MensClothingpage },
    { path: '/womenclothing', component: WomensClothingPage },
  ],
});

export default router;
