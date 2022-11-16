<template>
    <header class="myNavbar">
        <div class="mx-4 navbar">
            <img src="/img/logo1.png" alt="">

            <SectionApp />

            <div class="text-end">
                <AppSearch @titleSearch="titleSearch" @resetSearch="resetSearch" />
            </div>
        </div>
    </header>
</template>

<script>
import { store } from '../store';
import axios from 'axios';

import AppSearch from './AppSearch.vue';
import SectionApp from './SectionApp.vue';

export default {
    name: "HeaderComponent",
    components: { AppSearch, SectionApp },
    data() {
        return {
            store
        }
    },
    methods: {
        titleSearch() {
            if (this.store.searchKey !== "") {
                // AXIOS PER MOVIE
                axios.get(this.store.apiMovieURL + `?api_key=${this.store.apiKey}&query=${this.store.searchKey}`)
                    .then((resp) => {
                        this.store.arrayMovie.results = resp.data.results
                        console.log(this.store.arrayMovie, "film");
                    })
                // AXIOS PER TV
                axios.get(this.store.apiTvURL + `?api_key=${this.store.apiKey}&query=${this.store.searchKey}`)
                    .then((resp) => {
                        this.store.arrayTv.results = resp.data.results
                        console.log(this.store.arrayTv, "serie");
                    })
            }
        },
        resetSearch() {
            if (this.store.home === true) {
                // AXIOS PER MOVIE
                axios.get(this.store.apiMoviePopularURL + `?api_key=${this.store.apiKey}`)
                    .then((resp) => {
                        this.store.arrayMovie.results = resp.data.results
                        console.log(this.store.arrayMovie, "film");
                    })
                // AXIOS PER TV
                axios.get(this.store.apiTvPopularURL + `?api_key=${this.store.apiKey}`)
                    .then((resp) => {
                        this.store.arrayTv.results = resp.data.results
                        console.log(this.store.arrayTv, "serie");
                    })
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

header {
    background-color: $black;
    height: 70px;

    h1 {
        color: red;
    }
}

.myNavbar {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: linear-gradient(#000000 20%, #000000ba 75%, #00000000);

    img {
        width: 200px;
    }
}
</style>