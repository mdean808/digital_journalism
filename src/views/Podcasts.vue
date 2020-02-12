<template>
    <div>
        <b-container>
            <b-row>
                <Box v-for="(podcast, i) of podcasts" :key="i" hover :color="color(podcast.title)"
                     :image="podcast.imgLink" :header="podcast.title" :body="podcast.desc"
                     :link="`/podcast?id=${podcast.id}`"/>
            </b-row>
        </b-container>
    </div>
</template>

<script>
	import Box from '../components/Box'
	import ColorShader from '../helpers/colorshader'

	export default {
		name: "Podcasts",
		components: {
			Box
		},
		beforeMount() {
			this.podcasts = this.$store.getters.podcasts();
		},
		methods: {
			color: (seed) => {
				return ColorShader.color(seed, 50, 43);
			}
		},
		mounted() {
			document.getElementById('nav').setAttribute('style', 'opacity: 1; position: sticky;');
		},
	}
</script>

<style scoped>

</style>
