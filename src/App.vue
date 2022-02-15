<template>
  <div id="app">
    <div class="container mx-auto my-8">
      <VWrapper />
    </div>
  </div>
</template>

<script>
import VWrapper from "./components/VWrapper";
export default {
  name: 'App',
  components: {VWrapper},

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
