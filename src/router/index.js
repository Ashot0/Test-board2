import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import FormView from '../views/FormView.vue';
import PinImgView from '../views/PinImgView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},

	{
		path: '/form',
		name: 'form',
		component: FormView,
	},

	{
		path: '/pin-img',
		name: 'pin-img',
		component: PinImgView,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
