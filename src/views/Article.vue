<template>
    <div class="template">
        <b-row class="hide-on-med-and-down">
            <b-col cols="2">
                <photo-thumbnail v-for="(article, i) in articles" :key="i" :id="i" width="100%" height="9vw" :title="article.title"
                                 :desc="article.desc" :url="article.url" type="article" />
                                 
            </b-col>
            <b-col cols="8">
                <!--<img alt="Photo Alternate" style="width: 100%; height: 35vw" :src="article.url"/>-->
                <div class="text-light mb-4">
                    
                    <!--<div style="width: 50%; height: 2px; background-color: #b0b0b0; margin: auto"></div>-->
                    <b-card class="text-dark px-4">
                        <h1 class="text-center mb-4 mt-2">{{article.title}}</h1>
                    <p class="article" v-html="require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
}).render(article.desc)"></p>
                    </b-card>
                </div>
            </b-col>
            <b-col cols="2" class="profile">
                <b-card class="m-1 text-dark my-0">
                    <div class="avatar">
                        <img alt="Person's Photo" :src="author.avatar">
                    </div>
                    <div class="bio">
                        <h3>{{author.name}}</h3>
                        <div style="width: 50%; height: 2px; background-color: #b9b9b9; margin: auto"></div>
                        <p class="text-black-50" style="margin-top: 5px">{{author.bio}}</p>
                    </div>
                </b-card>
            </b-col>
        </b-row>
        <b-row class="hide-on-med-and-up show-on-med-and-down" style="margin: auto;">
            <div class="text-light text-center" style="margin-top: 30px">
                <h1>{{article.title}}</h1>
                <p style="color: #bbbbbb">By {{author.name}}</p>
                <div style="width: 50%; height: 2px; background-color: #b0b0b0; margin: auto"></div>
                <p class="article">{{article.desc}}</p>
            </div>
        </b-row>
        <b-row class="hide-on-med-and-up show-on-med-and-down">
            <photo-thumbnail v-for="(article, i) in articles" :key="i" style="width: 80%; margin: auto" width="100%"
                             height="45vw" :title="article.title" :desc="article.desc" :url="article.url"/>
        </b-row>
    </div>
</template>

<script>
	import PhotoThumbnail from '../components/PhotoThumbnail.vue'

	export default {
		name: "Article",
		components: {
			PhotoThumbnail,
		},
		beforeMount() {
			this.fetchData();
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData() {
				const id = this.$route.query.id;
				if (!id) return this.$router.push('/articles');
				this.article = this.$store.getters.article(this.$route.query.id);

				this.author = this.$store.getters.person(this.article.author);

				this.articles = this.$store.getters.articles();

			}
		},
		mounted() {
			document.getElementById('nav').setAttribute('style', 'opacity: 1; position: sticky;');
		},
	}
</script>

<style lang="scss" scoped>
    @media only screen and (max-width: 992px) {
        .hide-on-med-and-down {
            display: none !important;
        }
        .show-on-med-and-down {
            display: initial !important;
        }
    }

    @media only screen and (min-width: 993px) {

        .hide-on-med-and-up {
            display: none !important;
        }
    }

    .article {
        margin-top: 10px; 
        font-size: 20px; 
        max-width: 50em; 
        margin: auto;
        text-align: justify;
        text-justify: inter-word;
  white-space: pre-line;     
    }

    p {
       text-indent: 2rem;
    }

    .profile {
        display: grid;
        grid-template-rows: .4fr 1fr;
    }

    .thumbnails {
        display: grid;
        width: 275px;
        overflow-y: scroll;
        max-height: 80vh;
        grid-template-columns: 1fr;
        margin: 0 40px 10px 10px;
        grid-row-gap: 30px;
    }

    .thumbnails::-webkit-scrollbar {
        width: 0 !important
    }

    .thumbnails {
        overflow: -moz-scrollbars-none;
    }

    .avatar {
        text-align: center;

        img {
            border-radius: 100px;
            width: 150px;
            height: 150px;
            margin: auto;
            text-align: center;
        }
    }

    .bio {
        padding: 10px;
        text-align: center;
    }

    .desc {
        margin: 10px;
    }

</style>
