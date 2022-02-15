<template>
  <div class="relative w-48 cursor-pointer text-left">
    <p
        class="border rounded p-2 transition duration-300 hover:shadow-lg"
        @click="areOptionsVisible = !areOptionsVisible"
    >{{selected}}</p>
    <div
        class="options absolute bg-white top-8 rounded-b border"
        v-if="areOptionsVisible || isExpanded"
    >
      <p
          class="m-0  hover:bg-gray-100"
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    },
    isExpanded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style>
.options {
  top: 30px;
  left: 0;
  width: 100%;
  padding: 8px;
}

</style>