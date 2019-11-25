<template>
<div style="padding-top: 100vh;">
    <div id="videoWithNoJs" class="videoWrapper">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/bntusLfwyN4?autoplay=1&loop=1&controls=0&rel=0&showinfo=0&mute=1&enablejsapi=1&modestbranding=1" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        
    </div>
    <!--
        <Box parallax
             box-class="text-center"
             box-style="padding-top: 200px !important; padding-bottom: 150px !important; height: 100vh"
             header="Our Journey" header-style='
            font-weight: 200;
            letter-spacing: 10px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
                        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'
             image="/img/vast.png">
            <a href="#content" class="btn btn-outline-light">DISCOVER VAST STORYTELLING</a>
        </Box>
    -->

<!--

    <div class="read-more">
        <h2>READ MORE</h2>
        </div>
        -->

        <div class="hide-on-med-and-down">
            <b-row id="content">
                <b-col cols="4">
                    <router-link to="/photos">
                        <Box hover color="#6fc3df" header="Photos" body="look at amazing photos"
                             image="https://live.staticflickr.com/2813/33706635605_3447401c73_b.jpg" parallax/>
                    </router-link>
                </b-col>
                <b-col>
                    <router-link to="/videos">
                        <Box hover color="#8d82c4" header="Videos" body="spectate neat videos"
                             image="https://cdn.pixabay.com/photo/2017/11/28/13/10/maui-2983620_960_720.jpg" parallax/>
                    </router-link>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="8">
                    <router-link to="/podcasts">
                        <Box hover color="#ec8d81" header="Podcasts" body="feast your ears on captivating podcasts"
                             image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Submillimeter_Array_Night.jpg"
                             parallax/>
                    </router-link>
                </b-col>
                <b-col>
                    <router-link to="/articles">
                        <Box hover color="#e7b788" header="Articles" body="read some interesting texts"
                             image="https://media.nbcdfw.com/images/1941*1092/AP_19196579152982.jpg" parallax/>
                    </router-link>
                </b-col>
            </b-row>
        </div>
        <div class="show-on-med-and-down hide-on-med-and-up">
            <b-row>
                <b-col>
                    <router-link to="/photos">
                        <Box hover color="#6fc3df" header="Photos" body="look at amazing photos"
                             image="https://live.staticflickr.com/2813/33706635605_3447401c73_b.jpg" parallax/>
                    </router-link>
                </b-col>
                <b-col>
                    <router-link to="/videos">
                        <Box hover color="#8d82c4" header="Videos" body="spectate neat videos"
                             image="https://cdn.pixabay.com/photo/2017/11/28/13/10/maui-2983620_960_720.jpg" parallax/>
                    </router-link>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <router-link to="/podcasts">
                        <Box hover color="#ec8d81" header="Podcasts" body="feast your ears on captivating podcasts"
                             image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Submillimeter_Array_Night.jpg"
                             parallax/>
                    </router-link>
                </b-col>
                <b-col>
                    <router-link to="/articles">
                        <Box hover color="#e7b788" header="Articles" body="read some interesting texts"
                             image="https://media.nbcdfw.com/images/1941*1092/AP_19196579152982.jpg" parallax/>
                    </router-link>
                </b-col>
            </b-row>
        </div>

        <Box box-style="padding-top: 150px !important; padding-bottom: 150px !important; text-align: center"
             header="A Storytelling Hub" body="Content by Digital Journalism students of '19 - '20"/>
             </div>
</template>

<style>
    #nav {
        /* opacity: 0; */
        width: calc(100vw - 15px);
    }

    .read-more {
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 100vh;
    }

    html {
        scroll-behavior: smooth;
    }
</style>

<script>
	// @ is an alias to /src

	import Box from '@/components/Box.vue'

	export default {
		name: 'home',
		components: {
			Box
		},
		mounted() {
			document.getElementById('nav').setAttribute('style', 'opacity: 1; position: absolute;');
		}
	}
</script>

<style scoped>
    .videoWrapper {
        height:100vh;
        width:100vw;
        position: absolute;
        overflow: hidden;
    }

    .videoWrapper iframe {
        height:100%;
        width:100%;
        position:absolute;
        top:0;
        bottom:0;
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
</style>
