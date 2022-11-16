<template>
    <div class="container">
    <div  v-if="store.loading">
        Sto caricando i dati
    </div>
        <div class="row" v-if="!store.loading">
        <h2>Film</h2>
            <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-5" v-for="(item, index) in store.filmList" :key="item.id">
                <ItemComponent :film="item"/>
            </div>
        </div>
        <div class="row" v-if="!store.loading">
        <h2>Film</h2>
            <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-5" v-for="(item, index) in store.tvList" :key="item.id">
                <ItemComponent :film="item"/>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from '../store.js'
import ItemComponent from './ItemComponent.vue';

    export default {
    name: "ItemList",
    components: { ItemComponent },
    data(){
        return{
            store

        }
    }
}
</script>

<style lang="scss" scoped>

</style>