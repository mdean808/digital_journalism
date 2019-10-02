<template>
    <div class="template">
        <b-row class="hide-on-med-and-down">
            <b-col cols="2">
                <photo-thumbnail v-for="(photo, i) in photos" :key="i" width="100%" height="9vw" :title="photo.title"
                                 :desc="photo.desc" :url="photo.url"/>
            </b-col>
            <b-col cols="8">
                <img alt="Photo Alternate" style="width: 100%; height: 35vw" :src="photo.url"/>
                <div class="text-light text-center" style="margin: 20px 0">
                    <h1>{{photo.title}}</h1>
                    <div style="width: 50%; height: 2px; background-color: #b0b0b0; margin: auto"></div>
                    <p style="margin-top: 10px">{{photo.desc}}</p>
                </div>
            </b-col>
            <b-col cols="2" class="profile">
                <div class="m-1 text-light my-0">
                    <div class="avatar">
                        <img alt="Person's Photo" :src="author.avatar">
                    </div>
                    <div class="bio">
                        <h3>{{author.name}}</h3>
                        <div style="width: 50%; height: 2px; background-color: #b9b9b9; margin: auto"></div>
                        <p class="text-light" style="margin-top: 5px">{{author.bio}}</p>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row class="hide-on-med-and-up show-on-med-and-down" style="margin: auto;">
            <img alt="Photo Alternate" style="width: 100%; height: 60vw" :src="photo.url"/>
            <div class="text-light text-center" style="margin-top: 30px">
                <h1>{{photo.title}}</h1>
                <p style="color: #bbbbbb">By {{author.name}}</p>
                <div style="width: 50%; height: 2px; background-color: #b0b0b0; margin: auto"></div>
                <p style="margin-top: 10px">{{photo.desc}}</p>
            </div>
        </b-row>
        <b-row class="hide-on-med-and-up show-on-med-and-down">
            <photo-thumbnail v-for="(photo, i) in photos" :key="i" style="width: 80%; margin: auto" width="100%"
                             height="45vw" :title="photo.title" :desc="photo.desc" :url="photo.url"/>
        </b-row>
    </div>
</template>

<script>
	import PhotoThumbnail from '../components/PhotoThumbnail.vue'

	export default {
		name: "Photo",
		components: {
			PhotoThumbnail,
		},
		beforeMount() {
			this.fetchData();
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData() {
				const id = this.$route.query.id;
				if (!id) return this.$router.push('/photos');
				this.photo = this.$store.getters.photo(this.$route.query.id);

				this.author = this.$store.getters.person(this.photo.author);

				this.photos = this.$store.getters.photos();

			}
		},
		mounted() {
			document.getElementById('nav').setAttribute('style', 'opacity: 1; position: sticky;');
		},
	}
</script>

<style lang="scss" scoped>

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
