const works = {
  namespaced: true,
  state: {
    data2: []
  },
  mutations: {
    loadWorks: (state, works) => state.data2 = works,
    addNewWork: (state, newWork) => state.data2.push(newWork),
    removeWork: (state, workId) => state.data2 = state.data2.filter(work => work.id !== workId)
  },
  actions: {
    fetch({commit}) {
      this.$axios.get('/works/31').then(
        response => {
          commit('loadWorks', response.data2);
        },
        error => {
          console.error(error)
        }
      );
    },
    add({commit}, work) {
      this.$axios.post('/works', work).then(
        response => {
          commit('addNewWork', response.data2);
        },
        error => {
          console.error(error)
        }
      );
    },
    remove({commit}, workId) {
      this.$axios.delete(`/works/${workId}`).then(
        response => {
          commit('removeWork', workId)
        },
        error => {
          console.error(error)
        }
      )
    }
  }
}

export default works;