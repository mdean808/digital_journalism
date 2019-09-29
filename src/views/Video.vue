<template>
    <div class="layout">
        <div class="thumbnails">
            <video-thumbnail v-for="(video, i) in videos" :key="i" width="100%" height="200px" :url="video.url"/>
        </div>
        <div class="video">
            <VideoEmbed width="100%" height="35vw" :url="video.url"/>
            <div class="desc text-center">
                <h1>{{video.title}}</h1>
                <div style="width: 50%; height: 2px; background-color: #b9b9b9; margin: 5px auto 10px auto"></div>
                <p class="text-black-50">{{video.desc}}</p>
            </div>
        </div>
        <div class="profile">
            <div class="avatar">
                <img alt="Person's Photo" src="https://yt3.ggpht.com/a/AGF-l78tH1rjkg_zfpHhS_AL_N4dw5JFbezH5AWpwQ=s176-c-k-c0xffffffff-no-rj-mo">
            </div>
            <div class="bio">
                <h3>{{video.author.name}}</h3>
                <div style="width: 50%; height: 2px; background-color: #b9b9b9; margin: auto"></div>
                <p class="text-black-50" style="margin-top: 5px">{{video.author.bio}}</p>
            </div>
        </div>
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
			const id = this.$route.query.id;
			if (!id) return this.$router.push('/videos');
			this.video = this.$store.getters.video(this.$route.query.id);
            this.video.author = this.$store.getters.person(this.video.author);

            this.videos = this.$store.getters.videos();
		}
	}
</script>

<style lang="scss" scoped>
    .layout {
        display: grid;
        grid-template-columns: .5fr 2fr .6fr;
        padding: 40px 0 40px 40px;
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
