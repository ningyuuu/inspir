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
      class="border-red-600 border-4 border-dashed rounded-md w-full h-full px-10 py-10
               text-center text-red-600 flex flex-col"
      :class="justifyCenterIfNoFiles"
      @dragover.prevent
      @drop.prevent="dropFile"
    >
      <div class="w-full text-2xl mb-4">
        <label for="file-upload">Click here to upload or drag files into the box</label>
      </div>
      <div v-if="hasFiles" class="flex flex-wrap flex-grow">
        <div v-for="(file, idx) in files" :key="idx">
          <FileBoxItem :file-idx="idx" />
        </div>
      </div>
      <div v-if="hasFiles" class="w-full mb-4">
        <ClearButton />
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
    },
    justifyCenterIfNoFiles () {
      return this.hasFiles ? [] : ['justify-center']
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
