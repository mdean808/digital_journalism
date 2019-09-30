<template>
    <div class="thumb">
        <img :alt="`Thumbnail for ${url}`" :style="{width: width, height: height}"
             :src="url">
        <div class="desc">
            <p>{{title}}</p>
            <span>{{desc.substring(0, 32) + '...'}}</span>
        </div>
    </div>
</template>

<script>
	export default {
		name: "PhotoThumbnail",
		props: ['url', 'width', 'height', 'title', 'desc'],
	}
</script>

<style lang="scss" scoped>

    .thumb:hover {
        .desc {
            transform: scale(1.05);
        }
    }

    .thumb {
        cursor: pointer;
    }

    .desc {
        transition: .5s all;
        padding: 3px;
        background-color: white;
        color: black;
        height: 50px;
        position: relative;
        margin-top: -70px;
        margin-left: 30px;
        margin-right: 20px;
        width: 210px;

        p {
            font-weight: 500;
            padding: 0;
            margin: 0;
            font-size: 14px;
        }

        span {
            font-weight: 300;
            font-size: 12px;
        }
    }
</style>
