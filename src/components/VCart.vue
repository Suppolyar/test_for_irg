<template>
  <section>
    <h1 class="title">Корзина</h1>
    <VCartItem
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