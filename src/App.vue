<script>
import { mapActions, mapGetters } from 'vuex';
import VTable from "./components/table/VTable";

export default {
  name: 'App',
  components: {
    VTable,
  },
  computed: {
    ...mapGetters([
      'USERS'
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

<template>
  <div id="app">
    <VTable
      class="container mx-auto"
      :users-data="USERS"
    />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
