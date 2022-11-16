<template>
    <div class="container" v-if="!store.home">
        <h2 class="text-center">Benvenuto su Boolflix</h2>
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
        // store.endPointM = '/movie/popular';
        // store.getFilms();
        // store.endPointT = '/tv/popular';
        // store.getTV();

    },

}
</script>

<style lang="scss" scoped>

</style>