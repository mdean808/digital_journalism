<template>
    <b-container fluid id="app">
        <b-row id="nav" class="py-2 mt-2" style="/* position: absolute; */ width: 100vw; margin: auto;">
            <b-col class="text-center navvy">
                <router-link to="/photos" class="dshado">photos</router-link>
                <router-link to="/videos" class="dshado">videos</router-link>
                <router-link to="/" class="hide-on-med-and-down"><h1 class="mx-5 font-weight-light shado">V A S T</h1></router-link>
                <router-link to="/podcasts" class="dshado">podcasts</router-link>
                <router-link to="/articles" class="dshado">articles</router-link>
            </b-col>
        </b-row>

        <div class="body">
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </div>

        <b-row>
            <b-col class="px-0">
        <div id="footer" style="height: 150px; width: 100%; background: #1b1e21; padding-top: 40px;"
             class="text-center">
            <p>Website by Dillon DuPont and Morgan Dean</p>
            <router-link to="/"><p>© Vast Storytelling 2019</p></router-link>
        </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
	export default {
		name: 'App',
	}
</script>

<style lang="scss">
    .shado {
        text-shadow: 2px 2px #000000, 0px 0px 9px rgba(128, 128, 128, 1);
    }

    .dshado {
        text-shadow: 0px 0px 9px rgba(0, 0, 0, 1);
    }

    .body {
        min-height: calc(100vh - 217px);
    }

    @media only screen and (max-width: 992px) {
        .hide-on-med-and-down {
            display: none !important;
        }

        .show-on-med-and-down {
            display: initial !important;
        }
    }

    @media only screen and (min-width: 993px) {
        .hide-on-med-and-up {
            display: none !important;
        }
    }

    body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: white !important;
        background-color: #242943 !important;
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

    a.btn:hover {
        text-decoration: none !important;
        padding-bottom: 5px;
    }

    #nav {
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
