<template>
    <div class="container d-flex justify-content-center p-4">
        <form class="row row-cols-lg-auto g-3 align-items-center">
            <div class="col-12">
                <input type="text" class="form-control" placeholder="Search name" v-model.trim="store.searchKey">
            </div>
            <div class="col-12">
                <button class="btn btn-danger" @click="$emit('filterSearch')">Search</button>
            </div>
            <div class="col-12">
                <button type="reset" class="btn btn-danger" @click="$emit('popularSearch')">Reset</button>
            </div>
        </form>
    </div>

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

    }
}
</script>

<style lang="scss" scoped>

</style>