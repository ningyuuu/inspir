<template>
  <button
    :disabled="disabled"
    class="bg-transparent py-2 px-4 focus:outline-none
           border rounded-md mr-2 duration-75 font-normal
           hover:bg-red-600 text-red-600 hover:text-white
           border-red-600 hover:border-transparent"
    @click.prevent="clear"
  >
    <slot>Clear</slot>
  </button>
</template>

<script>
export default {
  methods: {
    clear () {
      this.$store.commit('upload/clear')
    }
  }
}
</script>
