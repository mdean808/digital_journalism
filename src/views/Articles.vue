<template>
    <div>
        <b-container>
            <b-row>
                <Box v-for="(article, i) of articles" :key="i" hover color="#96880c"
                     :image="article.url" :header="article.title" :body="article.desc.substring(0, 150) + '...'"
                     :link="`/article?id=${article.id}`"/>
            </b-row>
        </b-container>
    </div>
</template>

<script>
	import Box from '../components/Box'

	export default {
		name: "Articles",
		components: {
			Box
		},
		beforeMount() {
			this.articles = this.$store.getters.articles();
		},
		mounted() {
			document.getElementById('nav').setAttribute('style', 'opacity: 1; position: sticky;');
		},
	}
</script>

<style scoped>

</style>
