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
				title: 'Sacha Experience #1',
				url: 'https://soundcloud.com/sacha-grunberg/podcast-episode-0-the-ry-bleckel-experience',
				imgLink: 'https://www.irishexaminer.com/remote/media.central.ie/media/images/p/PodcastCornerLogo_large.jpg',
				desc: 'This podcast features Ry Bleckel telling his story about the struggles he has experienced in baseball season these last couple of years.',
				author: '1'
			},
			{
				id: '1',
				title: 'My own identity?',
				url: '688834417',
				imgLink: 'https://i1.sndcdn.com/artworks-000605450308-4p49v1-t500x500.jpg',
				desc: 'Most of the time, it\'s hard to be honest with yourself about who you are and present your authentic true self to the world, but to be able to have the courage to tell the world that you\'re hiding yourself, that\'s even harder.\n',
				author: '3'
			}
		],
		articles: [
			{
				id: '0',
				title: 'Cookbook',
				desc: 'Many countries that are prominently known for their cuisine revolve around a theme that makes them so well regarded. French food is prided on its simplicity and yet finding the sophistication within the simplicity. The ingredients used are the basics such as butter, olive oil, and other condiments that pair with tasty cuts of meat or seafood. Obviously, it isn’t possible to capture the complexity of French cuisine in a couple of sentences but the essence lies in how detailed and multifaceted flavor combinations can be achieved, with simple ingredients and finesse. On the other end of the spectrum lies Indian cuisine. While the historically Indian food is way more entangled, it is possible to separate it geographically in five general categories: The North, South, East, West, and Northeast. All of these different areas have distinct culinary differences and yet they can be united with the oversimplified and often distorted title of “Indian food”. The importance of understanding the culinary diversity of India is important, but I believe that common ground between all of these different kitchens is how masterpieces could be achieved with the right correct flavor and spice combinations. If French food is based on simplicity and the basics, Indian food is about using historical, generational, and familial knowledge to find the perfect flavor combinations out of a vast world of different tastes, spices, and techniques. The ability to marry these two different ways of cooking from the East, and West so to speak, is the reason why I think Turkish food is so special. Only by understanding the depth and history that forms the culinary composition of a country, can we really understand what makes it so unique. For a lot of people, food is an agent of survival, and survival only. I am privileged enough to look a little bit deeper than that and analyze the implication behind everything that I eat: ethically, culturally, historically, and even emotionally. The tiny bit of background knowledge I provided earlier is an example of what these series of articles will be aiming to accomplish. Diving multiple levels deep into the stories behind what we and how that composes the way that we perceive food around us.',
				author: '1',
				url: '/img/photo-0.jpg'
			}],
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
