<template>
    <b-row class="box" :style="cssProps">
        <b-col :class="'px-5 py-5 content ' + boxClass" :style="boxStyle" >
            <h1 :style="headerStyle">{{header}}</h1>
            <p>{{body}}</p>
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        'color': String,
        'box-style': String, 
        'box-class': String, 
        'header-style': String,
        'header': {
            type: String,
            default: 'Bruh.'
        },
        'body': {
            type: String,
            default: 'This is a bruh moment'
        }
    },
    computed: {
        cssProps() { return {
            '--bg-color': this.color || '#242943',
            }
        }
    }
}
</script>

<style scoped>
    .box {
        color: white;

        background-image: url('../assets/images/images.jpeg');
        background-position: center;
        background-size: cover;
    }

    .box[parallax] {
        background-attachment: fixed;
    }

    .box .content:before {
        display: block;
        position: absolute;
        content: ' ';
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: var(--bg-color);
        z-index: -1;

        transition: opacity 0.5s;
        opacity: 0.9;
    }

    .box[hover]:hover .content:before {
        opacity: 0.5;
    }

    .box .content {
        z-index: 1;
    }

    .box h1 {
        font-size: 3.25em;
        font-weight: 600;
        line-height: 1.65;
        margin: 0 0 1em 0;
    }

    .box p {
        font-size: 0.7em;
        font-weight: 600;
        letter-spacing: 0.25em;
        text-transform: uppercase;
    }

    h1:after {
        content: '';
        background-color: #ffffff;
        display: block;
        height: 2px;
        margin: 0.325em 0 0.5em 0;
        width: 100%;
    }
</style>