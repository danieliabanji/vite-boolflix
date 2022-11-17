<template>
    <div class="container" v-if="!store.home">
        <FilmList v-show="store.film" />
        <SerieList v-show="store.serieTv" />
    </div>
    <div class="container" v-else>
        <div v-if="store.loading">
            Sto caricando i dati
        </div>
        <FilmList v-show="store.film" />
        <SerieList v-show="store.serieTv" />
    </div>
</template>

<script>
import { store } from '../store.js'
import FilmList from './FilmList.vue';
import SerieList from './SerieList.vue';

export default {
    name: "ItemList",
    components: { FilmList, SerieList },
    data() {
        return {
            store

        }
    }, created() {


    },

}
</script>

<style lang="scss" scoped>

</style>