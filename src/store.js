import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		people: [
			{
				id: '0',
				name: 'Ry Bleckel',
				email: 'rbleckel@hpa.edu',
				bio: 'Videographer, Photographer, Musician',
				avatar: 'http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png',
				videos: ['0'],
				podcasts: [],
				articles: [],
				photos: []
			},
			{
				id: '1',
				name: 'Sacha Grunberg',
				email: 'sbgrunberg@hpa.edu',
				bio: 'Entrepreneur, Podcaster',
				avatar: 'http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png',
				videos: [],
				podcasts: ['0'],
				articles: [],
				photos: []
			},
			{
				id: '2',
				name: 'Milla Betzer',
				email: 'mbetzer@hpa.edu',
				avatar: 'http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png',
				bio: 'Explorer',
				videos: [],
				podcasts: [],
				articles: [],
				photos: ['0']
			},
			{
				id: '3',
				name: 'May-J Bui',
				email: 'hbui@hpa.edu',
				avatar: 'http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png',
				bio: 'Podcaster',
				videos: [],
				podcasts: ['1'],
				articles: [],
				photos: []
			}
		],
		videos: [
			{
				id: '0',
				title: 'CAPPADOCIA',
				url: 'https://www.youtube.com/watch?v=RdoGRjqJxbk',
				desc: 'Balloons',
				author: '0'
			}
		],
		podcasts: [
			{
				id: '0',
				title: 'Sacha Rogan Experience #1',
				url: 'https://soundcloud.com/sacha-grunberg/podcast-episode-0-the-ry-bleckel-experience',
				imgLink: 'https://www.irishexaminer.com/remote/media.central.ie/media/images/p/PodcastCornerLogo_large.jpg',
				desc: 'This podcast features Ry Bleckel telling his story about the struggles he has experienced in baseball season these last couple of years.',
				author: '1'
			},
			{
				id: '1',
				title: 'Title',
				trackId: '34019569',
				imgLink: 'https://www.irishexaminer.com/remote/media.central.ie/media/images/p/PodcastCornerLogo_large.jpg',
				desc: 'Most of the time, it\'s hard to be honest with yourself about who you are and present your authentic true self to the world, but to be able to have the courage to tell the world that you\'re hiding yourself, that\'s even harder.\n',
				author: '3'
			}
		],
		articles: [],
		photos: [
			{
				id: '0',
				title: 'MAKE A CHANGE',
				desc: 'The world is absolutely amazing and filled with a vast variety of beautiful places, but it is not going to stay this way for long. Global warming and pollution are ultimately going to change this world in the utmost negative way. Our overall message is to utilize our youth and make you see the bigger picture.',
				author: '2',
				url: '/img/photo-0.jpg'
			}
		],
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
		podcasts: (state) => () => {
			return state.podcasts
		},
		article: (state) => (id) => {
			return state.articles.find(article => article.id === id)
		},
		articles: (state) => () => {
			return state.articles
		},
		photo: (state) => (id) => {
			return state.photos.find(photo => photo.id === id)
		},
		photos: (state) => () => {
			return state.photos
		}
	},
	mutations: {},
	actions: {}
})
