<template>
  <div class="h-full">
    <input id="file-upload" ref="fileinput" type="file" hidden @change="updateFile">
    <label for="file-upload">
      <div
        class="border-red-600 border-4 border-dashed rounded-md w-full h-full
               text-center text-red-600 text-2xl items-center flex p-20"
        @dragover.prevent
        @drop.prevent="dropFile"
      >
        <div v-if="!file" class="w-full">Click to upload or drag a file in</div>
        <div v-if="file" class="w-full">File to upload: {{ file.name }} ({{ file.size }} kb)</div>
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
    file () {
      return this.$store.state.upload.file
    }
  },
  methods: {
    dropFile (e) {
      const droppedFiles = e.dataTransfer.files
      if (droppedFiles) {
        this.$store.commit('upload/updateFile', droppedFiles[0])
      }
    },
    updateFile () {
      if (this.$refs.fileinput.files.length) {
        this.$store.commit('upload/updateFile', this.$refs.fileinput.files[0])
      }
    }
  }
}
</script>
