<template>
    <div class="layout">
        <b-row class="hide-on-med-and-down">
            <b-col cols="2">
                <SoundCloudThumbnail v-for="(podcast, i) in podcasts" :key="i" width="100%" height="9vw"
                                     :id="podcast.id"
                                     :title="podcast.title" :desc="podcast.desc" :url="podcast.imgLink"/>
            </b-col>
            <b-col cols="8" class="video">
                <SoundCloudEmbed class="my-1" width="100%" height="200px" :url="podcast.url"/>
                <b-card :title="podcast.title" class="text-dark">
                    <p>{{podcast.desc}}</p>
                </b-card>
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
            <SoundCloudEmbed class="my-1" width="100%" height="200px" :url="podcast.url"/>
            <b-card :title="podcast.title" class="text-dark" style="margin-top: 20px">
                <p>By {{author.name}}</p>
                <div style="width: 50%; height: 2px; margin-bottom: 14px;background-color: #b0b0b0;"></div>
                <p>{{podcast.desc}}</p>
            </b-card>
        </b-row>
        <b-row class="hide-on-med-and-up show-on-med-and-down">
            <SoundCloudThumbnail v-for="(podcast, i) in podcasts" :key="i" style="width: 80%; margin: auto" width="100%"
                                 height="45vw"
                                 :id="podcast.id"
                                 :title="podcast.title" :desc="podcast.desc" :url="podcast.imgLink"/>
        </b-row>
    </div>
</template>

<script>
	import SoundCloudEmbed from '../components/SoundCloudEmbed.vue'
	import SoundCloudThumbnail from "../components/SoundCloudThumbnail";

	export default {
		name: "Podcast",
		components: {
			SoundCloudThumbnail,
			SoundCloudEmbed
		},

		beforeMount() {
			this.fetchData();
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData() {
				console.log('Updating Page');
				const id = this.$route.query.id;
				console.log(id);
				if (!id) return this.$router.push('/podcasts');
				this.podcast = this.$store.getters.podcast(this.$route.query.id);

				this.author = this.$store.getters.person(this.podcast.author);

				this.podcasts = this.$store.getters.podcasts();
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
