<template>
    <div class="template">
        <b-row class="hide-on-med-and-down">
            <b-col cols="2">
                <video-thumbnail v-for="(video, i) in videos" :key="i" :id="video.id" width="100%" height="9vw"
                                 :title="video.title" :desc="video.desc" :url="video.url"/>
            </b-col>
            <b-col cols="8">
                <VideoEmbed width="100%" height="35vw" :url="video.url"/>
                <div class="text-light text-center" style="margin-top: 30px">
                    <h1>{{video.title}}</h1>
                    <div style="width: 50%; height: 2px; background-color: #b0b0b0; margin: auto"></div>
                    <p style="margin-top: 10px">{{video.desc}}</p>
                </div>
            </b-col>
            <b-col cols="2" class="profile">
                <div class="m-1 text-light my-0">
                    <div class="avatar">
                        <img alt="Person's Photo" :src="author.avatar">
                    </div>
                    <div class="bio">
                        <h3>{{author.name}}</h3>
                        <div style="width: 50%; height: 2px; background-color: #b0b0b0; margin: auto"></div>
                        <p class="text-light" style="margin-top: 5px">{{author.bio}}</p>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row class="hide-on-med-and-up show-on-med-and-down" style="margin: auto;">
            <VideoEmbed width="100%" height="50vw" :url="video.url"/>
            <div class="text-light text-center" style="margin-top: 20px">
                <h1>{{video.title}}</h1>
                <p style="color: #bbbbbb">By {{author.name}}</p>
                <div style="width: 50%; height: 2px; background-color: #b0b0b0; margin: auto"></div>
                <p style="margin-top: 10px">{{video.desc}}</p>
            </div>
        </b-row>
        <b-row class="hide-on-med-and-up show-on-med-and-down">
            <video-thumbnail v-for="(video, i) in videos" :key="i" :id="video.id" style="width: 80%; margin: auto"
                             width="100%" height="45vw"
                             :title="video.title" :desc="video.desc" :url="video.url"/>
        </b-row>
    </div>
</template>

<script>
	import VideoEmbed from '../components/VideoEmbed.vue'
	import VideoThumbnail from "../components/VideoThumbnail";

	export default {
		name: "Video",
		components: {
			VideoThumbnail,
			VideoEmbed
		},
		beforeMount() {
			this.fetchData()
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData() {
				const id = this.$route.query.id;
				if (!id) return this.$router.push('/videos');
				this.video = this.$store.getters.video(this.$route.query.id);

				this.author = this.$store.getters.person(this.video.author);

				this.videos = this.$store.getters.videos();
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

    .template {
        margin: 5px 5px 40px 5px;
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
            width: 100px;
            height: 100px;
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
