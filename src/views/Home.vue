<template>
  <div>
    <div class="row">
      <div class="fullscreen">
        <div class="video">
          <div class="wrapper">
            <iframe
              src="//player.vimeo.com/video/108960330?background=1"
              width="500"
              height="281"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
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

    <div class="read-more">
      <h2 class="animated bounce">👇 READ MORE 👇</h2>
    </div>

    <div style="padding-top: 100vh">
    <div class="hide-on-med-and-down">
      <b-row id="content">
        <b-col cols="4">
          <router-link to="/photos">
            <Box
              hover
              color="#6fc3df"
              header="Photos"
              body="look at amazing photos"
              image="https://live.staticflickr.com/2813/33706635605_3447401c73_b.jpg"
              parallax
            />
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/videos">
            <Box
              hover
              color="#8d82c4"
              header="Videos"
              body="spectate neat videos"
              image="https://cdn.pixabay.com/photo/2017/11/28/13/10/maui-2983620_960_720.jpg"
              parallax
            />
          </router-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="8">
          <router-link to="/podcasts">
            <Box
              hover
              color="#ec8d81"
              header="Podcasts"
              body="feast your ears on captivating podcasts"
              image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Submillimeter_Array_Night.jpg"
              parallax
            />
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/articles">
            <Box
              hover
              color="#e7b788"
              header="Articles"
              body="read some interesting texts"
              image="https://media.nbcdfw.com/images/1941*1092/AP_19196579152982.jpg"
              parallax
            />
          </router-link>
        </b-col>
      </b-row>
    </div>
    <div class="show-on-med-and-down hide-on-med-and-up">
      <b-row>
        <b-col>
          <router-link to="/photos">
            <Box
              hover
              color="#6fc3df"
              header="Photos"
              body="look at amazing photos"
              image="https://live.staticflickr.com/2813/33706635605_3447401c73_b.jpg"
              parallax
            />
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/videos">
            <Box
              hover
              color="#8d82c4"
              header="Videos"
              body="spectate neat videos"
              image="https://cdn.pixabay.com/photo/2017/11/28/13/10/maui-2983620_960_720.jpg"
              parallax
            />
          </router-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <router-link to="/podcasts">
            <Box
              hover
              color="#ec8d81"
              header="Podcasts"
              body="feast your ears on captivating podcasts"
              image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Submillimeter_Array_Night.jpg"
              parallax
            />
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/articles">
            <Box
              hover
              color="#e7b788"
              header="Articles"
              body="read some interesting texts"
              image="https://media.nbcdfw.com/images/1941*1092/AP_19196579152982.jpg"
              parallax
            />
          </router-link>
        </b-col>
      </b-row>
    </div>
    </div>

    <Box
      box-style="padding-top: 150px !important; padding-bottom: 150px !important; text-align: center"
      header="A Storytelling Hub"
      body="Content by Digital Journalism students of '19 - '20"
    />
  </div>
</template>

<style>
#nav {
  /* opacity: 0; */
  width: calc(100vw - 17px);
}

.read-more {
  position: absolute;
  left: 0px;
  right: 0px;
  text-align: center;
  bottom: 0px;
  height: 7rem;
  padding-top: 4rem;
    background: linear-gradient(to bottom,  rgba(255, 255, 255, 0) 0%,rgba(0,0,0,0.7) 100%); /* W3C */
}

.read-more > h2 {
  font-size: 1rem !important;
}

html {
  scroll-behavior: smooth;
}


.animated {
  animation-duration: 2.5s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-30px);}
  60% {transform: translateY(-15px);}
}
.bounce {
  animation-name: bounce;
}
</style>

<script>
// @ is an alias to /src

import Box from "@/components/Box.vue";

export default {
  name: "home",
  components: {
    Box
  },
  mounted() {
    document
      .getElementById("nav")
      .setAttribute("style", "opacity: 1; position: absolute;");

    function videoSize() {
      var $windowHeight = $(window).height();
      var $videoHeight = $(".video").outerHeight();
      var $scale = $windowHeight / $videoHeight;

      if ($videoHeight <= $windowHeight) {
        $(".video").css({
          "-webkit-transform": "scale(" + $scale + ") translateY(-50%)",
          transform: "scale(" + $scale + ") translateY(-50%)"
        });
      }
    }

    $(window).on("load resize", function() {
      videoSize();
    });
  }
};
</script>

<style scoped>
.fullscreen {
  position: absolute;
  top: 0px;
  left: 0px;
  width: calc(100vw - 17px);
  height: 100vh;
  
  background: black;
}
.video {
  display: block;
  left: 0px;
  overflow: hidden;
  padding-bottom: 56.25%; /* 56.25% = 16:9. set ratio */
  position: absolute;
  top: 50%;
  width: 100%;
  -webkit-transform-origin: 50% 0;
  transform-origin: 50% 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}


.video::before {
  content: "";
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%; 
  height: 100%;  
  opacity: .1; 
  z-index: -1;
  background: url(https://i.stack.imgur.com/sIIwU.gif);
}

.video .wrapper {
  display: block;
  height: 300%;
  left: 0px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  width: 100%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.video iframe {
  display: block;
  height: 100%;
  width: 100%;
}

body {
  background-color: rgb(0, 159, 214);
  color: white;
  font: bold 100%/1.4 "Helvetica Neue", sans-serif;
}
h1 {
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 24rem;
  z-index: 1;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}
</style>
