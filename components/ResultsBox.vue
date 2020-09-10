<template>
  <div
    class="border-green-700 border-4 border-dashed rounded-md w-full h-full
           text-center text-green-700 text-2xl flex flex-col justify-center overflow-hidden"
  >
    <span v-if="loading">loading...</span>
    <span v-if="!loading">{{ results }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.state.upload.loading
    },
    results () {
      return this.$store.state.upload.results
    }
  }
}
</script>
