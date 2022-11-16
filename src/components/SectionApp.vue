<template>
    <div>
        <ul>
            <li>
                <a href="#" class="px-2" @click="getHome">Home</a>
                <a href="#" class="px-2" @click="getFilm">Film</a>
                <a href="#" class="px-2" @click="getserieTv">Serie tv</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { store } from '../store.js'
export default {
    name: 'SectionApp',
    data() {
        return {
            store
        }
    },
    methods: {
        getHome() {
            store.home = !store.home;
            store.film = true;
            store.serieTv = true
            console.log(store.home)

        },
        getFilm() {
            store.film = !store.film
            console.log(store.film)

        },
        getserieTv() {
            store.serieTv = !store.serieTv
            console.log(store.serieTv)

        }
    }
}

</script>

<style lang="scss" scoped>
ul {
    list-style: none;

    a {
        text-decoration: none;

    }

}
</style>