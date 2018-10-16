import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import works from './modules/skills'
import skills from './modules/skills'
import blogs from './modules/skills'

export default new Vuex.Store({
  modules: {
    works, 
    skills,
    blogs
  }
})