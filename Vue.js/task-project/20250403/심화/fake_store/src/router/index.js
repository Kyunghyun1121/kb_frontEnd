import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ElectronicsPage from '@/pages/categoryPage/ElectronicsPage.vue';
import JeweleryPage from '@/pages/categoryPage/JeweleryPage.vue';
import MensClothingPage from '@/pages/categoryPage/MensClothingPage.vue';
import WomensClothingPage from '@/pages/categoryPage/WomensClothingPage.vue';
import ProductDetailPage from '@/pages/productPage/ProductDetailPage.vue';
import ProductWritePage from '@/pages/productPage/ProductWritePage.vue';
import ProductEditPage from '@/pages/productPage/ProductEditPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      name: '가전',
      path: '/electronics',
      component: ElectronicsPage,
    },
    {
      name: '주얼리',
      path: '/jewelery',
      component: JeweleryPage,
    },
    {
      name: '남성의류',
      path: '/mensclothing',
      component: MensClothingPage,
    },
    {
      name: '여성의류',
      path: '/womenclothing',
      component: WomensClothingPage,
    },
    {
      name: 'product/id',
      path: '/product/id',
      component: ProductDetailPage,
    },
    {
      name: 'product/write',
      path: '/product/write',
      component: ProductWritePage,
    },
    {
      name: 'product/edit',
      path: '/product/edit:id',
      component: ProductEditPage,
    },
  ],
});

export default router;
