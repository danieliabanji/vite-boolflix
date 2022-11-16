<template>
    <div class="text-center">
        <img :src="store.urlImg+film.poster_path" :alt="film.title">
        <h4>{{ film.title }}</h4>
        
    </div>
</template>

<script>
import {store} from '../store';
    export default {
        name: 'ItemComponent',
        props: {
            film: Object
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

h4{
    text-transform: uppercase;
}

img{
    box-shadow: 0 0 6px 3px rgba( #000000, 0.5);
}

</style>