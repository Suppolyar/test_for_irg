<template>
  <div class="py-6">
    <div class="sm:flex p-6 max-w-xl mx-auto bg-white transition duration-300 shadow-lg hover:shadow-2xl rounded-lg overflow-hidden">
      <div class="mx-auto w-1/3 flex flex-col justify-center">
        <img class="object-contain h-48 mx-auto" :src="cartItemData.image" alt="image">
      </div>
      <div class="p-4 w-2/3">
        <h1 class="text-gray-900 font-bold text-2xl">{{ cartItemData.title }}</h1>
        <p class="my-2 text-gray-600 text-sm">{{ cartItemData.description }}</p>
        <p class="text-gray-700 text-xl">
          Added:
          <button class="px-2 py-1 border rounded text-white transition duration-300 bg-gray-800 hover:bg-gray-600 mr-2" @click="removeQuantity">-</button>
          <span class="text-gray-900 font-bold text-xl mr-2">{{ cartItemData.quantity }}</span>
          <button class="px-2 py-1 border rounded text-white transition duration-300 bg-gray-800 hover:bg-gray-600" @click="cartItemData.quantity++">+</button>
        </p>
        <div class="flex item-center justify-between mt-3">
          <h1 class="text-gray-700 font-bold text-xl">{{ cartItemData.price }} $</h1>
          <button
              @click="deleteFromCart"
              class="px-3 py-2 bg-red-800 text-white text-xs font-bold uppercase rounded transition duration-300 hover:shadow-lg hover:bg-red-600">
          Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VCartItem",
  props: {
    cartItemData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
    removeQuantity() {
      if (this.cartItemData.quantity > 1) {
        this.cartItemData.quantity--
      } else {
        this.deleteFromCart();
      }
    }
  },
  mounted() {
    this.$set(this.cartItemData, 'quantity', 1)
  }
}
</script>

<style scoped>

</style>