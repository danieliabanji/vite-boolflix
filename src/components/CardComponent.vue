<template>


    <div class="front-display ">
        <div class="img-card">
            <img :src="result.poster_path ? store.imgCard + result.poster_path : 'https://via.placeholder.com/342x500?text=img+null'"
                :alt="result.title">
        </div>


        <div class="back-display">
            <div class="card-item">
                <div v-if="result.original_title" class="text-start">
                    <h3>{{ result.title }}</h3>
                    <h4>Titolo orignale:{{ result.original_title }}</h4>
                </div>
                <div v-else>
                    <h3>{{ result.name }}</h3>
                    <h4>Titolo orignale:{{ result.original_name }}</h4>
                </div>
                <div>
                    <p>{{ result.overview }}</p>
                </div>
                <div class="flag ">
                    <img v-if="availableFlags.includes(result.original_language)"
                        :src="getImgUrl(result.original_language)">
                    <p v-else> Lenguage: {{ result.original_language }} </p>
                </div>
                <div class="star ">
                    <span v-for="item in getStarsNumber">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="item in (5 - getStarsNumber)">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </div>

            </div>
        </div>
    </div>


</template>

<script>
import { store } from '../store.js'
export default {
    name: 'CardComponent',
    props: {
        result: Object
    },
    data() {
        return {
            availableFlags: ['en', 'it', 'de', 'es', 'uk', 'fr', 'ja', 'nl', 'pt'],
            store,
            activeIndex: 0,
            autoscroll: null,



        }
    },
    computed: {
        getStarsNumber() {
            return parseInt((Number(this.result.vote_average) / 2).toFixed(0))
        }
    },
    methods: {
        getImgUrl(imgName) {
            return new URL(`../assets/immagini-flag/${imgName}.png`, import.meta.url).href;
        },



    }
}
</script>

<style lang="scss" scoped>
.front-display {
    background: #56565693;
    filter: brightness(50%);
    position: relative;
    z-index: 0;
    cursor: pointer;
    filter: drop-shadow(0 3px 5px rgb(0, 0, 0));
    color: white;
    width: 342px;
    background-color: black;

    &:hover .img-card {
        opacity: 0.2;
    }

    &:hover .back-display {
        opacity: 1;
        display: block;

    }
}

.back-display {
    -webkit-transition: opacity 0.5s ease-in-out;
    -moz-transition: opacity 0.5s ease-in-out;
    -ms-transition: opacity 0.5s ease-in-out;
    -o-transition: opacity 0.5s ease-in-out;
    transition: opacity 0.5s ease-in-out;
    opacity: 0;
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    max-height: 90%;
    width: 342px;
    background-color: rgba(0, 0, 0, 0.822);
    color: rgb(211, 211, 211);
    font-size: 0.8rem;
    padding: 0.7rem;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 15;
    -webkit-box-orient: vertical;


    & h3 {
        font-size: 1.3rem;
    }

    & h4 {
        font-size: 0.8rem;
    }
}

.card-item {
    padding: 15px;
    height: 200%;

}

.flag {
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;

    img {
        max-width: 30px;
    }

}

.star {
    margin-left: 0.5rem;
}

img {
    box-shadow: 0 0 6px 3px rgba(#000000, 0.5);
}
</style>