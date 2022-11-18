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
        popularSearch() {
            store.popularSearch()
        },
        filterSearch() {
            store.filterSearch()
        }


    },
    created() {

        store.popularSearch()
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