<template>
    <div class="row" v-if="!store.loading">
        <h2>Film</h2>
        <div class=" cards d-flex">
            <div v-for="result in store.arrayMovie.results" :key="store.arrayMovie.results.id">
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
@use '../assets/styles/partials/variables' as *;

.cards {
    overflow-x: auto;


}
</style>