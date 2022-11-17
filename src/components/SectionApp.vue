<template>
    <div>
        <ul>
            <li>
                <a href="#" class="px-2" @click="getHome">Home</a>
                <!-- <a href="#" class="px-2" @click="$emit('popularSearch'), getHome">Popular</a> -->
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
        getPage() {
            store.page = false
        },
        getHome() {
            store.home = !store.home;
            store.film = true;
            store.serieTv = true;
            this.$emit('popularSearch');
            this.getPage();
            console.log(store.home)
            console.log(store.page);

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
        color: #fff;
        font-size: 1.5rem;


    }

}
</style>