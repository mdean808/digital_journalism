<template>
    <div class="thumb">
        <img :alt="`Thumbnail for ${url}`" :style="{width: width, height: height}"
             :src="`https://img.youtube.com/vi/${videoId}/0.jpg`">
        <div class="desc">
            <p>Cappadocia</p>
            <span>Filmed in turkey. (B A L L O O N S)</span>
        </div>
    </div>
</template>

<script>
	export default {
		name: "VideoThumbnail",
		props: ['url', 'width', 'height'],
		data() {
			return {
				videoId: this.getId()
			}
		},
		methods: {
			getId() {
				return this.getParameterByName('v', this.url);
			},
			getParameterByName(name, url) {
				if (!url) url = window.location.href;
				name = name.replace(/[[\]]/g, '\\$&');
				const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
					results = regex.exec(url);
				if (!results) return null;
				if (!results[2]) return '';
				return decodeURIComponent(results[2].replace(/\+/g, ' '));
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
