<template>
  <div>
    <input id="file-upload" ref="fileinput" type="file" hidden @change="updateFile">
    <label for="file-upload">
      <div class="border-red-400 border-4 border-dashed text-center p-20 rounded-md text-red-600 w-full" @dragover.prevent @drop.prevent="dropFile">
        <div v-if="!file">Click to upload or drag a file in</div>
        <div v-if="file">File to upload: {{ file.name }} ({{ file.size }} kb)</div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  filters: {
    kb: val => Math.floor(val / 1024)
  },
  data: () => ({
    file: null
  }),
  methods: {
    dropFile (e) {
      const droppedFiles = e.dataTransfer.files
      if (!droppedFiles) { return }
      this.file = droppedFiles[0]
    },
    updateFile () {
      this.file = this.$refs.fileinput.files[0]
    }
  }
}
</script>
