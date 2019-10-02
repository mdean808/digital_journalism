<template>
    <b-container>
        <b-row>
            <b-col cols="12">
                <Box v-for="(video, i) of videos" :key="i"  hover color="#6fc3df"
                     :image="`https://img.youtube.com/vi/${video.yt_id}/maxresdefault.jpg`" :header="video.title"
                     :body="video.desc"
                     :link="`/video?id=${video.id}`"/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
	import Box from '../components/Box'

	export default {
		name: "Videos",
		components: {
			Box
		},
		beforeMount() {
			this.videos = this.$store.getters.videos();
			for (let video of this.videos) {
				video.yt_id = this.getParameterByName('v', video.url);
			}
		},
		methods: {
			getParameterByName(name, url) {
				if (!url) url = window.location.href;
				name = name.replace(/[[\]]/g, '\\$&');
				const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
					results = regex.exec(url);
				if (!results) return null;
				if (!results[2]) return '';
				return decodeURIComponent(results[2].replace(/\+/g, ' '));
			}
		},
		mounted() {
			document.getElementById('nav').setAttribute('style', 'opacity: 1; position: sticky;');
		},
	}
</script>

<style scoped>

</style>
