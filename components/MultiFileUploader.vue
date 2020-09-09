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
    <div
      class="border-red-600 border-4 border-dashed rounded-md w-full h-full p-20
               text-center text-red-600 items-center flex flex-col justify-center"
      @dragover.prevent
      @drop.prevent="dropFile"
    >
      <label for="file-upload" class="w-full text-2xl">Click to upload or drag files into the box</label>
      <div v-if="hasFiles" class="flex">
        <div v-for="(file, idx) in files" :key="idx">
          <FileBoxItem :file-idx="idx" />
        </div>
      </div>
    </div>
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
    },
    hasFiles () {
      return !!this.files.length
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
