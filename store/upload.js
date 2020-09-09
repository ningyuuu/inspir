import config from '~/inspir.config'

export const state = () => ({
  file: null
})

export const mutations = {
  updateFile (state, file) {
    state.file = file
  }
}

export const actions = {
  async submit (context) {
    const formData = new FormData()
    formData.append(config.mode.param, context.state.file)
    await this.$axios.$post('/submit', formData)
  }
}
