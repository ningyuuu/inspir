<template>
  <div class="h-full">
    <input
      id="file-upload"
      ref="fileinput"
      type="file"
      hidden
      multiple
      @change="updateFile"
    >
    <label for="file-upload">
      <div
        class="border-red-600 border-4 border-dashed rounded-md w-full h-full
               text-center text-red-600 text-2xl items-center flex flex-col justify-center"
        @dragover.prevent
        @drop.prevent="dropFile"
      >
        <div class="w-full">Click to upload or drag files into the box</div>
        <div v-if="files.length">
          <div v-for="file in files" :key="file.name">
            {{ file.name }} ({{ file.size }} kb)
          </div>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  filters: {
    kb: val => Math.floor(val / 1024)
  },
  computed: {
    files () {
      return this.$store.state.upload.files
    }
  },
  methods: {
    dropFile (e) {
      const droppedFiles = e.dataTransfer.files
      if (droppedFiles) {
        this.$store.commit('upload/addFileToList', droppedFiles)
      }
    },
    updateFile () {
      if (this.$refs.fileinput.files.length) {
        this.$store.commit('upload/addFileToList', [...this.$refs.fileinput.files])
      }
    }
  }
}
</script>
