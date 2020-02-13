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
			},
			{
				id: '4',
				name: 'Morgan Dean',
				email: 'mdean@hpa.edu',
				avatar: 'http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png',
				bio: 'Writer, Programmer',
				videos: [],
				podcasts: [],
				articles: ['1'],
				photos: []
			},
			{
				id: '5',
				name: 'Dillon DuPont',
				email: 'ddupont@hpa.edu',
				avatar: 'http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png',
				bio: 'Writer, Programmer',
				videos: [],
				podcasts: [],
				articles: ['2'],
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
				author: '2',
				url: '/img/photo-0.jpg'
			},
			{
				id: '1',
				title: 'Week in Review: corona time',
				desc: 'On Monday, the US Senate heard statements from both sides of the Donald Trump impeachment trial. This was a precursor to the final vote to charge or acquit Trump of charges on Wednesday. Before the final vote, though, Trump had his State of the Union address on Tuesday, where he boasted of the boosted economy and bills and legislation that he has helped to put into action. While he was speaking, though, Nancy Pelosi did her best to undermine Trump. Every few minutes she would roll her eye, glance at her paper, and mutter something. This went on until the end of the speech, where she eventually decided to tear up her copy of his speech, making a buzz in the media and effectively undermining his speech. On Wednesday, the day everyone was waiting for, where not a single person had any idea what would happen, the Republicans majority in the senate voted to acquit Trump. Shockingly, though, Mitt Romney came out that morning, saying that he would vote against his party lines and vote to remove Trump. Ultimately, it didn’t matter, although the members of the GOP are now calling to ostracize the senator.\n' +
					'Outside of politics, though, Tesla’s stock has gone through the roof, and then crashed again. When the markets opened on Monday, TSLA was worth $650. By the time markets opened on Tuesday, it was worth $914 dollars, and then peaking at $961. Alas, though, Tesla was not meant to go to the moon. (That’s why we have SpaceX) When markets closed on Wednesday, TSLA was worth $734, down $224 from Tuesday. What a roller coaster ride. The members over at r/wallstreetbets were melting down over all of the earnings they were making, and then everything fell apart, leading to an influx of memes and karma farming. \n' +
					'On everyone’s mind right now is the coronavirus. Over 17,000 people have been infected, with over 500 people dead. Unfortunately, for those of us in the US, we have heard of a few confirmed cases. No one has died yet, but we have bad news for a certain type of music lover. Those who enjoy tunes by pale individuals who talk really fast, will be saddened to hear that Eminem, renowned white rapper who can’t stop whining about nothing, has contracted the coronavirus. In a statement released by doctors, it has been revealed that his palms were sweaty, knees weak and arms were heavy. In a recent photo, it is apparent he has vomited on his sweater already. Initial testing has also revealed it was mum\'s spaghetti that gave him the virus. Our thoughts are with him and his mom (she must feel really guilty), and we hope that he will be able to overcome the illness with a strong Revival. Perhaps we will finally meet The Real Slim Shady when he completes his Recovery. Luckily, doctors say a Relapse [Deluxe] is unlikely.\n' +
					'This week isn’t even over (hell, it’s still Wednesday), and we haven’t even touched on other news, like sports, tech, and memes. We here at Morgan Writes some Bullshit are totally exhausted (from lack of sleep) and really think the world could slow down on the news cycles. We believe that all of the news above is enough for one entire week -- not 3 days of one. \n',
				author: '4',
				url: 'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg'
			},
			{
				id: '2',
				title: 'Musik scene: Les Paul',
				desc: 'Lester William Polsfuss, also known as Les Paul, was an inventor, a songwriter, and a pioneer of modern music. His innovative spirit led to the defining of musical styles, many recording innovations, and even the electric guitar.\n' +
					'Outside of politics, though, Tesla’s stock has gone through the roof, and then crashed again. When the markets opened on Monday, TSLA was worth $650. By the time markets opened on Tuesday, it was worth $914 dollars, and then peaking at $961. Alas, though, Tesla was not meant to go to the moon. (That’s why we have SpaceX) When markets closed on Wednesday, TSLA was worth $734, down $224 from Tuesday. What a roller coaster ride. The members over at r/wallstreetbets were melting down over all of the earnings they were making, and then everything fell apart, leading to an influx of memes and karma farming. \n' +
					'Even at a very young age, Les Paul repeatedly demonstrated his talent at music. By the time he became a teenager, he was already a musical prodigy. Lester dropped out of high school in 1934 and performed semi-professionally as a country singer and guitarist. Making money from tips during drive-in playings, Les Paul began sound experiments that would go down in music history.					\n' +
					'At the time, recording with a full band was cumbersome and greatly limited. Les Paul refused to settle, despite the limitations of the technology, and continued to experiment towards being better. He began utilizing techniques such as multitrack recording and overdubbing, enabling one to combine multiple instrument recordings into one track. Musicians everywhere came to Les Paul, requesting a home recording from him.					\n' +
					'But tragedy struck in 1948, when the legendary guitarist shattered his right arm and elbow in a near-fatal automobile instrument. The doctors told him that they could not rebuild his elbow, and all mobility was lost. This would mean the end of a musical career, but Les Paul refused to surrender. He requested his arm be put in a 90 degree angle so he could keep playing the guitar. This was evidence that Les Paul refuses to settle, continuing his constant need to experiment.					\n' +
					'Les Paul continued to attract the world’s attention with playing styles such as lick, trills, chording sequences, and fretting techniques. After inventing the solid body electric guitar, he became the only individual to be in both the Rock and Roll Hall of Fame and the National Inventors Hall of Fame. His influences on the musical industry have been used by almost every musician since.',
				author: '5',
				url: 'https://cdn.pixabay.com/photo/2019/09/29/23/20/les-paul-4514535_960_720.png'
			}
			],
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
