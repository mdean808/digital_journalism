<template>
    <div class="layout">
        <div class="thumbnails">
            <photo-thumbnail v-for="(photo, i) in photos" :key="i" width="100%" height="200px" :title="photo.title" :desc="photo.desc" :url="photo.url"/>
        </div>
        <div class="video">
            <img alt="Photo Alternate" style="width: 100%; height: 35vw" :src="photo.url"/>
            <div class="desc text-center">
                <h1>{{photo.title}}</h1>
                <div style="width: 50%; height: 2px; background-color: #b9b9b9; margin: 5px auto 10px auto"></div>
                <p class="text-white-50">{{photo.desc}}</p>
            </div>
        </div>
        <div class="profile">
            <div class="avatar">
                <img alt="Person's Photo" :src="photo.author.avatar">
            </div>
            <div class="bio">
                <h3>{{photo.author.name}}</h3>
                <div style="width: 50%; height: 2px; background-color: #b9b9b9; margin: auto"></div>
                <p class="text-white-50" style="margin-top: 5px">{{photo.author.bio}}</p>
            </div>
        </div>
    </div>
</template>

<script>
	import PhotoThumbnail from '../components/PhotoThumbnail.vue'

	export default {
		name: "Photo",
		components: {
			PhotoThumbnail,
		},
        data() {
			return {
				photo: {}
            }
        },
		beforeMount() {
			const id = this.$route.query.id;
			if (!id) return this.$router.push('/photos');
			this.photo = this.$store.getters.photo(this.$route.query.id);
			this.photo.author = this.$store.getters.person(this.photo.author);

			this.photos = this.$store.getters.photos();

		},
		mounted() {
			document.getElementById('nav').setAttribute('style', 'opacity: 1; position: sticky;');
		},
	}
</script>

<style lang="scss" scoped>
    .layout {
        display: grid;
        grid-template-columns: .5fr 2fr .6fr;
        padding: 40px 0 40px 40px;
    }

    .profile {
        display: grid;
        grid-template-rows: .4fr 1fr;
    }

    .thumbnails {
        display: grid;
        width: 275px;
        overflow-y: scroll;
        max-height: 80vh;
        grid-template-columns: 1fr;
        margin: 0 40px 10px 10px;
        grid-row-gap: 30px;
    }

    .thumbnails::-webkit-scrollbar {
        width: 0 !important
    }

    .thumbnails {
        overflow: -moz-scrollbars-none;
    }

    .avatar {
        text-align: center;
        img {
            border-radius: 100px;
            width: 150px;
            height: 150px;
            margin: auto;
            text-align: center;
        }
    }
    .bio {
        padding: 10px;
        text-align: center;
    }

    .desc {
        margin: 10px;
    }

</style>
