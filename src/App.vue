<template>
    <div id="app">
        <b-row class="fixed-top py-2">
            <b-col class="text-center navvy">
                <router-link to="/photos">photos</router-link>
                <router-link to="/about">videos</router-link>
                <h1 class="mx-5">V A S T</h1>
                <router-link to="/articles">articles</router-link>
                <router-link to="/about">about</router-link>
            </b-col>
        </b-row>
        <router-view/>
    </div>
</template>

<style lang="scss">
    body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
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
</style>
