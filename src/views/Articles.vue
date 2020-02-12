<template>
    <div>
        <h1 class="text-center">Work In Progress</h1>
    </div>
</template>

<script>
	import ColorShader from '../helpers/colorshader'

	export default {
		name: "Articles",
        beforeMount() {
			this.color = ColorShader.article();
		},
		mounted() {
			document.getElementById('nav').setAttribute('style', 'opacity: 1; position: sticky;');
		},
	}
</script>

<style scoped>

</style>
