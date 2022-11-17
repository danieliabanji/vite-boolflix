<template>
  <HeaderComponent />
  <main>
    <h2 v-if="store.page != false">
      <WelcomeApp />
    </h2>
    <ItemList />
    <div v-if="store.errormessage">
      <h1>Ops! Qualcosa è andato storto</h1>
      <p>{{ store.errormessage }}</p>
    </div>
  </main>
</template>

<script>
import { store } from './store.js'
import HeaderComponent from './components/HeaderComponent.vue';
import ItemList from './components/ItemList.vue';
import WelcomeApp from './components/WelcomeApp.vue'

export default {
  components: {
    HeaderComponent,
    ItemList,
    WelcomeApp
  },
  data() {
    return {
      store
    }
  },


}
</script>

<style lang="scss" scoped>
main {
  margin-top: 40px;
}
</style>
