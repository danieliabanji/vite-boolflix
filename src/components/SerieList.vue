<template>
    <div class="row my-5" v-if="!store.loading">
        <h2>Serie tv</h2>
        <div class="cards d-flex g-3">
            <div class="" v-for="result in store.arrayTv.results" :key="store.arrayTv.results.id">
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
.cards {
    overflow-x: auto;
}
</style>