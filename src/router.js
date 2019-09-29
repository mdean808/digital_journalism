import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Video from './views/Video.vue'
import Videos from './views/Videos.vue'
import About from './views/About.vue'

Vue.use(Router);


export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/video',
			name: 'Video',
			component: Video
		},
		{
			path: '/videos',
			name: 'Videos',
			component: Videos
		},
	]
})
