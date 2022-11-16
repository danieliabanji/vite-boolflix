<template>
  <HeaderComponent />
  <main>
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

export default {
  components: {
    HeaderComponent,
    ItemList
  },
  data() {
    return {
      store
    }
  },


}
</script>

<style lang="scss" scoped>

</style>
