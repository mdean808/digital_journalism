<template>
    <div>
        <b-container>
            <b-row aria-colcount="4">
                <Box v-for="(podcast, i) of podcasts" :key="i" hover color="#8d82c4"
                     :image="podcast.imgLink" :header="podcast.title" :body="podcast.desc"
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
		},
		mounted() {
			document.getElementById('nav').setAttribute('style', 'opacity: 1; position: sticky;');
		},
	}
</script>

<style scoped>

</style>
