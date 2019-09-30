<template>
    <div>
        <b-row>
            <b-col cols="2" class="hide-on-med-and-down">
                <video-thumbnail v-for="(video, i) in videos" :key="i" :id="video.id" width="100%" height="200px"
                                 :title="video.title" :desc="video.desc" :url="video.url"/>
            </b-col>
            <b-col cols="8" >
                <VideoEmbed width="100%" height="35vw" :url="video.url"/>
                <div class="desc text-center">
                    <h1>{{video.title}}</h1>
                    <div style="width: 50%; height: 2px; background-color: #b9b9b9; margin: 5px auto 10px auto"></div>
                    <p class="text-white-50">{{video.desc}}</p>
                </div>
            </b-col>
            <b-col cols="2" class="profile">
                <div class="avatar">
                    <img alt="Person's Photo" :src="author.avatar">
                </div>
                <div class="bio">
                    <h3>{{author.name}}</h3>
                    <div style="width: 50%; height: 2px; background-color: #b9b9b9; margin: auto"></div>
                    <p class="text-white-50" style="margin-top: 5px">{{author.bio}}</p>
                </div>
            </b-col>
            <!--<div class="thumbnails show-on-med-and-down hide-on-med-and-up">
                <video-thumbnail v-for="(video, i) in videos" :key="i" :id="video.id" width="100%" height="200px"
                                 :title="video.title" :desc="video.desc" :url="video.url"/>
            </div>-->
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

    .profile {
        display: grid;
        grid-template-rows: .4fr 1fr;
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
