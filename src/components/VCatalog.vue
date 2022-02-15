<template>
  <div>
    <router-link :to="{name: 'cart', params: {cartData: CART}}">
      <div class="absolute top-2 right-2 px-4 py-2 border rounded transition duration-300 hover:bg-gray-600 bg-gray-800 text-white">Cart: {{ CART.length }}</div>
    </router-link>
    <h1 class="title">Catalog</h1>
    <div class="mb-4 flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-6 border-b pb-4">
      <div>
        <div class="text-gray-900 text-xl mb-2">Select a category</div>
        <VSelect
            :selected="selected"
            :options="categories"
            @select="sortByCategories"
        />
      </div>
      <div
          @click="sortByPrice"
          class="flex flex-row cursor-pointer transition duration-300 hover:text-gray-500 hover:fill-gray-500"
      >
        <div class="mb-2">
          Sort By Price
        </div>
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/>
        </svg>
      </div>
      <div
          @click="sortByRating"
          class="flex flex-row cursor-pointer transition duration-300 hover:text-gray-500 hover:fill-gray-500"
      >
        <div class="mb-2">
          Sort By Rating
        </div>
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/>
        </svg>
      </div>
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
      sortRules: [
        { key: 'good_id:asc', title: 'По порядку' },
        { key: 'rating:desc', title: 'По рейтингу' },
        { key: 'price:asc', title: 'По цене, сначала дешевые' },
        { key: 'price:desc', title: 'По цене, сначала дорогие' }
      ],
      sortPriceFlag: false,
      sortRatingFlag: false,
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
    sortByPrice() {
      if (this.sortPriceFlag) {
        this.filteredItems.sort((a, b) => a.price - b.price);
        this.sortPriceFlag = false
        console.log('отфильтровали по увеличению')
      } else {
        this.filteredItems.sort((a, b) => b.price - a.price)
        console.log('отфильтровали по уменьшению')
        this.sortPriceFlag = true
      }
    },
    sortByRating() {
      if (this.sortRatingFlag) {
        this.filteredItems.sort((a, b) => a.rating.rate - b.rating.rate);
        this.sortRatingFlag = false
        console.log('отфильтровали по увеличению')
      } else {
        this.filteredItems.sort((a, b) => b.rating.rate - a.rating.rate)
        console.log('отфильтровали по уменьшению')
        this.sortRatingFlag = true
      }
    },
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