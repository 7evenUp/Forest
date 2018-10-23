const skills = {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    loadSkills: (state, skills) => state.data = skills,
    addNewSkill: (state, newSkill) => state.data.push(newSkill),
    removeSkill: (state, skillId) => state.data = state.data.filter(skill => skill.id !== skillId),
    editSkill: (state, editedSkill) => state.data = state.data.map(skill => {
      return skill.id === editedSkill.id ? editedSkill : skill
    }) 
  },
  actions: {
    fetch({commit}) {
      this.$axios.get('/skills/31').then(
        response => {
          commit('loadSkills', response.data);
        },
        error => {
          console.error(error);
        }
      );
    },
    add({commit}, skill) {
      this.$axios.post('/skills', skill).then(
        response => {
          commit('addNewSkill', response.data);
        },
        error => {
          console.error(error)
        }
      );
    },
    remove({commit}, skillId) {
      this.$axios.delete(`/skills/${skillId}`).then(
        response => {
          commit('removeSkill', skillId)
        },
        error => {
          console.error(error);
        }
      );
    },
    edit({commit}, skill) {
      const formData = new FormData();

      Object.keys(skill).forEach(key => formData.append(key, skill[key]));

      return this.$axios.post(`/skills/${skill.id}`, formData).then(
        response => {
          commit('editSkill', response.data.skill);
          return response
        }).catch(error => {
          console.log(error);
          return Promise.reject(error);
        })
    }
  }
};

export default skills;