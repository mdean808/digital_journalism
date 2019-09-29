import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		people: [],
		videos: [],
		podcasts: [],
		articles: [],
		photos: [],
	},
	getters: {
		person: (state) => (id) => {
			return state.people.filter(person => person.id === id)[0]
		},
		video: (state) => (id) => {
			return state.videos.filter(video => video.id === id)[0]
		},
		podcast: (state) => (id) => {
			return state.podcasts.filter(podcast => podcast.id === id)[0]
		},
		article: (state) => (id) => {
			return state.articles.filter(article => article.id === id)[0]
		},
		photo: (state) => (id) => {
			return state.photos.filter(photo => photo.id === id)[0]
		}
	},
	mutations: {},
	actions: {}
})
