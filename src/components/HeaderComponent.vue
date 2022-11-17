<template>
    <header class="myNavbar ">
        <div class="mx-4 navbar">
            <div class="d-flex align-items-center mx-2">
                <a href="#"><img src="/img/logo1.png" alt="logo"></a>
                <SectionApp @popularSearch="popularSearch" class="mx-5 mt-3" />
            </div>

            <div class="text-end">
                <AppSearch @filterSearch="filterSearch" @popularSearch="popularSearch" />
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
        filterSearch() {
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
        popularSearch() {
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
        },
    },
    created() {

        this.popularSearch()
    },
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
    height: 100px;

    img {
        width: 250px;
    }
}
</style>