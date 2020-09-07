export const state = () => ({
  file: null
})

export const mutations = {
  updateFile (state, file) {
    state.file = file
  }
}
