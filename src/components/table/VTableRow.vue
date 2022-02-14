<template>
  <div class="v-table-row grid grid-cols-4 text-left border-b mb-2 pb-2">
    <div class="row row__name break-all px-2">{{ rowData.name }}</div>
    <div class="row row__username break-all px-2">{{ rowData.username }}</div>
    <div class="row row__email break-all px-2">{{ rowData.email }}</div>
    <div class="row row__phone break-all px-2">{{ rowData.phone }}</div>
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
}
.v-table-row {
}
</style>