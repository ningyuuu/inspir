<template>
  <div class="container mx-auto">
    <div class="flex flex-col h-screen text-center">
      <h1 class="flex-grow-0 text-5xl font-semibold text-red-600 mt-4">
        {{ title }}
      </h1>
      <div class="flex-grow p-4 m-4">
        <SingleFileUploader v-if="!isMultiFile" />
        <MultiFileUploader v-if="isMultiFile" />
      </div>
      <div class="flex-grow-0 pb-4 mb-4">
        <Button />
      </div>
    </div>
  </div>
</template>

<script>
import config from '~/inspir.config'
export default {
  computed: {
    isMultiFile () {
      return config.mode.multi
    },
    title () {
      return config.title
    }
  }
}
</script>
