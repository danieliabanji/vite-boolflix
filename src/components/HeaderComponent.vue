<template>
    <header class="myNavbar">
            <div class="mx-4 navbar">
                <img src="/img/logo1.png" alt="">

                <SectionApp/>
            
                <div class="text-end">
                    <AppSearch/>
                </div>
            </div>
    </header>
</template>

<script>
import AppSearch from './AppSearch.vue';
import SectionApp from './SectionApp.vue';

    export default {
    name: "HeaderComponent",
    components: { AppSearch, SectionApp }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

header{
    background-color: $black;
    height: 70px;

    h1{
        color: red;
    }
}
.myNavbar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: linear-gradient(#000000 20%, #000000ba 75%, #00000000);

  img{
    width: 200px;
  }
}

</style>