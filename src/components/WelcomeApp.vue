<template>
    <div class="container text-center">
        <h2>
            Benvenuti su Boolflix
        </h2>
        <div>
        </div>

        <div>
            <FilmList />
            <SerieList />
        </div>
    </div>
</template>

<script>
import FilmList from './FilmList.vue';
import SerieList from './SerieList.vue';

export default {
    name: "WelcomeApp",
    components: { FilmList, SerieList }
}
</script>

<style lang="scss" scoped>
h2 {
    color: #dc1a28;
    font-size: 2.5rem;
    text-shadow: 3px 2px 3px rgba(255, 255, 255, .2);
}
</style>