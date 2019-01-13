import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex);

import { UserStore } from './user';

const actions = {
  ...UserStore.actions
}

const mutations = {
  ...UserStore.mutations
}

const state = {
  user: null,
}

export const store = new Vuex.Store({
  actions,
  mutations,
  state
});
