<template>
    <div class="container d-flex justify-content-center p-4">
        <form class="row row-cols-lg-auto g-3 align-items-center">
            <div class="col-12">
                <input type="text" class="form-control" placeholder="Search name" v-model.trim="store.searchKey">
            </div>
            <div class="col-12">
                <button class="btn btn-primary" @click="$emit('titleSearch')">Search</button>
            </div>
            <div class="col-12">
                <button type="reset" class="btn btn-primary" @click="$emit('resetSearch')">Reset</button>
            </div>
        </form>
    </div>



    <!-- <div class="container d-flex justify-content-center p-4">
        <form class="row row-cols-lg-auto g-3 align-items-center" @submit.prevent="searchCharacters">
            <div class="col-12">
                <label class="visually-hidden" for="charctername">Search name</label>
                <input type="text" class="form-control" id="charctername" placeholder="Search name" v-model.trim="search.name">
            </div>
        
        
        
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Search</button>
            </div>
        
            <div class="col-12">
                <button type="reset" class="btn btn-primary" @click="resetSearch">Reset</button>
            </div>
        </form>
    </div> -->
</template>

<script>
import { store } from '../store.js'

export default {
    name: 'AppSearch',
    data() {
        return {
            store,
            search: {

            },
        }
    },
    methods: {
        searchCharacters() {
            const search = { ...this.search }
            Object.keys(search).forEach((val) => {
                if (!search[val]) delete search[val]
            })
            store.params = { ...search }
            console.log(store.params);
            store.getCharacters()

            // this.$emit('filterchar');
            // console.log(this.search);
        },
        resetSearch() {
            this.search.status = '';
            this.search.name = '';
            store.params = {};
            store.getCharacters()
            // this.$emit('filterchar');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>