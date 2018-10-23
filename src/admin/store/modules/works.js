const works = {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    loadWorks: (state, works) => state.data = works,
    addNewWork: (state, newWork) => state.data.push(newWork),
    removeWork: (state, workId) => state.data = state.data.filter(work => work.id !== workId),
    editWork: (state, editedWork) => state.data = state.data.map(work => {
      return work.id === editedWork.id ? editedWork : work
    }) 
  },
  actions: {
    fetch({commit}) {
      this.$axios.get('/works/31').then(
        response => {
          commit('loadWorks', response.data);
        },
        error => {
          console.error(error)
        }
      );
    },
    add({commit}, work) {
      const formData = new FormData();

      Object.keys(work).forEach(key => formData.append(key, work[key]));

      this.$axios.post('/works', formData).then(
        response => {
          commit('addNewWork', response.data);
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
    },
    edit({commit}, work) {
      const formData = new FormData();

      Object.keys(work).forEach(key => formData.append(key, work[key]));

      return this.$axios.post(`/works/${work.id}`, formData).then(
        response => {
          commit('editWork', response.data.work);

          return response
        }).catch(error => {
          console.log(error);

          return Promise.reject(error);
        })
    }
  }
}

export default works;