<template>
    <iframe :width="width" :height="height" scrolling="no" frameborder="no"
            :src="'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + url + '&color=242943'"></iframe>
    <!--
    <iframe :style="{width: width, height: height}" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
            -->
</template>

<script>
	export default {
		name: "SoundCloud-Embed",
		props: ['url', 'width', 'height']
	}
</script>

<style scoped>

</style>
