<template>
    <div id="app">
        <b-row id="nav" class="fixed-top py-2">
            <b-col class="text-center navvy">
                <router-link to="/photos">photos</router-link>
                <router-link to="/videos">videos</router-link>
                <router-link to="/"><h1 class="mx-5">V A S T</h1></router-link>
                <router-link to="/articles">articles</router-link>
                <router-link to="/about">about</router-link>
            </b-col>
        </b-row>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {}
		},
		methods: {},
		mounted() {
			window.addEventListener('scroll', function () {
				if (window.scrollY > 400) {
					document.getElementById('nav').setAttribute('style', 'opacity: 1');
				}
				if (window.scrollY < 400) {
					document.getElementById('nav').setAttribute('style', 'opacity: 0');
				}
			})
		}
	}
</script>

<style lang="scss">
    body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    a {
        transition: .5s all;
        border-bottom: 1px solid transparent;
        text-decoration: none !important;
    }

    a:hover {
        text-decoration: none;
        padding-bottom: 2px;
        border-bottom: 2px solid white;
    }

    #nav {
        opacity: 0;
        transition: 1s all;
    }

    .navvy {
        z-index: 99999;
    }

    .navvy * {
        display: inline;
        margin: 8px 16px;
        color: white;
    }

    .navvy a {
        vertical-align: super;
    }

    .navvy a:hover {
        color: white;
    }

    .navvy h1 {
        color: white;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
