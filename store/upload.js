import config from '~/inspir.config'

export const state = () => ({
  file: null,
  files: []
})

export const getters = {
  submittable: state => state.file || state.files.length
}

export const mutations = {
  updateFile (state, file) {
    state.file = file
  },
  addFileToList (state, files) {
    state.files = state.files.concat(files)
  }
}

export const actions = {
  async submit (context) {
    const formData = new FormData()
    if (config.mode.multi) {
      context.state.files.forEach((f) => {
        formData.append(config.mode.paramName, f)
      })
    } else {
      formData.append(config.mode.paramName, context.state.file)
    }
    await this.$axios.$post('/submit', formData)
  }
}
