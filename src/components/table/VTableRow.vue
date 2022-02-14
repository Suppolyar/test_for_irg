<template>
  <div class="v-table-row">
    <div class="row row__name">{{ rowData.name }}</div>
    <div class="row row__username">{{ rowData.username }}</div>
    <div class="row row__email">{{ rowData.email }}</div>
    <div class="row row__phone">{{ rowData.phone }}</div>
  </div>
</template>

<script>
export default {
  name: "VTableRow",
  components: {
  },
  props: {
    rowData: {
      type: Object,
      default: () => {
        return {}
      },
    }
  }
}
</script>

<style>
.row {
  text-align: left;
  padding: 8px 16px;
  flex-basis: 25%;
}
.v-table-row {
  display: flex;
  justify-content: space-around;
}
</style>