<template>
    <iframe :width="width" :height="height" scrolling="no" frameborder="no"
            :src="'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + url + '&color=242943'"></iframe>
</template>

<script>
	export default {
		name: "SoundCloud-Embed",
		props: ['url', 'width', 'height']
	}
</script>

<style scoped>

</style>
