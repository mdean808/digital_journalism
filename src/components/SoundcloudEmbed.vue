<template>
		<iframe :width="width" :height="height" scrolling="no" frameborder="no" :src="`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${url}&amp;color=0066cc`"></iframe>
        <!--
		<iframe :style="{width: width, height: height}" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
				-->
</template>

<script>
	export default {
		name: "Soundcloud-Embed",
		props: ['url', 'width', 'height'],
		data() {
			return {
				podcastId: this.getId()
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
