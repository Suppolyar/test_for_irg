<template>
  <div class="v-table">
    <div class="v-table__header grid grid-cols-4 border-b-2 mb-4 pb-2">
      <p class="flex flex-row items-center cursor-pointer px-2 transition duration-300 hover:text-indigo-500" @click="sortByName">
        Имя
      </p>
      <p class="flex flex-row items-center cursor-pointer px-2 transition duration-300 hover:text-indigo-500" @click="sortByUsername">
        Никнейм
      </p>
      <p class="flex flex-row items-center cursor-pointer px-2 transition duration-300 hover:text-indigo-500" @click="sortByEmail">
        Email
      </p>
      <p class="flex flex-row items-center cursor-pointer px-2 transition duration-300 hover:text-indigo-500" @click="sortByPhone">
        Номер телефона
      </p>
    </div>
    <div class="v-table__body">
      <VTableRow
        v-for="row in paginatedUsers"
        :key="row.id"
        :row-data="row"
      />
    </div>
    <div class="v-table__pagination flex flex-row justify-center mt-4">
      <div
          class="page p-2 mx-1 cursor-pointer border rounded transition duration-300 hover:bg-indigo-500 hover:text-white"
          v-for="page in pages"
          :key="page"
          :class="{'bg-indigo-300 text-white': page === pageNumber}"
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
}
.v-table__header {
}
.v-table__header p {
}
.v-table__pagination {
}
.page {
}
.page:hover {
}
.page-selected {
}
</style>