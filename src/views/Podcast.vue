<template>
    <div class="layout">
        <div class="thumbnails my-1">
            <SoundCloudThumbnail v-for="(podcast, i) in podcasts" :key="i" width="100%" height="200px" :title="podcast.title" :desc="podcast.desc" :url="podcast.imgLink"/>
        </div>
        <div class="video mr-5">
            <SoundcloudEmbed class="my-1" width="100%" height="200px" :url="podcast.trackId"/>
            <b-card :title="podcast.title" class="text-dark">
                <p>{{podcast.desc}}</p>
            </b-card>
        </div>
        <div class="profile">
            <b-card class="m-1 text-dark my-0">
                <div class="avatar">
                    <img alt="Person's Photo" src="https://yt3.ggpht.com/a/AGF-l78tH1rjkg_zfpHhS_AL_N4dw5JFbezH5AWpwQ=s176-c-k-c0xffffffff-no-rj-mo">
                </div>
                <div class="bio">
                    <h3>{{podcast.author.name}}</h3>
                    <div style="width: 50%; height: 2px; background-color: #b9b9b9; margin: auto"></div>
                    <p class="text-black-50" style="margin-top: 5px">{{podcast.author.bio}}</p>
                </div>
            </b-card>
        </div>
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
			const id = this.$route.query.id;
			if (!id) return this.$router.push('/podcasts');
            this.podcast = this.$store.getters.podcast(this.$route.query.id);
            console.log(this.podcast.trackId);
            this.podcast.author = this.$store.getters.person(this.podcast.author);

            this.podcasts = this.$store.getters.podcasts();
			document.getElementById('nav').setAttribute('style', 'opacity: 1; position: sticky;');

		},
		mounted() {
			document.getElementById('nav').setAttribute('style', 'opacity: 1; position: sticky;');
		},
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
