<template>
  <button
    :disabled="disabled"
    class="bg-transparent py-2 px-4 focus:outline-none
           border rounded-md mr-2 duration-75 font-normal"
    :class="activeClasses"
    @click.prevent="submit"
  >
    <slot>Submit</slot>
  </button>
</template>

<script>
export default {
  computed: {
    disabled () {
      return !this.$store.getters['upload/submittable']
    },
    activeClasses () {
      if (this.disabled) {
        return 'text-red-200 border-red-200'
      }
      return 'hover:bg-red-600 text-red-600 hover:text-white border-red-600 hover:border-transparent'
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('upload/submit')
    }
  }
}
</script>
