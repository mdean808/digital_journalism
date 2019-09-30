<template>
    <div>
        <b-container>
            <b-row>
                <Box v-for="(podcast, i) of podcasts" :key="i" hover color="#96880c"
                     :image="podcast.url" :header="podcast.title" :body="podcast.desc"
                     :link="`/podcast?id=${podcast.id}`"/>
            </b-row>
        </b-container>
    </div>
</template>

<script>
	import Box from '../components/Box'

	export default {
		name: "Podcasts",
		components: {
			Box
		},
		beforeMount() {
			this.podcasts = this.$store.getters.podcasts();
			document.getElementById('nav').setAttribute('style', 'opacity: 1; position: sticky;');
		},
		mounted() {
			document.getElementById('nav').setAttribute('style', 'opacity: 1; position: sticky;');
		},
	}
</script>

<style scoped>

</style>
