<template>
    <div>
        <b-container>
            <b-row>
                <Box v-for="(photo, i) of photos" :key="i" hover color="#96880c"
                     :image="photo.url" :header="photo.title" :body="photo.desc"
                     :link="`/photo?id=${photo.id}`"/>
            </b-row>
        </b-container>
    </div>
</template>

<script>
	import Box from '../components/Box'

	export default {
		name: "Photos",
		components: {
			Box
		},
		beforeMount() {
			this.photos = this.$store.getters.photos();
		},
		mounted() {
			document.getElementById('nav').setAttribute('style', 'opacity: 1; position: sticky;');
		},
	}
</script>

<style scoped>

</style>
