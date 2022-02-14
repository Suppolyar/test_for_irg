<template>
  <div id="app">
    <div class="container mx-auto">
      <VCatalog
          :items-data="ITEMS"
      />
      <VCart
          v-if="CART.length"
          :cart-data="CART"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import VCatalog from "./components/VCatalog";
import VCart from "./components/VCart";

export default {
  name: 'App',
  components: {
    VCart,
    VCatalog,
  },
  computed: {
    ...mapGetters([
      'ITEMS',
      'CART',
    ])
  },
  methods: {
    ...mapActions([
      'GET_DATA_FROM_API'
    ]),
  },
  mounted() {
    this.GET_DATA_FROM_API()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.title {
  @apply text-5xl font-bold text-center my-12;
}
</style>
