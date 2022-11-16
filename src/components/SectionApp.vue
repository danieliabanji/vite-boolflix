<template>
    <div>
        <ul>
            <li >
                <a href="#" class="px-2" @click="getHome">Home</a>
                <a href="#" class="px-2" @click="getFilm">Serie TV</a>
                <a href="#" class="px-2" @click="getserieTv">Film</a>
            </li>
        </ul>
    </div>
</template>

<script>
import {store} from '../store.js'
    export default {
        name:'SectionApp',
        data(){
            return{
                store
            }
        },
        methods:{
            getHome(){
                store.popular = !store.popular
            },
            getFilm(){
                store.film = !store.film
            },
            getserieTv(){
                store.serieTv = !store.serieTv
            }
        }
    }
    
</script>

<style lang="scss" scoped>

ul{
    list-style: none;

    a{
    text-decoration: none;

    }
    
}


</style>