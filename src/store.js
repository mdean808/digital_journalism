import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		people: [{
			id: '0',
			name: 'Ry Bleckel',
			email: 'rbleckel@hpa.edu',
			bio: 'I am ry bleckel who is a bleckel and i really like to sing song',
			videos: ['0'],
			podcasts: [],
			articles: [],
			photos: []
		}],
		videos: [{
			id: '0',
			title: 'C A P P A D O C I A',
			url: 'https://www.youtube.com/watch?v=RdoGRjqJxbk',
			desc: 'Filmed at ur mums house in turkey (B A L L O O N S)',
			author: '0'
		}],
		podcasts: [{
			id: '0',
			title: 'Sacha Rogan Experience #1',
			trackId: '34019569',
			desc: 'Filmed in sachas garage (ft Ry)',
			author: '0'
		}],
		articles: [],
		photos: [],
	},
	getters: {
		person: (state) => (id) => {
			return state.people.find(person => person.id === id)
		},
		video: (state) => (id) => {
			return state.videos.find(video => video.id === id)
		},
		videos: (state) => () => {
			return state.videos
		},
		podcast: (state) => (id) => {
			return state.podcasts.find(podcast => podcast.id === id)
		},
		podcasts: (state) => (id) => {
			return state.podcasts
		},
		article: (state) => (id) => {
			return state.articles.find(article => article.id === id)
		},
		photo: (state) => (id) => {
			return state.photos.find(photo => photo.id === id)
		}
	},
	mutations: {},
	actions: {}
})
