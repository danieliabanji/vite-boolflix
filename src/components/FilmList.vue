<template>
    <div class="row" v-if="!store.loading">
        <h2>Film</h2>
        <div class=" cards row row-cols-2 row-cols-md-4 g-3">
            <div class="col m-4" v-for="result in store.arrayMovie.results" :key="store.arrayMovie.results.id">
                <CardComponent :result="result" />
            </div>
        </div>
    </div>









</template>

<script>
import { store } from '../store.js'
import CardComponent from './CardComponent.vue';
export default {
    name: "FilmLIst",
    components: { CardComponent },
    data() {
        return {
            store
        };
    },
    created() {

    },
}
</script>

<style lang="scss" scoped>

</style>