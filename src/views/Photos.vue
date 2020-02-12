<template>
    <div>
        <b-container>
            <b-row>
                <Box v-for="(photo, i) of photos" :key="i" hover :color="color(photo.title)"
                     :image="photo.url" :header="photo.title" :body="photo.desc"
                     :link="`/photo?id=${photo.id}`"/>
            </b-row>
        </b-container>
    </div>
</template>

<script>
	import Box from '../components/Box'
	import ColorShader from '../helpers/colorshader'

	export default {
		name: "Photos",
		components: {
			Box
		},
        methods: {
			color: (seed) => {
				return ColorShader.color(seed, 50, 43);
			}
        },
		beforeMount() {
			this.photos = this.$store.getters.photos();
			this.color = ColorShader.photo();
		},
		mounted() {
			document.getElementById('nav').setAttribute('style', 'opacity: 1; position: sticky;');
		},
	}
</script>

<style scoped>

</style>
