<template>
        <iframe :style="{width: width, height: height}" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
</template>

<script>
	export default {
		name: "Video-Embed",
		props: ['url', 'width', 'height'],
		data() {
			return {
				videoId: this.getId()
			}
		},
		methods: {
			getId() {
				return this.getParameterByName('v', this.url);
			},
			getParameterByName(name, url) {
				if (!url) url = window.location.href;
				name = name.replace(/[[\]]/g, '\\$&');
				const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
					results = regex.exec(url);
				if (!results) return null;
				if (!results[2]) return '';
				return decodeURIComponent(results[2].replace(/\+/g, ' '));
			}
		}
	}
</script>

<style scoped>

</style>
