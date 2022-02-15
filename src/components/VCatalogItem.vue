<template>
  <div>
    <div class="flex flex-col p-4 h-full bg-white transition duration-300 shadow-lg hover:shadow-2xl rounded-lg overflow-hidden">
      <div class="mx-auto mb-4">
        <img class="object-contain h-48 mx-auto" :src="itemData.image" alt="image">
      </div>
      <h1 class="text-gray-900 font-bold text-xl mb-2">{{ itemData.title }}</h1>
      <p class="text-gray-600 font-bold text-sm mb-2">Rating {{ itemData.rating.rate }}</p>
      <p class="text-gray-600 text-sm mb-2">{{ itemData.description }}</p>
      <div class="flex item-center justify-between mt-auto">
        <h1 class="text-gray-700 font-bold text-xl">{{ itemData.price }} $</h1>
        <button
          @click="addToCart"
          class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded transition duration-300 hover:shadow-lg hover:bg-gray-600">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VCatalogItem",
  components: {
  },
  props: {
    itemData: {
      type: Object,
      default: () => {
        return {}
      },
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.itemData)
    },
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
  },
  mounted() {
    this.$set(this.itemData, 'quantity', 1)
  }
}
</script>

<style>

</style>