<template>
    <div class="thumb" @click="goto(id)">
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
		name: "SoundCloudThumbnail",
		props: ['url', 'width', 'height', 'title', 'desc', 'id'],
        methods: {
			goto(id) {
				if (id) this.$router.push(`/podcast?id=${id}`)
			}
        }
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
        margin-bottom: 35px !important;
    }

    .desc {
        transition: .5s all;
        padding: 2px;
        background-color: #fff;
        color: #000;
        position: relative;
        margin: -60px auto 0 auto;
        width: 80%;

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
