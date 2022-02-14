<template>
  <div class="v-table">
    <div class="v-table__header">
      <p @click="sortByName">
        Имя
        <img src="@/assets/unfold_more.svg" alt="more">
      </p>
      <p @click="sortByUsername">
        Никнейм
        <img src="@/assets/unfold_more.svg" alt="more">
      </p>
      <p @click="sortByEmail">
        Email
        <img src="@/assets/unfold_more.svg" alt="more">
      </p>
      <p @click="sortByPhone">
        Номер телефона
        <img src="@/assets/unfold_more.svg" alt="more">
      </p>
    </div>
    <div class="v-table__body">
      <VTableRow
        v-for="row in paginatedUsers"
        :key="row.id"
        :row-data="row"
      />
    </div>
    <div class="v-table__pagination">
      <div
          class="page"
          v-for="page in pages"
          :key="page"
          :class="{'page-selected': page === pageNumber}"
          @click="pageClick(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import VTableRow from "./VTableRow";
export default {
  name: "VTable",
  components: {
    VTableRow,
  },
  props: {
    usersData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      usersPerPage: 5,
      pageNumber: 1,
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.usersData.length / 5);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.usersData.slice(from, to);
    },
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
    sortByName() {
      this.usersData.sort((a, b) => a.name.localeCompare(b.name))
    },
    sortByUsername() {
      this.usersData.sort((a, b) => a.username.localeCompare(b.username))
    },
    sortByEmail() {
      this.usersData.sort((a, b) => a.email.localeCompare(b.email))
    },
    sortByPhone() {
      this.usersData.sort((a, b) => a.phone.localeCompare(b.phone))
    },
  }
}
</script>

<style scoped>
.v-table {
  max-width: 900px;
  margin: 0 auto;
}
.v-table__header {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid grey;
}
.v-table__header p {
  display: flex;
  align-items: center;
  text-align: left;
  flex-basis: 25%;
  cursor: pointer;
}
.v-table__pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}
.page {
  padding: 8px;
  margin: 5px;
  border: solid 1px grey;
}
.page:hover {
  background: #04b7f1;
}
.page-selected {
  background: lightblue;
}
</style>