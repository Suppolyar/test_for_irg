<template>
  <section>
    <router-link :to="{name: 'catalog'}">
      <div class="absolute top-2 right-2 px-4 py-2 border rounded transition duration-300 hover:bg-gray-600 bg-gray-800 text-white">Back to catalog</div>
    </router-link>
    <h1 class="title">Cart</h1>
    <div v-if="cartData.length === 0">
        <div class="text-center text-2xl">Cart is empty... :(</div>
    </div>
    <VCartItem
      v-else
      v-for="(item, index) in cartData"
      :key="item.id"
      :cart-item-data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </section>
</template>

<script>
import { mapActions } from "vuex";
import VCartItem from "./VCartItem";
export default {
  name: "VCart",
  components: {VCartItem},
  props: {
    cartData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style scoped>

</style>