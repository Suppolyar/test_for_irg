<template>
  <div>
    <h1 class="title">Каталог</h1>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <VCatalogItem
        class=" border-none hover:border rounded"
        v-for="(item, index) in paginatedUsers"
        :key="item.id"
        :item-data="item"
        @addToCart="addToCart"
        @deleteFromCart="deleteFromCart(index)"
      />
    </div>
    <div class="flex flex-row justify-center mt-16">
      <div
          class="p-2 mx-1 cursor-pointer border rounded transition duration-300 hover:bg-gray-600 hover:text-white"
          v-for="page in pages"
          :key="page"
          :class="{'bg-gray-800 text-white': page === pageNumber}"
          @click="pageClick(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import VCatalogItem from "./VCatalogItem";
export default {
  name: "VCatalog",
  components: {
    VCatalogItem,
  },
  props: {
    itemsData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      itemsPerPage: 6,
      pageNumber: 1,
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.itemsData.length / 5);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.itemsPerPage;
      let to = from + this.itemsPerPage;
      return this.itemsData.slice(from, to);
    },
  },
  methods: {
    ...mapActions([
      'ADD_TO_CART',
      'DELETE_FROM_CART',
    ]),
    pageClick(page) {
      this.pageNumber = page;
    },
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style scoped>

</style>