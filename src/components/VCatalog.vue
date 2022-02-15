<template>
  <div>
    <router-link :to="{name: 'cart', params: {cartData: CART}}">
      <div class="absolute top-2 right-2 px-4 py-2 border rounded transition duration-300 hover:bg-gray-600 bg-gray-800 text-white">Cart: {{ CART.length }}</div>
    </router-link>
    <h1 class="title">Catalog</h1>
    <div class="mb-4">
      <div class="text-gray-900 font-bold text-xl mb-2">Select a category</div>
      <VSelect
          :selected="selected"
          :options="categories"
          @select="sortByCategories"
      />
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <VCatalogItem
        class=" border-none hover:border rounded"
        v-for="item in filteredItems"
        :key="item.id"
        :item-data="item"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VCatalogItem from "./VCatalogItem";
import VSelect from "./UI/VSelect";
export default {
  name: "VCatalog",
  components: {
    VCatalogItem,
    VSelect,
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
      categories: [
        {
          name: "All",
          value: "All"
        },
        {
          name: "men's clothing",
          value: "men's clothing"
        },
        {
          name: "jewelery",
          value: "jewelery"
        },
        {
          name: "electronics",
          value: "electronics"
        },
        {
          name: "women's clothing",
          value: "women's clothing"
        },
      ],
      selected: "All",
      sortedItems: [],
    }
  },
  computed: {
    ...mapGetters([
        "ITEMS",
        "CART",
    ]),
    filteredItems() {
      if (this.sortedItems.length) {
        return this.sortedItems
      } else {
        return this.ITEMS
      }
    },
  },
  methods: {
    ...mapActions([
      'GET_DATA_FROM_API',
      'ADD_TO_CART',
    ]),
    sortByCategories(category) {
      this.sortedItems = [];
      let that = this;
      this.ITEMS.map(function (item) {
        if (item.category === category.name) {
          that.sortedItems.push(item)
        }
      })
      this.selected = category.name;
    },
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
  },
  mounted() {
    this.GET_DATA_FROM_API()
  }
}
</script>

<style scoped>

</style>