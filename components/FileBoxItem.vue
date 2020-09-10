<template>
  <div class="m-4 h-32 w-32 text-red-600 rounded-md border-dashed border-red-600 border-2 relative">
    <button class="top-0 right-0 absolute px-2 focus:outline-none" @click="deleteFile">
      x
    </button>
    <div class="flex flex-col text-center justify-center h-full overflow-hidden">
      <div>
        {{ file.name }}<br>({{ file.size | kb }} kb)
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    kb: val => Math.floor(val / 1024)
  },
  props: {
    fileIdx: {
      type: Number,
      default: 0
    }
  },
  computed: {
    file () {
      if (!this.$store.state.upload.files.length) {
        return {}
      }
      return this.$store.state.upload.files[this.fileIdx]
    }
  },
  methods: {
    deleteFile () {
      this.$store.commit('upload/deleteFileFromList', this.fileIdx)
    }
  }
}
</script>
