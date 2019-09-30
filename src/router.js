import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Video from './views/Video.vue'
import Videos from './views/Videos.vue'
import Podcast from './views/Podcast.vue'
import Podcasts from './views/Podcasts.vue'
import Photo from './views/Photo.vue'
import Photos from './views/Photos.vue'
import Article from "./views/Article";
import Articles from "./views/Articles";

Vue.use(Router);


export default new Router({
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/about',
			name: 'About',
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
		{
			path: '/podcast',
			name: 'Podcast',
			component: Podcast
		},
		{
			path: '/podcasts',
			name: 'Podcasts',
			component: Podcasts
		},
		{
			path: '/photo',
			name: 'Photo',
			component: Photo
		},
		{
			path: '/photos',
			name: 'Photos',
			component: Photos
		},
		{
			path: '/article',
			name: 'Article',
			component: Article
		},
		{
			path: '/articles',
			name: 'Articles',
			component: Articles
		},
	]
})
