import { mode } from '~/inspir.config'

export const state = () => ({
  file: null,
  files: [],
  results: null,
  loading: false
})

export const getters = {
  submittable: state => state.file || state.files.length
}

export const mutations = {
  updateFile (state, file) {
    state.file = file
  },
  setResults (state, results) {
    state.results = results
  },
  addFileToList (state, files) {
    state.files = state.files.concat(files)
  },
  deleteFileFromList (state, fileIdx) {
    state.files = state.files.filter((_, idx) => idx !== fileIdx)
  },
  clear (state) {
    state.files = []
    state.file = null
  },
  isLoading (state) {
    state.loading = true
  },
  isNotLoading (state) {
    state.loading = false
  }
}

export const actions = {
  async submit (context) {
    context.commit('isLoading')
    const formData = new FormData()
    if (mode.multi) {
      context.state.files.forEach((f) => {
        formData.append(mode.paramName, f)
      })
    } else {
      formData.append(mode.paramName, context.state.file)
    }
    const results = await this.$axios.$post('/submit', formData)
    context.commit('setResults', results)
    context.commit('isNotLoading')
  }
}
