<template>
    <div class="row" v-if="!store.loading">
        <h2>Serie tv</h2>
        <div class="cards row row-cols-2 row-cols-md-4 g-3">
            <div class="col m-4" v-for="result in store.arrayTv.results" :key="store.arrayTv.results.id">
                <CardComponent :result="result" />
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js'
import CardComponent from './CardComponent.vue';
export default {
    name: "SerieList",
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