<template>
  <button
    class="bg-transparent py-2 px-4 focus:outline-none
           border rounded-md mr-2 duration-75 font-normal
           hover:bg-green-700 text-green-700 hover:text-white
           border-green-700 hover:border-transparent"
    @click.prevent="restart"
  >
    <slot>Start Again</slot>
  </button>
</template>

<script>
export default {
  methods: {
    restart () {
      this.$router.push('/')
    }
  }
}
</script>
