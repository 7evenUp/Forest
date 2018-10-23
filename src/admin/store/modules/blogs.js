const blogs = {
  namespaced: true,
  state: {
    data: [],
    blog: {}
  },
  mutations: {
    loadBlogs: (state, blogs) => state.data = blogs,
    addNewBlog: (state, newBlog) => state.data.push(newBlog),
    removeBlog: (state, blogId) => state.data = state.data.filter(blog => blog.id !== blogId),
    editBlog: (state, editedBlog) => state.data = state.data.map(blog => {
      return blog.id === editedBlog.id ? editedBlog : blog
    }) 
  },
  actions: {
    fetch({commit}) {
      this.$axios.get('/posts/31').then(
        response => {
          commit('loadBlogs', response.data);
        },
        error => {
          console.error(error);
        }
      );
    },
    add({commit}, blog) {
      const formData = new FormData();

      Object.keys(blog).forEach(key => formData.append(key, blog[key]));

      this.$axios.post('/posts', formData).then(
        response => {
          commit('addNewBlog', response.data);
        },
        error => {
          console.error(error)
        }
      );
    },
    remove({commit}, blogId) {
      this.$axios.delete(`/posts/${blogId}`).then(
        response => {
          commit('removeBlog', blogId);
        },
        error => {
          console.error(error);
        }
      );
    },
    edit({commit}, blog) {
      const formData = new FormData();

      Object.keys(blog).forEach(key => formData.append(key, blog[key]));

      return this.$axios.post(`/posts/${blog.id}`, formData).then(
        response => {
          commit('editBlog', response.data.post);
          return response
        }).catch(error => {
          console.log(error);
          return Promise.reject(error);
        })
    }
  }
};

export default blogs;