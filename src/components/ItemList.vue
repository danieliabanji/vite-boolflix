<template>
    <section>
        <div class="container" v-if="!store.home">
            <FilmList v-show="store.film" />
            <SerieList v-show="store.serieTv" />
        </div>
        <div class="container" v-else>

            <FilmList v-show="store.film" />
            <SerieList v-show="store.serieTv" />
        </div>
    </section>
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